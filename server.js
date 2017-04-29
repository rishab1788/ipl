var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;



app.get('/first', function (req, res) {
	
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function (arg) {
	console.log("server is started");
});