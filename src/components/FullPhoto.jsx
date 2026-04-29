import { useEffect, useRef, useState } from 'react'

// Row 1: [word1 letters, word2 letters], Row 2: [word letters]
const ROWS = [
  [['M','a','y'], ['2','3']],
  [['2','0','2','6']],
]

export default function FullPhoto() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  let idx = 0
  return (
    <div className="date-reveal-section" ref={ref}>
      {ROWS.map((row, ri) => (
        <div key={ri} className={`date-reveal-row${ri === 0 ? ' has-gap' : ''}`}>
          {row.map((word, wi) => (
            <span key={wi} className="date-reveal-clip">
              {word.map((ch) => {
                const delay = (idx++) * 0.07
                return (
                  <span
                    key={ch + delay}
                    className={`date-reveal-letter${visible ? ' visible' : ''}`}
                    style={{ transitionDelay: `${delay}s` }}
                  >
                    {ch}
                  </span>
                )
              })}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
