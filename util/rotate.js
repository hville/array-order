/**
 * Rotate <=-/+=>
 * jugling algorithm
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 * @param {ArrayLike} src
 * @param {number} dir
 * @param {number} [n]
 * @return {ArrayLike}
 */
export default function(src, dir=-1, n=src.length) {
	const m = dir > 0 ? dir : n+dir,
				d = n - m
  for (let i=0; i<gcd(d,n); ++i) {
    const t = src[i]
		let j = i
    while(true) {
      const k = j>=m ? j-m : j+d
      if (k === i) break
      src[j] = src[k]
      j = k
    }
    src[j] = t
  }
	return src
}
function gcd(a, b){
	return !b ? a : gcd(b, a%b)
}
/**
 * In-place left-shift
 * @param {ArrayLike} a
 * @param {number} [n]
 */
export function left(a, n=a.length) {
	const t = a[0],
				j = n-1
	let i=0
	while(i<j) a[i]=a[++i]
	a[j] = t
	return a
}
/**
 * In-place right-shift
 * @param {ArrayLike} a
 * @param {number} [n]
 */
export function right(a, n=a.length) {
	let j = n-1
	const t = a[j]
	while(j) a[j]=a[--j]
	a[j] = t
	return a
}
