const Image = require('../models/Image');
const uuid = require('uuid').v4;
const path = require('path');
const multer = require('multer');


const Storage = multer.diskStorage({
    destination: "Images",
    filename: (req, file, cb) => {
        cb(null, uuid()+'_'+ path.basename(file.originalname));
    }
});

const upload = multer({
    storage: Storage,
}).single('imageUrl')

module.exports = {
    
    AddImage: async (req, res) => {
            upload(req, res,(err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const newImage = new Image({
                        title: req.body.title,
                        imageUrl:'http://localhost:8889/'+ req.file.filename,
                        //imageUrl: req.file.filename,
                    });
                    newImage.save().then(()=> res.send('uploaded successfully')).catch((err) => console.log(err));
                }
            });
       },

    }