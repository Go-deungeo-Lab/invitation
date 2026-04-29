import { useFadeIn } from '../hooks/useFadeIn'

export default function Info() {
  const ref = useFadeIn()
  return (
    <section className="loc-section fade-section" ref={ref}>

      <div className="loc-header">
        <p className="loc-title">LOCATION</p>
        <div className="loc-addr">경기 여주시 점동면 성주로 946</div>
      </div>

      <div className="loc-image">
        <img src="/location-photo.jpg" alt="venue" className="loc-photo" />
      </div>

      <div className="loc-transport">

        {/* 자차 */}
        <div className="loc-transport-block">
          <div className="loc-transport-row">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 11C4.55228 11 5 10.5523 5 10C5 9.44772 4.55228 9 4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11Z" fill="#999"/>
              <path d="M14 11C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11Z" fill="#999"/>
              <path d="M16 7.5H2" stroke="#999" strokeMiterlimit="10"/>
              <path d="M18 7H15L16 9H18V7Z" fill="#999"/>
              <path d="M3 7H0V9H2L3 7Z" fill="#999"/>
              <path d="M1.5 15V10L3 7.5L3.72147 3.1712C3.8822 2.20683 4.71658 1.5 5.69425 1.5H12.3057C13.2834 1.5 14.1178 2.20683 14.2785 3.1712L15 7.5L16.5 10V15H1.5Z" stroke="#999"/>
              <path d="M13 15H16V17.5C16 17.7761 15.7761 18 15.5 18H13.5C13.2239 18 13 17.7761 13 17.5V15Z" fill="#999"/>
              <path d="M2 15H5V17.5C5 17.7761 4.77614 18 4.5 18H2.5C2.22386 18 2 17.7761 2 17.5V15Z" fill="#999"/>
              <line x1="3" y1="12.5" x2="15" y2="12.5" stroke="#999"/>
            </svg>
            <span className="loc-transport-label">자차</span>
          </div>
          <p className="loc-transport-text">내비게이션 : '경기 여주시 점동면 성주로 946' 검색</p>
          <div className="loc-transport-divider" />
        </div>

        {/* 주차 */}
        <div className="loc-transport-block">
          <div className="loc-transport-row">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.5 13.5V9M6.5 9V4.5H10.25C11.4926 4.5 12.5 5.50736 12.5 6.75C12.5 7.99264 11.4926 9 10.25 9H6.5Z" stroke="#999" strokeLinecap="square"/>
              <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="#999"/>
            </svg>
            <span className="loc-transport-label">주차</span>
          </div>
          <p className="loc-transport-text">무지개운수 기사님들 주차 무료</p>
        </div>

      </div>

    </section>
  )
}
