const User = require ("../models/User");

module.exports = {
    async store(req,res){
       // Instanciando (criando) novo user
       const userCreating = await User.create(req.body);

       // Retornando cód. de created (201) e o .json do user criado
       return res.status(201).json(userCreating);
    },
    async index(req, res){
        // Buscando todos os users
        const users = await User.find();

        return res.json(users);
    },
    async show(req, res){
        //Buscando user pelo id
        const userShowing = await User.findById(req.params.id);

        return res.json(userShowing);
    },
    async update(req,res){
        //Buscando pelo id e atualizando
        const userUpdating = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(userUpdating);
    },
    async remove(req,res){
        //Buscando pelo id e removendo
        await User.findByIdAndRemove(req.params.id);
        return res.status(204).send();
    }
};