export default function CTAShield() {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-auto max-w-[180px]"
    >
      <defs>
        <radialGradient id="cta-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7146ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7146ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cta-shield-grad" x1="60" y1="20" x2="140" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d1b55" />
          <stop offset="100%" stopColor="#07112c" />
        </linearGradient>
        <linearGradient id="cta-border-grad" x1="60" y1="20" x2="140" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#13c8ff" />
          <stop offset="50%" stopColor="#7146ff" />
          <stop offset="100%" stopColor="#ad4cff" />
        </linearGradient>
        <filter id="cta-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <ellipse cx="100" cy="120" rx="80" ry="90" fill="url(#cta-glow)" />

      {/* Orbital ring */}
      <ellipse cx="100" cy="130" rx="88" ry="26"
        stroke="#7146ff" strokeOpacity="0.35" strokeWidth="1"
        strokeDasharray="6 5" />

      {/* Shield */}
      <path
        d="M100 20 L158 48 L158 130 C158 174 124 205 100 215 C76 205 42 174 42 130 L42 48 Z"
        fill="url(#cta-shield-grad)"
        stroke="url(#cta-border-grad)" strokeWidth="2.2"
        filter="url(#cta-glow-filter)"
      />
      {/* Shield inner highlight */}
      <path
        d="M75 40 L75 100"
        stroke="white" strokeOpacity="0.06" strokeWidth="18" strokeLinecap="round"
      />

      {/* Padlock body */}
      <rect x="76" y="120" width="48" height="40" rx="6"
        fill="rgba(19,200,255,0.15)" stroke="#13c8ff" strokeWidth="1.8" />
      {/* Padlock shackle */}
      <path
        d="M85 120 L85 108 Q85 92 100 92 Q115 92 115 108 L115 120"
        stroke="#2878ff" strokeWidth="2.2" fill="none" strokeLinecap="round"
      />
      {/* Keyhole */}
      <circle cx="100" cy="136" r="5.5" fill="rgba(19,200,255,0.5)" />
      <rect x="97.5" y="138" width="5" height="10" rx="2" fill="rgba(19,200,255,0.5)" />

      {/* Orbital dots */}
      <circle cx="28" cy="130" r="3.5" fill="#13c8ff" opacity="0.7" />
      <circle cx="172" cy="130" r="3" fill="#7146ff" opacity="0.7" />
      <circle cx="44" cy="158" r="2.5" fill="#2878ff" opacity="0.5" />
      <circle cx="156" cy="104" r="2.5" fill="#13c8ff" opacity="0.5" />
    </svg>
  );
}
