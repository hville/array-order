/**
 * Shift 2 array indices in place
 * @param {Array} a
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
export default function(a, i, j) {
	var t = a[i]
	a[i] = a[j]
	a[j] = t
}
