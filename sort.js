/**
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 */
import order from './order.js'
import pick from './pick.js'

/**
 * create a sorting function to sort multiple arrays the same way
 *
 * @example
 * 	const names = ['bob', 'joe', 'eve'],
 *        ages =  [   32,    19,   25 ],
 *        sorter = sort(ages)
 * sorter(names) // now ['joe', 'eve', 'bob']
 *
 * @param {ArrayLike} ref
 * @param {number|(a,b)=>number} [dir] +ascending | -descending | sort function
 * @return {(src:ArrayLike [,tgt:ArrayLike])=>ArrayLike}
 */

export default function(ref, dir) {
	return pick.bind(null,order(ref, dir))
}
