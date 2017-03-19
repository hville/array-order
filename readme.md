<!-- markdownlint-disable MD004 MD007 MD010 MD012 MD041 MD022 MD024 MD032 MD036 -->

# array-order

*sort an array in-place to a preset order. All in place, no intermediate structures created*

```javascript
var arrayOrder = require('array-order'),
    order = [2,1,0,3]

arrayOrder([2,1,0,3], order)         // [0,1,2,3]
arrayOrder(['c','b','a','d'], order) // ['a','b','c','d']
```

The function will throw if the lengths don't match or if the order contains duplicate (`[0,2,0]`) or invalid (`[9,'a',3]`) indices

## License

[MIT](http://www.opensource.org/licenses/MIT) © [Hugo Villeneuve](https://github.com/hville)
