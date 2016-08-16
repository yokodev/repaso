var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos',function(req, res){
        //seed Database

        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Buy milk second time ',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'mayorga',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'ir a la farmacia',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'ir a misa',
                isDone: false,
                hasAttachment: false
            },
        ]
        Todos.create(starterTodos,function(err,results){
            res.send(results);
        });
    });

}