var compareVersion = function (version1, version2) {
  version1 = version1.split('.').map((item) => Number(item))
  version2 = version2.split('.').map((item) => Number(item))

  let max = Math.max(version1.length, version2.length)
  let i = 0
  while (i < max) {
    const val1 = version1[i] ?? 0
    const val2 = version2[i] ?? 0
    if (val1 > val2) return 1
    if (val1 < val2) return -1
    i++
  }
  return 0
}
