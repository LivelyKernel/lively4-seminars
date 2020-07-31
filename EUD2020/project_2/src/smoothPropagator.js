import { Ceres } from "https://cdn.jsdelivr.net/gh/Pterodactylus/Ceres.js@master/Ceres-v1.4.13.js";
import backprop_strings from './stringBackprop.js';

const round = number => Math.round((number + Number.EPSILON) * 100) / 100;

export class SmoothPropagator {
  constructor(data = [5, 6], fnString = "x => x[0] + x[1]") {
    this.data = data;
    this.fnString = fnString;
    this.fn = eval(fnString);
    this.target;
    
    this.updateTarget = this.updateTarget.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.dataContainsOnlyNumbers = this.dataContainsOnlyNumbers.bind(this);
    
    this.table;
    this.editor;
    this.result = (<input input={this.updateTable} value={this.target}></input>);
    this.initAsyncHTML().then(() => this.updateTarget());
  }
  
  async initAsyncHTML() {
    this.table = await (<lively-table
                          style="font-weight:400;"></lively-table>);
    await this.table.setFromArray(this.data.map(x => [x]));
    this.table.addEventListener("keydown", this.updateTarget);
    
    this.editor = await (<lively-code-mirror></lively-code-mirror>);
    this.editor.addEventListener("blur", this.updateTarget);
    this.editor.value = this.fnString;
    this.editor.addEventListener("keydown", (evt) => {
      if (evt.ctrlKey && evt.key == "s") {
        lively.notify("Save is disabled...");
        evt.stopPropagation();
        evt.preventDefault();
      }
    });
  }
  
  async getPropagator() {
    // wait for HTML to be initialized
    await lively.sleep(0);
    return(
      <div class="propagator-container" style="width: 100%;">
        <div class="propagator" 
             style="
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 800px;
                padding: 10px;
                margin: 20px auto;
                box-shadow: 0 3px 7px 0 rgba(0,0,0,0.3);
                border-radius: 5px;
              ">
          <div>{this.table}</div>
          <span>></span>
          <div style="width: 50%;">{this.editor}</div>
          <span>=</span>
          <div>{this.result}</div>
        </div>
      </div>
  )};
  
  dataContainsOnlyNumbers() {
    return this.data.every(x => !isNaN(x));
  };

  async updateTarget() {
    this.fn = eval(this.editor.value);
    // wait for table state to update
    await lively.sleep(0);
    this.data = this.table.asArray().flat();
    // explicitly convert all values to Number
    if (this.dataContainsOnlyNumbers()) {
      this.data = this.data.map(x => Number(x));
      this.result.value = round(this.fn(this.data));
    } else {
      this.result.value = this.fn(this.data);
    }
  };


  async updateTable(evt) {
    this.target = evt.target.value;
    if (this.dataContainsOnlyNumbers()) {
      this.data = await this.solveNumber(this.fn, this.data.map(x => Number(x)), Number(this.target));
    } else {
      this.data = backprop_strings(this.fn, this.data, this.target);
    }
    this.table.setFromArray(this.data.map((x) => [x]));
  };

  async solveNumber(fn, data, target) {
    var solver = new Ceres();
    let solution = await solver.promise.then(() => {
      // Ceres requires one optimizable function per input value
      for (let i = 0; i < data.length; i++) {
        solver.add_function((val) => Math.abs(fn(val) - target));
      }
      let x_0 = data;
      let st = solver.solve(x_0);
      let solutions = st.x; // assign the calculated solution array
      solver.remove(); // required to free the memory in C++
      return solutions.map(round);
    });
    return solution;
  };           
}
