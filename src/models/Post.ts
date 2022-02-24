import {Schema, model} from 'mongoose'

const PostSchema = new Schema({
    title: String,
    description: String,
});

const PostModel = model("Post", PostSchema);

export default PostModel;

