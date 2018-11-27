# Workspace for Experiments

<script>
import FileIndex from "https://lively-kernel.org/lively4/lively4-analysis/src/client/fileindex-analysis.js"
import SemanticAnalysisUtils from "./src/semanticanalysisutils.js"

(async () => {
  
  FileIndex.current().db.classes.where("type").equals("file").each((clazz) => {
  })
})()

</script>
<div>Hello <button>bla</button></div>
<lively-analysis></lively-analysis>
