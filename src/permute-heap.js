import swap from '../swap.js'

/**
 * In place mutation to generate all permutations of a source array
 * heap algorithm: most efficient permutation generating algorithm (fewest swaps)
 *
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike} a source array to be mutated
 * @return {function():Array} mutation generating function
 */
export default function(a) {
	const n = a.length,
				c = new Uint16Array(n) //to avoid setting all to 0...
	let i= 0
	while (i<n) c[i++] = 0
	return function() {
		i = 0
		while (c[i] >= i) {
			c[i] = 0
			if (++i===n) { // reset to the initial source sequence
				if (!(n&1)) { //even sources require more magic
					swap(a, 0, n-2)
					left(a, 1, n-2)
				}
				swap(a, 0, n-1)
				return a //same as the initial sequence
			}
		}
		swap(a, i, i&1 ? c[i] : 0)
		++c[i]
		return a
	}
}
/**
 * In-place left-shift of array items from i to j
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {Array} a
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
export function left(a, i=0, j=a.length-1) {
	if (j>i) {
		const t = a[i]
		while(i<j) a[i]=a[++i]
		a[j] = t
	}
}
