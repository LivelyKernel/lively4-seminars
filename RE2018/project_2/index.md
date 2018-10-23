# Project 2: Florian Henschel, Erik Brendel - Categorizing Message Categories


## Project Description

```python
def set_color_space(self, color_space_name)
    self.color_space_name = color_space_name

# Predicates

def is_srgb(self):
    return self.color_space_name == ‘srgb’
```

```Smalltalk
((SystemNavigation default allImplementorsOf: #expectedFailures)
	collect: [:m | m category]) asSet 

“Prints” #(accessing characterization failures 
  	running setup testing 'testing-outer' tests)
```

- Code sections or message categories are useful for navigating large classes

- What could be useful metrics for finding relevant/interesting/problematic message categories?
  - Size
  - Heterogeneity (in how many other categories are message from this category?)
  - …
- How would an automatic refactoring tool for categories look like?
- Outlook: What if we had tags instead of categories which allowed us to browse the system from different angles?

