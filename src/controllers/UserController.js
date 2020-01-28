const User = require ("../models/User");
const mongoose = require ("mongoose");

module.exports = {
    async index(req,res){
        User.create({
            name: "Antonny",
            email:"antonny.santos@etec.sp.gov.br"
        })
        return res.send("Olá");
    }
};