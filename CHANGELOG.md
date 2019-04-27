# 1.1.1 (04/26/2019)

- bumps devDependencies
- generates build using babel@7

# 1.1.0 (05/18/2018)

- adds decorate option to alter the output of (ascii, markdown and ascii)

# 1.0.3 (03/20/2018)

- removes caching, this should be done in userspace land
- fixes calculation for header width for ascii

> before

```
uid | name  | quote                  
==================================
1   | Doe   | this is a long string  
2   | Hemma | this is a longer string
```

> after

```
uid | name  | quote                  
=====================================
1   | Doe   | this is a long string  
2   | Hemma | this is a longer string
```

- simplifies header check

# 1.0.2 (12/28/2017)

- adds caching
- improves logic reuse by creating `getSize` which returns the amount of columns and their perspective widths
- adds the ability to export html tables

# 1.0.1 (12/27/2017)

- improves readability of markdown header generation

# 1.0.0 (12/26/2017)

- makes turtler a class instead of a function
- adds the ability to render a markdown table `*instance*.markdown()`

# 0.0.2 (12/20/2017)

- fixes misspelling of `separator`
- improves readability and performance

# 0.0.1 (12/20/2017)

- initial implementation working
