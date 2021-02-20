import t from 'assert-op'
import flip from '../flip.js'
import shuffle from '../util/shuffle.js'
import derange from '../src/derange.js'

t('flip-to', a=>{
	const fcn = derange(4)
	for (let i=0; i<9; ++i) console.log(fcn())
})
