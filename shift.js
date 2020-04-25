/**
 * In-place left-shift of array items from i to j
 * @param {Array} a
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
export default function(a, i, j) {
	if (j>i) {
		var t = a[i]
		while(i<j) a[i]=a[++i]
		a[j] = t
	}
}
