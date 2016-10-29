var exp = require('express');
var app = exp();
var routes = require('./routes/routes.js');

app.set('view engine', 'ejs');
app.use(exp.static(__dirname+'/public'));


app.get('/sweden', routes.sweden);
app.get('/amsterdam', routes.amsterdam);
app.get('/paris', routes.paris);
//app.get('/login', routes.login);


var port = process.env.PORT || 3000;
app.listen(port, function(){

    console.log("Http server is now listening on port "+port); 
})
