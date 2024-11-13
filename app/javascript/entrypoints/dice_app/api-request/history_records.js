const records = [
  {
    id: 1,
    time: '2021-09-01 12:00',
    dices: [1, 2, 3],
    bs: 'b',
    number: 12,
    betAmount: 200,
    profit: 100,
  },
  {
    id: 2,
    time: '2021-09-01 12:05',
    dices: [1, 2, 3],
    bs: 'b',
    number: 12,
    betAmount: 200,
    profit: -50,
  },
  {
    id: 3,
    time: '2021-09-01 12:10',
    dices: [1, 2, 3],
    bs: 'b',
    number: 12,
    betAmount: 200,
    profit: 200,
  },
  {
    id: 4,
    time: '2021-09-01 12:15',
    dices: [1, 2, 3],
    bs: 'b',
    number: 12,
    betAmount: 200,
    profit: 400,
  },
]

export const apiGetHistoryRecords = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        payload: {
          records,
        },
      })
    }, 500)
  })
}
