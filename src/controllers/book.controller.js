const uuid = require('uuid');
const fs = require('fs');

const dbPath = 'src/database.json';
const strDB = fs.readFileSync(dbPath, 'utf-8');
const database = JSON.parse(strDB);


//Create
const create = (req, res) => {
  const { dni, nombre, apellido } = req.body;

  if (!dni || !nombre || !apellido) {
    return res.json({ error: 'you must send all fields.' });
  }

  const newBook = {
    id: uuid.v4(),
    dni,
    nombre,
    apellido,
  };

  database.push(newBook);

  fs.writeFile(dbPath, JSON.stringify(database), (err) => {
    if (err) {
      console.log('Hubo un error en la BD');
    }
  });

  return res.json(newBook);
};


//LIST
const list = (req, res) => {
  res.json(database);
};


//GET ID
const get = (req, res) => {
  const bookId = req.params.id;

  let book = null;
  for (let i = 0; i < database.length; i++) {
    if (database[i].id === bookId) {
      book = database[i];
      break;
    }
  }

  res.json({ book });
};

//UPDATE
const update = (req, res) => {
  const bookid = req.params.id;

  let book = null;

  for (let i = 0; i < database.length; i++) {
      if (database[i].id === bookid) {
          book = database[i];
          book.dni = req.body.dni;
          book.nombre = req.body.nombre;
          book.apellido = req.body.apellido;
          fs.writeFile(dbPath, JSON.stringify(database), (err) => {
              if (err) {
                  console.log("Hubo un error al crear la BBDD");
              }
          })
          break;
      }
  }
  
  res.json({ book });
};
//Delete
const remove = (req, res) => {
  const bookId = req.params.id;

  let index = -1;
  for (let i = 0; i < database.length; i++) {
    if (database[i].id === bookId) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    database.splice(index, 1);
    fs.writeFile(dbPath, JSON.stringify(database), (err) => {
      if (err) {
        console.log('Hubo un error en la BD');
      }
    });
  }

  res.json(database);
};

module.exports = {
  create,
  list,
  get,
  update,
  remove,
};
