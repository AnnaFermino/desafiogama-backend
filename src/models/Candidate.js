const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: {type: String, unique: false, required: true},
    profession: {type: String, unique: false, required: true},
    role: {type: String, unique: false, required: false},
    birth: {type: String, unique: false, required: true},
    civil: {type: String, unique: false, required: false},
    gender: {type: String, unique: false, required: false},
    cep: {type: String, unique: false, required: true},
    street: {type: String, unique: false, required: true},
    number: {type: String, unique: false, required: true},
    district: {type: String, unique: false, required: true},
    city: {type: String, unique: false, required: true},
    state: {type: String, unique: false, required: true},
    telephone1: {type: String, unique: false, required: false},
    telephone2: {type: String, unique: false, required: false},
    cellphone: {type: String, unique: false, required: true},
    email: {type: String, unique: false, required: true},
    identity: {type: String, unique: false, required: true},
    cpf: {type: String, unique: true, required: true},
    car: {type: String, unique: false, required: false},
    license: {type: String, unique: false, required: false}     
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);