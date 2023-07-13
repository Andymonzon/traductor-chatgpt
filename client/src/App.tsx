import { LanguageSelector } from './components/LanguageSelector'
import { AUTO_LANGUAGES, VOICE_FOR_LANGUAGE } from './constants'
import { useStore } from './hook/useStore'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { useRequest } from './hook/useRequest'
import { useDebounce } from './hook/useDebounce'
import { ArrowIcon, ClipboardIcon, SpeakerIcon } from './components/icons'

function App () {
  const {
    fromLanguage,
    toLanguage,
    interChangeLanguages,
    setFromLanguages,
    setToLanguage,
    fromText,
    result,
    setFromText,
    setResult,
    loading
  } = useStore()

  const { sendData } = useRequest()

  const debouncedFromText = useDebounce(fromText)

  useEffect(() => {
    if (debouncedFromText === '') return

    sendData({ text: debouncedFromText, fromLanguage, toLanguage })
      .then((res) => {
        if (res == null) return
        setResult(res.translation)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="container">
      <h1>Google Translate</h1>

      <div className="traductor">
        <div className="container-text-select">
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguages}
          />
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
          />
        </div>

        <div>
          <button
            className="btn-intercambiar"
            onClick={interChangeLanguages}
            disabled={fromLanguage === AUTO_LANGUAGES}
          >
            <ArrowIcon />
          </button>
        </div>

        <div className="container-text-select">
          <LanguageSelector
            type={SectionType.TO}
            value={toLanguage}
            onChange={setToLanguage}
          />
          <div style={{ position: 'relative' }}>
            <TextArea
              type={SectionType.TO}
              value={result}
              onChange={setResult}
              loading={loading}
            />
            <div className="btn-container-settings">
              <button onClick={handleClipboard} className="btn-settings">
                <ClipboardIcon />
              </button>
              <button onClick={handleSpeak} className="btn-settings">
                <SpeakerIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
