var lengthOfLongestSubstring = function (s) {
  let map = new Map()
  let j = 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(j, map.get(s[i]) + 1)
    }
    map.set(s[i], i)
    max = i - j + 1 > max ? i - j + 1 : max
  }
  return max
}
