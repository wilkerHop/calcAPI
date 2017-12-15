let router = require('express').Router();

router.get('/:calc/:x/:y', (req, res) => {
	console.log(req.params)

	var z = {};

	if (req.params.x.replace(/\D/g,'').length > 16 ||
		req.params.y.replace(/\D/g,'').length > 16)
		z.wrn = 'Params given are too high, the result is not going to be too accurate.'

	var x = parseFloat(req.params.x.replace(/\D/g,''))
	var y = parseFloat(req.params.y.replace(/\D/g,''))
	var calc = req.params.calc

	console.log(x)
	console.log(y)

	if (isNaN(x) || isNaN(y)) {
		return res.send({
			err: 'Params given are not number type.'
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
			z.err = 'Operation \'' + calc + '\' not known.';
	}
	//	console.log
	res.send(z)
})
router.get('/long/:calc/:x/:y', (req, res) => {
	console.log(req.params)

	var BigNumber = require('bignumber.js');
	var z = {};

	if (isNaN(parseFloat(req.params.x)) || isNaN(parseFloat(req.params.y))) {
		return res.send({
			err: 'Params given are not number type.'
		})
	}

	var x = new BigNumber(req.params.x.replace(/\D/g,''))
	var y = new BigNumber(req.params.y.replace(/\D/g,''))
	var aux = new BigNumber(1)
	var calc = req.params.calc

	console.log('x: ', x.length)
	console.log('y: ', y.length)

	switch (calc) {
		case '+':
		case 'soma':
		case 'plus':
		case 'add':
			z.wrn = 'The result is a string. You shold parse it.'
			z.result = x.plus(y); // + y;
			break;
		case '-':
		case 'sub':
		case 'menos':
		case 'minus':
		case 'less':
			z.wrn = 'The result is a string. You shold parse it.'
			z.result = x.sub(y);
			break;
		case '*':
		case 'x':
		case 'mul':
		case 'mult':
		case 'times':
			z.wrn = 'The result is a string. You shold parse it.'
			z.result = x.mul(y);
			break;
		case ':':
		case 'div':
		case 'take':
		case 'split':
			z.wrn = 'The result is a string. You shold parse it.'
			z.result = x.div(y);
			break;
		case '√':
		case 'root':
		case 'raiz':
			z.wrn = 'The result is a string. You shold parse it.'
			z.result = x.pow(x, aux.div(y));
			break;
		case '^':
		case 'exp':
		case 'elev':
			z.wrn = 'The result is a string. You shold parse it.'
			z.result = x.pow(y);
			break;
		default:
			z.err = 'Operation \'' + calc + '\' not known.';
	}
	// console.log(z)
	res.send(z)
})

module.exports = router;