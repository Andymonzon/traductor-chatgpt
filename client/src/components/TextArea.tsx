import React from 'react'
import { SectionType } from '../types.d'

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const getPlaceholder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

export const TextArea: React.FC<Props> = ({
  type,
  loading,
  value,
  onChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <textarea
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.TO}
      placeholder={getPlaceholder({ type, loading })}
      className="text-area-traductor"
      style={type === SectionType.From ? {} : { backgroundColor: '#d9d9d9' }}
      onChange={handleChange}
      value={value}
    ></textarea>
  )
}
