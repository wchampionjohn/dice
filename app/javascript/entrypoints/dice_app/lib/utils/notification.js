import { toast } from 'react-toastify'

export const showNotification = (flash) => {
  const { message, type } = flash
  toast(message, {
    type,
    autoClose: 3000,
  })
}
