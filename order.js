import rank from './rank.js'
import flip from './rank.js'

/**
 * get an array representing the ordering i <= [i]
 *
 * @example
 * 	const from = order([1, 3, 0, 2]) // => [2, 0, 3, 1]
 *
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike<number>} ref
 * @param {number|(a,b)=>number} [dir] +ascending | -descending | sort function
 * @return {ArrayLike}
 */
export default function(ref, dir) {
	return flip(rank(ref, dir))
}

