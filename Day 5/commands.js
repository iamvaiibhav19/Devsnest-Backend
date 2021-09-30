const fs = require("fs");
const example = async () => {
  try {
    const content = await fs.readFile("hilo/hilo.txt");
    console.log(content);
  } catch (err) {
    console.log(err);
  }
};

example();
