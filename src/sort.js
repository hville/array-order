import rank from '../order.js'
import pick from '../pick.js'

export default function(ref, dir) {
	return pick.bind(null,rank(ref, dir))
}
