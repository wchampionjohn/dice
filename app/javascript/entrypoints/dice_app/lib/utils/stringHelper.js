import invert from 'lodash/invert'

const words = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
}

export const numberToWord = (number) => {
  return words[number]
}

export const wordToNumber = (word) => {
  const numbers = invert(words)
  return numbers[word]
}
export const randomString = (length = 6) =>
  Math.random().toString(36).substring(2).slice(0, length)
