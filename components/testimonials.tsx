"use client"
export default function Testimonials() {
  const testimonials = [
    {
      stars: '★★★★★',
      text: '"Finally! I hate going to the local dhobi and arguing about which shirt got ruined. Transparent pricing + photo proof? I\'m in from day one."',
      author: 'Rohan M.',
      location: 'Software Engineer, Andheri',
      avatar: '👨‍💼',
    },
    {
      stars: '★★★★★',
      text: '"As a working mom, I spend 3 hours every weekend on laundry. I would pay double for someone to just handle this. Please launch fast!"',
      author: 'Priya S.',
      location: 'Marketing Manager, Powai',
      avatar: '👩',
    },
    {
      stars: '★★★★★',
      text: '"The monthly pass idea is brilliant. Bachelors in PGs need this more than anyone. Fixed cost, no hassle. Just launch in Bandra already."',
      author: 'Arjun K.',
      location: 'MBA Student, Bandra',
      avatar: '👨‍🎓',
    },
  ]

  return (
    <section style={{ padding: '100px 5%', background: 'var(--white)' }}>
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
        <span style={{ width: '24px', height: '2px', background: 'var(--teal)', borderRadius: '99px' }} />
        Early Feedback
      </div>

      <h2 className="font-serif text-5xl font-black mb-4" style={{ color: 'var(--ink)' }}>
        People are <span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>excited.</span>
      </h2>

      <p className="reveal" style={{ fontSize: '1rem', color: 'var(--ink-muted)', maxWidth: '560px', lineHeight: '1.7', marginBottom: '60px' }}>
        We've been talking to potential users across Mumbai. Here's what they had to say.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {testimonials.map((testi, idx) => (
          <div
            key={idx}
            className="reveal"
            style={{
              background: 'var(--warm-50)',
              borderRadius: '20px',
              padding: '28px',
              border: '1px solid rgba(42,157,143,0.08)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(42,157,143,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ color: 'var(--sand)', fontSize: '0.9rem', marginBottom: '14px', letterSpacing: '2px' }}>
              {testi.stars}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)', lineHeight: '1.7', marginBottom: '20px', fontStyle: 'italic' }}>
              {testi.text}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  background: 'var(--teal-pale)',
                }}
              >
                {testi.avatar}
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.88rem', color: 'var(--ink)' }}>
                  {testi.author}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--ink-light)' }}>
                  {testi.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
