import swap from './swap.js'
/**
 * in-place random single cycle derangement
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Sattolo's_algorithm
 *
 * @example
 * 	const arr = [1, 0, 2]
 * 	sattolo(arr) // arr is now deranged
 *
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {Array} array
 * @return {Array}
 */
export default function(array) {
	let n = arr.length
	while (n) swap( arr, --n, Math.floor(Math.random() * n))
	return arr
}
