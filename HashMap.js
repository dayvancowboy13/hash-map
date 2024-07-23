import LinkedList from './LinkedList.js';

export default class HashMap {

    constructor() {

        this.capacity = 16;
        this.loadFactor = 0.77;
        this.buckets = [];

        for (let i = 0; i < this.capacity; i++) {

            this.buckets.push(new Array());

        }

        // console.log(this.buckets.length);

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

        this.buckets[index].push({
            [key]:
                value
        });

    }

    get(key) {

        let index = this.hash(key) % this.buckets.length;
        let b = this.buckets[index];

        for (let i = 0; i <= b.length; i++) {

            if (b[i] && b[i].hasOwnProperty(key)) return b[i][key];

        }

        return null;

    }

    has(key) {

        // get the bucket it might/should be in
        let index = this.hash(key) % this.buckets.length;
        let b = this.buckets[index];

        for (let i = 0; i <= b.length; i++) {

            if (b[i] && b[i].hasOwnProperty(key)) return true;

        }

        return false;

    }

    remove(key) {

        if (this.has(key)) {

            // remove it
            let index = this.hash(key) % this.buckets.length;
            let b = this.buckets[index];

            const idKey = (element) => {

                element.hasOwnProperty(key);

            };

            let keyIndex = b.findIndex(idKey);
            b.splice(keyIndex, 1);

            return true;

        } else return false;

    }

    static #checkIndex(index) {

        if (index < 0 || index >= buckets.length) {

            throw new Error('Trying to access index out of bound');

        }

    }

    // get buckets() {

    //     return this.buckets;

    // }

}