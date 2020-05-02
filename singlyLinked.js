const LinkedList = require('./linkedList')
const { display, size, isEmpty, findPrevious, findLast } = require('./supplemental')
const reverseList = require('./reverseList')
const thirdFromEnd = require('./thirdFromEnd')
const middleOfList = require('./middleOfList')

function main() {
    let SLL = new LinkedList

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')

    console.log(SLL)

    SLL.insertLast('Tauhida')
    SLL.remove('Husker')
    console.log(SLL.find('Husker'))

    SLL.insertBefore('Athena', 'Boomer')

    console.log(SLL)

    SLL.insertAfter('Hotdog', 'Helo')

    console.log(SLL.find('Hotdog'))

    SLL.insertAt('Kat', 3)

    console.log(SLL.find('Kat'))

    SLL.remove('Tauhida')
    console.log(SLL.find('Tauhida'))

    console.log(display(SLL))
    console.log(size(SLL))
    console.log(isEmpty(SLL))
    console.log(findPrevious(SLL, 'Kat'))
    console.log(findLast(SLL))

    reverseList(SLL)
    console.log(display(SLL))

    console.log(thirdFromEnd(SLL))

    SLL.insertLast('Michael')
    SLL.insertLast('Jase')
    console.log(display(SLL))

    console.log(middleOfList(SLL))

}

main()

