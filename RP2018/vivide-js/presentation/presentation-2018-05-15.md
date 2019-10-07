<!-- markdown-config presentation=true -->

<script>
import { openBrowser, openComponent } from "../../../PX2018/project_2/utils.js"

let presentationSize = "standard-vga";
</script>
<link rel="stylesheet" type="text/css" href="../../../PX2018/project_2/utils.css">
<link rel="stylesheet" type="text/css" href="../../../PX2018/project_2/presentation.css">

<link rel="stylesheet" type="text/css" href="../../../PX2018/style.css" />
<link rel="stylesheet" type="text/css" href="src/client/lively.css" />
<link rel="stylesheet" type="text/css" href="templates/livelystyle.css" />

<style>
  .lively-slide {
    border: 1px solid rgb(220,220,220)
    page-break-before: always;
  }
  
  p {
    font-size: 18pt
  }
  @media print {
    .lively-slide {
      page-break-before: always;
      border: 0px solid white;
/*       border: 2px solid blue; */
    }      
  }
  
</style>


<div class="title-frontpage">
  RP 2018: Seminar on Reactive Programming<br />- Hierarchical Data and Asynchronicity for VivideJS -
</div>

<div class="authors">
  Sebastian Koall
</div>

<div class="credentials">
  Software Architecture Group <br>Hasso Plattner Institute<br> University of Potsdam, Germany
</div>



--- 
<div class="title-1">The Vivide Tool Building Framework</div>

<ul class="notes notes-big">
<li>Explore data by utilizing different views</li>
<li>Adapt the views while exploring the data</li>
<li>Provide data in a task-oriented form</li>
<li>Live programming environment in the internet<br><i class="fa fa-arrow-right"></i> Provide insights into the processed data</li>
<li>System: VivideJS</li>
</ul>


---
<div class="title-1">Initial State</div>

<ul class="notes notes-big">
<li>Component removed</li>
</ul>

---
<div class="title-1">Planned Features</div>

<ul class="notes notes-big">
<li>Alternative JS implementation of already existing Vivide in Squeak</li>
<li>Multi-level hierarchies</li>
<li>Advanced configuration options in scripts</li>
<li>Improved view connection management</li>
<li>Processing asynchronous data</li>
<li>Merging data from multiple sources</li>
</ul>

---
<div class="title-1">Done</div>

<script>
import boundEval from "src/client/bound-eval.js";
import { createScriptEditorFor, initialScriptsFromTemplate } from 'src/client/vivide/vivide.js';

(async () => {
  let vivideView = await (<vivide-view></vivide-view>);
  let vivideScriptEditor = await (<vivide-script-editor></vivide-script-editor>);
  let containerClass = "vivide-view-container " + presentationSize;
  let exampleData = [
    {name: "object", subclasses:[{name: "morph"},]},
    {name: "list", subclasses:[{name: "linkedlist"}, {name: "arraylist"}]},
    {name: "usercontrol", subclasses:[{name: "textbox"}, {name: "button"}, {name: "label"}]},
  ];
  vivideView.newDataFromUpstream(exampleData);
  initialScriptsFromTemplate().then(scripts => vivideView.setScripts(scripts)).then(() => {
    vivideScriptEditor.setView(vivideView);
    let scripts = vivideView.getScripts();
    vivideScriptEditor.setScripts(scripts);
  });
  
  return <div><link rel="stylesheet" type="text/css" href="../../../PX2018/project_2/presentation.css" /><div class={containerClass}><div class="vivide-view">{vivideView}</div><div class="vivide-script-editor">{vivideScriptEditor}</div></div></div>;
})()
</script>

---
<div class="title-1">Next Steps</div>

<ul class="notes notes-big">
<li>Multi-level hierarchies</li>
  <ul>
  <li>Scripts for each level</li>
  <li>Children are processed on demand</li>
  </ul>
<li>Advanced configuration options in scripts</li>
  <ul>
  <li>VivideJS should interpret width, height, color, etc.</li>
  <li>Properties are utilized based on the chosen View</li>
  </ul>
</ul>

---

# Close

<script>
let closeButton = document.createElement('button')
closeButton.innerHTML = 'close';
closeButton.addEventListener("click", () => {
  let slides = presentation.querySelectorAll('.lively-slide');
  
  slides.forEach(slide => {
    slide.className = slide.className.replace('fullscreen-' + presentationSize, '');
  })
  
  presentButton.style.display = 'inline';
})
closeButton
</script>