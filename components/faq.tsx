'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How much does WashWala charge?',
    a: 'We offer three plans: Hand-to-Hand (pay per item starting ₹30), Monthly Pass (₹2,499/month for 3 items daily), and Family Bundle (₹4,999/month for up to 15 items daily). All pricing is transparent—you see the full breakdown before confirming any order.',
  },
  {
    q: 'How do I schedule a pickup?',
    a: 'Just open the app, select a time slot that works for you, and drop us a line. Our delivery partner will show up at your door within your selected window. No need to step out—we handle everything.',
  },
  {
    q: 'Can I choose the wash type for each garment?',
    a: 'Yes! For every item, you can select Regular, Gentle, Dry Clean, or Steam Press. Each piece of clothing gets exactly the treatment it needs.',
  },
  {
    q: 'What happens if something gets damaged?',
    a: 'We photograph every item at pickup and delivery. If anything goes wrong, we make it right—no arguments, no hassles. Your clothes are as important to us as they are to you.',
  },
  {
    q: "When is WashWala launching?",
    a: "We're currently in concept stage and preparing to launch in Mumbai soon. Join the waitlist for early access, founding member pricing, and exclusive updates.",
  },
  {
    q: 'Where can I download the app?',
    a: 'The WashWala app is currently in development for iOS and Android. Join the waitlist to get early access the day we launch.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '100px 5%', background: 'var(--white)' }}>
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

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
          <span style={{ width: '24px', height: '2px', background: 'var(--teal)', borderRadius: '99px' }} />
          FAQ
        </div>

        <h2 className="font-serif text-5xl font-black mb-4" style={{ color: 'var(--ink)' }}>
          Questions? We&apos;ve got <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>answers.</span>
        </h2>

        <div style={{ marginTop: '60px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="reveal"
              style={{
                borderBottom: '1px solid rgba(42,157,143,0.1)',
                paddingTop: '24px',
                paddingBottom: '24px',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <span style={{ fontSize: '1.2rem', marginTop: '2px', minWidth: '24px' }}>
                  {openIndex === idx ? '−' : '+'}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--ink)' }}>
                  {faq.q}
                </span>
              </button>

              {openIndex === idx && (
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--ink-muted)',
                    lineHeight: '1.7',
                    marginTop: '16px',
                    marginLeft: '40px',
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
