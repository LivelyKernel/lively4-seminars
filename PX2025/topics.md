<!-- markdown-config presentation=true -->

<script>
  debugger
  var slide = lively.query(this, ".lively-slide")
  var style = document.createElement("style")
  style.setAttribute("data-src", lively4url + "/src/client/presentation.css")
  slide.appendChild(style)
  await lively.fillTemplateStyles(slide) 
  ""
</script>


<script>
import Presentation from "src/components/widgets/lively-presentation.js"
Presentation.config(this, {
    pageNumbers: true,
    logo: "https://lively-kernel.org/lively4/lively4-seminars/PX2018/media/hpi_logo.png"
})
</script>

<div class="title">
   Programming Experience Seminar
</div>

<div class="subtitle">
   Topics (Draft)
</div>


<div class="authors">
  <u>Jens Lincke</u>, Stefan Ramson, Robert Hirschfeld
</div>

<div class="credentials">
    Software Architecture Group <br>Hasso Plattner Institute<br> University of Potsdam, Germany<br>
    SoSe 2025
</div>




---
# Squeak Topics {.section}

---
# SqueakVNC 
@Jens, @Leo (user)

- Squeak has native support for VNC

## Problems

- works under Linux, but there seems to be problems under windows and mac


- Related Work [@Steinert2009MUM, @Smith1997KOC]

## References
<lively-bibtex>
@inproceedings{Steinert2009MUM,
    author = {Bastian Steinert and Michael Grunewald and Stefan Richter and Jens Lincke and Robert Hirschfeld},
    title = {Multi-user multi-account interaction in groupware supporting single-display collaboration},
    year = {2009},
    microsoftid = {2150387442},
    booktitle = {2009 5th International Conference on Collaborative Computing: Networking, Applications and Worksharing},
    doi = {10.4108/ICST.COLLABORATECOM2009.8290}
}

@Article{Smith1997KOC,
    author = {Smith, Randall B. and Wolczko, Mario and Ungar, David},
    title = {{From Kansas to Oz: collaborative debugging when a shared world breaks}},
    journal = {Commun. ACM},
    year = {1997},
    volume = {40},
    number = {4},
    pages = {72--78},
    month = {apr},
    acmid = {248461},
    address = {New York, NY, USA},
    date-added = {2014-09-22 19:20:23 +0000},
    date-modified = {2014-09-22 19:20:23 +0000},
    doi = {10.1145/248448.248461},
    groups = {missing},
    issn = {0001-0782},
    issue_date = {April 1997},
    keywords = {Self, Debugging, CSCW, PersistentEnvironment},
    numpages = {7},
    publisher = {ACM},
    url = {http://doi.acm.org/10.1145/248448.248461}
}

</lively-bibtex>



---
# Live Syncing Code Changes in Squeak

@Jens, @Leo (user)

- Motivation: Baseline for Development Environment <-> VR Headset   
- Benchmarks, we want live UX 


---
# Lively4 Topics {.section}

---
# Live Components Updates

- Motivation: Live Coding Experience, stable objects/data, shorter feedback loops
- Approach: Mutation vs. Replace
- Related: React Virtual DOM 

---
# Tabbed Windows / Editor Panes in Lively (again)

@Jens, @Stefan 

- Rethinking Windows, Components, Tools in Lively4
- Compared to UX in VSC
  - tabbed open files
  - browsing files without opening new tab
  - draggable tools in sidebars that change depending which file has focus


---
  
# Debugging Lively in Lively (again)

@Jens, @Stefan

Inspired by Yoshiki's work on Renkon Pad, where iframes a used to run the code separate from the dev environment, we tried again to run lively inside an iFrame in Lively. This worked with no problems out of the box. So the question is, can we debug it? We know that we can debug a Lively with an external a normal (chrome tools) and custom debugger (also chrome tools, but run as a website). 

We tried running:

- lively on localhost, debugging on localhost (failed, because whole tab was halted)
- lively on localhost, debugging on localhost with start2 (failed, because whole tab was halted)
- lively on localhost, debugging on lively-kernel (success, only iframe was halted)
- lively on localhost, debugging on local ip but actually on same server (success, only iframe was halted)

So this seems to be an interesting avenue of being able to finally debug lively inside of lively (without as separate tab or window). What benefits would this would give us? We can actually edit and safe lively source code. Yes, I know chrome tools support this natively with static code and access to local files. But we cannot do this?

Another possibility would be to actually script the debugger, e.g. control stepping, or letting a program run slowly, or extract information out of the debugger etc. Maybe having an experience like in Visual Studio Code, where the debugger is just embedded in the normal code editor and on can even set breakpoints there.

---
# Lively LSP 
@Jens @Stefan 
- browserside
- Motivation: TypeScript support



---
# Application Deployment in Lively4 
@Jens @Stefan (user)

- Example Application: Lively Gallery, a simple photo browsing app
- Problem:
  - How to deploy as an app without development tools?
  - Should still be loadable into dev environment 

---
# Lively Chrome Plugin (again)

- Lively Plugin allows to load development environment into any website
- Problem:
  - load it fast
  - provide persistent monkey patching
  - load only the most basic things fast... e.g. without full dev, but with monkey patching support

--- 
# Debugging Lively4 in Lively4?

- we had several previous attempts at implementing our own debugger for Lively Kernel
- latest approach allowed us to attach a debugger to a lively world in a separate window or tab
- Problem:
  - running Lively4 in an iFrame would allow us have the development tools and the debugging target in one screen
  - can we use this to have our custom debugger where we can also see and edit our source code 


---
# (Lively4) Programming Agent

- Bringing an AI Agent into Lively Environment
  - Context 
  - Planing
  - Edits
- RW: Copilot, Cursor, OpenHands [@Wang2024OOP], ... and many more

<lively-bibtex>
@misc{Wang2024OOP,
    author = {Xingyao Wang and Boxuan Li and Yufan Song and Frank F. Xu and Xiangru Tang and Mingchen Zhuge and Jiayi Pan and Yueqi Song and Bowen Li and Jaskirat Singh and Huyen Tran and Fuqiang Li and Ren Ma and Mingzhang Zheng and Bill Qian and Yanjun Shao and Niklas Muennighoff and Yizhe Zhang and Binyuan Hui and Juntang Lin and Robert W. Brennan and Peng Hao and Heng Ji and Graham Neubig},
    title = {OpenHands: An Open Platform for AI Software Developers as Generalist
  Agents},
    year = {2024},
    alexid = {W4403885061},
    booktitle = {arXiv (Cornell University)},
    doi = {10.48550/arxiv.2407.16741}
}
</lively-bibtex>


---
# JavaScript Syntax for  Polymorphic Identifiers

@Jens @Stefan @MarcelWeiher 

- Lively4 has its own little version of support for custom URIs, 
  - polymorphic identifiers via `fetch`
- Problem: 
  - (1) Syntax is generic, but looks not so nice....
  - (2) Works only on data, e.g. text, images, but not live objects
  - (3) deal with async await...


## Current Polymorphic Identifiers as Custom URLs in JavaScript fetch 

```javascript
var s = await fetch("cached://http://foo/bar").then(r => r.text())

fetch("tmp://myfile", {
  method: "PUT", 
  body: "hello world"
})

````

## Proposed

```javascript
// reading
var a = http`foo/bar`
// writing
http`foo/bar` = 42

// combining protocolls
var a = cached$http`foo/bar`

// custom protocolls
tmp`myfile` = "hello world"
```


---
# Truffle Topics {.section}

---
# Truffle Interpreter Performance

- In BYOPL24, we optimized for peek performance
- Problem: 
  - Initial interpreter performance is also if interest: How to optimize for it?
  - Benchmark that measure Interpreter Performance
  - Tool Ideas to visualize/see the problems

---
# Lox in MySQL

- running an imperative scripting language in database
- big brother: run JavaScript in OracleDB
- goal: much simpler and lighter scenario to make experiments easier

---
# Lox in the Browser?

@Jens @Fabio

- Compiling Lox to NativeImage/WASM

- https://2025.wasm.io/sessions/the-future-of-write-once-run-anywhere-from-java-to-webassembly/
- https://joshlong.com/jl/blogPost/my-first-java-script-script-with-graalvm-and-webassembly.html


---
# Fuzzing Examples with Lox

@Jens, @MarcelGarus

## References

- Marcel G. MA Thesis

---

# NOT A TOPIC

---
# Truffle Squeak in VR

Also good topic for #MA Project

- run it on ARM / Android (for running on Headset)
- get FFI to run for Raylib (https://www.raylib.com/)
- Benchmark Interactive Performance with Leo's Dev Env / Application
- Goal: Showcase Performance Issues



