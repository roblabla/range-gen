Range-Gen
=========

An es6 generator for a python-like, low overhead number range iterator.

Usage
=====

```
import range from "range-gen";
for (var i of range(3)) {
	console.log(i);
}
// Prints 0 1 2
for (var i of range(3, 6)) {
	console.log(i);
}
// Prints 3 4 5
for (var i of range(6, 9, 2)) {
	console.log(i);
}
// Prints 6 8
for (var i of range(0, -2, -1) {
	console.log(i);
}
// Prints 0 -1
```
