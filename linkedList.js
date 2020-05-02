class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head

            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }

            tempNode.next = new _Node(item, null)
        }
    }

    insertBefore(item, key){
        if(!this.head) {
            return "Empty list"
        }

        let currNode = this.head

        while (currNode.next.value !== key) {
            currNode = currNode.next
        }

        let keyItem = currNode.next
        currNode.next = new _Node(item, keyItem)
    }

    insertAfter(item, key){
        if(!this.head) {
            return "Empty list"
        }

        let currNode = this.head

        while (currNode.value !== key) {
            currNode = currNode.next
        }

        let keyItem = currNode.next
        currNode.next = new _Node(item, keyItem)
    }

    insertAt(item, position) {
        if(!this.head) {
            return "Empty list"
        }

        let currNode = this.head
        let i = 1

        while(i < position+1) {
            if((currNode.next === null) && (i < position)){
                return "List too short"
            }

            currNode = currNode.next
            i++
        }

        let keyItem = currNode.next
        currNode.next = new _Node(item, keyItem)
    }

    find(item) {
        let currNode = this.head

        if(!this.head){
            return null
        }

        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }

        return currNode
    }

    remove(item) {
        if(!this.head) {
            return null
        }

        if(this.head.value === item) {
            this.head = this.head.next
            return
        }

        let currNode = this.head
        let previousNode = this.head

        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }

        if(currNode === null) {
            console.log('Item not found')
            return
        }

        previousNode.next = currNode.next
    }
}

module.exports = LinkedList;