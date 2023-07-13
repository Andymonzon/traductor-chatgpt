import React from 'react'
import { AUTO_LANGUAGES, SUPPORTED_LANGUAGES } from '../constants'
import { SectionType, type FromLanguage, type Language } from '../types.d'

type Props =
    | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SectionType.TO, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: React.FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <form className='formulario-idiomas'>
      <select placeholder="Seleccione el idioma" onChange={handleChange} value={value}>
        {type === SectionType.From && <option value={AUTO_LANGUAGES}>Detectar Idioma</option>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
          <option key={key} value={key} className='opciones-idiomas'>
            {literal}
          </option>
        ))}
      </select>
    </form>
  )
}
