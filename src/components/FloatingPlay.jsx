import { useState, useRef, useEffect } from 'react'

export default function FloatingPlay() {
  const [playing, setPlaying] = useState(false)
  const [toast, setToast] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio('/bgm.mp3')
    audio.loop = true
    audio.volume = 0.5
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  function handleClick() {
    const audio = audioRef.current
    if (!audio) return
    const next = !playing
    setPlaying(next)
    if (next) {
      audio.play()
      setToast(true)
      setTimeout(() => setToastVisible(true), 10)
      setTimeout(() => setToastVisible(false), 2500)
      setTimeout(() => setToast(false), 3000)
    } else {
      audio.pause()
    }
  }

  return (
    <>
      {toast && (
        <div className={`music-toast${toastVisible ? ' visible' : ''}`}>
          <p>배경음악이 준비 되었습니다.</p>
        </div>
      )}
      <button
        className={`floating-play${playing ? ' playing' : ''}`}
        onClick={handleClick}
        aria-label={playing ? '음악 정지' : '음악 재생'}
      >
        <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
          {playing ? (
            <>
              <rect x="2" y="2" width="3.5" height="10" rx="1" fill="#fff" />
              <rect x="8.5" y="2" width="3.5" height="10" rx="1" fill="#fff" />
            </>
          ) : (
            <path d="M3 2L12 7L3 12V2Z" fill="#fff" />
          )}
        </svg>
        <div className="floating-play-ring" />
      </button>
    </>
  )
}
