import { useState, useEffect } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const WEDDING = new Date(2026, 4, 23, 13, 0, 0)

function buildCalendar(year, month) {
  const first = new Date(year, month, 1).getDay()
  const days = new Date(year, month + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < first; i++) cells.push(null)
  for (let d = 1; d <= days; d++) cells.push(d)
  return cells
}

function pad(n) { return String(n).padStart(2, '0') }

function HeartIcon() {
  return (
    <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
      <path d="M0.88721 5.6442L5.23558 9.85513C5.50241 10.1135 5.92616 10.1135 6.19299 9.85513L10.5414 5.6442C11.1084 5.09504 11.4286 4.33939 11.4286 3.54999C11.4286 1.93996 10.1234 0.634766 8.51334 0.634766H8.37789C7.58576 0.634766 6.82469 0.942878 6.25565 1.49393L5.74766 1.98587C5.72906 2.00388 5.69951 2.00388 5.68091 1.98587L5.17292 1.49393C4.60388 0.942878 3.84281 0.634766 3.05068 0.634766H2.91523C1.30519 0.634766 0 1.93996 0 3.54999C0 4.33939 0.320132 5.09504 0.88721 5.6442Z" fill="black"/>
    </svg>
  )
}

export default function Calendar() {
  const ref = useFadeIn()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const now = new Date()
  const diff = WEDDING - now
  const isPast = diff <= 0
  const totalSec = Math.max(0, Math.floor(diff / 1000))
  const days  = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const mins  = Math.floor((totalSec % 3600) / 60)
  const secs  = totalSec % 60

  const cells  = buildCalendar(2026, 4)
  const headers = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <section className="cal-section fade-section" ref={ref}>

      {/* WEDDING DAY 타이틀 */}
      <div className="cal-title-wrap">
        <p className="cal-title">WEDDING DAY</p>
      </div>

      {/* 날짜 */}
      <div className="cal-date-wrap">
        <p className="cal-date-kr">2026년 5월 23일 토요일 | 오후 1시</p>
        <p className="cal-date-en">Saturday, May 23, 2026 | PM 1:00</p>
      </div>

      <div className="cal-rule" />

      {/* 달력 그리드 */}
      <div className="cal-grid">
        {headers.map((h, i) => (
          <div key={h} className={`cal-hd${i === 0 ? ' sun' : ''}`}>{h}</div>
        ))}
        {cells.map((d, i) => {
          if (!d) return <div key={`e${i}`} />
          const dow = i % 7
          const isWedding = d === 23
          if (isWedding) return (
            <div key={d} className="cal-wedding-wrap">
              <div className="cal-wedding">{d}</div>
            </div>
          )
          return (
            <div key={d} className={`cal-day${dow === 0 ? ' sun' : dow === 6 ? ' sat' : ''}`}>
              {d}
            </div>
          )
        })}
      </div>

      <div className="cal-rule" />

      {/* 카운트다운 */}
      <div className="cal-countdown">
        {[
          { num: pad(days),  label: 'DAYS' },
          { num: pad(hours), label: 'HOURS' },
          { num: pad(mins),  label: 'MINS' },
          { num: pad(secs),  label: 'SECS' },
        ].map(({ num, label }) => (
          <div key={label} className="cal-box">
            <div className="cal-box-num">{num}</div>
            <div className="cal-box-label">{label}</div>
          </div>
        ))}
      </div>

      {/* D-day 문구 */}
      <div className="cal-dday">
        {isPast ? (
          <span>결혼식이 진행되었습니다</span>
        ) : (
          <>
            김도기
            <span className="cal-dday-heart"><HeartIcon /></span>
            안고은 결혼식이
            <span className="cal-dday-days"> {days}일</span>
            &nbsp;남았습니다
          </>
        )}
      </div>

    </section>
  )
}
