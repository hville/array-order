import t from 'assert-op'
import {sequence, shuffle, rank} from '../index.js'

t('rank', a=>{
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq, [])
		a('{===}', rank(ref), ref)
		a('{===}', rank(ref, 1), ref)
		a('{===}', rank(ref, (a,b)=>a-b), ref)
	}
})
