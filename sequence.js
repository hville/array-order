// testing utils
export default function(dim) {
	var seq = dim.length ? dim : [],
			n = dim.length || dim,
			i = 0
	while (i<n) seq[i] = i++
	return seq
}
