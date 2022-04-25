var merge = function (nums1, m, nums2, n) {
  // 双指针,两个都从后向前
  m = m - 1 //num1
  n = n - 1 //num2
  let i = nums1.length - 1
  while (n >= 0) {
    if (nums1[m] >= nums2[n] && m >= 0) {
      nums1[i] = nums1[m]
      m--
    } else {
      nums1[i] = nums2[n]
      n--
    }
    i--
  }
}
