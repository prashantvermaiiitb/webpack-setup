import { getClasses } from './getClasses';

console.log('Ran from index.js of webpack setup');
getClasses();

const obj = { a: 'alpha', b: 'bravo' };
const newObj = { ...obj, c: 'charlie' };
console.log(newObj);