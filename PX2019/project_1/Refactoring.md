# Refactoring
## The following functionalities were already supported:

+ Extract local variable    
+ Wrap into active expression 


## Planned Refactorings:

| Shortcut       | Functionality    	                          | Status 	          |
|----------------|--------------------------------------------- |------------------	|
| Alt+R          | Rename Identifier (+class methods)  	        | <span style="color:lime">partly done</span>| 
|                | Eclipse: p1> textual rename, p2> menu        | <span style="color:red">open</span>|
| Alt+Shift+V    | Extract variable to different scope	        | <span style="color:red">open</span>|   
| Alt+M          | Extract Method 	                            | <span style="color:lime">done</span>|
|                | -returns                                     | <span style="color:red">open</span>|
|                | Eclipse: p1> code select, p2> extract        | <span style="color:red">open</span>|
| Alt+I          | Import Identifier	                          | <span style="color:red">open</span>| 
| Alt+S          | Sort	(Imports (+merge) / Methods / Members)  | <span style="color:red">open</span>|
| Menu?          | Invert if                                    | <span style="color:red">open</span>|



## Planned Code Generation (Alt+Enter)


| Functionality    	                              | Status 	                           |
|-------------------------------------------------|------------------------------------|
| Generate Accessors from HTML  	                | <span style="color:lime">done</span>|
|-> do not generate already existing getters      | <span style="color:lime">done</span>|
| Insert test case/method/class (templates/menu?) | <span style="color:red">open</span> |   


### extension ideas
+ <span style="color:lime">done</span> Don't use prompt
+ <span style="color:lime">done</span> put selection on generated code (e.g. identifier)
+ <span style="color:red">open</span> unique identifier
+ show menu entry only if generation is possible (done for test/get/set)
+ <span style="color:red">open</span> show if generation in one of the parents works (getter in class function doesn't work, so we append after the class function)
  + -> append at suitable position
+ <span style="color:lime">fixed</span> inserting code as first statement of a block is not possible


```javascript
//code generation test
//insert class here
class Foo123 {
  //insert getter here
  constructor() {}
  //and setter here
}

//insert class here

var describe = () => {};
describe("hi", () => {
  //insert testcase here
  var i = 1;
  //and here
});

var test = {
  a: "a",
//insert getter here
  a2: "a"

};
```