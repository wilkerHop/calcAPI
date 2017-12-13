let router = require('express').Router();

router.get('/:calc/:x/:y', (req, res) => {
	console.log(req.params)

	var z = {};

	// console.log('x int: ', req.params.x.split('.')[0].length)
	// console.log('x dot: ', req.params.x.split('.')[1].length)
	// console.log('y int: ', req.params.y.split('.')[0].length)
	// console.log('y dot: ', req.params.y.split('.')[1].length)

	// console.log(req.params.x.split('.')[0].length / req.params.x.split('.')[1].length)
	// console.log(req.params.y.split('.')[0].length / req.params.y.split('.')[1].length)

	if (req.params.x.length > 16 ||
		req.params.y.length > 16)
		z.err = 'Params given are too high, the result is not going to be too accurate'

	var x = parseFloat(req.params.x)
	var y = parseFloat(req.params.y)
	var calc = req.params.calc

	console.log(x)
	console.log(y)

	if (isNaN(x) || isNaN(y)) {
		return res.send({
			err: 'Params given are not number type'
		})
	}

	switch (calc) {
		case '+':
		case 'soma':
		case 'plus':
		case 'add':
			z.result = x + y;
			break;
		case '-':
		case 'sub':
		case 'menos':
		case 'minus':
		case 'less':
			z.result = x - y;
			break;
		case '*':
		case 'multi':
		case 'mult':
		case 'times':
			z.result = x * y;
			break;
		case ':':
		case 'div':
		case 'take':
		case 'split':
			z.result = x / y;
			break;
		case '√':
		case 'root':
		case 'raiz':
			z.result = Math.pow(x, 1 / y);
			break;
		case '^':
		case 'exp':
			z.result = Math.pow(x, y);
			break;
		default:
			z.err = 'Operation \'' + calc + '\' not known';
	}
	console.log
	res.send(z)
})

module.exports = router;