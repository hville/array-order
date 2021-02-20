/**
 * Rotate <=-/+=>
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike} src
 * @param {number} dir
 * @param {number} [n]
 * @return {ArrayLike}
 */
export default function(src, dir=-1, n=src.length) { //TODO different left or right to minimize d/n
	const d = dir > 0 ? n-dir : -dir
  for (let i=0; i<gcd(d,n); ++i) {
    let temp = src[i],
				j = i
    while(true) {
      let k = j + d
      if (k >= n) k = k - n
      if (k == i) break
      src[j] = src[k]
      j = k
    }
    src[j] = temp
  }
	return src
}
function gcd(a, b){
	return !b ? a : gcd(b, a%b)
}
