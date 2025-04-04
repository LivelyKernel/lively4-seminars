# Project 4: Babel Projectional Editor
## David Rauch, Till Rathschlag

[**repository**](https://lively-kernel.org/lively4/lively4-projectional-editor/index.html) [**slides**](slides.pdf)

![](screenshot.png){style="max-height: 200px"}

The Lively Projectional Editor is an implementation of a projectional editor for Lively 4. It offers a dual editing workflow: A text projection for a fast and familiar editing experience, and a block projection to explore the structure of the Abstract Syntax Tree (AST).

While the text projection behaves like a normal text editor, the block projection shows the current AST of the program. This projection allows the developer to examine the structure of the program, as well as edit and rearrange parts of the program in a graphical presentation.

Both projections are automatically updated to show the current program. A status lamp indicates whether the current AST is valid, and whether both projections could be updated to represent the current AST.

The block projection also offers some additional editing features. For example, developers can open a popup to quickly generate partial syntax trees, which they can then insert into the main program. The block projection also offers a ‘smart renaming’ feature that automatically updates all relevant Identifiers in the current scope when the developer renames an Identifier.



<video controls><source src="screencast.mp4" type="video/mp4"></video>