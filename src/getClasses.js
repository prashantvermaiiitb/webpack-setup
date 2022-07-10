import { wizard } from './wizard';
// import { barbarian } from './barbarian';

// todo: testing both require and import are working and it's 
const {barbarian} = require('./barbarian');

export const getClasses = () => {
    console.log(wizard);
    console.log(barbarian);
}