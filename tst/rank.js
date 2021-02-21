import t from 'assert-op'
import sequence from '../util/sequence.js'
import shuffle from '../util/shuffle.js'
import rank from '../rank.js'

t('rank', a=>{
	for (let i=1; i<10; ++i) {
		const seq = sequence(i),
					ref = shuffle(seq, [])
		a('{===}', rank(ref), ref)
		a('{===}', rank(ref, 1), ref)
		a('{===}', rank(ref, (a,b)=>a-b), ref)
	}
})
