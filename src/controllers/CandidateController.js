const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {

        const { name, profession, role, birth, civil, gender, cep, street, number, district, city, state, telephone1, telephone2, cellphone, email, identity, cpf, car, license } = req.body;

        const newCandidate = new Candidate();

        newCandidate.name = name;
        newCandidate.profession = profession;
        newCandidate.role = role;
        newCandidate.birth = birth;
        newCandidate.civil = civil;
        newCandidate.gender = gender;
        newCandidate.cep = cep;
        newCandidate.street = street;
        newCandidate.number = number;
        newCandidate.district = district;
        newCandidate.city = city;
        newCandidate.state = state;
        newCandidate.telephone1 = telephone1;
        newCandidate.telephone2 = telephone2;
        newCandidate.cellphone = cellphone;
        newCandidate.email = email;
        newCandidate.identity = identity;
        newCandidate.cpf = cpf;
        newCandidate.car = car;
        newCandidate.license = license;
    
        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send(savedCandidate);
        });
    },
};