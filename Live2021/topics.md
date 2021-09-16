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
   Live Programming Seminar
</div>

<div class="authors">
  <u>Jens Lincke</u>, Stefan Ramson, Patrick Rein, Tom Beckmann, Robert Hirschfeld
</div>

<div class="credentials">
    Software Architecture Group <br>Hasso Plattner Institute<br> University of Potsdam, Germany<br>
    2021
</div>

---

## Topics


<script>
var container = lively.query(this, "lively-container")
var url = container.getDir() + "/Live21_Topics.txt"

var value;
(async () => {
  value = await fetch(url).then(r => r.text())
  var topics =  value.split("\n")
    .filter(ea => ea.match("Topic: "))
    .map(ea => ea.replace(/[0-9]\/[0-9]/,"")).uniq().sort()
    
  return <ul>{...
    topics.map(ea => <li>{ea}</li>)
  }</ul>
})()

</script>


