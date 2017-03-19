module.exports = sort

function sort(array, order) {
	var len = order.length
	if (array.length !== len) throw Error('length mismatch' + array.length + ' !== ' + len)

	// iterate unmarked indices
	for (var i=0; i<len; ++i) if (order[i] >= 0) {
		var tmp = array[i],
				ptr = i,
				nxt = order[i]

		order[ptr] ^= -1                 // mark
		while(order[nxt] >= 0) {         // not visited
			array[ptr] = array[ptr = nxt]  // switcharoo
			nxt = order[ptr]
			order[ptr] ^= -1               // mark
		}
		if (nxt === i) array[ptr] = tmp
		else throw Error('invalid of duplicate order index')
	}
	// remove marks
	for (var j=0; j<len; ++j) order[j] ^= -1
	return array
}
