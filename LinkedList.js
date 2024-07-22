class Node {

    constructor(value = null) {

        this.value = value;
        this.nextNode = null;

    }

}

export default class LinkedList {

    head = null;

    tail = null;

    size = 0;


    append(value) {

        let node = new Node(value);
        if (this.head === null) {

            this.head = node;
            this.tail = node;

        } else {

            this.tail.nextNode = node;
            this.tail = node;

        }

        this.size++;

    }

    prepend(value) {

        let node = new Node(value);
        if (this.size === 0) {

            this.head = node;
            this.tail = node;

        } else {

            node.nextNode = this.head;
            this.head = node;

        }

        this.size++;

    }

    at(index) {

        if (index <= this.size && index > 0) {

            let currentNode = this.head;
            for (let i = 1; i <= index; i++) {

                if (i === index) return currentNode;
                else currentNode = currentNode.nextNode;

            }

        } else {

            console.log('Invalid index value!');
            return null;

        }

    }

    pop() {

        if (this.size !== 0) {

            if (this.size === 1) {

                this.head = null;
                this.tail = null;

            } else {

                let secondLastNode = this.at(this.size - 1);
                secondLastNode.nextNode = null;
                this.tail = secondLastNode;

            }
            this.size--;

        } else console.log('Cannot pop from empty list!');

    }

    contains(value) {

        // returns true if there is a node with the value

        let currentNode = this.head;
        for (let i = 1; i <= this.size; i++) {

            if (currentNode.value === value) return true;
            else {

                currentNode = currentNode.nextNode;

            }

        }

        return false;

    }

    find(value) {

        // returns true if there is a node with the value

        let currentNode = this.head;
        for (let i = 1; i <= this.size; i++) {

            if (currentNode.value === value) return i;
            else {

                currentNode = currentNode.nextNode;

            }

        }

        return null;

    }

    toString() {

        let listString = '';
        let currentNode = this.head;

        for (let i = 1; i <= this.size; i++) {

            listString += `( ${currentNode.value} ) -> `;
            if (currentNode.nextNode === null) {

                listString += 'null';
                break;

            }

            currentNode = currentNode.nextNode;

        }

        return listString;

    }

    insertAt(value, index) {

        let node = new Node(value);

        if (index === 1) {

            node.nextNode = this.head;
            this.head = node;

        } else if (index > this.size) {

            console.log('Invalid index!');
            return;

        } else {

            let nodeBeforeInsert = this.at(index - 1);
            node.nextNode = nodeBeforeInsert.nextNode;
            nodeBeforeInsert.nextNode = node;

        }
        this.size++;

    }

    removeAt(index) {

        if (index === 1) {

            if (this.size === 1) {

                this.head = null;
                this.tail = null;

            } else {

                this.head = this.head.nextNode;

            }

        } else if (index > this.size) {

            console.log('Invalid index!');
            return;

        } else {

            let nodeBeforeIndex = this.at(index - 1);
            nodeBeforeIndex.nextNode = nodeBeforeIndex.nextNode.nextNode;

        }
        this.size--;

    }

    get size() {

        return this.size;

    }

    set size(value) {

        this.size = value;

    }

    get head() {

        return this.head;

    }

    set head(value) {

        this.head = value;

    }

    get tail() {

        return this.tail;

    }

    set tail(value) {

        this.tail = value;

    }

}