const express = require ("express");
const mongoose = require ("mongoose");
const routes = require ("./routes");

//Iniciando o app
const app = express();
app.use(express.json());

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Roteando aplicação
app.use(routes);



app.listen(3001);

