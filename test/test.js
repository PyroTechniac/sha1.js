const { Sha1 } = require('../src/index');
const sha = new Sha1('SomeBODY Once told me the world was gonna roll me I aint the sharpest tool in the shed', { removeSpaces: true, randomizeInput: false });
console.log(sha);