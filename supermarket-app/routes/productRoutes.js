const express = require('express');
const router = express.Router();

const multer = require('multer');

const productController = require('../controllers/productController');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }

});

const upload = multer({ storage: storage });

router.get('/', productController.index);

router.get('/add', productController.showAddForm);

router.post('/add', upload.single('image'), productController.addProduct);

router.get('/edit/:id', productController.showEditForm);

router.put('/edit/:id', upload.single('image'), productController.updateProduct);

router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;