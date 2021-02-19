import t from 'assert-op'
import flip from '../flip.js'
import sequence from '../sequence.js'
import shuffle from '../shuffle.js'

t('flip-to', a=>{
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq)
		a('{===}', flip(flip(ref,[]),[]), ref)
	}
})
t('flip-in', a=>{
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq)
		a('{===}', flip(flip(ref.slice())), ref)
	}
})
