import {Router} from 'express'
import {translatePost} from '../controllers/translate.controller.ts'

const router = Router()

router.post('/translate', translatePost)

export default router