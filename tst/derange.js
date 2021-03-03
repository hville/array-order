import t from 'assert-op'
import derange from '../util/derange.js'

t('uniquely deranged', a => {
	const set = new Set,
				fcn = derange(5)
	for (let i=0; i<120; ++i) {
		let val = fcn().join('')
		if (set.has(val)) throw Error('not unique')
		set.add(val)
	}
})
t('individualy deranged', a => {
	const fcn = derange(5)
	let last = fcn().slice()
	for (let i=0; i<119; ++i) {
		let val = fcn()
		for (let j=0; j<5; ++j) if (last[j] === val[j]) throw Error('not deranged enough')
		last = fcn().slice()
	}
})
