let router = require('express').Router();

router.get('/:calc/:x/:y', (req, res) => {
	console.log(req.params)

	var x = parseFloat(req.params.x)
	var y = parseFloat(req.params.y)
	var calc = req.params.calc

	if (isNaN(x) || isNaN(y)) {
		return res.send({
			err: 'Params given are not number type'
		})
	}

	var result = new Number();
	switch (calc) {
		case '+':
		case 'soma':
		case 'plus':
		case 'add':
			result = x + y;
			break;
		case '-':
		case 'sub':
		case 'minus':
		case 'less':
			result = x - y;
			break;
		case '*':
		case 'multi':
		case 'mult':
		case 'times':
			result = x * y;
			break;
		case ':':
		case 'div':
		case 'take':
		case 'split':
			result = x / y;
			break;
		default:
			return res.send({
				err: 'Operation not known'
			})
	}
	res.send({
		result
	})
})

module.exports = router;