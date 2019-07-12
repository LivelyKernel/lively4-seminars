# Project 5: Corinna Jaschek, Pascal Fuehrlich, Kim-Pascal Borchart

[**slides**](presentation.pdf)

![](screenshot.png)

# Screencast

- [DynamicNFA-cut](DynamicNFA-cut.mp4) {.video}
- [FullTool-cut](FullTool-cut.mp4) {.video}
- [NFASimulation-cut](NFASimulation-cut.mp4) {.video}
- [RegexQuiz1](RegexQuiz1.mp4) {.video}
- [RegexQuiz2](RegexQuiz2.mp4) {.video}
- [RxsMatcherSteppingTool-cut](RxsMatcherSteppingTool-cut.mp4) {.video}
- [SubstringMatching-cut](SubstringMatching-cut.mp4) {.video}
- [SyntaxExplanation](SyntaxExplanation.mp4) {.video}
- [TestCases](TestCases.mp4) {.video}


<script>
var base = lively.query(this, "lively-container").getURL().toString().replace(/[^\/]*$/,"");
var videoPlayer;

(async () => {
  for(let ea of this.parentElement.querySelectorAll(".video")) {
    let link = ea.querySelector("a")
    if (!link) continue;
    let file = link.getAttribute("href");
    lively.removeEventListener("lively", link)
    lively.addEventListener("lively", link, "click", evt => {
      evt.preventDefault()
      evt.stopPropagation()
      
      videoPlayer && videoPlayer.remove()
      videoPlayer = <div id="videoplayer"><video width="640" height="480" controls><source src={base + file} type="video/mp4"></source></video></div>
      videoPlayer.querySelector("video").play()
      ea.appendChild(videoPlayer)
      
      return true
    })
    // ea.appendChild(<ul><li></ul>)
  }
})()
</script>