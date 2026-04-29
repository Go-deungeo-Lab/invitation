import { useFadeIn } from '../hooks/useFadeIn'

function PersonRow({ family, relation, name, nameEn }) {
  return (
    <div className="ci-row">
      <div className="ci-left">
        <span className="ci-family">{family}</span>
        <span className="ci-no">의</span>
      </div>
      <span className="ci-rel">{relation}</span>
      <div className="ci-name">
        <span>{name}</span>
        <span className="ci-en">{nameEn}</span>
      </div>
    </div>
  )
}

export default function CoupleIntro() {
  const ref = useFadeIn()
  return (
    <section className="ci-section fade-section" ref={ref}>
      <PersonRow family="박진언" relation="동생" name="안고은" nameEn="GOEUN" />
      <div className="ci-gap" />
      <PersonRow family="최경구" relation="동생" name="김도기" nameEn="DOGI" />
    </section>
  )
}
