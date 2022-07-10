import { getClasses } from './getClasses';

console.log('Ran from index.js of webpack setup');
getClasses();

const obj = { a: 'alpha', b: 'bravo' };
const newObj = { ...obj, c: 'charlie' };
console.log(newObj);

// ! this function is present in ES7 by default babel is not going to transpile unless this changes is stable
// ! under proposed category. So either we need to have the polyfill in the code or this will be present as is 
// ! in the bundle JS 
console.log(['a','b','c'].includes('a'));