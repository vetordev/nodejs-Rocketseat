const mongoose = require('mongoose');

const Product = mongoose.model('Product');


module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        //query => parâmetro get
        const products = await Product.paginate({}, {page, limit: 10 });
        // await => próxima linha só será executada depois de fazer a busca no banco de dados
        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body);
        
        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        //new: true => retorna o produto após o update

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
        //apenas retorna uma resposta de sucesso

    }
     
}