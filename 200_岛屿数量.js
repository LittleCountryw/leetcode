var numIslands = function (grid) {
  let row = grid.length
  let col = grid[0].length
  let count = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        count++
        dfs(i, j)
      }
    }
  }
  return count
  function dfs(i, j) {
    if (grid[i][j] === 0 || i < 0 || j < 0 || i >= row || j >= col) return
    grid[i][j] = 0
    dfs(i, j + 1)
    dfs(i, j - 1)
    dfs(i - 1, j)
    dfs(i + 1, j)
  }
}
