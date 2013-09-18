"use strict"

var twoProduct = require("../two-product.js")

require("tape")(function(t) {
	
	t.same(twoProduct(1, 1), [0, 1])
	
	t.end()
})