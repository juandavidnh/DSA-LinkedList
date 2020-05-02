function display(linkedList) {
    const list = []

    if(!linkedList.head) {
        return "Empty list"
    }

    let currNode = linkedList.head

    do {
        list.push(currNode.value)
        currNode = currNode.next
    } while(currNode.next !== null)

    list.push(currNode.value)

    return list
}


function size(linkedList) {
    let counter = 0

    if(!linkedList.head) {
        return 0
    }

    let currNode = linkedList.head

    while(currNode.next !== null) {
        currNode = currNode.next
        counter++
    }

    counter++

    return counter
}

function isEmpty(linkedList) {
    if(!linkedList.head) {
        return true
    } else {
        return false
    }
}

function findPrevious(linkedList, key) {
    if(!linkedList.head) {
        return "Empty list"
    }

    let currNode = linkedList.head

    while(currNode.next.value !== key){
        currNode = currNode.next
    }

    return currNode.value
}

function findLast(linkedList) {
    if(!linkedList.head) {
        return "Empty list"
    }

    let currNode = linkedList.head

    while(currNode.next !== null){
        currNode = currNode.next
    }

    return currNode.value
}

module.exports = { display, size, isEmpty, findPrevious, findLast }