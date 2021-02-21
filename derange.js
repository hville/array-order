import permute from './permute.js'
import sequence from './util/sequence.js'
import rotate from './util/rotate.js'

/**
 * Derangement
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {number|ArrayLike} seq
 * @return {ArrayLike}
 */
export default function(seq) {
	const pos = seq.length ? seq : sequence(seq),
				N = pos.length,
				prm = permute(pos, N-1)
	let i = N
	return function () {
		switch (--i) {
			case 0:
				rotate(pos, +3) //back to pre-shift
				prm()
				i = N
				return pos
			case 1:
				//special rot
				return rotate(pos, 1)
			case 2:
				//special rot
				return rotate(pos, -2)
			default:
				return rotate(pos, -1)
		}
	}
}
