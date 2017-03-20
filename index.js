module.exports = sort

function sort(array, order) {
	var len = order.length
	if (array.length !== len) throw Error('length mismatch' + array.length + ' !== ' + len)

	// iterate unmarked indices
	for (var i=0; i<len; ++i) {
		var b = order[i]
		if (b >= 0) {
			var tmp = array[i],
					a = i
			while(order[b] >= 0) {                 // not visited
				b = order[a]
				order[a] ^= -1                       // mark
				if (a !== b) array[a] = b === i ? tmp : array[a = b]  // switcharoo
			}
			if (b !== i) throw Error('invalid of duplicate order index')
		}
	}
	// remove marks
	for (var j=0; j<len; ++j) order[j] ^= -1
	return array
}

