var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) {
    let levelLen = queue.length
    let levelRes = []
    for (let i = 0; i < levelLen; i++) {
      let node = queue.shift()
      levelRes.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(levelRes)
  }
  return res
}
