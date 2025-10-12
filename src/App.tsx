import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/home/home'
import './app.css'

/**
 * 应用主组件
 * @returns {React.ReactElement} 渲染的应用组件
 */
function App(): React.ReactElement {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<div>FAQ Page</div>} />
              <Route path="/apps" element={<div>Apps Page</div>} />
              <Route path="/api" element={<div>API Page</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
