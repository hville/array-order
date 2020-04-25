import shift from './shift.js'
import swap from './swap.js'

/**
 * In place mutation to generate all permutations of a source array
 * heap algorithm: most efficient permutation generating algorithm (fewest swaps)
 * @param {Array} a source array to be mutated
 * @return {function():Array} mutation generating function
 */
export default function(a) {
	var n = a.length,
			c = new Uint16Array(n),
			i = 0
	return function() {
		while (c[i] >= i) {
			c[i] = 0
			if (++i===n) { // reset to the initial source sequence
				if (!(n&1)) { //even sources require more magic
					swap(a, 0, n-2)
					shift(a, 1, n-2)
				}
				swap(a, 0, n-1)
				i=0
				return a //same as the initial sequence
			}
		}
		swap(a, i, i&1 ? c[i] : 0)
		++c[i]
		i = 0
		return a
	}
}
