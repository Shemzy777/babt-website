import { createContext, useContext, useState } from 'react'

const CookieContext = createContext()

export function CookieBannerProvider({ children }) {
  const [accepted, setAccepted] = useState(() => {
    return localStorage.getItem('cookie-consent') !== null
  })

  const accept = () => {
    localStorage.setItem('cookie-consent', 'all')
    setAccepted(true)
  }

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    setAccepted(true)
  }

  return (
    <CookieContext.Provider value={{ accepted, accept, refuse }}>
      {children}
    </CookieContext.Provider>
  )
}

export default function CookieBanner() {
  const { accepted, accept, refuse } = useContext(CookieContext)
  const [showCustomise, setShowCustomise] = useState(false)
  const [prefs, setPrefs] = useState({ analytical: false, marketing: false })

  if (accepted) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-xl">
      <div className="container py-5">
        {!showCustomise ? (
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-sm text-neutral-600 flex-1">
              This website uses cookies. Some are necessary, while others help us analyse traffic and deliver customised experiences.{' '}
              <a href="/ng/en/legals/cookies-policy" className="text-brand-blue hover:underline">
                Privacy Policy
              </a>
            </p>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <button
                onClick={() => setShowCustomise(true)}
                className="px-4 py-2 text-sm border border-neutral-300 rounded-sm text-neutral-700 hover:border-neutral-400 transition-colors"
              >
                Customise settings
              </button>
              <button
                onClick={refuse}
                className="px-4 py-2 text-sm border border-neutral-300 rounded-sm text-neutral-700 hover:border-neutral-400 transition-colors"
              >
                Refuse all cookies
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm bg-brand-blue text-white rounded-sm hover:bg-brand-navy transition-colors font-medium"
              >
                Accept all cookies
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-semibold text-neutral-800 mb-4">Cookie Preferences</h3>
            <div className="space-y-3 mb-5">
              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-sm">
                <div>
                  <p className="text-sm font-medium text-neutral-800">Compulsory Cookies</p>
                  <p className="text-xs text-neutral-500">This website cannot function properly without these cookies.</p>
                </div>
                <span className="text-xs font-medium text-brand-blue">Always on</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-sm">
                <div>
                  <p className="text-sm font-medium text-neutral-800">Analytical Cookies</p>
                  <p className="text-xs text-neutral-500">Help us enhance our website by collecting usage information.</p>
                </div>
                <button
                  onClick={() => setPrefs(p => ({ ...p, analytical: !p.analytical }))}
                  className={`w-10 h-5 rounded-full transition-colors relative ${prefs.analytical ? 'bg-brand-blue' : 'bg-neutral-300'}`}
                  role="switch"
                  aria-checked={prefs.analytical}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${prefs.analytical ? 'translate-x-5' : ''}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-sm">
                <div>
                  <p className="text-sm font-medium text-neutral-800">Marketing Cookies</p>
                  <p className="text-xs text-neutral-500">Used to increase the relevancy of our advertising campaigns.</p>
                </div>
                <button
                  onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                  className={`w-10 h-5 rounded-full transition-colors relative ${prefs.marketing ? 'bg-brand-blue' : 'bg-neutral-300'}`}
                  role="switch"
                  aria-checked={prefs.marketing}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${prefs.marketing ? 'translate-x-5' : ''}`} />
                </button>
              </div>
            </div>
            <button
              onClick={accept}
              className="px-5 py-2 bg-brand-blue text-white text-sm font-medium rounded-sm hover:bg-brand-navy transition-colors"
            >
              Save my choices
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
