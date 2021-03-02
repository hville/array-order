/**
 * Shift 2 array indices in place
 * @example
 * 	const arr = [1, 0, 2]
 * 	swap(arr, 0, 1) // arr is now [0, 1, 2]
 *
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
export default function(a, i, j) {
	if (i !== j) {
		let t = a[i]
		a[i] = a[j]
		a[j] = t
	}
	return a
}
