const db = require('../db');

const Product = {

    getAllProducts: (callback) => {
        db.query('SELECT * FROM products', callback);
    },

    getProductById: (id, callback) => {
        db.query('SELECT * FROM products WHERE id = ?', [id], callback);
    },

    addProduct: (data, callback) => {
        db.query('INSERT INTO products SET ?', data, callback);
    },

    updateProduct: (id, data, callback) => {
        db.query('UPDATE products SET ? WHERE id = ?', [data, id], callback);
    },

    deleteProduct: (id, callback) => {
        db.query('DELETE FROM products WHERE id = ?', [id], callback);
    }

};

module.exports = Product;