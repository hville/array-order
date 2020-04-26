export default function(seq, arr) {
	var len = seq.length
	for (var i=0; i<len; ++i) {
		var j = seq[i]
		while (j<i) j = seq[j]
		if (i!==j) {
			var t = arr[i]
			arr[i] = arr[j]
			arr[j] = t
		}
	}
	if (Array.isArray(arr)) arr.length = seq.length //resize if possible
	return arr
}
