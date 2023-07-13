import { SendDataRequest } from '../api/apiTranslate'
import { type Request } from '../types.d'

export const useRequest = () => {
  const sendData = async (data: Request) => {
    try {
      const response = await SendDataRequest(data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  return {
    sendData
  }
}
