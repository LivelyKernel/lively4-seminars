<!-- markdown-config presentation=true -->


<link rel="stylesheet" type="text/css" href="https://lively-kernel.org/lively4/lively4-core/demos/lively-simulation/presentation/style.css"  />
<style data-src="./presentation.css"></style>

<script>
import Presentation from "src/components/widgets/lively-presentation.js"
Presentation.config(this, {
    pageNumbers: true,
    logo: "https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/hpi_logo_web.jpg"
})
</script>

<div class="title">
  Petri Nets Simulation as Active Content
</div>

<img style="margin-left: 45%; margin-top: 5%; width: 100px" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/Logo.png">

<div class="authors">
  Linus Heinzl und Anne Radunski
</div>

<div class="authors">
  End-user Development Seminar
</div>

<div class="credentials">
  14.07.2019<br>
</div>

---

# Motivation

- Graphischer Formalismus
- Darstellung von Systemübergängen
- Einfache Modellierung von räumlicher Verteilung der Ressourcen


Anwendungen:
- Modellierung von Organsisationsabläufen
- Prozessmodellierung bei Betriebssystemen
- Ablaufbeschreibung von Herstellungsverfahren
- ...

<img style="margin-left: 40%" width="250" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/petrinet.png"></img>



---

# Notation


<img style="margin-top: 30px; width: 400px" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/Notation.png"></img>


---



# Schaltbedingungen


<img style="margin-top: 30px; width: 300px" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/Schaltung.png"></img>


<p style="margin-top: 90px"></p>

- Die Entfernung der Marken der Vorbedigung und Erzeugung der Marken der Nachbedingung nennt man Schalten bzw. Feuern der Transition


---



# Beispiel klassisches Petrinetz: Friseur


<lively-import src="https://lively-kernel.org/lively4/lively4-petrinet/src/parts/test.html"></lively-import>

---

#  Deadlock
- Bei Paralleler Programmierung: Zustand, in dem jedes Mitglied einer Gruppe darauf wartet, dass ein anderes Mitglied eine Aktion ausführt
- Systeme lassen sich mit Petrinetzen auf Deadlocks testen
- Vorhanden, wenn es eine erreichbare Markierung gibt, unter der keine Transition aktiviert ist

<img style="margin-left:200px" width="50%" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/DeadlockSimple.png"></img>

---

# Transitionen

#### Normale Transition:
  <img style="margin-left:25px" width="8%" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/NormalTransition.png"></img>

#### Code Transition:
  <img style="margin-left:50px" width="50%" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/CodeTransition.png"></img>



---


# Debugging

#### Menü:
<img style="margin-left:50px" width="66%" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/Debugging.png"></img>

#### Funktionalitäten:
- Petrinetz laufen lassen
- Zurückgehen und von dort aus neu simulieren
- Simulation laufen lassen bis zum nächsten Feuern
  - Nutzersicht unterscheidet sich von implementierung


---


#  Demo: Deadlock


<script>
const image = <img width="750" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/PetrinetDeadlockExample.png"></img>
image.addEventListener("click", evt => lively.openBrowser("https://lively-kernel.org/lively4/lively4-petrinet/src/parts/deadlock.html"));
image
</script>

---



#  High-Level-Petrinetz

Bei dem „klassischen“ Petrinetzen treten oft Probleme auf:

   - Modelle werden zu groß und komplex
   - Modellierung ist langwierig und kompliziert
   - Zeit, Kosten und Daten können nicht modelliert werden
   
<img style="width: 300px" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/pn-12.PNG"></img>
   

---

#  Beispiel High-Level-Petrinetz: Friseur


<img style="margin-top: 30px" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/HLPetrinetz.png">


---



#  Zusammenfassung
Gut möglich:
+ Einfache nebenläufige Prozesse modellieren
+ Mit Wahrscheinlichkeitstransitionen das Verhalten simulieren
+ Durch Debuggen das Petrinetz iterativ verändern

Schwieriger möglich:
- Komplizierte Regeln abbilden
  - Wahrscheinlichkeitstransition nicht mächtig genug
  - Codetransition nicht intuitiv für Nutzer
- Kompakte Petrinetze erstellen
  - Benötigt Erweiterungen, zum Beispiel High-Level Petrinetze oder gewichtete Kanten

---

# Zusammenfassung
#### Original:
<img style="margin-left: 100px; width: 200px" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/Petrinetz.PNG"></img>
#### Unsere Version:
<img style="margin-left: 100px; width: 600px" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/PetrinetzDiscussion.png"></img>




---


# Anforderungen und Ausblick


Was haben wir geschafft?

- [x] Komponenten von einem Petrinetz erstellen/ bewegen/ löschen
- [x] Petrinetz bearbeiten
- [x] Wahrscheinlichkeit für die Transition einbauen
- [x] Abspeichern von dem jeweiligen Petrinetz
- [x] Simulation
- [x] Petrinetz "debuggen"
- [x] Animation

Was kommt noch?
- [ ] High-Level Petrinetze
- [ ] Petrinetze in Dokumente einbauen
- [ ] Graphische Oberfläche verbessern (Text über den Buttons, Label veriable Größe)

---

<div class="title">
  Fragen?
</div>

<img style="margin-left: 40%; margin-top: 5%" src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/img/Logo.png">

