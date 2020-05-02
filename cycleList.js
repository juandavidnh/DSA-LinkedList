const LinkedList = require('./linkedList')


function hasCycle(head) {
    if (head === null) {
      return false;
    }
    let slow_ptr = head;
    let fast_ptr = head.next; 
    while (fast_ptr !== null && fast_ptr.next !== null && slow_ptr !== null) {
      if (fast_ptr == slow_ptr) {
        return true;
      }
      fast_ptr = fast_ptr.next.next
      slow_ptr = slow_ptr.next
    }
    return false;
}



const CycleList = new LinkedList
CycleList.insertLast('A')
CycleList.insertLast('B')
CycleList.insertLast('C')
CycleList.insertLast('D')
CycleList.insertLast('E')
CycleList.insertLast('F')
CycleList.insertLast('G')
CycleList.find('E').next = CycleList.find('A')
  
console.log(hasCycle(CycleList.head));