import rank from './rank.js'

export default function(ref, dir) {
	var seq = [],
			i = 0
	while (i<ref.length) seq[i] = i++
	seq.sort(
		dir < 0 ? function(a,b) { return ref[b]-ref[a] }
		: typeof dir === 'function' ? function(a,b) { return dir(ref[a], ref[b]) }
		: function(a,b) { return ref[a]-ref[b] }
	)
	return rank.bind(null,seq)
}
