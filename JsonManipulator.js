const fs = require('fs');

function CreateJSON(filepath, filename, dataContent) {
  const completePath = `${filepath}/${filename}`;

  // Check if the file exists
  if (!fs.existsSync(completePath)) {
    // Create the directory if it doesn't exist
    fs.mkdirSync(filepath, { recursive: true });
  }

  let content;
  try {
    const file = fs.readFileSync(completePath, 'utf-8');
    content = JSON.parse(file);
  } catch (err) {
    content = [];
  }

  content.push(dataContent);

  // Write the updated content to the file
  fs.writeFileSync(completePath, JSON.stringify(content, null, 2));
}

function UpdateJSON(path, updatedData){
  fs.writeFile(path, JSON.stringify(updatedData, null, 2), (err) => {
    if (err) throw err;
  });
}

function DeleteJSON(jsonPath){
  console.log(`Deleting ${jsonPath}`);
  if (fs.existsSync(jsonPath)){
    fs.unlinkSync(jsonPath);
  }else{
    console.log(`File at ${jsonPath} doesn't exist`);
    return;
  }
}

function GetJSON(filePath, callback){
  let file;
  let data;
  if (fs.existsSync(filePath)){
    file = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(file);
    callback(null, data);
  }else{
    callback("No file is detected", null);
  }
}

function MakeDir(desiredDir, err){
  if (!fs.existsSync(desiredDir)){
    fs.mkdirSync(desiredDir, { recursive: true });
  }else{
    err(`Directory ${desiredDir} already exist`);
  }
}

module.exports = { CreateJSON, UpdateJSON, DeleteJSON, GetJSON, MakeDir };