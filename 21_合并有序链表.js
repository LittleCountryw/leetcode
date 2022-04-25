var mergeTwoLists = function (list1, list2) {
  // 双指针，比较和插入
  let p1 = list1
  let p2 = list2

  let dummyhead = new ListNode(0)
  let p = dummyhead

  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }
  if (p1) {
    p.next = p1
  } else {
    p.next = p2
  }
  return dummyhead.next
}
