import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import { CookieBannerProvider } from './components/layout/CookieBanner'

export default function App() {
  return (
    <BrowserRouter>
      <CookieBannerProvider>
        <AppRouter />
      </CookieBannerProvider>
    </BrowserRouter>
  )
}
