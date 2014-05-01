"use strict"

var twoProduct = require("../two-product.js")
var testOverlap = require("test-float-overlap")

require("tape")(function(t) {
  var testValues = [
    0, 
    -0,
    -1, 
    1,
    Math.pow(2, -52), 
    Math.pow(2, -53), 
    1.0-Math.pow(2, -53), 
    1.0+Math.pow(2, -52), 
    Math.pow(2,-500), 
    Math.pow(2, 500),
    2,
    0.5,
    3,
    1.5,
    1.2399519200255505e-149 ]
  for(var i=0; i<20; ++i) {
    testValues.push(Math.random())
    testValues.push(Math.random() * Math.pow(2, 1000 * Math.random() - 500))
  }

  for(var j=0; j<testValues.length; ++j) {
    var a = testValues[j]
    t.ok(a*a < Infinity, "check finite: " + a)
    t.same(twoProduct(0, a), [0,0], "multiply by 0")
    t.same(twoProduct(1, a), [0,a], "multiply by 1")
    t.same(twoProduct(-1, a), [0,-a], "multiply by -1")

    for(var k=0; k<testValues.length; ++k) {
      var b = testValues[k]

      var s = twoProduct(a, b)

      t.ok(!testOverlap(s[0], s[1]), "overlapping")
      t.ok(Math.abs(s[0]) <= Math.abs(s[1]), "increasing")
      t.equals(s[1], a*b, "approximation")

      var r = twoProduct(b, a)
      t.same(s, r, "commutativity")
    }
  }

  //Test expansion
  t.same(twoProduct(
    1.0 + Math.pow(2, -52), 
    1.0 + Math.pow(2, -52)),
    [Math.pow(2, -104), 1.0 + Math.pow(2, -51)], "test expansion") 

  t.end()
})