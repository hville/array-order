/**
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 */
/**
 * flip values and indices : rank => order || order => rank
 *
 * @example
 * 	const abc = flip( [2,0,1] ) // ==> [1,2,0]
 *
 * @param {ArrayLike} src array to be fliped
 * @param {ArrayLike} [tgt] destination else inplace
 * @return {ArrayLike}
 */
export default function(src, tgt) {
	if (tgt) {
		for (let i=0; i<src.length; ++i) tgt[src[i]] = i
		return tgt
	}
	// in-place
	for (let i=0; i<src.length; ++i) if (src[i] >= 0) {
		let j=i,
				v=src[j]
		while (v != i) {
			const k = src[v]
			src[v] = ~j
			j = v
			v = k
		}
		src[i] = ~j
	}
	for (let i=0; i<src.length; ++i) src[i] ^= -1
	return src
}
