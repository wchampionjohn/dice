import axios from 'axios'

export const apiCreateGame = async (params) => {
  const response = await axios.post('/api/games', {placed_items: params})
  return response.data
}

export const apiGetGames = async () => {
  const response = await axios.get('/api/games')
  return response.data
}
