### Iteration 3: First Approach for String Optimization and improved UI

#### Functionality 

Provide 
1. initial input values `x` to a function `f` in the specified input table; either provide all numbers or all strings (for now!)
2. a JS function definition of `f` expecting a numerical array input or input strings in the cold mirror, like `x => Math.max(...x)` for numbers, or `(x, y) => x.toUpperCase() + " " +  y.toUpperCase()` for strings
3. an expected output number `y` using  the input field.

The solver will adjust the input variables such that that `f(x) = y`. Magic!


#### Approach: Add basic string optimization
We initially tried to tweak our existing approach for numerical minimization to be able to handle string input, essentially by mapping input characters to numbers, then solving the problem numerically and finally mapping the resulting, rounded numbers back to characters. This approach only worked for a very limited set of string problems (e.g. concatenation).
We then decided to abandon the numerical Ceres optimizer for string problems and supply our own optimization method specifically for strings. In this first version, the optimizer iterates over the provided input strings character by character. For each character, a cost function is evaluated. The character with the lowest cost is then chosen for the evaluated input string. 

#### Switching between optimization approaches
In this iteration, we still use the Ceres optimizer to solve numerical problems. If the input values are strings however, the solver internally switches to the string solver implementation. 

#### Limitations
The limitations from previous iterations regarding numerical  optimization that come from the Ceres library still persist in this version. 
The ability to solve string problems in this iteration is limited to problems in which the dimension of the desired output is equal to the length of the string that results from evaluating the the provided sample input variables with the user provided function. 
For example:

`f(x,y) = y + x` (concatenating the input strings in reversed order), with initial input values `x = "world"` and `y = "hello"` will only work for desired outputs of length `"world".length + "hello".length = 10`.


<script>
import { Ceres } from "https://cdn.jsdelivr.net/gh/Pterodactylus/Ceres.js@master/Ceres-v1.4.13.js";
let targetValue = null;
let fn = (x) => x;
let data = [];

const updateTextInput = (evt) => {
  targetValue = evt.target.value;
  solve();
};

const cost = (fn, val, target) => Math.abs(fn(val) - target);

const solve = async () => {
  data = table.asArray().flat().slice(1, table.asArray().length);
  fn = eval(editor.value);
  let x = [];
  if (isNaN(data[0])) {
    x = solveString(fn, data, targetValue);
  } else {
    x = await solveNumber(fn, data, Number(targetValue));
  }
  table.setFromArray([["Input"]].concat(x.map((x) => [x])));
};

const solveNumber = async (fn, data, target) => {
  var solver = new Ceres();
  let solution = await solver.promise.then(function (result) {
    for (let i = 0; i < data.length; i++) {
      solver.add_function((v) => cost(fn, v, target));
    }
    let x_0 = data;
    console.log(x_0);
    let s = solver.solve(x_0);
    let x = s.x; // assign the calculated solution array to the variable x
    solver.remove(); // required to free the memory in C++
    return x;
  });
  return solution;
};

const solveString = (fn, initialGuesses, target) => {
  let guesses = initialGuesses;
  for (let u = 0; u < guesses.length; u++) {
    let guess = guesses[u];
    for (let i = 0; i < guess.length; i++) {
      const evaluatedGuess = fn(...guesses);
      let currentGuessCosts = 0;
      for (let n = 0; n < evaluatedGuess.length; n++) {
        currentGuessCosts += Math.abs(
          evaluatedGuess.charCodeAt(n) - target.charCodeAt(n)
        );
      }

      let minimalCostForCharacter = currentGuessCosts;
      for (let k = 32; k < 127; k++) {
        const newGuesses = guesses.slice();
        const guessCharacters = guess.split("");
        guessCharacters[i] = String.fromCharCode(k);
        const newGuess = guessCharacters.join("");
        newGuesses[u] = newGuess;
        const newGuessEvaluated = fn(...newGuesses);
        let currentCostForCharacter = 0;
        for (let n = 0; n < newGuessEvaluated.length; n++) {
          currentCostForCharacter += Math.abs(
            newGuessEvaluated.charCodeAt(n) - target.charCodeAt(n)
          );
        }
        if (currentCostForCharacter < minimalCostForCharacter) {
          minimalCostForCharacter = currentCostForCharacter;
          guess = newGuess;
          guesses[u] = guess;
        }
      }
    }
  }
  return guesses;
};

let table;
let editor;

var result = (
  <div>
    <p>Input data</p>
    {(async () => {
      table = await (<lively-table></lively-table>);
      table.setFromArray([["Input"], [1], [2], [3]]);
      return table;
    })()}
    <p>Transformation function</p>
    {(async () => {
      editor = await (<lively-code-mirror></lively-code-mirror>);
      editor.addEventListener("keydown", (evt) => {
        if (evt.ctrlKey && evt.key == "s") {
          lively.notify("Save is disabled...");
          evt.stopPropagation();
          evt.preventDefault();
        }
      });
      editor.value = "x => x.reduce((a,b) => a + b)";
      return editor;
    })()}
    <p>Expected value</p>
    <input style="margin-bottom: 50px;" input={updateTextInput}></input>
  </div>
);
result;
</script>