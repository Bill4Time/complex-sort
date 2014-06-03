complex-sort
============

Simplify the creation of complex/compound sorts on JavaScript arrays

This module creates a sort function which is a compilation of the supplied sorting functions. In this way it
accomplishes complex sorting with one or more sort criteria. It can also make complex sort logic more readable by breaking
sort logic into discrete pieces.

Usage
-----------

```
var complexSort = require("complex-sort"),
    arrayToSort = [
        { p1: 1, p2: "b", id: "Peter"},
        { p1: 1, p2: "a", id: "Bjorn"}
    ];
    
arrayToSort.sort(complexSort({
    sortingFunctions: [ 
        function (a, b) { return a.p1 > b.p1 ? 1 : a.p1 < b.p1 ? -1 : 0; },
        function (a, b) { return a.p2 > b.p2 ? 1 : a.p2 < b.p2 ? -1 : 0; }
    ],
    invert: false//Just including this to document that you can reverse your sort
});

//arrayToSort should has Bjorn first (at 0) and Peter second
```

Question and comments are appreciated!
