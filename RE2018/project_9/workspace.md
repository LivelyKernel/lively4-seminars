# Workspace for Experiments

<script>
import FileIndex from "https://lively-kernel.org/lively4/lively4-analysis/src/client/fileindex-analysis.js"
import SemanticAnalysisUtils from "./src/semanticanalysisutils.js"

(async () => {

  var analysis = await lively.create('lively-analysis')
  analysis.setViewWidth(1100, 'px')
  analysis.setViewHeight(900, 'px')
  return analysis

})()

</script>
