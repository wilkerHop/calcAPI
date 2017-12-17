let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendStatus(404)
})

app.use(cors({
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204,
	allowedHeaders: ['Origin', 'X-Requested-With', 'xx-access-token', 'Content-Type', 'Accept']
}))

var calc = require('./routes/calc');
app.use('/', calc);

app.listen(process.env.PORT || 3000, () => {
	var x = {};
	x.port = process.env.PORT || 3000;
	console.log('running', x.port)
})