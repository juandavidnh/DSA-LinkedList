function reverseList(lst) {
    if(!lst.head) {
        return "Empty list"
    }

    let nextNode = lst.head.next
    let nextNextNode 
    let currentNode = lst.head
    currentNode.next = null

    while(nextNode !== null) {
        nextNextNode = nextNode.next
        nextNode.next = currentNode
        currentNode = nextNode
        nextNode = nextNextNode
    }

    lst.head = currentNode
}

module.exports = reverseList