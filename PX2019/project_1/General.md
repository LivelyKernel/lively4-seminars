# General

- Forward and Backward selection should act the same
  - Range class in utils
- Menu vs Mode vs Both (when to choose what)
- LOW PRIO: Record/Replay of Modifications and Navigation
- Less fragile autocorrect some mistakes/selection
- Allgemeinheit (Smart) vs Conciseness
- bei allem beachten (evtl. erst später) Multi-Selections
- *du hast dies verändert* -> *soll ich das an diesen anderen Stellen auch verändern*
- navigate code in parts of .md:
<script>
3+4
</script>
- Menu is top left
  - <span style="color:green">fixed by using [codeMirror.cursorCoords](https://codemirror.net/doc/manual.html#api_sizing)</span>
- Re-focus on cancel menu
  - <span style="color:green">fixed by focusing CodeMirror on DOMNodeRemoved Event of the menu </span>
- Differential Update (View on Ctrl-Z)
  - use [replaceRange](https://codemirror.net/doc/manual.html#api_content) instead of just setting the whole sourcecode 
  - [This](https://github.com/google/diff-match-patch/wiki/API) could be used to generate diffs
    - Problem: find start and end in {line, character} format
  - For a view: Mock it
  - ? Extracted Method in separate view
