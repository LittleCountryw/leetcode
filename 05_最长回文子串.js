var longestPalindrome = function (s) {
  // 中心扩散分奇偶
  let res = ''
  for (let i = 0; i < s.length; i++) {
    findPalindrome(i, i)
    findPalindrome(i, i + 1)
  }
  function findPalindrome(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    res = right - left - 1 > res.length ? s.slice(left + 1, right) : res
  }
  return res
}
