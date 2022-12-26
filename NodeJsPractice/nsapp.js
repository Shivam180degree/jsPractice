// module.exports = {
//     x:10,
//     y:20,
//     z:function() {
//         return "Woah!!!!!!!!!!!"
//     }
// }

const fs = require('fs');
/// For async operation read File///

// fs.readFile('CreateBasicServer.js','utf-8', (err, data)=>{
//     console.log(`Error is: ${err},Data is : ${data}`);
// });

/// For sync operation read File///
const result = fs.readFileSync('CreateBasicServer.js');
    console.log(result.toString());

console.log("Operation is finished");