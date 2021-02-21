/**
 * @param {number} n number
 * @param {number} [k] denominator for n!/k!
 * @return {number}
 */
export default function(n, k=0) {
	let r = 1
  while (n > k) r *= n--
  return r
}
