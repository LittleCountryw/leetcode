var maxDepth = function (root) {
  function find(node) {
    // 对于根节点和只有一颗子树的节点
    if (!node) return 0
    // 对于叶子节点
    if (!node.left && !node.right) return 1
    // 对于普通节点
    let leftDepth = find(node.left)
    let rightDepth = find(node.right)
    let depth = 1 + Math.max(leftDepth, rightDepth)
    return depth
  }
  return find(root)
}
