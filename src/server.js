const express = require ("express");
const mongoose = require ("mongoose");
const routes = require ("./routes");

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//Roteando aplicação
app.use(routes);



app.listen(3001);

