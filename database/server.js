const express = require('express');
const fs = require('fs');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());



server.listen(4000,()=>console.log("Сервер стартанул с портом 4000"))


server.post('/', (req, res,) => {
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    const db = JSON.parse(data);
    db.todos.push(req.body); // закидываем в конец массива todos из todos.json

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
      if (err) {
        console.log('error', err)
      } 
      else {
        res.send(db)
      }
    });
  });
});
/*
// C
server.post('/', (req, res,) => {
  const body = req.body; // тело запроса в переменную body
  console.log('body: ', body); // проверка
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    const db = JSON.parse(data);
    console.log('data:', data); // проверка
    db.todos.push(req.body); // закидываем в конец массива todos из todos.json

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
      if (err) {
        console.log('error', err)
      } 
      else {
        res.send(db)
      }
    });
  });
});
// R
server.get('/', (req, res,) => {
  fs.readFile('./db.json', (err, data) => {
    res.send(JSON.parse(data));
    },
  );
});
// U
server.patch('/', (req, res) => {
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    const db = JSON.parse(data);
    console.log('data:', db.todos);
    const index = db.todos.findIndex((todo) => req.body.id === todo.id);
    db.todos[index].complecated = !db.todos[index].complecated;

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
      if (err) {
        console.log('error', err)
      } 
      else {
        res.send(db)
      }
    });
  })
})
// D
server.delete('/', (req, res) => {
  fs.readFile('./db.json', 'utf-8', (err, data) => {
    const db = JSON.parse(data);
    console.log('data:', db.todos);
    const newTodos = db.todos.filter((todo) => req.body.id !== todo.id);
    db.todos = newTodos;

    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
      if (err) {
        console.log('error', err)
      } 
      else {
        res.send(db)
      }
    });
  })
})
*/

