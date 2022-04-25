var reverseList = function (head) {
  let preNode = null
  let p = head
  while (p) {
    let next = p.next
    p.next = preNode
    preNode = p
    p = next
  }
  return preNode
}
