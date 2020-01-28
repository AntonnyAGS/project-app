const List = require ("../models/List");


module.exports = {
    async index(req,res){
        List.create({
            name: "Amigo Secreto", 
            user: "5e30c06f3b7a8e2648065da9",
            content: ["Camisa Adidas", "Tênis Nike"]
        });
        return res.send("Olá mundo");
    }
};