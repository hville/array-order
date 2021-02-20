import t from 'assert-op'
import sequence from '../sequence.js'
import rotate from '../rotate.js'

t('left', a=> {
	for (let n=3; n<12; ++n) for (let d=0; d<n; ++d) {
		const seq = sequence(n, -d)
		rotate(seq, -d)
		a('===', seq[0], d)
		a('===', seq[1], (d+1)%n, seq)
	}
})
t('right', a=> {
	for (let n=3; n<12; ++n) for (let d=0; d<n; ++d) {
		const seq = sequence(n, -d)
		rotate(seq, d)
		a('===', seq[d], 0, seq)
	}
})
