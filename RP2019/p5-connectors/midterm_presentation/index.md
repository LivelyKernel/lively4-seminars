<!-- markdown-config presentation=true -->

<!-- #TODO make style links in container content relative to url -->
<!-- <link rel="stylesheet" type="text/css" href="style.css" /> -->
<link rel="stylesheet" type="text/css" href="./style.css"  />
<link rel="stylesheet" type="text/css" href="../../src/client/lively.css"  />
<link rel="stylesheet" type="text/css" href="../../templates/livelystyle.css"  />

<script>
import Presentation from "src/components/widgets/lively-presentation.js"
Presentation.config(this, {
    pageNumbers: true,
    logo: "https://lively-kernel.org/lively4/lively4-jens/media/lively4_logo_smooth_100.png"
})
</script>

<style>
  li.box {
    width: 250px;
    height: 150px;
    list-style-type: none;
    float: left;
    border: 1px solid lightgray;
    margin: 10px;
    overflow: hidden;
  }
  h1,h2,h3,h4  {
    clear: left;
  }

  li.leftright {
    list-style-type: none;
    float:left; 
    width:400px;
  }
</style>
<style>

</style>

<!--
<script>
  var thatIsMe  = this
  var button = document.createElement("button")
  button.textContent = "show me"
  button.onclick = async () => {
    lively.showElement(thatIsMe)
  }
  button
</script>
-->

<div class="title">
  Lively4 Connectors
</div>

<div class="authors">
  Eva Krebs
</div>

<div class="credentials">
  Reactive Programming 2019, 26.11.2019 Midterm<br>
  <br>
  Jens Lincke, Stefan Ramson, Robert Hirschfeld (Software Architecture Group)
</div>

---

# Agenda

<script>
var style = document.createElement("style") 
style.innerHTML = `
li {
  list-style-type: disk;
}

li.h2 {
 margin-left: 40px;
 list-style-type: circle;
 font-size: 10pt;
}
`
this.shadowRoot.appendChild(style)

var list = document.createElement("ul")
_.filter(lively.findWorldContext(this).querySelectorAll("h1,h2"),
  ea => ea.textContent != "Contents"
).forEach(ea => {
  list.appendChild(<li class={ea.localName}><a click={
      (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        lively.query(this, "lively-container").followPath("#" + ea.textContent)
      }
    }
    href={"#" + ea.textContent}>{ea.textContent}</a></li>)
})
list
</script>

---
# Lively4

- Interactive
- Live
- Halos

<img src="./media/halo.png" alt="drawing" width="900"/>

---
# Fabrik

<img src="./media/Fabrik.png" alt="drawing" width="400"/>

- 1988

---
# Lively Fabrik Browser

<img src="./media/FabrikBrowser.png" alt="drawing" width="600"/>

---
# Lively Connectors

<embed src="./media/connectors.mp4" autostart="false" height="500" width="800" />

- https://lively-web.org/

---
# Lively Connectors

<embed src="./media/120313_TallyConnections.mp4" autostart="false" height="500" width="800" />

---

# Lively Connectors

<embed src="./media/120313_VisualizeConnections.mp4" autostart="false" height="500" width="800" />

---
# Lively Connectors

<embed src="./media/test.mp4" autostart="false" height="500" width="800" />

---
# Lively PartsBin

<img src="./media/PartsBin.png" alt="drawing" width="800"/>

---

# Concepts

- Objects in world / morphs
  - Source
  - Target
  - Their respective properties
  - "Combine widgets into bigger widget"
- Connection
  - Connects source and target
  - Reactive
  - Drawable/Debuggable?
- Connection hub / editor

---
# Lively4 Connectors

## Add a way to create connections in Lively4

- Add connector ui element into domain (= halos)
- Selecting source, target, and their properties
- Editing/Deleting connections
- Debugging/Visualizing connections
- Save new widgets (PartsBin?)

---
# Lively4 Connectors

## Reactive?
- Dataflows, user interaction, visual
- Active Expressions
- Events

---
# Demo

<script>
  let slider = lively.query(this, "#slider");
  let number  = lively.query(this, "#number");
  debugger
  let rectangle  = lively.query(this, "#rectangle");
  let ae1 = aexpr(() => slider.value);
  ae1.onChange(svalue => rectangle.style.width= svalue+"pt")
  ae1.onChange(svalue => number.innerHTML = svalue)
  'Use the slider'
</script>

<div id="rectangle" class="lively-content" style="width: 100pt; height: 100px; border: 1px solid black; position: relative; background-color: rgba(40, 40, 80, 0.5);"></div>

<div id="number">
 42
</div>

<input id="slider" type="range"> </input>


---
# Current state

- New Connectors Halo item
- Selecting source and target as well as their properties
- First Connections work

---
# Next Steps

- Improved connection creation
  - Whitelist (or similiar) of often used and available properties
  - Improved custom properties/connections
- Connection hub (with connection editing / removing)
- More connection debugging (e.g. visualizations)
- PartsBin

---