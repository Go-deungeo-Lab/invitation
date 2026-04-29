import { useState, useEffect } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { db } from '../firebase'
import {
  collection, addDoc, onSnapshot,
  orderBy, query, serverTimestamp
} from 'firebase/firestore'

export default function Guestbook() {
  const ref = useFadeIn()
  const [messages, setMessages] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    return () => unsub()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return
    setSubmitting(true)
    try {
      await addDoc(collection(db, 'guestbook'), {
        name: name.trim(),
        message: text.trim(),
        createdAt: serverTimestamp(),
      })
      setName('')
      setText('')
      setShowForm(false)
    } finally {
      setSubmitting(false)
    }
  }

  const formatDate = (ts) => {
    if (!ts) return ''
    const d = ts.toDate()
    return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
  }

  return (
    <section className="msg-section fade-section" ref={ref}>

      <div className="msg-header">
        <p className="msg-title">MESSAGE</p>
        <p className="msg-subtitle">저희 둘에게 따뜻한 방명록을 남겨주세요</p>
      </div>

      <div className="msg-list">
        {messages.length === 0 ? (
          <p className="msg-empty">아직 작성된 메시지가 없습니다.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="msg-card">
              <p className="msg-text">{msg.message}</p>
              <div className="msg-meta">
                <span className="msg-from">From <span className="msg-name">{msg.name}</span></span>
                <span className="msg-date">{formatDate(msg.createdAt)}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {showForm && (
        <div className="msg-form-wrap">
          <form className="msg-form" onSubmit={handleSubmit}>
            <input
              className="msg-input"
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
            />
            <textarea
              className="msg-textarea"
              placeholder="축하 메시지를 남겨주세요 :)"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={300}
            />
            <div className="msg-form-btns">
              <button type="button" className="msg-cancel-btn" onClick={() => setShowForm(false)}>취소</button>
              <button type="submit" className="msg-submit-btn" disabled={submitting}>
                {submitting ? '저장 중...' : '남기기'}
              </button>
            </div>
          </form>
        </div>
      )}

      {!showForm && (
        <button className="msg-open-btn" onClick={() => setShowForm(true)}>
          <span>메시지 남기기</span>
        </button>
      )}

    </section>
  )
}
