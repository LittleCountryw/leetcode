var threeSum = function (nums) {
  if (nums.length < 3) return []

  nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let value = nums[i] + nums[left] + nums[right]
      if (value < 0) {
        left++
      } else if (value > 0) {
        right--
      } else {
        res.push([nums[i], nums[left], nums[right]])
        while (nums[left + 1] === nums[left] && left < right) left++
        while (nums[right - 1] === nums[right] && left < right) right--
        left++
        right--
      }
    }
  }
  return res
}
