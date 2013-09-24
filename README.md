two-product
===========
Computes the product of two floating point numbers as a 2-term nonoverlapping increasing sequence.

## Install

		npm install two-product
		
## Example

```javascript
var twoProduct = require("two-product")

var seq = twoProduct(1e32-1, 1e13+1)
```

## API

### `require("two-product")(a, b[, result])`
Multiplies `a` and `b` and returns the product as a non-overlapping sequence.  `result` is an optional length 2 array that stores the result.

## Credits
Based on JRS' 