import {sort} from 'array-order'

function isinc(arr) {
	for (var i=0; i<arr.length-1;) if (arr[i] > arr[++i]) throw Error(arr.join(''))
}
function isdec(arr) {
	for (var i=0; i<arr.length-1;) if (arr[i] < arr[++i]) throw Error(arr.join(''))
}
function test(arr, dir, chk) {
	chk( sort(arr, dir)(arr.slice()) )
}

test([0,1,2,3,4], void 0, isinc)
test([0,1,2,3,4], +1, isinc)
test([0,1,2,3,4], (a,b)=>a-b, isinc)

test([4,3,2,1,0], void 0, isinc)
test([4,0,2,1,3], +1, isinc)
test([4,0,2,1,3], (a,b)=>a-b, isinc)

test([4,3,2,1,0], -1, isdec)
test([4,0,2,1,3], -1, isdec)
test([0,1,2,3,4], (a,b)=>b-a, isdec)
test([4,0,2,1,3], (a,b)=>b-a, isdec)
