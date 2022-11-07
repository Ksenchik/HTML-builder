const fs = require("fs");
const path = require("path");
const output = fs.createWriteStream(path.join(__dirname, "text.txt"), 'utf-8');

const { stdin, stdout } = process;

stdin.on('data', data => {
    const dataStringified = data.toString();
    output.write('');
    output.write(dataStringified);
});

