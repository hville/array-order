/**
 * in-place random single cycle derangement
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Sattolo's_algorithm
 *
 * @example
 * 	const arr = [1, 0, 2]
 * 	sattolo(arr) // arr is now deranged
 *
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike} src
 * @param {ArrayLike} [tgt]
 * @return {ArrayLike}
 */
export default function(src, tgt) {
	if (tgt) { // inside-out
		tgt[0] = src[0]
		for (let j=1; j<src.length; ++j) {
			let i = Math.floor(Math.random() * j)
			if (i !== j) tgt[j] = tgt[i]
			tgt[i] = src[j]
		}
		return tgt
	}
	// in-place
	let j = src.length
	while (--j) {
		const i = Math.floor(Math.random() * j), // i<j always deranged
					t = src[i]
		src[i] = src[j]
		src[j] = t
	}
	return src
}
