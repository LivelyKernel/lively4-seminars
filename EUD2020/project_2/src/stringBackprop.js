// code taken from Carbide and adjusted to fit our data format

import _ from 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.19/lodash.js';
import Levenshtein from './levenshtein.js';

// string backprop

// this tracks the provenance of characters in string
// literals of the program allowing you to type in
// the output to adjust the input


// converts two strings into a sequence of substitution operations
function lsd(s, sp){
    // having to special case these is silly
    if(s === sp) return [];
    if(sp === '') return lsd(s, s.slice(-1)).concat([[0, 1, '']]);
    if(s === '') return sp.split('').map((k, i) => [i, i, k]);

    var ops = new Levenshtein(s, sp).getSteps();
    ops.reverse()
    var actions = []
    ops.forEach(([op, a, b]) => {
        if(op == 'delete'){
            actions.push([b, b + 1, ''])
        }else if(op == 'substitute'){
            actions.push([b-1, b, sp[b-1]])
        }else if(op == 'insert'){
            actions.push([b-1, b-1, sp[b-1]])
        }
    })
    return actions;
}


export default function backprop_strings(fn, values, targetValue){
    // add ids to be in line with Carbide's data format
    const probes = values.map((str, idx) => ({value: str, id: idx}));
    if(typeof targetValue != 'string') return null;

    var sentinel = '~'; // must be 1 character, preferably not unicode
    var knobs = probes.map(probe => [probe, probe.id])
    var currentValue = fn(values)
    var deltas = lsd(currentValue, targetValue);

    if(knobs.length == 0){
        // return "No free string parameters!"
        return null
    }

    var params = _.fromPairs(knobs.map(([probe, id]) => [id, probe.value]));

    var offset = 0;
    var lastReference;

    for(var a = 0; a < deltas.length; a++){
        var [start, end, sub] = deltas[a];

        var ref = fn(probes.map(p => p.value))
        if(lastReference){

            // calculate offset due to prior transformations
            lsd(lastReference, ref).forEach(([s, e, b]) => {
                if(s < start + offset){
                    // start += (s - e) + b.length;
                    // console.log('adding', s - e + b.length)
                    offset += s - e + b.length
                }
            })

            start += offset
            end += offset
        }
        lastReference = ref;

        function slice(str){
            return str.slice(Math.max(0, start - 1), end + 1)
        }

        var viableProbes = knobs.filter(([k, i]) => {
            var alt = _.clone(params)
            
            alt[i] = alt[i].split('').map(k => sentinel).join('')
            var output = fn(Object.values(alt))
            if(typeof output != 'string') return false;
            if(output.length != ref.length) return false;
            if(slice(output) != slice(ref)) return true;
            return false
        })
        viableProbes = viableProbes.concat(_.difference(knobs, viableProbes)
            .filter(([k, i]) => params[i] === '')
            .filter(([k, i]) => {
                var alt = _.clone(params)
                alt[i] = sentinel
                var output = fn(Object.values(alt))
                if(slice(output) != slice(ref)) return true;
                return false
            }))

        var changed;
        for(var b = 0; b < viableProbes.length && !changed; b++){
            // console.log('found relevant probe', relevantProbe)
            var [probe, index] = viableProbes[b];
            // TODO: figuring out which index of the string is relevant
            // can probably be done more efficiently with a binary search

            var pval = params[index];
            var insertLeft = false;
            // check reversal
            var alt0 = _.clone(params), alt1 = _.clone(params)
            // if(pval.length > 0){
            //     alt0[index] = pval.slice(0, -1) + sentinel
            //     alt1[index] = pval + sentinel    
            // }
            alt0[index] = sentinel + 'X';
            alt1[index] = 'X' + sentinel;

            var out0 = fn(Object.values(alt0)),
                out1 = fn(Object.values(alt1));
            insertLeft = out0.indexOf(sentinel) > out1.indexOf(sentinel)
            // console.log('checked reversal', insertLeft, out0, out1)

        

            // loop backwards to prioritize appending to stuff rather than prepending
            for(var i = pval.length - 1; i >= 0; i--){
                var alt = _.clone(params)
                alt[index] = alt[index].split('').map((k, j) => j == i ? sentinel : k).join('')
                var output = fn(Object.values(alt))
                if(output.length != ref.length){
                
                    // return 'substitution length invariant violation'
                    continue
                }
                
                
                if(start === end){ // insertion
                    if(!insertLeft){
                        if(i === pval.length - 1 && output[start-1] != ref[start-1]){
                            // console.log('insert@end', pval, i, output[start], ref[start])    
                            params[index] = pval + sub
                            changed = true;
                            break
                        }else if(output[start] != ref[start]){
                            // console.log('insert@after', pval, i, output[start], ref[start]) 
                            params[index] = pval.slice(0, i) + sub + pval.slice(i)
                            changed = true;
                            
                            break
                        }
                    }else{
                        if(i === 0 && output[start-1] != ref[start-1]){
                            // console.log('insert@start', pval, i, output[start], ref[start])    
                            params[index] = sub + pval
                            changed = true;
                            break
                        }else if(output[start] != ref[start]){
                            // console.log('insert@before', pval, i, output[start], ref[start]) 
                            params[index] = pval.slice(0, i + 1) + sub + pval.slice(i + 1)
                            changed = true;
                            break
                        }
                    }
                }else if(output.slice(start, end) != ref.slice(start, end)){

                    // console.log('subs', output.slice(start, end))
                    params[index] = pval.slice(0, i) + sub + pval.slice(i + end - start)
                    changed = true;
                    
                    break;
                }
                // console.log(output)
            }
            if(pval.length === 0 && start === end){
                changed = true;
                params[index] = sub
            }
        }
        if(!changed){
            // return "Could not find viable string parameter to modify"
            return null
        }
    }

    return Object.values(params);
}