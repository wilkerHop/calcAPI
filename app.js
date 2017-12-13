let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendStatus(404)
})
 
var calc = require('./routes/calc');
app.use('/', calc);

app.listen(process.env.PORT || 3000, () => {
	var x = {};
	x.port = process.env.PORT || 3000;
	console.log('running', x.port)
})