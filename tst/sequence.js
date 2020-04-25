// testing utils
export default function(dim) {
	var seq = dim.length ? dim : Array(dim),
			n = seq.length,
			i = 0
	while (i<n) seq[i] = i++
	return seq
}
