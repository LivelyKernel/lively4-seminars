# Project 5: Lively4 Connectors

![](screenshot.png)

## Goals:

- Implement a unidirectional dataflow mechanism for properties of graphical objects using active expressions
- Design and implement a graphical user interface to interactively create dataflow and event connections
- Persist created connections into existing PartsBin
- Create a non-trivial example application using connectors


# Documentation

<script>
  import Connection from "https://lively-kernel.org/lively4/lively-connectors/src/components/halo/Connection.js";

  let slider = lively.query(this, "#slider");
  let rectangle  = lively.query(this, "#rectangle");
  
  let connection = new Connection(rectangle, 'style.width', slider, 'value', false);
    connection.activate();
  
  'Use the slider! Open a Halo on the slider (or the rectangle) and click the Halo item with the plug symbol!'
</script>

<div id="rectangle" class="lively-content" style="width: 100pt; height: 100px; border: 1px solid black; position: relative; background-color: rgba(40, 40, 80, 0.5);"></div>

<input id="slider" type="range"> </input>


## Abstract
TODO

## Assumptions
???

## Approach
???

## All Readings:

- Stefan Ramson and Robert Hirschfeld. Active Expressions: Basic Building Blocks for Reactive Programming. <Programming> 2017
- Jens Lincke. Evolving Tools in a Collaborative Self-supporting Development Environment. Doctoral Dissertation 2014
- Jens Lincke and Hirschfeld. User-evolvable Tools in the Web. FLOSS 2013
- Jens Lincke, Robert Krahn, Dan Ingalls, Marko Röder, and Robert Hirschfeld. The Lively PartsBin – A Cloud-based Repository for Collaborative Development of Active Web Content. HICSS 2012
- Dan IngaIIs, Scott Wallace, Yu-Ying Chow, Frank Ludolph, Ken Doyle. Fabrik A Visual Programming Environment. OOPSLA 88

## (Argument /) Discussion
what works
- basic creation through halo
- aexpr and events
- editor (change target/source, code, toggle direction, deactivate, destroy, rename, draw)
- livelyload

## (Austerities /) Limits
- copying per halo breaks
- connections have no morph oä
- reload kills connection editor
- use lively ids instead of own id
- better generated names
- not all styles work
- events work, but list not exhaustive

## (Access /) Entry points

- [Connection](https://lively-kernel.org/lively4/lively-connectors/src/components/halo/Connection.js)
- [Connection Halo Item HTML](https://lively-kernel.org/lively4/lively-connectors/src/components/halo/lively-halo-connectors-item.html)
- [Connection Halo Item](https://lively-kernel.org/lively4/lively-connectors/src/components/halo/lively-halo-connectors-item.js)
- [Connection Editor HTML](https://lively-kernel.org/lively4/lively-connectors/src/components/tools/lively-connection-editor.html)
- [Connection Editor](https://lively-kernel.org/lively4/lively-connectors/src/components/tools/lively-connection-editor.js)

