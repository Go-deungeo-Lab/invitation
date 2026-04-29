import { useFadeIn } from '../hooks/useFadeIn'

function RainbowArcs() {
  return (
    <div className="rainbow-wrap">
      <svg width="160" height="46" viewBox="0 0 160 46" fill="none">
        {/* 바깥 호 */}
        <path
          className="arc arc-outer"
          d="M 42 43 A 38 38 0 0 1 118 43"
          stroke="#c0c0c0" strokeWidth="2.2" strokeLinecap="round"
        />
        {/* 중간 호 */}
        <path
          className="arc arc-mid"
          d="M 54 43 A 26 26 0 0 1 106 43"
          stroke="#c0c0c0" strokeWidth="2.2" strokeLinecap="round"
        />
        {/* 안쪽 호 */}
        <path
          className="arc arc-inner"
          d="M 66 43 A 14 14 0 0 1 94 43"
          stroke="#c0c0c0" strokeWidth="2.2" strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default function Greeting() {
  const ref = useFadeIn()
  return (
    <section className="greeting-section fade-section" ref={ref}>
      <RainbowArcs />

      <p className="quote-text">
        사람이 온다는 건 실은 어마어마한 일이다.<br />
        그는 그의 과거와 현재와 그리고<br />
        그의 미래와 함께 오기 때문이다.<br />
        한 사람의 일생이 오기 때문이다.
      </p>
      <p className="quote-source">– 정현종, '방문객'</p>

      <div className="greeting-divider" />

      <p className="greeting-message">
        저희 두 사람이 함께하는 새로운 시작에<br />
        귀한 발걸음으로 축복해 주시면 감사하겠습니다.
      </p>

      <p className="couple-names-text">신랑 김도기 · 신부 안고은</p>

      <div className="greeting-invite-img">
        <img src="/invite-photo.jpg" alt="invite" className="greeting-invite-photo" />
      </div>
    </section>
  )
}
