const { ManipulateJSON, DeleteJSON, GetJSON } = require('./JsonManipulator.js');

function Manipulate(){
  const path = './javascriptTestFolder/Maku';
  const filename = 'test.json';

  let data = {
    Name: 'Maku',
    Gender: 'Male',
    Info: {
      FavFood: 'Ice',
      FavDrink: 'Water'
    }
  };

  ManipulateJSON(path, filename, data);
}

function DeleteJson(){
  const path = './javascriptTestFolder/Maku/test.json';
  DeleteJSON(path);
}

function GetMyData(){
  const path = './javascriptTestFolder/Maku/meow.json';
  GetJSON(path, (err, response) => {
    if (err){
      return console.log(err);
    }
    console.log(response);
  });
}

Manipulate();