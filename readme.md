<!-- markdownlint-disable MD004 MD007 MD010 MD012 MD041 MD022 MD024 MD032 MD036 -->
# array-order

*in-place sorting of arrays*

• [Example](#example) • [Features](#features) • [Limitations](#limitations) • [Why](#why) • [API](#api) • [License](#license)

## summary

* **sort** creates a sorter to sort multiple columns `(ref:Array [,compare]) => (a:Array) => a`
* **rank** performs reordering based on given ranks `(ranks:Array, a:Array) => a:Array`
* **heap** creates a function that performs permutation, each one different `a:Array => () => a`

## example

```javascript
import sort from 'array-order/sort.js'

const columns = [[2,1,0,3], ['c','b','a','d']]
columns.forEach(sort(columns[0]))
//each column now sorted according to the first one
//columns == [ [0,1,2,3], ['a','b','c','d'] ]
```

## exports
* named: `import {sort} from 'array-order'`
* default: `import rank from 'array-order/rank.js'`

## sort order
the **sort** factory can take an additional compare function to change the sort order: `(ref:Array [,compare]) => (a:Array) => a`
* **undefined** increasing numeric order
* **any negative number** decreasing numeric order
* **a normal compare function** just like Array.prototype.sort: `(a, b) => a - b`

## other utilities
the following other in-place utilities are needed internally and are also available
* `array-order/swap.js` in place swap of 2 items `(a:Array, i:number, j:number) => a`
* `array-order/shift.js` in place left-swap from i to j `(a:Array, i:number, j:number) => a`

## License

[MIT](http://www.opensource.org/licenses/MIT) © [Hugo Villeneuve](https://github.com/hville)
