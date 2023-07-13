import type { AUTO_LANGUAGES, SUPPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGES
export type FromLanguage = Language | AutoLanguage

export interface Parametro {
    fromLanguage: FromLanguage
    toLanguage: Language
    text: string
}