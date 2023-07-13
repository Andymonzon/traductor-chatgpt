import { Request, Response } from 'express'
import { translate } from '../services/translate.ts'

export const translatePost = async (req: Request, res: Response) => {
  const { fromLanguage, toLanguage, text } = req.body
  try {
    const response = await translate({ fromLanguage, toLanguage, text })
    console.log(response)
    res.json({ translation: response })
  } catch (error) {
    console.log(error)
  }
}
