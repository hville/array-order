import t from 'assert-op'
import {flip, sequence, shuffle} from '../index.js'

t('flip-to', a=>{
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq, [])
		a('{===}', flip(seq, []), seq)
		a('{===}', flip(flip(ref,[]),[]), ref)
	}
})
t('flip-in', a=>{
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq.slice())
		a('{===}', flip(seq.slice()), seq)
		a('{===}', flip(flip(ref.slice())), ref)
	}
})
