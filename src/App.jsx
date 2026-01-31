import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import TrackingPage from './pages/TrackingPage'
import './App.css'
import CookiePolicy from './pages/CookiePolicy'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solicitar" element={<FormPage />} />
        <Route path="/seguimiento" element={<TrackingPage />} />
        <Route path="/politica-cookies" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
    </Router>
  )
}

export default App
