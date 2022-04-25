var hasCycle = function (head) {
  if (!head) return false
  // 快慢指针,当重合时说明有环
  let slow = head
  let fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }
  return false
}
