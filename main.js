#!/usr/bin/env node
import HashMap from './HashMap.js';

const myMap = new HashMap();

console.log(myMap.hash('Chris'));

myMap.set('Chris');
console.log(myMap.buckets);

// set() calls hash() to figure out which bucket to place into,
// then it adds an item into that bucket