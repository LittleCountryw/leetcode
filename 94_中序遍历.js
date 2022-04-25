var inorderTraversal = function (root) {
  const res = []
  let stack = []
  let cur = root
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      let node = stack.pop()
      res.push(node.val)
      cur = node.right
    }
  }
  return res
}
