import { randomString } from '../lib/utils/stringHelper'

const fakeGameResults = [
  {
    bs: 's',
    dices: [1, 2, 3],
    number: 6,
    betAmount: 100,
    profit: -100,
    won_items: [
      {
        code: 'bs01',
      },
      {
        code: 'nb06',
      },
      {
        code: 'td12',
      },
      {
        code: 'td13',
      },
      {
        code: 'td23',
      },
      {
        code: 'sg01',
      },
      {
        code: 'sg02',
      },
      {
        code: 'sg03',
      },
      {
        code: 'od01',
      },
    ],
  },
  {
    bs: 'b',
    dices: [6, 5, 3],
    number: 14,
    betAmount: 200,
    profit: 0,
    won_items: [
      {
        code: 'bs02',
      },
      {
        code: 'nb14',
      },
      {
        code: 'td35',
      },
      {
        code: 'td36',
      },
      {
        code: 'td56',
      },
      {
        code: 'sg03',
      },
      {
        code: 'sg05',
      },
      {
        code: 'sg06',
      },
      {
        code: 'od01',
      },
    ],
  },
  {
    bs: 's',
    dices: [2, 2, 3],
    number: 7,
    betAmount: 89,
    profit: -89,
    won_items: [
      {
        code: 'bs01',
      },
      {
        code: 'db02',
      },
      {
        code: 'nb07',
      },
      {
        code: 'td23',
      },
      {
        code: 'sg02',
      },
      {
        code: 'sg03',
      },
      {
        code: 'od02',
      },
    ],
  },
  {
    bs: 'b',
    dices: [4, 4, 6],
    number: 14,
    betAmount: 888,
    profit: 888,
    won_items: [
      {
        code: 'bs02',
      },
      {
        code: 'db04',
      },
      {
        code: 'nb14',
      },
      {
        code: 'td46',
      },
      {
        code: 'sg04',
      },
      {
        code: 'sg06',
      },
      {
        code: 'od02',
      },
    ],
  },
  {
    bs: '-',
    dices: [1, 1, 1],
    number: 3,
    betAmount: 100,
    profit: 100,
    won_items: [
      {
        code: 'tp00',
      },
      {
        code: 'tp01',
      },
      {
        code: 'sg01',
      },
      {
        code: 'od03',
      },
    ],
  },
]
export const apiCreateGame = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        payload: {
          id: randomString(),
          ...fakeGameResults[
            Math.floor(Math.random() * fakeGameResults.length)
          ],
        },
      })
    }, 100)
  })
}
