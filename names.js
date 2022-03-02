const fs = require('fs');
const { faker } = require('@faker-js/faker');

function createFakeNames() {
  let strNames = '';

  for (let count = 0; count < 999; count++) {
    strNames += faker.name.findName() + ', ';
  }
  return strNames
}

fs.writeFile('names.txt', createFakeNames(), function(err) { 
  if(err) return console.log(err); else console.log('file saved')
});