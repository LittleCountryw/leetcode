var minSubArrayLen = function (target, nums) {
  let min = nums.length + 1
  let sum = 0
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum >= target) {
      min = i - j + 1 < min ? i - j + 1 : min
      sum -= nums[j]
      j++
    }
  }
  return min > length ? 0 : min
}
