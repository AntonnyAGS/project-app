const List = require ("../models/List");

module.exports = {
    async store(req, res){
        // Recebendo id e buscando pelo ID
        const id = req.params.id;
        const list = await List.findById(id);

        // Recebendo informações do novo item
        const {name, url} = req.body; 

        // Adicionando novo elemento ao vetor
        list.content.push({name, url});

        // Salvando alterações
        await list.save();

        return res.json(list);
    },
    async remove(req,res){
        // Recebendo id e buscando pelo ID
        const id = req.params.id;
        const list = await List.findById(id);

        // Recebendo informações do novo item
        const {_id, name, url} = req.body; 
        
        // Descobrindo posição do elemento ao vetor
        const array = list.content;
    
        let itemSelected = '';
        // Percorrendo o array e identificando qual item é semelhante ao enviado via Post..
        // Aqui há uma limitação.. O Javascript entende que um elemento {id: 1, name: 'Maria'} é diferente
        // de outro {id: 1, name: 'Maria'} por isso a adaptação. 
        array.forEach((item) => item._id == _id ? itemSelected = item : null);
        let position = array.indexOf(itemSelected);

        list.content.splice(position,1);
        await list.save();
        return res.json(list);
    }
}