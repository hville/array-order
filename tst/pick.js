import pick from '../pick.js'
import flip from '../flip.js'
import sequence from '../util/sequence.js'
import shuffle from '../util/shuffle.js'
import t from 'assert-op'

t('pick-to', a => {
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					rnk = shuffle(seq, []),
					ord = flip(rnk, [])
		a('{===}', pick(ord, rnk, []), seq)
	}
})
t('pick-in', a => {
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					rnk = shuffle(seq.slice()),
					ord = flip(rnk.slice())
		a('{===}', pick(ord, rnk, []), seq)
	}
})
