import sequence from './sequence.js'
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
		algo(seq, ref) //seq reordered to match ref
		same(seq, ref)
	}
}

//order(mix, seq) => mix (unchanged)

//order(seq, mix) => mix (mutated to match mix)
//order(mix, mix) => xim
//order(xim, mix) => seq

//order(xim, xim) => mix
//order(mix, xim) => seq
