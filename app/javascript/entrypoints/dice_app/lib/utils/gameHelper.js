export const bsToText = (bs) => {
  const map = {
    b: '大',
    s: '小',
    '-': '豹',
  }

  return map[bs] || ''
}
export const bsToClassName = (bs) => {
  const map = {
    b: 'big',
    s: 'small',
    '-': 'triple',
  }

  return map[bs] || ''
}
