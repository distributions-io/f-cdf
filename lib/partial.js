'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( d1, d2 )
*	Partially applies numerator degrees of freedom `d1` and denominator degrees of freedom `d2` and returns a function for evaluating the cumulative distribution function (CDF) for a F distribution.
*
* @param {Number} d1 - numerator degrees of freedom
* @param {Number} d2 - denominator degrees of freedom
* @returns {Function} CDF
*/
function partial( d1, d2 ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a F distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
