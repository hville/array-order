<!-- markdownlint-disable MD004 MD007 MD010 MD012 MD041 MD022 MD024 MD032 MD036 -->

# array-order

*sort an array in-place to a preset order. All in place, no intermediate structures created*

## example

```javascript
var arrayOrder = require('array-order'),
    order = [2,1,0,3]

arrayOrder([2,1,0,3], order)         // [0,1,2,3]
arrayOrder(['c','b','a','d'], order) // ['a','b','c','d']
```

## other exported utils

the following are needed for testing and are also available

* `array-order/heap.js` creates a function that generates every permutations `(a:Array) => () => a:Array`
* `array-order/swap.js` in place swap of 2 items `(a:Array, i:number, j:number) => a:Array`
* `array-order/shift.js` in place left-swap from i to j `(a:Array, i:number, j:number) => a:Array`

## License

[MIT](http://www.opensource.org/licenses/MIT) © [Hugo Villeneuve](https://github.com/hville)
