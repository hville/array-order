/**
 * @typedef {Array|Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array} ArrayLike
 */
/**
 * Rotate <=-/+=>
 * @param {ArrayLike} src
 * @param {number} dir
 * @param {number} [n]
 * @return {ArrayLike}
 */
export default function(src, dir=-1, n=src.length) { //TODO different left or right to minimize d/n
	if (dir===1) return right(src, n) //TODO temp fix
	if (dir===-1) return left(src, n) //TODO temp fix
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
/**
 * In-place left-shift
 * @param {ArrayLike} a
 * @param {number} [n]
 */
function left(a, n=a.length) {
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
function right(a, n=a.length) {
	let j = n-1
	const t = a[j]
	while(j) a[j]=a[--j]
	a[j] = t
	return a
}
