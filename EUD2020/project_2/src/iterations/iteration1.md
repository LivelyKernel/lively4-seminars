### Iteration 1: Numerical optimization

#### Functionality 

Provide 
1. initial input values `x` to a function `f` in the specified input field as comma separated values, like `1,2,3`
2. a JS function definition of `f` expecting a numerical array input in the specified field, like `x => Math.max(...x)`
3. an expected output number `y` using the slider element

The solver will adjust the input variables such that that `f(x) = y`. Magic!

#### Approach 
The optimization libraries available all have in common that they try to find the minimum of a given function `f` (e.g. `f(x)=x^2`), where `f` can be any non-linear function and `x` a multidimensional input vector. We don't want to find the minimum of the function supplied by the user, however! What we want to find, given a result `y` (e.g. `y = 4`), is a value of `x`, such that  `f(x) = y` (e.g. `f(2) = 2^2 = 4`). Optimizing the user-supplied function directly in this case would just always yield `0`. So, instead, we need to rephrase the user supplied function into a new minimizable cost function `c`, where the minimum of `c(x)` is at the point `f(x) = y`. To achieve this, we set `c(x) = |f(x) - y|`, which is minimal at `f(x) = y`.

#### Choice of optimization library
We initially tried using the `uncmin` optimization function provided in [numericjs](https://github.com/sloisel/numeric) (as proposed by [TryCarbide](https://alpha.trycarbide.com/)) but the optimization did not converge for some examples we tried. 
For a first prototype we then decided on using an available [JS wrapper](https://github.com/Pterodactylus/Ceres.js) for the [Ceres Solver](https://github.com/ceres-solver/ceres-solver), which optimizes numeric problems and worked well when we tested it. While using the library was quite intuitive, we first didn't realize that one function for each input dimension (i.e. the length of input data) needs to be provided, which is weird because we only optimize one function (our cost function) that we therefore add and solve multiple times. 

#### Limitations
This iteration's implementation assumes an input __array__ of __numbers__ and a single __number__ as expected function return value.
It does not let the user provide any additional constraints.


<script>
import { Ceres } from "https://cdn.jsdelivr.net/gh/Pterodactylus/Ceres.js@master/Ceres-v1.4.13.js"; //Always imported via ES6 import
let targetValue = null;
let fn = (x) => x;
let data = [];
let dataInput;

const updateTextInput = (evt) => {
  targetValue = parseInt(evt.target.value);
  solve(dataInput);
};

const setFunctionString = (evt) => {
  fn = eval(evt.target.value);
};

const setData = (evt) => {
  dataInput = evt.target;
  data = evt.target.value.split(",").map(Number);
};

const cost = (fn, target, val) => Math.abs(fn(val) - target);

const solve = (dataInput) => {
  var solver = new Ceres();
  solver.promise.then(function (result) {
    for (let i = 0; i < data.length; i++) {
      solver.add_function((v) => cost(fn, targetValue, v));
    }

    let x_0 = data; // guess the initial values of the solution.
    let s = solver.solve(x_0); // solve the equation
    let x = s.x; // assign the calculated solution array to the variable x

    dataInput.value = x.map(Math.round).join();

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