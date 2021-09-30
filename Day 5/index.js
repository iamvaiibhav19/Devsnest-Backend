const fs = require("fs");

const program = require("commander");

//to create directory:
program.command("mkdir <dirname>").action((dirname) => {
  fs.mkdir(dirname, (err) => {
    console.log(err);
  });
});

//to create file:
//to send object do this- make content as JSON.stringfy(content) --> return to object

//content or name and email -
program.command("mkfile <path> <content>").action((path, content) => {
  fs.writeFile(path, content, (err) => {
    console.log(err);
  });
});

//to delete a file
program.command("removedir <path>").action((path) => {
  fs.unlink(path, (err) => {
    console.log(err);
  });
});

//to read file
program.command("readfile <path>").action((path) => {
  fs.readFile(path, "utf-8", (err, fileContent) => {
    console.log(fileContent);
  });
});

//rename file
program.command("renameFile <oldpath> <newpath>").action((oldpath, newpath) => {
  fs.rename(oldpath, newpath, (err) => {
    console.log(err);
  });
});

//to remove dir
program.command("removedir <path>").action((path) => {
  fs.rmdir(path, (err) => {
    console.log(err);
  });
});

//to update file
program.command("appendfile <path> <content>").action((path, content) => {
  fs.appendFile(path, content, (err) => {
    console.log(err);
  });
});

program.parse(process.argv);
