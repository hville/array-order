import sequence from '../sequence.js'
import heap from '../heap.js'

// testing utils
function factorial(n) {
	return n < 2 ? n : n * factorial(n-1)
}
function same(arr,ref) {
	for (var i=0; i<arr.length; ++i) if (arr[i] !== ref[i]) throw Error(arr[i] + ' != ' + ref[i] + ' at ' + i)
}
export default function(algo, size) {
	var n = factorial(size),
			seq = sequence(size),
			perm = heap(seq.slice())
	for (var i=0; i<n; ++i) {
		var ref = perm()
		sequence(seq) //reset
		algo(ref, seq) //seq reordered to match ref
		same(ref, seq)
	}
}
