# Project 3: Linus Heinzl and Anne Radunski

*Petri Netze*

<!--
![](petrinet.png){width=200px, style="float:right"}
-->
- Motivation: Visual Domain Specific Programming

- Goal: Discuss and implement a simple Petri Net editor and simulator

- [Questions](questions.md)

- Links
  
  - [graffle](edit://src/client/graffle.js)

## ToDo

- Component: Dot
- Interaction
  - New edge automatisiert
  - (Re-)connect to nodes with edge

...

- load/save ... use lively standard
- simulation

## In Progress

- Mehrere Komponenten anlegen (selbe Position)
- Connector:
  - Verknüpfung fehlt noch
  - Bug

## Done

- Components: Pane, Node, Edge
- Interaction
  - New node, pane and connector via ContextMenu
  - Delete node and pane via Halo-Tool
  - Resize node and pane via Halo-Tool
  - Drag&Drop via Halo-Tool

## Code Snippets

```html 
<petri-pane>
  <petri-node id="1"></petri-node> 
  <petri-node id="2"></petri-node> 
  <petri-edge from="1" to="2"></petri-edge> 
</petri-pane>
```

```javascript 
  this.style.borderRadius = "90px"
```

```javascript 

import ContextMenu from 'src/client/contextmenu.js';

// ...

this.addEventListener('contextmenu',  evt => this.onContextMenu(evt), false);

// ...


onContextMenu(evt) {
    if (!evt.shiftKey) {
        evt.stopPropagation();
        evt.preventDefault();

        var menu = new ContextMenu(this, [
              ["clear", () => this.clear()],
              ["undo stroke", () => this.undoStroke()],
              ["redo stroke", () => this.redoStroke()],
            ]);
        menu.openIn(document.body, evt, this);
        return true;
      }

  }
```

<lively-import src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinet.html" style="position:relative"></lively-import>

# Connectors / Control Points

- steal from: https://lively-kernel.org/lively4/lively4-jens/src/components/halo/lively-halo-control-point-item.js

Manual event registiring....

```javascript 

// init
  lively.removeEventListener("petri", this, "click")
  lively.addEventListener("petri", this, "click", () => this.onClick())


async function onClick() {
  if (await lively.confirm("realy delete?")) {
    this.parentElement.remove()
  }
}


```

JSX Way:
<lively-script><script>var element = <div click={() => lively.notify("hi")}>hallo</div> element</script> </lively-script>