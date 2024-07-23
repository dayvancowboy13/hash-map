import LinkedList from './LinkedList.js';

export default class HashMap {

    constructor() {

        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = [];

        for (let i = 0; i < this.capacity; i++) {

            this.buckets.push(new Array());

        }

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

        this.#checkIndex(index);
        this.buckets[index].push({
            [key]:
                value
        });

    }

    get(key) {

        let index = this.hash(key) % this.buckets.length;
        this.#checkIndex(index);
        let b = this.buckets[index];
        for (let i = 0; i <= b.length; i++) {

            if (b[i] && b[i].hasOwnProperty(key)) return b[i][key];

        }

        return null;

    }

    has(key) {

        // get the bucket it might/should be in
        let index = this.hash(key) % this.buckets.length;

        this.#checkIndex(index);
        let b = this.buckets[index];
        for (let i = 0; i <= b.length; i++) {

            if (b[i] && b[i].hasOwnProperty(key)) return true;

        }

        return false;


    }

    remove(key) {

        if (this.has(key)) {

            let index = this.hash(key) % this.buckets.length;
            this.#checkIndex(index);
            let b = this.buckets[index];

            const idKey = (element) => {

                element.hasOwnProperty(key);

            };

            let keyIndex = b.findIndex(idKey);
            b.splice(keyIndex, 1);

            return true;

        } else return false;

    }

    length() {

        let sum = 0;
        for (let i = 0; i < this.buckets.length; i++) {

            this.#checkIndex(i);
            sum += this.buckets[i].length;

        }

        return sum;

    }

    clear() {

        for (let i = 0; i < this.buckets.length; i++) {

            let b = this.buckets[i];
            while (b.length !== 0) b.pop();

        }

    }

    keys() {

        let keysInMap = [];

        for (let i = 0; i < this.buckets.length; i++) {

            this.#checkIndex(i);
            let b = this.buckets[i];
            for (let j = 0; j < b.length; j++) {

                for (let bKey in b[j]) {

                    console.log(bKey);
                    keysInMap.push(bKey);

                }

            }

        }

        return keysInMap;

    }

    values() {

        let values = [];

        for (let i = 0; i < this.buckets.length; i++) {

            this.#checkIndex(i);
            let b = this.buckets[i];
            for (let j = 0; j < b.length; j++) {

                for (let bKey in b[j]) {

                    console.log(b[j][bKey]);
                    values.push(b[j][bKey]);

                }

            }

        }

        return values;

    }

    entries() {

        let entries = [];

        for (let i = 0; i < this.buckets.length; i++) {

            this.#checkIndex(i);
            let b = this.buckets[i];
            for (let j = 0; j < b.length; j++) {

                for (let bKey in b[j]) {

                    entries.push([
                        bKey,
                        b[j][bKey]
                    ]);

                }

            }

        }

        return entries;

    }

    #checkIndex(index) {

        if (index < 0 || index >= this.buckets.length) {

            throw new Error('Trying to access index out of bound');

        }

    }

    // get buckets() {

    //     return this.buckets;

    // }

}