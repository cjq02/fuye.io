/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import './home.css'

/**
 * 首页组件
 * @returns {React.ReactElement} 渲染的首页组件
 */
function Home(): React.ReactElement {
  useEffect(() => {
    // 设置页面标题
    if (typeof document !== 'undefined') {
      document.title = 'Telegram Messenger'
    }
  }, [])

  return (
    <div className="page-container home-container">
      {/* Logo 部分 */}
      <div className="logo-section">
        <div className="container mx-auto px-4">
          <img src="/assets/img/logo.png" alt="Telegram" className="h-24 mx-auto" />
          <h1>a new era of messaging</h1>
        </div>
      </div>

      {/* 下载部分 */}
      <div className="download-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#" className="download-card">
              <i className="icon icon-android"></i>
              <div>
                <h3>Telegram for Android</h3>
                <p>Download from Google Play</p>
              </div>
            </a>
            <a href="#" className="download-card">
              <i className="icon icon-ios"></i>
              <div>
                <h3>Telegram for iPhone / iPad</h3>
                <p>Download from App Store</p>
              </div>
            </a>
            <a href="#" className="download-card">
              <i className="icon icon-desktop"></i>
              <div>
                <h3>Telegram for Windows / Mac / Linux</h3>
                <p>Download from telegram.org</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 特性部分 */}
      <div className="features-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Telegram?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/simple.svg" alt="Simple" className="w-full h-full" />
              </div>
              <h3>Simple</h3>
              <p>Telegram is so simple you already know how to use it.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/private.svg" alt="Private" className="w-full h-full" />
              </div>
              <h3>Private</h3>
              <p>Telegram messages are heavily encrypted and can self-destruct.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/synced.svg" alt="Synced" className="w-full h-full" />
              </div>
              <h3>Synced</h3>
              <p>Telegram lets you access your chats from multiple devices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 新闻部分 */}
      <div className="news-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="#" className="news-card">
              <img src="/news1.jpg" alt="News 1" />
              <div className="news-content">
                <div className="news-date">Jun 3</div>
                <h3 className="news-title">Direct Messages for Channels, Voice Trimming, Topic Tabs and HD Photos</h3>
                <p className="news-excerpt">In today's update, we add new ways for users to start conversations with their favorite channels...</p>
              </div>
            </a>
            <a href="#" className="news-card">
              <img src="/news2.jpg" alt="News 2" />
              <div className="news-content">
                <div className="news-date">May 8</div>
                <h3 className="news-title">Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels</h3>
                <p className="news-excerpt">Introducing Telegram's second major update in just 8 days! You can now safely buy or sell collectible gifts...</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="footer">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="footer-column">
              <h5>About</h5>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Mobile Apps</h5>
              <ul>
                <li><a href="#">iPhone/iPad</a></li>
                <li><a href="#">Android</a></li>
                <li><a href="#">Mobile Web</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Desktop Apps</h5>
              <ul>
                <li><a href="#">PC/Mac/Linux</a></li>
                <li><a href="#">macOS</a></li>
                <li><a href="#">Web-browser</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Platform</h5>
              <ul>
                <li><a href="#">API</a></li>
                <li><a href="#">Translations</a></li>
                <li><a href="#">Instant View</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2024 Telegram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home 