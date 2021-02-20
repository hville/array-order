export default function(n, r=1) {
  while (n > 0) r *= n--
  return r
}
