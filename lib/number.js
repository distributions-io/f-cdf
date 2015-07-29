'use strict';

// MODULES //

var betainc = require( 'compute-betainc/lib/numbers.js' );


// CDF //

/**
* FUNCTION: cdf( x, d1, d2 )
*	Evaluates the cumulative distribution function (CDF) for a F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} d1 - numerator degrees of freedom
* @param {Number} d2 - denominator degrees of freedom
* @returns {Number} evaluated CDF
*/
function cdf( x, d1, d2 ) {
	var p;
	if ( d1 * x > d2 ) {
		p = betainc.lower( (d1*x)/(d2+d1*x), d1 / 2, d2 / 2 );
	} else {
		p = betainc.upper( d2/(d2+d1*x), d2 / 2, d1 / 2 );
	}
	return p;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
