'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    freq: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 500)
  }

  return (
    <section className="bg-[var(--cream)] text-center" id="waitlist" style={{ padding: '100px 5%' }}>
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div style={{ maxWidth: '660px', margin: '0 auto' }}>
        <div
          className="reveal"
          style={{
            display: 'inline-block',
            width: '100%',
            background: 'linear-gradient(135deg, var(--teal-pale), var(--warm-100))',
            borderRadius: '28px',
            padding: '56px 48px',
            border: '1px solid rgba(42,157,143,0.15)',
            boxShadow: '0 20px 80px rgba(42,157,143,0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'JetBrains Mono',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              fontWeight: '500',
              marginBottom: '12px',
              justifyContent: 'center',
            }}
          >
            <span style={{ width: '24px', height: '2px', background: 'var(--teal)', borderRadius: '99px', display: 'none' }} />
            Join the Waitlist
          </div>

          <h2 className="font-serif text-5xl font-black mb-3" style={{ color: 'var(--ink)' }}>
            Be first when we <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>launch.</span>
          </h2>

          <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)', marginBottom: '28px', lineHeight: '1.6' }}>
            WashWala is launching in Mumbai soon. Join the waitlist to get early access, founding member pricing, and updates straight to your inbox.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              marginBottom: '32px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { num: '250+', label: 'On Waitlist' },
              { num: 'Mumbai', label: 'First City' },
              { num: 'Soon™', label: 'Launch Date' },
            ].map((item, i) => (
              <div key={i}>
                <span className="font-serif text-3xl font-black" style={{ color: 'var(--teal)', display: 'block' }}>
                  {item.num}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-light)' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--ink)' }} htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Rohan Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '13px 16px',
                      border: '1.5px solid rgba(42,157,143,0.2)',
                      borderRadius: '12px',
                      background: 'var(--white)',
                      fontSize: '0.92rem',
                      color: 'var(--ink)',
                      fontFamily: 'DM Sans',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      outline: 'none',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--teal)'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(42,157,143,0.12)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(42,157,143,0.2)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--ink)' }} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="rohan@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '13px 16px',
                      border: '1.5px solid rgba(42,157,143,0.2)',
                      borderRadius: '12px',
                      background: 'var(--white)',
                      fontSize: '0.92rem',
                      color: 'var(--ink)',
                      fontFamily: 'DM Sans',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      outline: 'none',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--teal)'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(42,157,143,0.12)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(42,157,143,0.2)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--ink)' }} htmlFor="role">
                    I am a...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '13px 16px',
                      border: '1.5px solid rgba(42,157,143,0.2)',
                      borderRadius: '12px',
                      background: 'var(--white)',
                      fontSize: '0.92rem',
                      color: 'var(--ink)',
                      fontFamily: 'DM Sans',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="">Who are you?</option>
                    <option value="bachelor">🏠 Bachelor / PG Resident</option>
                    <option value="working_professional">💼 Working Professional</option>
                    <option value="homemaker">🏡 Homemaker</option>
                    <option value="student">🎓 Student</option>
                    <option value="family">👨‍👩‍👧 Family / Household</option>
                    <option value="investor">💡 Potential Investor</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--ink)' }} htmlFor="freq">
                    How often do you wash?
                  </label>
                  <select
                    id="freq"
                    name="freq"
                    value={formData.freq}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '13px 16px',
                      border: '1.5px solid rgba(42,157,143,0.2)',
                      borderRadius: '12px',
                      background: 'var(--white)',
                      fontSize: '0.92rem',
                      color: 'var(--ink)',
                      fontFamily: 'DM Sans',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="">Laundry frequency</option>
                    <option value="daily">🔄 Daily (need regular pickup)</option>
                    <option value="twice_week">📅 2–3 times a week</option>
                    <option value="once_week">📆 Once a week</option>
                    <option value="fortnightly">🗓️ Every 2 weeks</option>
                    <option value="monthly">📋 Monthly bulk wash</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: 'var(--teal)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '15px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: 'DM Sans',
                  transition: 'all 0.25s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginTop: '6px',
                  boxShadow: '0 6px 24px rgba(42,157,143,0.3)',
                  opacity: loading ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = 'var(--teal-light)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 10px 32px rgba(42,157,143,0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = 'var(--teal)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(42,157,143,0.3)'
                  }
                }}
              >
                🧺 Reserve My Spot
              </button>

              <p style={{ fontSize: '0.78rem', color: 'var(--ink-light)', textAlign: 'center', marginTop: '10px' }}>
                No spam, ever. Just laundry updates. 🫧
              </p>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '32px', animation: 'fadeUp 0.5s ease' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
              <div className="font-serif text-2xl font-black" style={{ color: 'var(--ink)', marginBottom: '10px' }}>
                You're on the list!
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)' }}>
                We'll reach out with early access details soon. In the meantime, tell a friend who hates doing laundry 😄
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
