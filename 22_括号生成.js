var generateParenthesis = function (n) {
  // 回溯
  // 当有左括号剩余时可以选左括号
  // 当右括号的剩余数量大于左括号剩余数量时,才可以选右括号
  // 结束条件: 当str.length为2n时,加入数组返回
  // 参数:左剩余值,右剩余值,str
  let res = []
  function dfs(Lremain, Rremian, str) {
    if (str.length === 2 * n) {
      res.push(str)
      return
    }
    if (Lremain > 0) {
      dfs(Lremain - 1, Rremian, str + '(')
    }
    if (Rremian > Lremain) {
      dfs(Lremain, Rremian - 1, str + ')')
    }
  }
  dfs(n, n, '')
  return res
}
