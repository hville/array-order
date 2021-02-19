/**
 * Array sequence of 0..(N-1) from given length N or target Array
 * @example
 * 	const sorted = sequence(3),       // [0,1,2]
 * 				filled = sequence(Array(3)) // [0,1,2]
 * 
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {number|Array<number>} dim
 * @return {Array<number>}
 */
export default function(dim) {
	const seq = dim.length ? dim : [],
				n = dim.length || dim
	for (let i=0; i<n; ++i) seq[i] = i
	return seq
}
