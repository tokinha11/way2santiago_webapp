import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import TrackingPage from './pages/TrackingPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solicitar" element={<FormPage />} />
        <Route path="/seguimiento" element={<TrackingPage />} />
      </Routes>
    </Router>
  )
}

export default App
