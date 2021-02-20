import permute from '../util/permute.js'
import sequence from '../util/sequence.js'


/**
 * Steinhaus-Johnson-Trotter with Even speedup
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {number|ArrayLike<number>} seq
 * @return {ArrayLike<number>}
 */
export default function(seq) {
	const pos = seq.length ? seq : sequence(seq),
				N = pos.length,
				prm = permute(pos, N-1)
	let i = N
	return function () {
		switch (--i) {
			case 0:
				left(left(left(pos))) //back to pre-shift
				prm()
				i = N
				return pos
			case 2:
				//special rot
				return left(left(pos))
			case 1:
				//special rot
				return right(pos)
			default:
				return left(pos)
		}
	}
}
/**
 * In-place left-shift
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike} a
 */
export function left(a) {
	const t = a[0],
				j = a.length-1
	let i=0
	while(i<j) a[i]=a[++i]
	a[j] = t
	return a
}
/**
 * In-place right-shift
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike} a
 */
export function right(a) {
	let j = a.length-1
	const t = a[j]
	while(j) a[j]=a[--j]
	a[j] = t
	return a
}
/**
 * In-place rotate <=-/+=>
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike} a
 */
export function rotate(a, p) {
	if (p>0) {
		let j = a.length-1
		const t = a[j]
		while(j) a[j]=a[--j]
		a[j] = t
		return a
	}
}
