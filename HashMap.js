import LinkedList from './LinkedList.js';

export default class HashMap {

    constructor() {

        this.capacity = 16;
        this.loadFactor = 0.77;
        this.buckets = [];

        for (let i = 0; i < this.capacity; i++) {

            this.buckets.push(new Array());

        }

        console.log(this.buckets.length);

        // if (index < 0 || index >= buckets.length) {

        //     throw new Error('Trying to access index out of bound');

        // }

    }

    hash(key) {

        let hashCode = 0;

        const prime = 37;
        for (let i = 0; i < key.length; i++) {

            hashCode += prime * key.charCodeAt(i);

        }

        return hashCode;

    }

    set(key, value = null) {

        let index = this.hash(key) % this.buckets.length;

        this.buckets[index] = {
            [key]:
                value
        };

    }

    // get buckets() {

    //     return this.buckets;

    // }

}