"use strict"

var twoProduct = require("../two-product.js")

require("tape")(function(t) {
	
	t.same(twoProduct(1, 1), [0, 1])
  t.same(twoProduct(Infinity, Infinity), [0,Infinity])
  t.same(twoProduct(Infinity,1), [0,Infinity])
  t.same(twoProduct(Infinity,0), [0,0])
  t.same(twoProduct(Infinity,-Infinity), [0,-Infinity])
	
	t.end()
})