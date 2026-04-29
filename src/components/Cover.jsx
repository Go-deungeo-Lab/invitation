const PETALS = [
  { top: '8%',  delay: '0s',   dur: '5.5s', size: 6 },
  { top: '20%', delay: '1.5s', dur: '6.2s', size: 5 },
  { top: '35%', delay: '3.2s', dur: '5.8s', size: 7 },
  { top: '50%', delay: '0.8s', dur: '6.5s', size: 5 },
  { top: '65%', delay: '4.0s', dur: '5.4s', size: 6 },
  { top: '78%', delay: '2.0s', dur: '6.0s', size: 4 },
  { top: '14%', delay: '5.5s', dur: '5.7s', size: 6 },
  { top: '42%', delay: '2.8s', dur: '6.3s', size: 5 },
  { top: '58%', delay: '4.8s', dur: '5.2s', size: 7 },
  { top: '30%', delay: '6.5s', dur: '5.9s', size: 4 },
]

function PetalOverlay() {
  return (
    <div className="petal-overlay">
      {PETALS.map((p, i) => (
        <div
          key={i}
          className="petal-item"
          style={{
            top: p.top,
            left: '110%',
            width: p.size + 'px',
            height: Math.round(p.size * 1.4) + 'px',
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function Cover() {
  return (
    <div className="cover-card">
      <div className="cover-photos">

        {/* 사진 1 — 꽃잎 효과 */}
        <div className="cover-photo-item">
          <img src="/cover-photo1.jpg" alt="cover1" className="cover-photo-img" />
          <PetalOverlay />
          <span className="cover-side-text left">SAT · 1:00 PM</span>
          <span className="cover-side-num right">
            <svg width="7" height="11" viewBox="0 0 9 14" fill="none">
              <path d="M4.5 0L8.5 14H0.5L4.5 0Z" fill="#222" />
            </svg>
            13A
          </span>
        </div>

        {/* 가운데 오른쪽 이름 */}
        <div className="cover-names-right">KIM &amp; AN</div>

        {/* 사진 2 */}
        <div className="cover-photo-item">
          <img src="/cover-photo2.jpg" alt="cover2" className="cover-photo-img" />
          <PetalOverlay />
          <span className="cover-side-text left">MAY 23, 2026</span>
          <span className="cover-side-num right bottom">
            <svg width="7" height="11" viewBox="0 0 9 14" fill="none">
              <path d="M4.5 0L8.5 14H0.5L4.5 0Z" fill="#222" />
            </svg>
            12A
          </span>
        </div>

      </div>

      <div className="cover-bottom-bar">
        <span>MAY 23, 2026</span>
        <span className="sep">|</span>
        <span>토요일 오후 1시</span>
      </div>
    </div>
  )
}
