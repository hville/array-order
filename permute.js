/**
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 */
import sequence from './sequence.js'
import swap from './swap.js'

/**
 * Steinhaus-Johnson-Trotter with Even speedup
 * @param {number|ArrayLike} seq if number, generates a sequence, else, in-place permutation
 * @param {number} [len] if only part of the array needs to be permuted
 * @return {ArrayLike}
 */
export default function(seq, len) {
	const pos = seq.length ? seq : sequence(seq),
				N = len ?? pos.length,
				dir = Array(N).fill(-1)
	/* will generate N!-1 results */
	return function () {
		let iM = -1 // largest mobile @ iM
		for (let i=0; i<N; ++i) if (
			( pos[i] > pos[i + dir[i]]) /* isMobile */
			&& !( pos[i] < pos[iM]) /* isMax */
		) iM = i

		if (iM<0) {
			dir.fill(-1)
			swap(pos, 0, 1)
		} else {
			let jM = iM + dir[iM]
			swap(pos, iM, jM)
			swap(dir, iM, jM)
			for (let i=0; i<N; ++i) if (pos[i] > pos[jM]) dir[i] = -dir[i]
		}
		return pos
	}
}
