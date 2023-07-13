import axios from 'axios'
import { type Request } from '../types.d'

const URL_API = 'http://localhost:3000/api'

export const SendDataRequest = async (data: Request) => await axios.post(`${URL_API}/translate`, data)
