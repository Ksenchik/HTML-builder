let fs = require( 'fs' );
const path = require('path');

reader = fs.createReadStream( path.resolve(__dirname, "text.txt"), 'utf-8');
reader.on( 'data' , function (chunk) {
   const { stdout } = process;
   stdout.write(chunk);
});
