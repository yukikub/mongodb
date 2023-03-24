module.exports = (app) => {
    const infos = require('../controllers/info.controller')

    var router = require('express').Router()
    //Retrive all info
    router.get('/', infos.findAll)
    
    //Retrive a single info with id
    router.get('/edit-info/:id',infos.findOne)

    //Create a new info
    router.post('/create-info',infos.create)

    //Update a info with id
    router.put('/update-info/:id',infos.update)

    //Delete a info with id
    router.delete('/delete-info/:id',infos.delete)
    app.use('/infos', router)
}