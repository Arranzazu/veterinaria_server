// const { randomUUID } = require('crypto');
const { Router } = require('express');
// const uuid = require('uuid');
// const { title } = require('process');
// const fs = require('fs');
// const { book } = require('.');
// const express = require('express');
const controllers = require('../controllers');

// const dbPath = "src/database.json"
// const strDB = fs.readFileSync("src/database.json", "utf-8");
// const database = JSON.parse(strDB);

const router = Router();
// const router = express.Router();

// const database = []

// CREATE [post]
router.post('/create', controllers.book.create);

// router.post('/create', (req, res) => {
//     const { dni, nombre, apellido } = req.body;
//     if (!dni || !nombre || !apellido) {
//         return res.json({ error: "debes poner todos los campos" });
//     }
//     const newbook = {
//         id: uuid.v4(),
//         dni,
//         nombre,
//         apellido,
//     };
//     database.push(newbook);
//     res.send('libro creado');

//     fs.writeFile(dbPath, JSON.stringify(database), (err) => {
//         if (err) {
//             console.log("Hubo un error al crear la BBDD")
//         }
//     })


//     return res.json(newbook);
// });

// GET ALL [get]
router.get('/list', controllers.book.list);
// router.get('/list', (req, res) => {
//     res.json(database);
// });

// GET id [get]
router.get('/get/:id', controllers.book.get);
// router.get('/get/:id', (req, res) => {
//     const bookid = req.params.id;
//     let book = null;
//     // let index = -1;
//     for (let i = 0; i < database.length; i++) {
//         if (database[i].id === bookid) {
//             book = database[i];
//             break;
//         }
//     }
//     res.json({ book });
// });

// UPDATE id [put/patch]
router.put('/update/:id', controllers.book.update);
// router.put('/update/:id', (req, res) => {
//     const bookid = req.params.id;
//     // let index = -1;
//     let book = null;

//     for (let i = 0; i < database.length; i++) {
//         if (database[i].id === bookid) {
//             book = database[i];
//             book.dni = req.body.dni;
//             book.nombre = req.body.nombre;
//             book.apellido = req.body.apellido;
//             fs.writeFile(dbPath, JSON.stringify(database), (err) => {
//                 if (err) {
//                     console.log("Hubo un error al crear la BBDD");
//                 }
//             })
//             break;
//         }
//     }
    
//     res.json({ book });
// });
// DELETE id [delete]
router.delete('/delete/:id', controllers.book.remove);
// router.delete('/delete/:id', (req, res) => {
//     const bookid = req.params.id;
//     let index = -1;
//     for (let i = 0; i < database.length; i++) {
//         if (database[i].id === bookid) {
//             index = i;
//             break;
//         }
//     }
//     if (index > -1) {
//         database.splice(index, 1);
//         fs.writeFile(dbPath, JSON.stringify(database), (err) => {
//             if (err) {
//                 console.log("Hubo un error al crear la BBDD");
//             }
//         })
//     }
//     res.json(database);
// });


module.exports = router;
