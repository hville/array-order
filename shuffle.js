import swap from './swap.js'
/**
 * random shuffling
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 *
 * @example
 * 	const src = [1, 0, 2],
 * 				tgt = shuffle(src) // new shuffled array, src unchanged
 * shuffle(src, src) // src is also shuffled in place
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
			let i = Math.floor(Math.random() * (j+1))
			if (i !== j) tgt[j] = tgt[i]
			tgt[i] = src[j]
		}
		return tgt
	}
	// in-place
	let n = (src.length)
	while (n) swap( src, Math.floor(Math.random() * n), --n)
	return src
}
