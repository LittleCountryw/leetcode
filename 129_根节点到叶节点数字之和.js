var sumNumbers = function (root) {
  function calc(node, cur) {
    // 对于只有一颗子树的
    if (!root) return 0
    cur = cur * 10 + node.val
    if (!node.left && !node.right) {
      return cur
    }
    return calc(node.left, cur) + calc(node.right, cur)
  }
  return calc(root, 0)
}
