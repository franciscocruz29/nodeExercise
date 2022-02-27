const fs = require('fs');
const { faker } = require('@faker-js/faker');

let strNames = '';

for (let count = 0; count < 999; count++) {
  strNames += faker.name.findName() + ', ';
}

fs.writeFile('names.txt', strNames, function(err) { 
  if(err) return console.log(err); else console.log('file saved')
});