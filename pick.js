/**
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 */

/**
 * reorder array based on given from positions `(ref:ArrayLike, src:Array) => Array`
 *
 * @example
 * 	const abc = pick( [2,0,1], ['b','c','a'] ) // ==> ['a','b','c']
 *
 * @param {ArrayLike} ref order to apply to the source array
 * @param {ArrayLike} src array to be ordered
 * @param {ArrayLike} [tgt] destination, inplace if absent
 * @return {ArrayLike}
 */
export default function(ref, src, tgt) {
	if (tgt) {
		for (let i=0; i<ref.length; ++i) tgt[i] = src[ref[i]]
		return tgt
	}
	// in-place
	for (let i=0; i<ref.length; ++i) {
		let k = ref[i]
		if (k === i) ref[i] ^= -1
		else if ( k > i ) { // new cycle to shift
			const tmp = src[i]
			let j = i
			do {
				ref[j] ^= -1
				src[j] = src[k]
				j = k
				k = ref[j]
			} while (k !== i)
			src[j] = tmp
			ref[j] ^= -1
		}
	}
	for (let i=0; i<ref.length; ++i) ref[i] ^= -1
	return src
}
