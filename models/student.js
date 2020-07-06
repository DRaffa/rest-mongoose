import mongoose from 'mongoose';

    // Criacao do Modelo
    const studentSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true,
            validate(value) {
                if (value < 0) {
                    throw new Error('Valor nagativo para a nota nao permitido');
                }
            }
        },
        lastModified: {
            type: Date,
            default: Date.now()
        }
    });

        // Definindo o modelo da colecao
    // O mongose define por padrao as tabelas no plural
    const studentModel = mongoose.model('student', studentSchema, 'student');

    export { studentModel };