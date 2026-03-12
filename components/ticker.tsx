export default function Ticker() {
  const messages = [
    '🧺 Pickup from your door',
    '✨ Fresh & clean delivery',
    '💧 Regular · Gentle · Dry Clean · Steam Press',
    '📱 Track your order live',
    '🧾 Transparent per-item pricing',
    '🚀 Launching in Mumbai soon',
  ]

  return (
    <div className="overflow-hidden bg-[var(--teal)] text-white py-2.5 text-[0.82rem] font-medium font-mono tracking-wider">
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-inner {
          animation: ticker 28s linear infinite;
        }
      `}</style>
      <div className="ticker-inner flex whitespace-nowrap">
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="px-10">
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
