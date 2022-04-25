var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let flag = 0
  let res = []
  while (i >= 0 || j >= 0 || flag === 1) {
    let val1 = i >= 0 ? Number(num1[i]) : 0
    let val2 = j >= 0 ? Number(num2[j]) : 0
    const sum = val1 + val2 + flag
    res.push(sum % 10)
    flag = sum >= 10 ? 1 : 0
    i--
    j--
  }
  return res.reverse().join('')
}
