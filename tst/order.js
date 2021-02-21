import t from 'assert-op'
import sequence from '../util/sequence.js'
import shuffle from '../util/shuffle.js'
import order from '../order.js'

t('order +', a => {
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq, []),
					ord = order(ref, 1)
		for (let i=1; i<ord.length; ++i)
			a('<', ref[ord[i-1]], ref[ord[i]])
	}
})
t('order (a,b)=>a-b', a => {
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq, []),
					ord = order(ref, (a,b)=>a-b)
		for (let i=1; i<ord.length; ++i)
			a('<', ref[ord[i-1]], ref[ord[i]])
	}
})
t('order (a,b)=>b-a', a => {
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq, []),
					ord = order(ref, (a,b)=>b-a)
		for (let i=1; i<ord.length; ++i)
			a('>', ref[ord[i-1]], ref[ord[i]])
	}
})
t('order -', a => {
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq, []),
					ord = order(ref, -1)
		for (let i=1; i<ord.length; ++i)
			a('>', ref[ord[i-1]], ref[ord[i]])
	}
})
