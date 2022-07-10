import { wizard } from './wizard';
// import { barbarian } from './barbarian';

// todo: testing both require and import are working and it's w/o addition of the babel in package json
const {barbarian} = require('./barbarian');

export const getClasses = () => {
    console.log('~ inside getClasses() was called hot module reloading...');
    console.log(wizard);
    console.log(barbarian);
}