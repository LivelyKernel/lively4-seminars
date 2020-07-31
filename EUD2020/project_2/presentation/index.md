<!-- markdown-config presentation=true -->

<link rel="stylesheet" type="text/css" href="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/style.css"  />
<link href='https://fonts.googleapis.com/css?family=Lato:400' rel='stylesheet' type='text/css' />
<link href='https://fonts.googleapis.com/css?family=Raleway:500,600' rel='stylesheet' type='text/css' />

[//]: # (Presentation Setup)
<script>
import Presentation from "src/components/widgets/lively-presentation.js"
Presentation.config(this, { pageNumbers: true });
</script>

<div class="layout layout-title">
  <div class="header">
    <div class='slots'></div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <span class="title">
      Exploring Carbide
    </span>
    <span class="subtitle">
      Recreating Carbide's Approach to Backpropagation
    </span>
    <img class="title-image" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/assets/exploring_carbide_logo.png">
    <span class="description">
      <p>Hendrik Schmidt and Nico Scordialo</p>
      <p>End User Development, SS2020<br />Software Architectures</p>
      <p>21st July 2020</p>
    </span>
  </div>
  <div class="footer"></div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Outline</h1>
    <ol class='outline'>
      <li>Motivation: Backpropagation in Carbide</li>
      <li>Numbers</li>
      <li>Strings</li>
      <li>Collections</li>
      <li>Overview and Outlook</li>
    </ol>
  </div>
  <div class="footer"></div>
</div>


---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Motivation: Backpropagation in Carbide</h1>
    <div id='carbide'>
      <img class="carbide-image" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/assets/carbide.png">
    </div>
  </div>
  <div class="footer"></div>
</div>


---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Numbers</h1>
    <h3>Carbide says:</h3>
    <blockquote class="carbidesays">
      We're currently using a version of NumericJS's uncmin function ...
    </blockquote>
    <pre class="h3code" >uncmin</pre>
    <img class="hill-image" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/assets/hill_climbing.png">
    <ul>
      <li>uses a hill-climbing algorithm for nonlinear numerical optimization</li>
      <li>did not always terminate correctly when we tried it out</li>
    </ul>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Numbers</h1>
    <h3>Carbide says:</h3>
    <blockquote class="carbidesays">
      We're currently using a version of NumericJS's uncmin function ...
    </blockquote>
    <pre class="h3code">Ceres.js</pre>
    <ul>
      <li>is a numerical optimization library</li>
      <li>proved to be more stable when we used it</li>
    </ul>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Numbers</h1>
    <pre><code>
        const weights = [46, 99, 23]
        const average = array => array.reduce((a,b) => a + b)/array.length
        average(weights) // 56 => changing this to 60
    </code></pre>
    <ul>
       <li>when changing the desired output of <code>average(weights)</code> we want <code>weights</code> to adjust </li>
       <li>Ceres.js attempts to minimize a given function</li>
    </ul>
    <h4>Optimizing a cost function</h4>
      <ul>
       <li>optimizing <code>Math.abs(average(weights) - 60)</code> yields fitting <code>weights</code> for the desired average</li>
    </ul>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Numbers</h1>
    <h2>Demo</h2>
    <script>
    import {SmoothPropagator} from "https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js"
    let sp1 = new SmoothPropagator([12, 22, 20, 21], 'x => x.reduce((a,b) => a + b)/x.length * (9/5) + 32');
    sp1.getPropagator();
    </script>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Numbers</h1>
    <h3>Limitations</h3>
  <ul>
    <li>problems that cannot be solved with hill-climbing numerical optimization</li>
    <li>e.g. cryptography and hashing</li>
  </ul>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <h3>Carbide says:</h3>
    <blockquote>
      While there have been many decades of work done on improving numerical optimization, there isn't nearly as much work done on generalizing the idea to other data structures.
    </blockquote>
    <h4>Getting the source code</h4>
    <image class="email" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/assets/email.png"/>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <h4>Carbide's source code</h4>
    <image class="sourcecode" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/assets/sourcecode.png"/>
    <ul>
     <li>did not work out of the box</li>
     <li>provided different functionality locally than on production</li>
    </ul>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <div>
      <pre><code>
        const s = "hello"
        const t = "world"
        s.concat(t) // "helloworld" => changing this to "hellow0rld"
      </code></pre>
      <h3>1. Find Probes</h3>
      <ol>
       <li>"hello"</li>
       <li>"world"</li>
      </ol>
    </div>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <div>
      <pre><code>
        const s = "hello"
        const t = "world"
        s.concat(t) // "helloworld" => changing this to "hellow0rld"
      </code></pre>
      <h3>2. Calculate Levenshtein Steps</h3>
      <ul>
       <li>"hellow<u>o</u>rld" to "hellow<u>0</u>rld"</li>
       <li>replace o with 0, represented as <code>[6,7,"0"]</code></li>
      </ul>
    </div>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <div>
      <pre><code>
        const s = "hello"
        const t = "world"
        s.concat(t) // "helloworld" => changing this to "hellow0rld"
      </code></pre>
      <h3>3. Filter Probes</h3>
      <ol>
       <li><strike>"hello"</strike></li>
       <li>"world"</li>
      </ol>
    </div>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <div>
      <pre><code>
        const s = "hello"
        const t = "world"
        s.concat(t) // "helloworld" => changing this to "hellow0rld"
      </code></pre>
      <h3>4. Find Index for Change</h3>
      <ol>
       <li>"worl~"</li>
       <li>"wor~d"</li>
       <li>"wo~ld"</li>
       <li>"w~rld" => "hellow~rld"</li>
      </ol>
    </div>
  </div>
</div>


---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <div>
      <pre><code>
        const s = "hello"
        const t = "world"
        s.concat(t) // "helloworld" => changing this to "hellow0rld"
      </code></pre>
      <h3>5. Perform Replacement</h3>
      <ul>
       <li>"world" => "w0rld"</li>
      </ul>
    </div>
  </div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <h2>Demo</h2>
    <script>
    import {SmoothPropagator} from "https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/src/smoothPropagator.js"
    let sp2 = new SmoothPropagator(['Kent', 'Beck'], 'x => x[0].concat(x[1]).split("").reverse().join("")');
    sp2.getPropagator();
    </script>
  </div>
  <div class="footer"></div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Strings</h1>
    <h3>Limitations</h3>
      <pre><code>
        const s = "world"
        const t = s.split("")
          .map(char => char.charCodeAt(0))
          .map(code => String.fromCharCode(code-1))
          .join("") // "vnqkc" => changing this to "Vnqkc" 
    </code></pre>
    <ul>
      <li>problems that require operations other than just performing Levenshtein steps</li>
    </ul>
  </div>
  <div class="footer"></div>
</div>

---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Backpropagation for Collections</h1>
    <h3>Carbide says:</h3>
    <blockquote>
      IM GOING TO WRITE ABOUT THIS REAL SOON NOW
    </blockquote>
    <ul>
      <li>works only for simple modifications of nested elements</li>
    </ul>
  </div>
</div>


---

<div class="layout">
  <div class="header">
    <div class="slots">
      <div class='slot'>21st July 2020</div>
      <div class='slot'>End User Development, SS2020</div>
      <div class='slot'>Exploring Carbide</div>
      <div class='slot'>Hendrik Schmidt and Nico Scordialo</div>
    </div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <h1>Overview and Outlook</h1>
    <h3>Analyzed, documented and implemented</h3>
    <ul>
      <li>Backpropagation for numbers ✅</li>
      <li>Backpropagation for array operations ✅</li>
      <li>Backpropagation for strings ✅</li>
    </ul>
    <h3>To be investigated</h3>
    <ul>
      <li>Replacement in nested objects  </li>
      <li>Differences to Carbide's production version</li>
    </ul>
  </div>
</div>


---

<div class="layout layout-title">
  <div class="header">
    <div class='slots'></div>
    <image class='logo' src='https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/hpi.png' />
  </div>
  <div class="content">
    <img class="title-image" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_2/presentation/assets/exploring_carbide_logo.png">
    <span class="description">
      <p>Hendrik Schmidt und Nico Scordialo</p>
      <p>End User Development, SS2020<br />Software Architectures</p>
      <p>21st July 2020</p>
    </span>
  </div>
  <div class="footer"></div>
</div>





