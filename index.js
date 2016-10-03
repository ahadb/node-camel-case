/**
 * Expose `camelCase`
 */

exports = module.exports = camelCase;

/**
 * camelCase: `str` to output
 * @param {String} str
 * @api public
 */

function camelCase(str) {
	str = str || '';
	if (str.length <= 0) {
		return new TypeError('First argument has to be a string') ;
	}
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
		return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
	}).replace(/\s+/g, '');
}
