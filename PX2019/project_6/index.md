# Project 6: <br> Jonas Grunert<br>*MLE-Development Umgebung im Browser*

![](graalvm.png)


## Main Ideas:  

Using websockets to communicate efficiently with the server:  
  Libraries which may be used:  
    1. **[socket.io](https://socket.io/)** will be used because of ease and distribution of framework
    2. sockjs - [node](https://github.com/sockjs/sockjs-node) and [browser](https://github.com/sockjs/sockjs-client)  
    3. [primus](https://github.com/primus/primus)  
Using many different widgets:  
  Required:  
    1. Code Editor  
    2. Function Executor  
    3. Table Presenter  
    4. SQL Editor  
  Additional:  
    5. Test Case Editor  
    6. Database Inspector  
    7. Generated Code Shower  
  Optional:  
    8. Method Shower (with Documentation) 
    9. Python interaction 
    10. Benchmark runner  
  Not in Scope:  
    11. Database Explorer  
    12. Stacktrace  
    13. AST Explorer  
        
Widget Blueprints:  
Table Presenter:  
let data = [[1, 'Bond', 'James Bond'],[2, 'Alex', 'Just Alex']]  

<script>
  let data = [[1, 'Bond', 'James Bond'],[2, 'Alex', 'Just Alex']]; /*two dimensional array*/
  const bdy = document.createElement('div');
  const slt = document.createElement('select');
  ['Table 1', 'Table 2', 'Table 3'].forEach(o => {
    const opt = document.createElement('option');
    opt.innerHTML = o;
    slt.appendChild(opt);
  })
  const tbl = document.createElement('table');
  const tblbody = document.createElement('tbody');
  tbl.appendChild(tblbody);
  tbl.style = 'border: 1px solid #333;';
  data.forEach(tpl => {
    const row = document.createElement('tr');
    tpl.forEach(d => {
      const cell = document.createElement('td');
      cell.style = 'border: 1px solid #333;';
      cell.innerHTML = d;
      row.appendChild(cell);
    })
    tblbody.appendChild(row);
  })
  bdy.appendChild(slt);
  bdy.appendChild(tbl);
  bdy
</script>


Solutions:
Socket minified in project 6 ablegen, self contained  
Webcomponent sauber nutzen  
Typescript in LIvely?  


    
    
