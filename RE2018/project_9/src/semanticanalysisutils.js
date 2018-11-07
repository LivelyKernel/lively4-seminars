import FileIndex from "src/client/fileindex.js"
import babelDefault from 'systemjs-babel-build'
const babel = babelDefault.babel

export default class SemanticAnalysisUtils {
  
  static async getFiles(url = lively4url + "/src/client/") {
    var filelist = []
    await FileIndex.current().db.files.where("type").equals("file")
        .filter(function(file) {
          return file.name.endsWith(".js") && file.url.includes(url)
        }).each(element => {
          filelist.push(element)
    })
    return filelist;
  } 
  
  static extractClassesAndMethods(file) {
    var classes = []
    var ast = this.getAst(file)
    
    if(!ast) {
      return []
    }
    
    babelDefault.babel.traverse(ast,{
      ClassDeclaration(path) {
        if (path.node.id) {
          var classMethods = new Map() 
          classMethods.set(path.node.id.name, [])
          
          if (path.node.body.body) {
            var body = path.node.body.body
            body.forEach(function(item){
              if(item.type === "ClassMethod") {
                classMethods.get(path.node.id.name).push(item.key.name)
              }
            })
          }
          classes.push(classMethods)
        }
      }
    })
    return classes
  }
  
  static getAst(file) {
    var options  = {
      babelrc: false,
      plugins: [],
      presets: [],
      filename: file.url,
      sourceFileName: file.url,
      sourceType: "module",
      retainLines : true,
      moduleIds: false,
      sourceMaps: true,
      compact: false,
      comments: false,
      code: false,
      ast: true,
      resolveModuleSource: undefined
    }
    try {
    return babel.transform(file.content, options).ast
    } catch (err) {
      console.log(err)
    }
  }
}