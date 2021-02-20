import t from 'assert-op'
import flip from '../flip.js'
//import sequence from '../sequence.js'
import shuffle from '../util/shuffle.js'
import derange from '../src/derange.js'
import permute from '../util/permute.js'

t('flip-to', a=>{
	const fcn = permute(4,3)
	for (let i=0; i<9; ++i) console.log(fcn())
})
