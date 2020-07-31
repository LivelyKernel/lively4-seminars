## Meeting 18.05

- Können wir "Drag&Drop" und "Löschen" sowie "Resize" über HALO-Tool verwenden?
- Connector ist nicht mit node verknüpft (Am Anfang) Connector Code kopieren und das als Start für eigenen Komponenten verwenden. Ideen:
  - Connector Funktionalität eingrenzen. Kann sich nur mit normalen Nodes verbinden.
  - Um Connecten zu starten: Punkte, die ansetzen an den Shapes.
  - (Später) Orthogonales Layout.
- Neue Komponente anlegen + neue Position.
- Automatische Connector Points? Idee im Moment ist, Mouse Events zu handeln und gucken, welche Component wir auswählen. Aber im Graphischen Teil wurden diese Points angeboten - können wir das auch?

Stories:

- Eine Pane enthält Nodes und Connectors.
- Eine Node sieht wie ein Kreis aus und enthält Pünktchen.
- Ich gehe mit der Maus auf eine Node (= Kreis, es erscheint ein Plus, und ich kann den Komponenten mit einem anderen verbinden.
- Ein Connector enthält einen Kasten innerhalb des Connectors, der auch mit anderen Connectors funktioniert
- Research Petri Nets

## Meeting 25.05

Completed Stories:

- Eine Pane enthält Nodes und Connectors.
- Eine Node sieht wie ein Kreis aus und enthält Pünktchen.
  - Verteilung ist nicht optimal
  - Grid erstellen und Punkte 
  - Random mit mehreren Versuchen.
  - Forces (zu aufwändig)
  - Zahlen ranschreiben für Punkte
  - Aber erstmal so lassen
- Ich gehe mit der Maus auf eine Node (= Kreis, es erscheint ein Plus, und ich kann den Komponenten mit einem anderen verbinden.
  - Soweit alles schick. SetPosition + Berechnung kann abgekürzt durch SetGlobalPosition. MoveBy ist ansonsten auch eine Option.

Fragen:

- Zur Implementierung: Ist die Idee, wie wir Konnectoren bewegen, sinnvoll?
  - Ja, ist sinnvoll.
  - lively.hand ist ansonsten auch noch eine Idee, um etwas zu verbinden
- finde Elemente mit querySelectorAll()
- Methoden Aufruf ganz normal.

Plan:
- Transitions implementieren (!!)
- Connektoren gehen evtl. noch smoother (zb. mit Einrasten, wenn die Maus auf einem anderen Feld ist)
- Löschen einer Node über Button. Beim Löschen löschen sich die Konnektoren mit
- Verschieben von Nodes durch Drag and Drop, und nicht über das Halo Menü

User Story:
- Nennt eure Petrinetze um in Place, Transition, Token.
- Ich kann eine Transition hinzufügen und sie verbinden.
- Unsere Transitionen feuern mit einer gewissen Wahrscheinlichkeit in einem Step. Ich kann also pro Transition eine Zahl hereinschreiben, die die Wahrscheinlichkeit.
- Ich kann die Simulation zurücksetzen auf den Standard, den ich als Nutzer erstellt habe.
- Ich kann eine Simulation Komponente hinzufügen. Sie hat 3 Buttons: Start/Reset, Step, Run/Pause. Starte in den Pause Modus. 
- Eine onStep() Methode muss implementiert werden pro Transition. Die Simulation geht über die onStep Methoden und ruft sie auf.
- Future Work: Andere Transitionen.

- Transitions: Conditional Transitions, Code Transitions (Subclassing)

## Meeting 02.06

Completed User Stories:
- Transition so machen, dass der Pfeil vom Kasten führt
- Transition: Doppelklick macht sie auf. => lively.prompt. Werte werden angezeigt beim Drüberhovern.
  - UI Technisch ist Selection möglich.

New Questions:
- How to initialize component? (Best Practices)
  - garnicht. direkt zugreifen.
- OnClick(), RightClick() für Connector - Wie Chaos vermeiden?
  - Listener für die einzelnen Subelemente registrieren, nicht für die einzelne Komponente
  - preventDefault(), stopPropagation()
  - 


Neuer Plan:
- Transition: Doppelklick macht sie auf. => lively.prompt. Werte werden angezeigt beim Drüberhovern.
  - Wahrscheinlichkeit zwischen 0 and 1
- Simulation reset implementieren
- Petri Netz soll abspeicherbar sein => HTML, andere Gruppe angucken
- Wir erstellen ein Markdown, und binden in dieses Markdown unsere HTML Datei ein (lively-import Tag)
- Wir wollen die Places und Transitions benennen können.
- Implementiert eine Mini Mensawarteschlange
  - Es gibt die Essensausgabe (Schlange), Kassen, Plätze.
  - Es gibt eine maximale Kapazität pro Place.
- Neue Möglichkeiten für die Transition -> Future.



## Meeting 8.6
### Completed User Stories
- Simulation reset implementieren
- Transition redesign: Now Text Field instead of prompt
- Wir wollen die Places und Transitions benennen können.
- Implementiert eine Mini Mensawarteschlange
  - Es gibt die Essensausgabe (Schlange), Kassen, Plätze.
  - Es gibt eine maximale Kapazität pro Place.
- HTML abspeicherbar (nicht fertig)


### Questions
- How "save state"? Basically, when I tried to reinsert the elements with this.appendChild() half of it was broken
- Is it possible to use the halo tool in the html?
  - Don't use it.
- How to store state in html? For example, we need to state the probabilities that the user gave as input. Our idea would be to go through JSONAttribute and then load them in the initialize method again.
- How to reregister listeners after stored document is loaded again? (initialize?)
- Why is something like "data-lively-id sometimes shown and sometimes not?
  - Dont use ids, make them on the object itself 
- Show him Problem: When we design the net, we can not click on everything and edit everything (because of connectors?)
  - z-Index in CSS
- How interactive should the html be? For example drag and drop? We would need to implement it without the halo tool.
  - Implement it yourself.
  - How:
    - onMouseDown/onPointerDown auf dem Object, was wir draggen wollen
    - onPointerMove im Body
    - lively.addEventListener("drag", this, "mousedown", evt => {
        lively.addEventListener("move", document.body, "pointermove", evt => {
        
        })
        
        lively.addEventListener("drapstop", document.body, "pointerup", evt => {
          lively.removeEventListener("dragstop", document.body)
        })
    })
- How hard is it to make petrinet responsive?

### Plan
- Make HTML storage seamless
  - implement load and save methods
  - make everything editable, for instance drag and drop
- Fix Connector overlapping
- Delete Connector when Place is deleted
- Delete specific Place
- Idea for future: Make use of the fact that everything is programmable. Aka both places and transitions support actions which the user can program in.
  - Code Transition (input), Places mit Minmax
- make petrinet responsive


## Meeting 15.6

Done:
- Html works and is interactive
- Every Major interaction can now be done without halo tools
- Connector overlapping is fixed
- A specific place can be deleted


Questions:
- Implementation of connectors (with our additional functions) - okay or too complicated?
- How can we implement the green line (for alignment)
- How can responsive design be implemented? Should it be implemented?
- Components are slow in html - why?


Plan (Nice to have):
- Delete Components automatically when deleting element
- Rewire Components
- Make Selected Visible (greyed out delete button / normal, border around selected element)
- Trash befestigen am Fenster
- Neue Komponente dort erzeugen, wo wir den Klick gemacht haben
- Tokens stoßen sich ab
- Responsive

Plan (Presentation):
- Petri Netzte: Wie kann man das Mensa Szenario modellieren? Was kann man mit Petrinetzen machen?
- Wie kann man die Petrinetze nutzen? Debuggen -> Was ist ein Step?
- Transitionen werden markiert
- Petri-Netze Debuggen vs. Code Debuggen
- Petri-Netz Debugging Aspekte
    - Slider
    - End User ist jetzt auch "Programmierer" und kann
    - Deadlocks modellieren
- Code Transition
- Für Animationen CSS Animationen nehmen
- Animation kleiner Ball + Farbanimation
- 
- lively4script
- lively-object-editor
    - Es wäre sehr krass - man müsste alles in dem Ding machen
    - Funktion sollte stark eingeschränkt sein, sodass der User wirklich nur den relevanten Teil sieht
    - Wie kann man den Enduser beim Code so gut es geht helfen, dass ihm die Arbeit abgenommen wird -> Er also nur meaningful code schreibt.
- Sucht euch ein besseres Szenario


## Meeting 22.6


### Done
- Selecting elements of petrinets (this was a continuiation from previous week)
- Code Transition first draft
- Step until next transition fires
- Slider (not perfect yet)
- Scenario


### Scenario for presentation
- Our basic idea: We found examples online of petrinets that can not fire for example. Also we found, for instance in the BPMN slides, examples for petrinets with semantics. Our idea is to combine these to create a "flawed petrinet" that we can debug.
- Still, the question is: Can we create a petrinet that 
  - has a mistake we can debug
  - makes use of code transitions
  - makes sense semantically
  
  
## Meeting 29.6



### UI Plan

- Responsive
- Logo + Name
- Add Tokens as Text
- Slider Color


### Funktionalität

- Connectoren deleten
- Welt "vergrößern"



### Präsentation

- Layout
- Inhalt



## Meeting 08.07

- Welt "vergrößern"
- Text bei Buttons usw.
- Slider 


<!-- 
<div><div class="lively-content" style="background-color: lightgray; border: 1px solid gray; position: absolute; left: 60px; top: 138px; width: 121.5px; height: 79px;" data-lively-id="e79284b4-c84e-439f-adbb-dbe7a221477f"></div> <div class="lively-content" style="background-color: lightgray; border: 1px solid gray; position: absolute; left: 325px; top: 138px; width: 167px; height: 100.5px;" data-lively-id="d2248b82-11b2-4239-83c4-a2448141711e"></div> <lively-connector class="lively-content" fromelement="e79284b4-c84e-439f-adbb-dbe7a221477f" toelement="d2248b82-11b2-4239-83c4-a2448141711e" style="position: absolute; left: 183.5px; top: 178.5px; pointer-events: none; width: 0px; height: 0px;" x1="0" y1="0" x2="106" y2="10.75"></lively-connector> </div>
-->