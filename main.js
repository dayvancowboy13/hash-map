#!/usr/bin/env node
import HashMap from './HashMap.js';

const myMap = new HashMap();

console.log(myMap.hash('Chris'));

myMap.set('Chris', 33);
// console.log(myMap.buckets);
console.log(myMap.remove('Banana'));

// set() calls hash() to figure out which bucket to place into,
// then it adds an item into that bucket