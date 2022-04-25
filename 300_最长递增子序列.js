var lengthOfLIS = function (nums) {
  // 动态规划 dp[i] 为下标为i时最大递增序列的长度
  // 那么dp[i]就等于Math.max(dp[i],之前所有的dp[j]里的最大值+1)
  // 并且初始化dp数组全为1
  let dp = new Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  let max = 0
  for (let j = 0; j < nums.length; j++) {
    max = dp[j] > max ? dp[j] : max
  }
  return max
}
