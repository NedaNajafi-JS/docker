const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb://mongo:27017/postDB")
.then(() => {
    console.log("Database connected")
}).catch(e => console.log(e));

const postRouter = require('./routes/postRoutes');
app.use('/post', postRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening to post ${port}`));