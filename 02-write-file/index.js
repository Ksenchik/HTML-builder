const fs = require("fs");
const path = require("path");
const output = fs.createWriteStream(path.join(__dirname, "text.txt"), 'utf-8');
const message = {
   START: "enter text:\n",
   FINISH: "bye!"
 }

const { stdin, stdout } = process;
stdout.write("Введите текст: \n");

stdin.on('data', data => {
    const dataStringified = data.toString();
    output.write('');
    output.write(dataStringified);
});



