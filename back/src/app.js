const express = require('express');
const app = express();
const postModel = require('./models/model')
const multer = require('multer');
const fileUpload = require('./services/storage.service');
const cors = require('cors');
app.use(cors());
app.use(express.json());
const upload = multer({Storage:multer.memoryStorage})

app.get('/posts',async (req,res)=>{
    const posts = await postModel.find();
    res.status(200).json({
        message:'posts fetched successfully',
        posts:posts
    })
})

app.post('/upload',upload.single('image'),async (req,res)=>{
    console.log(req.file);
    const image = await fileUpload(req.file.buffer);
    const caption = req.body.caption;
    console.log(image);
    await postModel.create({image:image.url,caption:caption,likes:11});
    res.status(201).json({
        message:'Successfully uploaded'
    })
})

module.exports = app;