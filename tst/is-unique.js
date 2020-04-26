import sequence from '../sequence.js'

// testing utils
function factorial(n) {
	return n < 2 ? n : n * factorial(n-1)
}
function unique(max) {
	var map = {},
			n = 0
	return function(arr) {
		n++
		var id = arr.join('')
		if (map[id] === undefined) map[id] = 1
		else if (++map[id] > max) throw Error('seq: ' + id + ' call: ' + n)
	}
}
export default function(algo, size, reps) {
	var test = unique(reps),
			n = reps * factorial(size),
			seq = sequence(size),
			perm = algo(seq)
	for (var i=0; i<n; ++i) test(perm())
}
