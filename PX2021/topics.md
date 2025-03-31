<!-- markdown-config presentation=true -->

<style data-src="https://lively-kernel.org/lively4/lively4-core/src/client/presentation.css"></style>

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

<div class="authors">
  <u>Jens Lincke</u>, Stefan Ramson, Patrick Rein,  Marcel Taeumel, Robert Hirschfeld
</div>

<div class="credentials">
    Software Architecture Group <br>Hasso Plattner Institute<br> University of Potsdam, Germany<br>
    WS 2021/2022
</div>

---


# Topics 

---
## Topic: Annotations

- sticky notes in squeak

---
## Topic: XRay on D3

- similar to JSX Ray


### Ideas

- instrument `document.createElement`
  - rewrite code to make places that create elements navigateable
- observe changes to elements and record history
- tricky... find places in code that change the objects
  - we are able to get notified when an object has changed, but it is difficult to find the code place that did so...

---
## Topic: Zoned Logs

- #ContextJS #Zones
- Draft: https://lively-kernel.org/research/Draft-COP18-Promises/content/implementation.md

### Literature

- [@Ramson2020ZLA] Stefan Ramson, Jens Lincke, Harumi Watanabe, Robert Hirschfeld . Zone-based Layer Activation Context-specific Behavior Adaptations across Logically-connected Asynchronous Operations. 2020

---

## Topic: Async Babylonian Programming




---
## Topic: Squeak Merge and Code Review  ?

- proposed to @Marcel 

  
---
## Topic: History of Smalltalk -- St-72 redux

>> Do you know Smalltalk-72?  It is a very cool and tiny language.  Alan sketched it and I built it in 1972, but it has never been cleanly described.  Last year, to keep from going nuts with the HOPL paper, I wrote another interpreter (Redux) in JS, designed to be fairly simple, fast, and accessible to any browser or JS programmer.  My goal for Redux is to write a metacircular evaluator (currentContext := currentContext next) in St-72 itself, and that it be fast enough to be useful - hopefully even faster that he original assembly language interpreter.  There are several interesting aspects to this project, I think.
>>
>> First is that, other than sketches and recollections of Alan’s first evaluator, we have never been able to exhibit a “real definition” of the St-72 interpreter, as we have with Context-step in the Smalltalks since then.  This would install that missing piece of history.
>>
>> Second, all the St-72 interpreters have relied on a fairly large set of primitive functions that detract from the elegance of the underlying language model.  With decent speed, many of these could be written in the language itself, thus better revealing the inner simplicity.
>> 
>> Third, it could be a much more ‘comfortable’ environment,  St-72 never had much of a programmer interface - no morphic, no decent debugger, and little more than 20k bytes to work with.  Redux offers essentially unlimited object memory for such experiments.
>> 
>> The good news is that almost on the day I finished my HOPL paper, I got Redux running.  The speed is gratifying: it runs at about 600 times the speed of the original Alto interpreter!  So… we have an artifact, already fun to play with, and rife with opportunities to perform little experiments, that could be entertaining as publications as well.

---
## Topic: History of Smalltalk -- Complete St-78

>> I’m sure you are aware of the NoteTaker Smalltalk resurrection that we created a few years ago.  Unfortunately the kernel of that system remains incomplete - there is no process scheduler, and the debugger doesn’t really work.  Completion would involved working inside the existing St-78 (already runs in any browser), fixing the debugger and Context-step, and porting the Process scheduler from St-76.

---
## Topic: History of Smalltalk -- Resurrect St-76

>> We have one (and only one!) disk image with Smalltalk-76 and complete source code.  As the first modern Smalltalk, it is of historical interest, and it is currently not accessible except by running Josh Dersh’s Alto emulator.  It should be fairly easy to adapt either the Notetaker-JS interpreter or SqueakJS to run that image, thus providing access to the original modern Smalltalk with relatively unlimited speed and space for instrumentation and other experiments.



