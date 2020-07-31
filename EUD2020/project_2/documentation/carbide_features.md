### Backpropagation in Carbide

[Carbide](https://alpha.trycarbide.com/) uses different approaches to implement backpropagation for different data types.
We analyze the source code that was provided to us to understand each strategy with its capabilities, approach and limitations. The version that was shared with us by Carbide's creator appears to be different than the live version available on the internet. We therefore focus on analyzing the [version available to us](https://github.com/antimatter15/carbide) but attempt to point out the differences in functionality between both versions and hypotheses on what underlying technical differences lead to them. 

#### Numbers

Carbide states [on its website](https://alpha.trycarbide.com/)

> We're currently using a version of NumericJS's `uncmin` function ...

The `uncmin` method of [numericjs](https://github.com/sloisel/numeric) method is a hill-climbing algorithm for nonlinear numerical optimization problems. Carbide uses `uncmin` to minimize a cost function yielding the desired backpropagated input values. Based on this approach we provide a similar implementation and description [here](https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/iteration1.md) (note that we use a different but similar optimization library since we found the current version of `uncmin` not to be working for some examples.).
Unlike for string backpropagation, Carbide appears to be using essentially the same approaches for its productive version and the one that was shared with us.

##### Our implementation

We initially tried using the `uncmin` optimization function but the optimization did not converge for some examples we tried. 
We then decided on using an available [JS wrapper](https://github.com/Pterodactylus/Ceres.js) for the [Ceres Solver](https://github.com/ceres-solver/ceres-solver), which optimizes numeric problems and worked well when we tested it. While using the library was quite intuitive, we first didn't realize that one function for each input dimension (i.e. the length of input data) needs to be provided, which is weird because we only optimize one function (our cost function) that we therefore add and solve multiple times. Our implementation can be found in [smoothPropagator.js](https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js) in the `solveNumber` function.

<script>
import {SmoothPropagator} from "https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js"
const sp1 = new SmoothPropagator([12, 22, 20, 21], 'x => x.reduce((a,b) => a + b)/x.length * (9/5) + 32');
sp1.getPropagator();
</script>

#### Strings

Carbide's approach to backpropagation for numerical values is straightforward numerical optimization. Backwards-solving problems that take strings as inputs and yield a string as their output, however, require a more sophisticated, specialized approach that we describe here.

We created an example [list](https://gist.github.com/niconomaa/e44625040efe2c277e10b1a9d131f0fa) of string problems that Carbide's local version succeeds to resolve. The examples follow the list of [all available string methods as listed in the MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and combinations of them.
By analyzing Carbide's source code, we understand that Carbide backpropagates string problems in the following way (explained around the simple example of string concatenation):

Example:

```js
let s = "hello"
let t = "world"
let st = s.concat(t)
-> "helloworld" // <- changing this to hell0world
```

1. Accumulate all expressions in the cell that could be adjusted during backpropagation (free `probes`); here: `"hello"` and `"world"`
2. Using the [Levenshtein steps npm package](https://www.npmjs.com/package/levenshtein-steps), yield the required character-wise operations (`deltas`: substitutions, insertions, or deletions represented as triple of start index of operation, end index of operation and character; here `[4,5,"0"]`) needed to perform on the current value (here: `helloworld`) to get to  the target value (here: `"hell0world"`)
3. Accumulate a subset of candidate probes (`viableProbes`)
    1. Filter out every `probe` that fails to be a candidate to be modified during backpropagation:
        - a `probe` that when modified leads to a target value string of different length than the current value
        - a `probe` that when modified leads to a target value that is not a string
        - a `probe` that when modified leads to a target value that is the same as the current value
    2. Re-include every `probe` that is the empty string or that, when replaced with a single character, leads to a change in the target value
4. Perform the required Levenshtein steps on the correct probes
     - for each candidate probe
         - check and remember if the performed operation includes a string reversal
         - replace each character with a placeholder character (`sentinel`: "~")
         - if the replaced character leads to a change within the expected indices of the `delta` in the target value:
             - perform an insertion at the required index, or
             - perform a substitution of the character (a deletion is a substitution with an empty string)
             
             
##### Limitations
The implemented approach in this local version of Carbide relies on **identifying the Levenshtein steps** needed to transform the originally resulting string (current value) to the transformed string (target value) and on performing **these same steps in the required positions on the input values**. This means that if any other change to the input strings than the identified Levenshtein steps is required, the approach fails. An example for such a problem is one in which each character of a string is shifted with a constant offset to another unicode character:

```js
let s = "world"
let t = s.split("").map(char => char.charCodeAt(0)).map(code => String.fromCharCode(code-1)).join("") // <- changing this to "Vnqkc" 
-> "vnqkc"
```

In this case, the identified Levensthein step to replace "v" with "V", applied to "world", does not yield the correct solution (replacing "w" with "W").

##### Our implementation
We decided on writing a wrapper for the existing code from Carbide we had access to. We got the function to calculate the Levenshtein steps from the [source of the npm package](https://github.com/pseudonym117/Levenshtein) and put it into [levenshtein.js](https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/levenshtein.js). We then had to adapt Carbide's code to interface with the calling function we wrote and make sure every probe could be manipulated. The code is in [stringBackprop.js](https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/stringBackprop.js) and is called from the [SmoothPropagator](https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js) component.

<script>
import {SmoothPropagator} from "https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js"
const sp2 = new SmoothPropagator(['Hello', 'World'], 'x => x.reduce((a,b) => a + b)');
sp2.getPropagator();
</script>
    
    
#### Nested data types

Carbide does not support any meta operations on nested or container data types, like for example `Array.prototype.reduce()` or `Object.values()`.
It does, however, support simple backpropagation for basic data types (strings and numbers) that are nested within complex structures (arrays and objects), such as:

```js
let structure = [{a: "hello"}]
let nested = structure[0].a
-> "hello" // <- changing this to hell0
```

In this example, Carbide's algorithm traverses `structure` (referred to as the "haystack" in Carbide's source code) recursively until it finds `"hello"` (the "needle").
When it does, it replaces `"hello` with `"hell0"` and checks if `nested` return the desired value `"hello"`. 

##### Limitations
Since the backpropagation for nested data structures, like in the example above, performs a traversal of `structure` followed by a simple replacement of `"hello"` with `"hell0"`, more complex examples that cannot be handled by a direct replacement of values will _not_ work:

```js
let structure = [{a: "hello"}, "world"]
let concatenated = structure[0].a + structure[1]
-> "helloworld" // <- changing this to hell0world
```

##### Our implementation
We don't support the access of object keys. However, because of the structure of the input table that is automatically treated as an array, we support array access and operations natively.


#### Final version

The final version of the ported backpropagation features from Carbide can be found [here](https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js).
To create an instance of the backpropagation module, import it and pass initial input values and a function string:

```
import {SmoothPropagator} from "https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js"
const sp = new SmoothPropagator([12, 22, 20, 21], 'x => x.reduce((a,b) => a + b)/x.length * (9/5) + 32');
sp.getPropagator();
```


<script>
import {SmoothPropagator} from "https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js"
const sp3 = new SmoothPropagator([12, 22, 20, 21], 'x => x.reduce((a,b) => a + b)/x.length * (9/5) + 32');
sp3.getPropagator();
</script>



















