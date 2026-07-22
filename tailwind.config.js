/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ── Corporate blue identity (original Forvis Mazars palette) ── */
        corp: {
          blue:       '#0072CE',
          'blue-mid': '#005BAD',
          'blue-dark':'#003D7A',
          navy:       '#002A5C',
          'navy-dark':'#001840',
          'blue-50':  '#F4F8FE',
          'blue-100': '#EBF5FF',
          'blue-200': '#C8DEFF',
          'blue-300': '#90BFFF',
        },
        /* ── Text scale ── */
        ink: {
          DEFAULT: '#1A2740',
          body:    '#4A5B72',
          muted:   '#8596AB',
          subtle:  '#B0BDCc',
        },
        /* ── Surfaces ── */
        surface: {
          DEFAULT: '#FFFFFF',
          alt:     '#F8FAFC',
          blue:    '#F4F8FE',
        },
        /* ── Borders ── */
        border: {
          DEFAULT: '#C8D6E8',
          light:   '#E4EDF8',
        },
        /* ── Legacy aliases so existing inner pages don't break ── */
        brand: {
          blue:        '#0072CE',
          navy:        '#002A5C',
          'navy-dark': '#001840',
          'blue-light':'#EBF5FF',
          'blue-mid':  '#005BAD',
        },
        neutral: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1.25rem' }],
        sm:   ['0.875rem', { lineHeight: '1.5rem'  }],
        base: ['1rem',     { lineHeight: '1.75rem' }],
        lg:   ['1.125rem', { lineHeight: '1.875rem'}],
        xl:   ['1.25rem',  { lineHeight: '1.875rem'}],
        '2xl':['1.5rem',   { lineHeight: '2rem'   }],
        '3xl':['1.875rem', { lineHeight: '2.25rem'}],
        '4xl':['2.25rem',  { lineHeight: '2.625rem'}],
        '5xl':['3rem',     { lineHeight: '3.25rem'}],
        '6xl':['3.75rem',  { lineHeight: '4rem'   }],
        '7xl':['4.5rem',   { lineHeight: '4.75rem'}],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter:  '-0.02em',
        tight:    '-0.01em',
        normal:   '0em',
        wide:     '0.05em',
        wider:    '0.1em',
        widest:   '0.15em',
      },
      spacing: {
        18: '4.5rem', 22: '5.5rem', 26: '6.5rem', 30: '7.5rem',
      },
      maxWidth: { '8xl': '88rem', '9xl': '96rem' },
      boxShadow: {
        card:   '0 1px 4px 0 rgba(26,39,64,0.07)',
        md:     '0 4px 16px 0 rgba(26,39,64,0.09)',
        lg:     '0 8px 32px 0 rgba(26,39,64,0.11)',
        xl:     '0 16px 48px 0 rgba(26,39,64,0.13)',
        navy:   '0 4px 24px 0 rgba(0,42,92,0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up':     'fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-down':  'slideDown 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity:'0', transform:'translateY(20px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        slideDown: { '0%': { opacity:'0', transform:'translateY(-8px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
