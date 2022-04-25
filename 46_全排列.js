var permute = function (nums) {
  let path = []
  let res = []
  let used = {}
  function backTracking() {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[nums[i]]) continue
      path.push(nums[i])
      used[nums[i]] = true
      backTracking()
      path.pop()
      used[nums[i]] = false
    }
  }
  backTracking()
  return res
}
