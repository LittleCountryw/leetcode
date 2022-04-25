var maxAreaOfIsland = function (grid) {
  let row = grid.length
  let col = grid[0].length
  let max = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        let result = dfs(i, j)
        max = result > max ? result : max
      }
    }
  }
  return max

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] == 0) return 0
    grid[i][j] = 0
    let left = dfs(i, j + 1)
    let right = dfs(i, j - 1)
    let top = dfs(i - 1, j)
    let bottom = dfs(i + 1, j)
    return 1 + left + right + top + bottom
  }
}
