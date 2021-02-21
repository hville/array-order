/**
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 */
import order from './order.js'
import flip from './flip.js'

/**
 * rank of source if sorted
 *
 * @example
 * 	const ranked = rank([11, 13, 10, 12]) // => [1, 3, 0, 2]
 *
 * @param {ArrayLike} ref
 * @param {number|(a,b)=>number} [dir] +ascending | -descending | sort function
 * @return {ArrayLike}
 */
export default function(ref, dir) {
	return flip(order(ref, dir))
}

