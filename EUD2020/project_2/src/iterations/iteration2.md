### Iteration 2: Adding constraints

#### Functionality 

Provide 
1. initial input values `x` to a function `f` in the specified input field as comma separated values, like `1,2,3`
2. ranges of input variables that you want to be immutable, by enclosing the variable subsets in `*`, like `1,*2,3*` to mark `2` and `3` as immutable. 
2. a JS function definition of `f` expecting a numerical array input in the specified field, like `x => Math.max(...x)`
3. an expected output number `y` using the slider element

The solver will adjust the input variables such that that `f(x) = y`. Magic!


#### Approach: Adding constraints
To allow marking input variables `x_i` as immutable, we added a second cost function for each `x_i` to be minimized that is minimal if `x_i` doesn't change.

#### Choice of optimization library
In addition to [Ceres](https://github.com/ceres-solver/ceres-solver), which we decided on using in _Iteration 1_, we tried out [Optimization JS](https://www.npmjs.com/package/optimization-js) with some examples. While we found its API to be simpler, we found Ceres to have higher performance for larger numbers of input values and to change the input values more predictably. In addition, Ceres provides dedicated functionality for adding lower bound and upper bound constraints, which we don't use yet. 
Despite our initial hopes of being able to solve problems with arbitrary input data types (e.g. strings) using [Optimization JS](https://www.npmjs.com/package/optimization-js), we found out that the genetic algorithm provided in the library does only work on _categorical_ data (e.g. a fixed set of strings) and not on _any_ arbitrary discrete or continuous input data (any combination of characters).

#### Limitations
This iteration's implementation assumes an input __array__ of __numbers__ and a single __number__ as expected function return value.
It does not let the user provide any additional constraints.
An additional limitation we found in this iteration is that for optimizations in which changed input variables may not lead to improved costs in an iteration, the constraint solving does not work. For example `x => x.filter(x_i => x_i > 1).length` (that is, the number input variables greater than 1) will in most cases not be optimized.


<script>
import { Ceres } from "https://cdn.jsdelivr.net/gh/Pterodactylus/Ceres.js@master/Ceres-v1.4.13.js"; //Always imported via ES6 import
let targetValue = null;
let fn = (x) => x;
let data = [];
let dataInput;
let immutabilityFlags = [];

const setData = (evt) => {
  dataInput = evt.target;
  let dataString = evt.target.value;
  let cleanDataString = dataString.split("*").join("");
  setImmutability(dataString);
  data = cleanDataString.split(",").map(Number);
};

const setFunctionString = (evt) => {
  let functionString = evt.target.value;
  fn = eval(functionString);
};

const updateTextInput = (evt) => {
  targetValue = parseInt(evt.target.value);
  solve(dataInput);
};

const setImmutability = (annotatedDataString) => {
  const annotatedDataArray = annotatedDataString.split(",");
  immutabilityFlags = Array(annotatedDataArray.length).fill(false);

  let enteredImmutabilityBoundary = false;
  for (let i = 0; i < annotatedDataArray.length; i++) {
    let currentInputValueString = annotatedDataArray[i];
    if (currentInputValueString[0] === "*") {
      enteredImmutabilityBoundary = true;
    }
    immutabilityFlags[i] = enteredImmutabilityBoundary;
    if (currentInputValueString[currentInputValueString.length - 1] === "*") {
      enteredImmutabilityBoundary = false;
    }
  }
  immutabilityFlags = immutabilityFlags;
};

const createInputDataString = (inputData) => {
  return inputData
    .map((x_i, i) => {
      let stringifiedXi = Math.round(x_i).toString();
      if (immutabilityFlags[i] && !immutabilityFlags[i - 1]) {
        stringifiedXi = "*" + stringifiedXi;
      }
      if (immutabilityFlags[i] && !immutabilityFlags[i + 1]) {
        stringifiedXi = stringifiedXi + "*";
      }

      return stringifiedXi;
    })
    .join();
};

const cost = (fn, target, val) => Math.abs(fn(val) - target);

const solve = (dataInput) => {
  var solver = new Ceres();
  solver.promise.then(function (result) {
    for (let i = 0; i < data.length; i++) {
      if (immutabilityFlags[i]) {
        solver.add_function((v) => Math.abs(v[i] - data[i]));
      } else {
        solver.add_function((v) => cost(fn, targetValue, v));
      }
    }
    let x_0 = data; // guess the initial values of the solution.
    let s = solver.solve(x_0);
    let x = s.x; // assign the calculated solution array to the variable x
    dataInput.value = createInputDataString(x);
    solver.remove(); // required to free the memory in C++
  });
};

var result = (
  <div>
    <p>Your data</p>
    <input change={setData}></input>

    <p>Your function</p>
    <textarea change={setFunctionString}></textarea>

    <p>Your expected value</p>
    <input input={updateTextInput}></input>
  </div>
);
result;

</script>