const Product = require('../models/productModel');

const fs = require('fs');

const path = require('path');

exports.index = (req, res) => {

    Product.getAllProducts((err, results) => {

        if (err) throw err;

        res.render('index', {
            products: results,
            success: req.query.success
        });

    });

};

exports.showAddForm = (req, res) => {

    res.render('addProduct');

};

exports.addProduct = (req, res) => {

    const data = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        image: req.file ? req.file.filename : null
    };

    Product.addProduct(data, (err) => {

        if (err) throw err;

        res.redirect('/?success=added');

    });

};

exports.showEditForm = (req, res) => {

    Product.getProductById(req.params.id, (err, results) => {

        if (err) throw err;

        res.render('editProduct', {
            product: results[0]
        });

    });

};

exports.updateProduct = (req, res) => {

    Product.getProductById(req.params.id, (err, results) => {

        if (err) throw err;

        const oldImage = results[0].image;

        let newImage = oldImage;

        if (req.file) {

            newImage = req.file.filename;

            if (oldImage) {

                const oldPath = path.join(
                    __dirname,
                    '../public/uploads/',
                    oldImage
                );

                fs.unlink(oldPath, (err) => {

                    if (err) {
                        console.log(err);
                    }

                });

            }

        }

        const data = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            stock: req.body.stock,
            image: newImage
        };

        Product.updateProduct(req.params.id, data, (err) => {

            if (err) throw err;

            res.redirect('/?success=updated');

        });

    });

};

exports.deleteProduct = (req, res) => {

    Product.getProductById(req.params.id, (err, results) => {

        if (err) throw err;

        const image = results[0].image;

        if (image) {

            const imagePath = path.join(
                __dirname,
                '../public/uploads/',
                image
            );

            fs.unlink(imagePath, (err) => {

                if (err) {
                    console.log(err);
                }

            });

        }

        Product.deleteProduct(req.params.id, (err) => {

            if (err) throw err;

            res.redirect('/?success=deleted');

        });

    });

};