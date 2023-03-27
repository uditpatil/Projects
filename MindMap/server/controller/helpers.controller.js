const { Helpers } = require("../models/helpers.model");

module.exports = {

    findAllHelpers: (req, res) => {
        Helpers.find({})
            .then((allHelpers) => {
                console.log(allHelpers);
                res.json(allHelpers)
            })
            .catch((err) => {
                console.log("Can not find all doctors and therapists");
                res.json({message: "Something went wrong on finding all doctors and therapists", error: err })
            })
    },

    createNewHelper: (req, res) => {
        const { helperName, profession, address, experience, speciality, contact } = req.body; 
        Helpers.create({ helperName, profession, address, experience, speciality, contact })
            .then((newHelper) => {
                console.log(newHelper);
                res.json(newHelper)
            })
            .catch((err) => {
                console.log("Can not create new entry for doctor or therapist");
                res.status(400).json(err)
            })
    }
}