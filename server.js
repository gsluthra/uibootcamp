var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log('Server started at 3000');
})

//For JS, CSS mention folder
app.use(express.static('public'));


app.get("/", function(request, response){
	response.render('index');
})

// For Jade
var path = require('path');
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');

