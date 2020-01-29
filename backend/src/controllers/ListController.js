const List = require ("../models/List");


module.exports = {
    async store(req,res){
        // Instanciando e criando lista
        const listCreating = await List.create(req.body);

        // Retornando cód de criado
        res.status(201).json(listCreating);
    },
    async index(req,res){
        const lists = await List.find();
        res.json(lists);
    },
    async show(req,res){
        const listShowing = await List.findById(req.params.id);
        res.json(listShowing);
    },
    async update(req,res){
        // Buscando um e atualizando
        const listUpdating = await List.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(listUpdating);
    },
    async remove(req,res){
        // Buscando e deletando 
        await List.findByIdAndRemove(req.params.id);
        res.status(204).send();
    }
};