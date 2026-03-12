'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    quote:
      'Finally, a laundry service that understands my schedule! Perfect for busy professionals.',
    author: 'Priya M.',
    location: 'Mumbai',
    avatar: 'PM',
  },
  {
    stars: 5,
    quote:
      'The app is so intuitive, and the turnaround is incredibly fast. Highly recommended!',
    author: 'Rajesh K.',
    location: 'Mumbai',
    avatar: 'RK',
  },
  {
    stars: 5,
    quote:
      'Transparent pricing, professional service, and reliable delivery. Exactly what I was looking for.',
    author: 'Ananya S.',
    location: 'Mumbai',
    avatar: 'AS',
  },
]

export default function Trust() {
  return (
    <section className="py-20 px-6 bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Loved by <span className="text-primary">Mumbaikar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm"
            >
              <div className="flex gap-1 mb-4 text-amber">
                {'★'.repeat(testimonial.stars)}
              </div>
              <p className="text-text-mid leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-text-dark text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-text-soft">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
