const { ManipulateJSON, DeleteJSON, GetJSON } = require("./JsonManipulator.js");

function Manipulate() {
  const path = "./javascriptTestFolder";
  const filename = "test.json";

  let data = {
    Name: "Your name",
    Gender: "Male",
    Info: {
      FavFood: "Bread",
      FavDrink: "Water",
    },
  };

  ManipulateJSON(path, filename, data);
}

function DeleteJson() {
  const path = "./javascriptTestFolder/test.json";
  DeleteJSON(path);
}

function GetMyData() {
  const path = "./javascriptTestFolder/test.json";
  GetJSON(path, (err, response) => {
    if (err) {
      return console.log(err);
    }
    console.log(response);
  });
}

Manipulate();
