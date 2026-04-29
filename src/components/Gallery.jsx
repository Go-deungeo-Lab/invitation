import { useFadeIn } from '../hooks/useFadeIn'

export default function Gallery() {
  const ref = useFadeIn()
  return (
    <section className="gallery-section fade-section" ref={ref}>
      <p className="section-label">Gallery</p>
      <div className="gallery-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="gallery-item">
            사진 {i + 1}
          </div>
        ))}
      </div>
    </section>
  )
}
