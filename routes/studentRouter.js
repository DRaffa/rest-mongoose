import express from 'express';
import { studentModel } from '../models/student.js';
const app = express();


app.get('/student', async (req, res) =>{
    const student = await studentModel.find({});

    try {
        res.send(student);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/student', async (req, res) => {
    try {
        const student = new studentModel(req.body);
        res.send(await student.save());
    } catch (error) {
        res.status(500).send(error);
    }
})

app.delete('/student/:id', async (req, res) => {
    try {
        const student = await studentModel.findByIdAndDelete({_id: req.params.id});

        if (!student) {
            res.status(404).send('Documento nao encontrado');
        } else {
            res.status(200).send('Documento excluido com sucesso');
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

app.patch('/student/:id', async (req, res) => {
    try {
        //Passando o parametro new: true retorna o valor atualizado
        const student = await studentModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});

        if (!student) {
            res.status(404).send('Documento nao encontrado');
        } else {
            res.status(200).send(student);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

export {app as studentRouter}