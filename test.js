var t = require('cotest'),
		s = require('./index')

t('sort - valid order', function() {
	t('{==}', s(['c','b','a','d'], [2,1,0,3]), ['a','b','c','d'])
	t('{==}', s(['c','a','d','b'], [1,3,0,2]), ['a','b','c','d'])
	t('{==}', s(['c','d','a','b'], [2,3,0,1]), ['a','b','c','d'])
	t('{==}', s(['d','a','b','c'], [1,2,3,0]), ['a','b','c','d'])
	t('{==}', s(['b','a','c','e','d'], [1,0,2,4,3]), ['a','b','c','d','e'])
	t('{==}', s(['b','e','c','a','d'], [3,0,2,4,1]), ['a','b','c','d','e'])
})
t('sort - Error: duplicate indices', function() {
	t('catch', function(){s(['b','a','c','d'], [1,0,1,3])}, /index/)
	t('catch', function() {s(['b','c','a','d'], [3,0,2,3])}, /index/)
})
t('sort - Error: invalid indices', function() {
	t('catch', function(){s(['b','a','c','d'], [1,0,7,3])}, /index/)
	t('catch', function() {s(['b','c','a','d'], [2,0,'z',3])}, /index/)
})
t('sort - multiple', function() {
	t('{==}', s(s([2,1,0,3], [2,1,0,3]), [2,1,0,3]), [2,1,0,3])
})
