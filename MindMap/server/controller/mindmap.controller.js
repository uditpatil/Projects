const { Mindmap } = require("../models/mindmap.model");

module.exports = {

    findAllNotes: (req, res) => {
        Mindmap.find({})
            .then((allNotes) => {
                console.log(allNotes);
                res.json(allNotes)
            })
            .catch((err) => {
                console.log("Can not find all notes");
                res.json({message: "Something went wrong on finding all notes", error: err })
            })
    },

    createNewNote: (req, res) => {
        const { age, stressType, notes } = req.body; 
        Mindmap.create({age, stressType, notes })
            .then((newNote) => {
                console.log(newNote);
                res.json(newNote)
            })
            .catch((err) => {
                console.log("Can not create new note");
                res.status(400).json(err)
            })
    },

    findOneNote: (req, res) => {
        Mindmap.findOne({_id: req.params.id })
            .then((oneNote) => {
                console.log(oneNote);
                res.json(oneNote)
            })
            .catch((err) => {
                console.log("Can not find the Note");
                res.json({message: "Something went wrong in finding the note", error: err})
            })
    },

    deleteOneNote: (req, res) => {
        Mindmap.deleteOne({_id: req.params.id })
            .then((deleteNote) => {
                console.log(deleteNote);
                res.json(deleteNote)
            })
            .catch((err) => {
                console.log("Can not delete the note");
                res.json({message: "Something went wrong in deleting the note", error: err})
            })
    },

    updateNote: (req, res) => {
        const { age, stressType, notes } = req.body; 
        Mindmap.findOneAndUpdate({_id: req.params.id},
            { age, stressType, notes },
            { new: true, useFindAndModify: true, runValidators: true}
        )
            .then((updateNote) => {
                console.log(updateNote);
                res.json(updateNote)
            })
            .catch((err) => {
                console.log("Can not update the note");
                res.status(400).json(err)
            })
    }

}