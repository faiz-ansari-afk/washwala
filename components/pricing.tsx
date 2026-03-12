'use client'

import { useEffect, useRef } from 'react'

const plans = [
  {
    icon: '🧺',
    name: 'Monthly Pass',
    tagline: '3 suits washed daily, every day',
    price: '2,499',
    period: 'per month',
    features: [
      'Up to 3 garments washed daily',
      'Daily pickup & delivery slots',
      'Regular + Gentle Wash included',
      'Live tracking on every order',
      'Priority customer support',
      '~40% savings vs. per-item pricing',
    ],
    featured: false,
  },
  {
    icon: '👕',
    name: 'Hand-to-Hand',
    tagline: 'N suits × per-item price. Pay only for what you wash.',
    price: '30',
    period: '/item',
    features: [
      'Pay only for garments you send',
      'Shirt ₹30 · Pants ₹40 · Saree ₹60',
      'Choose wash type per individual item',
      'Full price list shown before booking',
      'No commitment, order anytime',
      'Reorder same items in one tap',
    ],
    featured: true,
    popular: true,
  },
  {
    icon: '🏠',
    name: 'Family Bundle',
    tagline: 'Best for households of 3–5 people',
    price: '4,999',
    period: 'per month',
    features: [
      'Up to 15 garments per day',
      'All 4 wash types included',
      'Dedicated account manager',
      '50%+ savings vs. per-item rate',
      'Priority morning delivery slots',
      'Monthly spend report & insights',
    ],
    featured: false,
  },
]

export default function Pricing() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" style={{ padding: '100px 5%', background: 'var(--warm-50)' }}>
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
        }}
      >
        <span
          style={{
            width: '24px',
            height: '2px',
            background: 'var(--teal)',
            borderRadius: '99px',
          }}
        />
        Subscription Plans
      </div>

      <h2 className="font-serif text-5xl font-black mb-4" style={{ lineHeight: '1.15', color: 'var(--ink)' }}>
        Pick a plan that <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>fits your life.</span>
      </h2>

      <p className="reveal" style={{ fontSize: '1rem', color: 'var(--ink-muted)', maxWidth: '560px', lineHeight: '1.7', marginBottom: '60px' }}>
        Whether you're a light user or a laundry powerhouse — we have a plan built for you.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', alignItems: 'stretch' }}>
        {plans.map((plan, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el
            }}
            className="reveal"
            style={{
              background: plan.featured ? 'linear-gradient(135deg, var(--teal), #1a7a6e)' : 'var(--white)',
              borderRadius: '20px',
              padding: '36px 32px',
              border: '2px solid transparent',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              color: plan.featured ? 'white' : 'var(--ink)',
              transform: plan.featured ? 'scale(1.02)' : 'scale(1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = plan.featured ? 'var(--sand)' : 'var(--teal)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(26,26,46,0.12)'
              e.currentTarget.style.transform = plan.featured ? 'scale(1.02) translateY(-4px)' : 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = plan.featured ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            {plan.popular && (
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--sand)',
                  color: 'var(--ink)',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '99px',
                }}
              >
                Most Flexible
              </div>
            )}

            <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{plan.icon}</div>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '6px' }}>
              {plan.name}
            </h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '24px' }}>{plan.tagline}</p>

            <div className="font-serif" style={{ fontSize: '3rem', fontWeight: '900', lineHeight: '1', marginBottom: '0' }}>
              <sup style={{ fontSize: '1.2rem', verticalAlign: 'super' }}>₹</sup>
              {plan.price}
              <span style={{ fontSize: '1rem', opacity: 0.7 }}> {plan.period}</span>
            </div>

            <div
              style={{
                height: '1px',
                background: plan.featured ? 'rgba(255,255,255,0.2)' : 'rgba(42,157,143,0.15)',
                margin: '24px 0',
              }}
            />

            <ul style={{ listStyle: 'none', flex: 1 }}>
              {plan.features.map((feature, fidx) => (
                <li key={fidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', marginBottom: '12px', lineHeight: '1.4' }}>
                  <span
                    style={{
                      color: plan.featured ? 'white' : 'var(--teal)',
                      flexShrink: 0,
                      marginTop: '1px',
                      width: '18px',
                      height: '18px',
                      background: plan.featured ? 'rgba(255,255,255,0.25)' : 'var(--teal-pale)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                    }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              style={{
                marginTop: '28px',
                padding: '14px',
                borderRadius: '99px',
                border: `2px solid ${plan.featured ? 'white' : 'var(--teal)'}`,
                color: plan.featured ? 'var(--teal)' : 'var(--teal)',
                background: plan.featured ? 'white' : 'transparent',
                fontSize: '0.95rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.25s',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                if (!plan.featured) {
                  e.currentTarget.style.background = 'var(--teal)'
                  e.currentTarget.style.color = 'white'
                } else {
                  e.currentTarget.style.background = 'var(--sand)'
                  e.currentTarget.style.borderColor = 'var(--sand)'
                  e.currentTarget.style.color = 'var(--ink)'
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.featured) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--teal)'
                } else {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.borderColor = 'white'
                  e.currentTarget.style.color = 'var(--teal)'
                }
              }}
            >
              Get Early Access →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
