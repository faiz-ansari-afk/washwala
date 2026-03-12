'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    icon: '📅',
    title: 'Schedule a Pickup',
    desc: 'Choose a time slot that works for you. Our delivery partner shows up at your door — no stepping out required.',
  },
  {
    num: '02',
    icon: '👗',
    title: 'Choose Wash Type',
    desc: 'Select Regular Wash, Gentle Wash, Dry Clean, or Steam Press for each garment. Every cloth gets the right treatment.',
  },
  {
    num: '03',
    icon: '🏭',
    title: 'We Do the Work',
    desc: 'Your clothes go to our partner laundry facility. Track progress live in the app — just like ordering from Zomato.',
  },
  {
    num: '04',
    icon: '📦',
    title: 'Clean Delivery',
    desc: 'Fresh, clean, neatly packed clothes delivered back to your door. Rate us and re-order in one tap next time.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
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
    <section
      ref={sectionRef}
      className="bg-white"
      id="how"
      style={{ padding: '100px 5%' }}
    >
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
            content: '""',
            width: '24px',
            height: '2px',
            background: 'var(--teal)',
            borderRadius: '99px',
          }}
        />
        How It Works
      </div>

      <h2
        className="font-serif text-5xl font-black mb-4"
        style={{ lineHeight: '1.15', color: 'var(--ink)' }}
      >
        As simple as ordering <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>food.</span>
      </h2>

      <p
        className="reveal"
        style={{
          fontSize: '1rem',
          color: 'var(--ink-muted)',
          maxWidth: '560px',
          lineHeight: '1.7',
          marginBottom: '60px',
        }}
      >
        Four steps, zero effort on your part. We handle everything from your doorstep to fresh delivery back.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
        }}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el
            }}
            className="reveal"
            style={{
              background: 'var(--warm-50)',
              borderRadius: '20px',
              padding: '36px 28px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(42,157,143,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(26,26,46,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontFamily: 'Playfair Display',
                fontSize: '4rem',
                fontWeight: '900',
                color: 'rgba(42,157,143,0.08)',
                lineHeight: '1',
              }}
            >
              {step.num}
            </div>

            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'var(--teal-pale)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '20px',
              }}
            >
              {step.icon}
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '10px', color: 'var(--ink)' }}>
              {step.title}
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', lineHeight: '1.6' }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
