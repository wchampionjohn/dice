export const CHIP_VALUES = [500, 100, 10, 5, 1]

export const COLOR_MAPPING = {
  500: 'black',
  100: 'red',
  10: 'blue',
  5: 'green',
  1: 'yellow',
}

// i.e toChips(668) => { 500: 1, 100: 1, 10: 6, 5: 1, 1: 3 }
export const toChips = (number) => {
  let balance = number

  return CHIP_VALUES.reduce((accumulator, value) => {
    if (balance >= value) {
      const count = Math.floor(balance / value)
      balance -= count * value
      accumulator[value] = count
    }

    return accumulator
  }, {})
}

export const randomInt = (max, min = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
