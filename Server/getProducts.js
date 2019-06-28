const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price){
    const items = products.filter(val => val.price >= parseInt(req.query.price));
    res.status(200).send(items)
}
    res.status(200).send(product)
};




module.exports =getProducts;