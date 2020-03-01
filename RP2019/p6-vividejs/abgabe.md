# Abgabe

Dies ist eine zusätzliche Dokumenationsabgabe für das Projekt VivideJS Reuse and Composition im Reactive Programming Seminar im Wintersemester 19/20.  
Relevant Commit Hash auf livel4-core: e08401df7cdb632dd7b0898347413a25da546355

## Zusammenfassung
VivideJS erlaubt es schnell und flexibel aus simplen Bausteinen komplexe Programme zu bauen. Dabei soll ein ähnlicher Ansatz wie bei einem Bashscript verwendet werden. Frei nach dem Motto Batteries included sollte es möglich sein mit Verständnis von Vivide  und einigem JavaScript jegliche Programme zu bauen. Vor dem Beginn diese Projekt war die einzige Möglichkeit Code Artefakte zu teilen sogennante Widgets zu programmieren als UI-ELement. Nach Abschluss dieses Projekt ist es nun möglich komplette Anwendungen, sowie Skripte zu teilen und wieder zu verwenden. Die niedrigste Ebene der Schritte aus denen ein Skript besteht wurden dabei bewusst nicht aufgenommen.Um die Wiederverwendung und Kompensation zu unterstützen existieren zusätzlich einige Userinteractions Patterns, die die Erkennung und Benutzung von brauchbaren Teilen erleichtern sollen. Diese basieren auf bekannten Interaktionsmustern in Lively.

## Annahmen
Das Projekt basiert auf drei zentralen Annahmen.
1. Ein VivideJS Wissen, sowie ein fundiertes Domänenwissen zentral für die erolgraiche Anwednung von Vivide.
2. Die alleinige Bereitstellung einer Speicherungs- und Nutzungsfunktionalität entspricht nicht Wiederverwendung und Komponierung.
3. Die Sinnhaftigt von WIederverwendung stockt auf einer gewissen Ebene des Detailgrades.
4. Wiederverwendung und Komposition sind am besten mit seperaten Instanzen des Objektes zu nutzen.

## Vorgehensweise
Der erste Teil des Projektes wurde genutzt um die Lively-Umgebung sowie VivideJS zu erkunden und bereits vorhande Möglichkeiten zu testen. Der anschleißende Teil wurde für eine Bestandsaufnahme verwendet um die zentralen Ziele des Projektes definieren zu können und den aktuellen Stand der bereits vorhandenen Arbeiten abschätzern zu können. In dem folgenden teilw urde eine erste Demo zu Absprachezwecken entwickelt, welche im letzten teil des Projektes fertiggestellt wurde.

## Verwendete Literatur
- Marcel Taeumel, Michael Perscheid, Bastian Steinert, Jens Lincke, and Robert Hirschfeld. Interleaving of Modification and Use in Data-driven Tool Development. Onward! 2014 (pdf)
- Jens Lincke, Robert Krahn, Dan Ingalls, Marko Röder, and Robert Hirschfeld. The Lively PartsBin – A Cloud-based Repository for Collaborative Development of Active Web Content. HICSS 2012. (pdf)

## Diskussion des Artefakts
Während das Artefakt rudimentäre Rümpfe für die Serialisierung und Deserialisierung von Skripten nutz, ist der Großteil der darauffolgenden Nutzerinteraktion und Metainformationen im Laufe des Projektes entstanden. Die grundsätzliche Funktionsweise entspricht einem simplen Serialisierungs und Deserialisierungsansatz auf JSON-Basis. Dabei werden die Skriptinhalte, Layoutinhalte, sowie mögliche Verknüpungen und Metainformationen gespeichert und als Datei gespeichert. Im Fall der Deserialiserung wird der Inhalte der Datei geparst und entsprechene Objekte erezugt und miteinander verbunden.
Applikationen speichern zusätzlich zu den Skriptdaten folgende EIgenschaften:
- Name
- Beschreibung
- Verknüpfte Widgets und deren Skripte
- Ids
- Widget Typ

Skripte speichern zusätzlich zu den Skriptdaten folgende Eigenschaften:
- Name
- Beschreibung
- Schema der Asugangsdaten
- Schema der Eingangsdaten
- Eingangsdaten
- Widget Typ

Jegliche Benutzerinteraktionen zur Soeicherung oder dem Laden von solchen Artefakten besteht nur aus Wrappern der zentralen Methode zur Serialisierung und Deserialisierung. Die folgenden NUtzerinterkationen sind in Lively momentan verfügbar:
- Speichern einer Applikation über das Halo-Menü auf einem Widget
- Speichern eines Skriptes über das Halo-Menü auf einem Widget
- Speichern eines Skriptes über Shift-Alt-S im Skripteditor
- Laden einer Applikation über das Weltkontactmenü unter dem Unterpaunkt Parts > Vivide Applications
- Laden einer Applikation über eine Eingangsseite im Vivde Ordner
- Laden eines Skriptes über eine Eingangsseite im Vivide Ordner
- Laden und Suchen von vorgeschlagen Skripten im Halo-Menü auf einem Widget
- Löschen einer Applikation über eine Eingangsseite im Vivde Ordner
- Löschen eines Skriptes über eine Eingangsseite im Vivide Ordner
- Besuchen der Vivide Eingangsseite über das Weltkontxtmenü unter Unterpunkt Dokumentation > Vivide Reuse

## Einschränkungen des gewählten Ansatzes
Serialisierung und Deserialiserung mit Hilfe von HTML wurde sogelassen, wie es war. Einige Edge Cases sind in der ENtwicklung des JSON-basierten Ansatzes zwar aufgetreten, wurden aber aufgrund der Zeit nicht bearbeitet. Ähnliche wurden die entwickelten Methoden für JSON nicht fehlerbereit gebaut. Da ausschließlich mit JSON basierten Dateien geabreitet wird, wurde kein Errorhandlingkonzept entwickelt oder implementiert. DAs JSON System ist deutlich fehlerresistenter als das HTML-basierte, trotz allem muss in beiden Fällen mit unerwarteten Fehlern gerechnet werden.  
Als dynmaisch typisierte Sprache können die Vorschläge im Halo-Menü nur auf Basis einer besten Vermutung entstehen und können nicht gewährleistet werden, dass sie definitiv funktionieren werden. Zusätzlich ist da gewählte JSON basierte Format bislang nur innerhalb des Vivide Ökosytsems und nicht in Kombination mit anderen Livelykomponenten nutzbar.  
Auch werden keine Skriptschritte zur Wiederverwendung freigegeben, da für diese die umgebenden Metainformationen besser sein müssen. Da einzelne Schritte sehr spezifische Operationen vornehmen müssen zusätzliche Informationen bereitgestellt werden um sie sinnvoll wiederverwenden zu können.

## Einstiegspunkte in den Code
Im Ordner `src/client/vivide/scripts` finden sich alle relevanten Dateien. `Loading` ist für die Deserialisierung des Formates und `Saving` für die Serialiserung des Formates zuständig, das `Deleting` Modul und die Index.md sind rein verwalterische Module. Die Halomenüs finden sich unter `src/components/halo` als Webkomponenten mit den Namen `lively-halo-vivde-script-suggestion`, `lively-halo-vivde-save-script-item` und `lively-halo-vivde-save-application-item`.