import express from 'express';
import {studentRouter} from './routes/studentRouter.js'
import mongoose from 'mongoose';

const app = express();

//require('dotenv').config();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, async () => {

        // Conectar ao mongodb com mongoose
        await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.mahmw.mongodb.net/grades?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
    
    console.log('API Iniciada');
})
