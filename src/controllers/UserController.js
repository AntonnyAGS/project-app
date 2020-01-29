const User = require ("../models/User");
const mongoose = require ("mongoose");

module.exports = {
    async store(req,res){
       // Instanciando (criando) novo user
       const user = await User.create(req.body);

       // Retornando cód. de created (201) e o .json do user criado
       return res.status(201).json(user);
       
    },
    async index(req, res){
        // Buscando todos os users
        const users = await User.find();

        return res.json(users);
    },
    async show(req, res){
        //Buscando user pelo id
        const user = await User.findById(req.params.id);

        return res.json(user);
    },
    async update(req,res){
        //Buscando pelo id e atualizando
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(user);
    },
    async remove(req,res){
        //Buscando pelo id e removendo
        await User.findByIdAndRemove(req.params.id);
        return res.status(204).send();
    }
};