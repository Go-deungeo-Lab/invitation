import { useState } from 'react'

const groups = [
  {
    label: 'Groom',
    items: [
      { name: '홍길동', bank: '신한은행', number: '110-123-456789' },
      { name: '홍아버지 (부)', bank: '국민은행', number: '123456-78-901234' },
    ],
  },
  {
    label: 'Bride',
    items: [
      { name: '김지수', bank: '카카오뱅크', number: '3333-01-1234567' },
      { name: '김아버지 (부)', bank: '우리은행', number: '1002-123-456789' },
    ],
  },
]

import { useFadeIn } from '../hooks/useFadeIn'

export default function Account() {
  const ref = useFadeIn()
  const [copied, setCopied] = useState(null)

  const handleCopy = (number, key) => {
    navigator.clipboard.writeText(number)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="account-section fade-section" ref={ref}>
      <p className="section-label">마음 전하기</p>
      {groups.map((group) => (
        <div key={group.label} className="account-group">
          <div className="account-group-label">{group.label}</div>
          {group.items.map((item) => {
            const key = `${group.label}-${item.name}`
            return (
              <div key={key} className="account-row">
                <div className="account-info">
                  <div>{item.name}</div>
                  <small>{item.bank} {item.number}</small>
                </div>
                <button className="copy-btn" onClick={() => handleCopy(item.number, key)}>
                  {copied === key ? '복사됨 ✓' : '복사'}
                </button>
              </div>
            )
          })}
        </div>
      ))}
    </section>
  )
}
