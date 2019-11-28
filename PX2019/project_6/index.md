# Project 6:

Jonas Grunert

*MLE-Development Umgebung im Browser*

![](https://lively-kernel.org/lively4/lively4-seminars/PX2019/project_6/graalvm.png)

## Main Ideas:

Using websockets to communicate efficiently with the server:  
Libraries which may be used:

1. **[socket.io](https://socket.io/)** will be used because of ease and distribution of framework 2. sockjs - [node](https://github.com/sockjs/sockjs-node) and [browser](https://github.com/sockjs/sockjs-client)
2. [primus](https://github.com/primus/primus)  
  Using many different widgets:  
  Required:
3. Code Editor
4. Function Executor
5. Table Presenter
6. SQL Editor  
  Additional:
7. Test Case Editor
8. Database Inspector
9. Generated Code Shower  
  Optional:
10. Method Shower (with Documentation) 9. Python interaction 10. Benchmark runner  
  Not in Scope:
11. Database Explorer
12. Stacktrace
13. AST Explorer

Widget Blueprints: Code Editor:
<lively-script><script>const editor = <lively-code-mirror></lively-code-mirror>; const surrounding = <div><button>Deploy</button>{editor}</div>; surrounding</script> </lively-script>
Function Executor:
<lively-script><script>const argsAmount = <input type="number"></input>; const inputs = new Array(3).fill('text').map(i => <input type={i}/>); <div>{argsAmount}{...inputs}<span>result</span></div></script> </lively-script>
SQL Editor:
<lively-script><script>const editor = <lively-code-mirror></lively-code-mirror>; const result = <textarea></textarea>; const widget = <div>{editor}{result}</div>; widget</script> </lively-script>
Table Presenter:  
let data = [[1, 'Bond', 'James Bond'],[2, 'Alex', 'Just Alex']]
<lively-script><script>let data = [[1, 'Bond', 'James Bond'],[2, 'Alex', 'Just Alex']]; /*two dimensional array*/ const bdy = document.createElement('div'); const slt = document.createElement('select'); ['Table 1', 'Table 2', 'Table 3'].forEach(o => { const opt = document.createElement('option'); opt.innerHTML = o; slt.appendChild(opt); }); const tbl = document.createElement('table'); const tblbody = document.createElement('tbody'); tbl.appendChild(tblbody); tbl.style = 'border: 1px solid #333;'; data.forEach(tpl => { const row = document.createElement('tr'); tpl.forEach(d => { const cell = document.createElement('td'); cell.style = 'border: 1px solid #333;'; cell.innerHTML = d; row.appendChild(cell); }); tblbody.appendChild(row); }); bdy.appendChild(slt); bdy.appendChild(tbl); bdy</script> </lively-script>
Solutions: Socket minified in project 6 ablegen, self contained  
Webcomponent sauber nutzen  
Typescript in LIvely?