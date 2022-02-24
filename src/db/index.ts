import mongoose from 'mongoose'
import {environment} from '../../environment';

const URL = environment.MONGOOSE_URL 

export const connectDB = async () => {
    const conn = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("DB Connected"));
    
    return conn;
}
