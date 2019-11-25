# Project 1: <br> Markus Brand, Merlin Haye, Florian Henschel<br>*An AST-aware Textual Code Editor*

Projectional Editors have advantages compared to traditional text-based editors, BUT: 
1. Implementing and optimizing an AST-Editor requires huge amount of effort 
2. Fully functional AST-Editor feels odd and unfamiliar for programmers

#### Goal: 
Apply benefits of AST-awareness onto standard text editor (Code Mirror) 
- [Refactoring and Code Generation tools](Refactoring.md) 
- [AST-aware code navigation](CodeNavigation.md) 
- Inverse code folding (?)
- [General Improvements](General.md)

#### Important Components:
- LivelyCodeMirror: [open](open://lively-code-mirror), [browse](browse://src/components/widgets/lively-code-mirror.js)
- LivelyCodeMirrorASTCapabilities: [browse](browse://src/components/widgets/lively-code-mirror-ast-capabilities.js)
- [CodeMirror Docs](https://codemirror.net/doc/manual.html)
- [Babel Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#toc-paths)
- [Babel Types Overview](https://babeljs.io/docs/en/babel-types)
- [Online AST Explorer](https://astexplorer.net/)

#### Related work
- Ansehen, feeling bekommen, features ableiten
  - Mbeddr/MPS
    - 10 Usability Issues of ProjE
    - http://www.voelter.de/data/pub/projectionalEditing-sle2014.pdf
  - Lamdu
  - https://scholar.google.com/citations?user=Nvl-AO4AAAAJ&hl=en&oi=sra#d=gs_md_cita-d&u=%2Fcitations%3Fview_op%3Dview_citation%26hl%3Den%26user%3DNvl-AO4AAAAJ%26citation_for_view%3DNvl-AO4AAAAJ%3Au5HHmVD_uO8C%26tzom%3D-60
  - andere normale IDEs
  - LSP - language Server Protocoll




![](motivation.png)


#### stuff

```JavaScript
lively.allParents(that, undefined, true) 
  .find(ele => ele.tagName && ele.tagName === 'LIVELY-EDITOR')
```

- inline command: inline the value calculation of a variable into each of its occurrences.
  - -> opposite of extract into local
- Check file type and notify the user
