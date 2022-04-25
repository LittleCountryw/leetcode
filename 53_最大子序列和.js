var maxSubArray = function (nums) {
  let sum = -Infinity
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
    if (total > sum) {
      sum = total
    }
    if (total < 0) {
      total = 0
    }
  }
  return sum
}
