const postModel = require("./../models/postModel");

exports.getAllPosts = async(req, res, next) => {
    try{

        const posts = await postModel.find().exec();

        return res.status(200).json({
            status:'success',
            results: posts.length,
            data: {
                posts
            }
        });

    }catch(e){

        return res.status(400).json({
            status:'fail'
        });

    }
}

exports.getOnePost = async(req, res, next) => {

    try{

        const post = await postModel.findById(req.params.id).exec();

        return res.status(200).json({
            status:'success',
            data: {
                post
            }
        });

    }catch(e){

        return res.status(400).json({
            status:'fail'
        });

    }
}

exports.createPost = async(req, res, next) => {

    try{

        console.log(1111111)
        const post = await postModel.create(req.body);

        return res.status(200).json({
            status:'success',
            data: {
                post
            }
        });

    }catch(e){
        console.log(e);

        return res.status(400).json({
            status:'fail'
        });

    }
}

exports.updatePost = async(req, res, next) => {
    
    try{

        const post = await postModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).exec();

        return res.status(200).json({
            status:'success',
            data: {
                post
            }
        });

    }catch(e){

        return res.status(400).json({
            status:'fail'
        });

    }
}

exports.deletePost = async(req, res, next) => {
    
    try{

        await postModel.findByIdAndDelete(req.params.id).exec();

        return res.status(200).json({
            status:'success'
        });

    }catch(e){

        return res.status(400).json({
            status:'fail'
        });

    }
}