import { type AUTO_LANGUAGES, type SUPPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGES
export type FromLanguage = Language | AutoLanguage

export interface TranslationState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type TranslationAction =
    | { type: 'SET_FROM_LANGUAGES', payload: FromLanguage }
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_TO_LANGUAGES', payload: Language }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }

export enum SectionType {
  From = 'from',
  TO = 'to'
}

export interface Request {
  text: string
  fromLanguage: FromLanguage
  toLanguage: Language
}
