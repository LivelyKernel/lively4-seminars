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
# Lively Connectors

![](media/test.mp4)
<!--![](media/screenshot.png)-->

## Goals:

- Implement a unidirectional dataflow mechanism for properties of graphical objects using active expressions
- Design and implement a graphical user interface to interactively create dataflow and event connections
- Persist created connections into existing PartsBin
- Create a non-trivial example application using connectors

---
# Demo


---
# Implementation
##  Halo Item

- New Halo-Item-class
- Save source, source property, target, and target property
- Click Handling?
- Maybe diagram?

---
## Connections

- Own class
- Hub
- Editing
- Debugging, drawing?

---
# Next Steps
 
- Finish Hub & Connection Editing
- Better UI for custom connections
- Whitelist of properties
- More Debugging Options
- Example application / use case

---
# Future Work

- More Dynamic whitelist of properties
- PartsBin

---