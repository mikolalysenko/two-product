"use strict"

module.exports = twoProduct

var HALF_DOUBLE = (1<<26) + 1

function twoProduct(a, b, result) {
	var x = a * b

	var c = HALF_DOUBLE * a
	var abig = c - a
	var ahi = c - abig
	var alo = a - ahi
	
	var d = HALF_DOUBLE * b
	var bbig = d - b
	var bhi = d - bbig
	var blo = b - bhi
	
	var err1 = x - (ahi * bhi)
	var err2 = err1 - (alo * bhi)
	var err3 = err2 - (ahi * blo)
	
	var y = alo * blo - err3

	if(result) {
		result[0] = y || 0.0
		result[1] = x || 0.0
		return result
	}
	
	return [ y || 0.0, x || 0.0 	]
}