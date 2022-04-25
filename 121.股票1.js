var maxProfit = function (prices) {
  let len = prices.length
  let dp = new Array(len).fill().map((item) => Array(2))
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp[len - 1][0]
}
