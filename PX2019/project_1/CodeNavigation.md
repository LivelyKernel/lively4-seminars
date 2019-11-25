# Code Navigation
## The following functionalities were already supported:

| Shortcut     | Functionality           | Todo
|--------------|-------------------------|------------------  |
| Alt+Up       | Expand Selection        | Smarter Semantic aware selections
| Alt+Left     | Select Previous Element |
| Alt+Right    | Select Next Element     |


## Planned new functionalities:

| Shortcut        	| Functionality    	                | Status 	|
|-----------------	|---------------------------------  |--------	|
| Alt+Down        	| Reduce Selection (history aware)  | <span style="color:green">done</span> |
| Alt+J            	| Go to definition (class methods?) | <span style="color:green">partly done</span>   	|
|                   |                                   |finds classes for external methods + methods in current class, possibly needs ast selection in new editor + finding of WIP methods in current class|
| Alt+Shift+Up    	| Select prev like this             | <span style="color:green">done</span>   	|
| Alt+Shift+Down  	| Select next like this             | <span style="color:green">done</span>   	|
| Alt+Shift+Left  	| Select prev reference (cycle)     | <span style="color:green">done</span>   	|
| Alt+Shift+Right  	| Select next reference (cycle)     | <span style="color:green">done</span>   	|
| Alt-Z/Y         	| Undo/Redo Selection               | [Exists in CodeMirror](https://codemirror.net/doc/manual.html#keymaps): Strg+U / Alt+U  	|
