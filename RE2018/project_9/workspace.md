<script>
(async () => {
  var analysis = await lively.create('lively-analysis')
  analysis.setViewWidth(1000) 
  analysis.setViewHeight(500) 
  await analysis.updateViz()
  return analysis
})()
</script>