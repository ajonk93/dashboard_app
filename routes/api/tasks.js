const express = require ('express');
const router = express.Router();


//Task model
const Task = require ('../../models/Task')


//GET api/tasks
//Get all tasks
router.get('/', (req, res) => {
    Task.find()
    .sort({ date: +1})
    .then(tasks => res.json(tasks));
});

//POST api/tasks
//create task
router.post('/', (req, res) => {
    const newTask = new Task({
        name: req.body.name
    });

    newTask.save().then(task => res.json(task))
});

//DELETE api/tasks
//delete task
router.delete('/:id', (req, res) => {
    Task.findById(req.params.id)
    .then(task => task.remove().then(()=>res.json({success: true})))
    .catch(err => res.status(404).json({success: false})) 
})



module.exports =  router;