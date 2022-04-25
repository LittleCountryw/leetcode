var invertTree = function (root) {
  if (!root) return root

  function reverseTree(node) {
    if (!node.left && !node.right) return
    let tempNode
    tempNode = node.left
    node.left = node.right
    node.right = tempNode

    node.left && reverseTree(node.left)
    node.right && reverseTree(node.right)
  }

  reverseTree(root)
  return root
}
