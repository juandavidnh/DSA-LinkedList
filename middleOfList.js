const { size } = require('./supplemental')

function middleOfList(lst) {
    if(!lst.head) {
        return "Empty list"
    }

    if(lst.head.next === null) {
        return lst.head.value
    }

    let currNode = lst.head
    let i = 0
    
    while(i < Math.floor(size(lst)/2)){
        currNode = currNode.next
        i++
    }

    return currNode.value
}

module.exports = middleOfList