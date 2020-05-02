function thirdFromEnd(lst) {
    if(!lst.head) {
        return "Empty list"
    }

    if(!lst.head.next || !lst.head.next.next){
        return "Small List"
    }

    let currNode = lst.head
    let nextNode = lst.head.next
    let nextNextNode = lst.head.next.next

    while(nextNextNode.next !== null){
        currNode = currNode.next
        nextNode = nextNode.next
        nextNextNode = nextNode.next
    }

    return currNode.value
}

module.exports = thirdFromEnd