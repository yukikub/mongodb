const db = require('../models')
const Info = db.info

exports.create = (req, res) => {
    if(!req.body.school){
        res.status(400).json({message:"cannot can not be empty"})
        return;
    }
    
    //create a info
    const info = new Info(
        {
        school : req.body.school,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        address : req.body.address
        }
    );

    info
    .save(info)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Some error occurred while creating student."})
    })
}
exports.findAll = (req, res) => {
    Info.find()
    .then(data => {
        res.json(data)
})
    .catch(err => {
        res.status(500).json({message: err.message || "Some error occurred while retrieving students."})
})
}
exports.findOne = (req, res) => {
    const id = req.params.id
    Info.findById(id)
    .then(data => {
        if(!data) {
            res.status(404).json({message: "Student not found."})
        }
        else{
            res.json(data)
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Error retrieving data!"})
    })
}
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).json({message: "data to update cannot be empty!"})
    }
    const id = req.params.id
    Info.findByIdAndUpdate(id, req.body,{useFindAndUpdate: false})
    .then(data => {
        if(!data){
            res.status(404).json({message: `data to update data with id=${id}` })
        }
        else{
            res.json({message: 'data was updated successfully'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Error update data!"})
    })
}
exports.delete = (req, res) => {
    const id = req.params.id
    Info.findByIdAndRemove(id,{useFindAndUpdate: false})
    .then(data => {
        if(!data){
            res.status(404).json({message: `Cannot delete data with id=${id}` })
        }
        else{
            res.json({message: 'data was delete successfully'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Error delete data!"})
    })

}