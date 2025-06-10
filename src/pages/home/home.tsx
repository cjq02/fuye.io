/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import '@/pages/home/home.css'
import logoImg from '@/assets/img/logo.png'
import coverImg1 from '@/assets/img/hom-cover1jpg.jpg'
import coverImg2 from '@/assets/img/home-cover2.jpg'
import mainVideo from '@/assets/video/t_main_Android_demo_2x.mp4'

// 导入新功能的图标
import iconChat from '@/assets/svg/chat.svg'
import iconShare from '@/assets/svg/share.svg'
import iconPrivacy from '@/assets/svg/secure.svg'
import iconSync from '@/assets/svg/sync.svg'

// 常量定义
const APP_URL = 'https://im.fuye.io/app/index.php?i=1&c=entry&a=site&m=mdkeji_im&do=Index&state=Index'

/**
 * 首页组件
 * @returns {React.ReactElement} 渲染的首页组件
 */
function Home(): React.ReactElement {
  useEffect(() => {
    // 设置页面标题
    if (typeof document !== 'undefined') {
      document.title = '富业'
    }
  }, [])

  return (
    <div className="page-container home-container">
      {/* Logo 部分 */}
      <div className="logo-section">
        <div className="container mx-auto px-4">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img src={logoImg} alt="Telegram" className="h-36 mx-auto animate-fade-in" />
          </a>
          <h1 className="text-10xl md:text-10xl font-extrabold animate-fade-in-delay animate-breathing">FUYE.IO</h1>
          <h1 className="subtitle animate-slide-up">开启智能社交新体验</h1>
        </div>
      </div>

      {/* 视频部分 */}
      <div className="video-section py-16">
        <div className="container mx-auto px-4">
          <div className="w-1/2 mx-auto animate-fade-in-delay-2">
            <video
              className="w-full rounded-lg shadow-xl"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={mainVideo} type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </div>
        </div>
      </div>

      {/* 封面图片部分 */}
      <div className="cover-section mb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cover-item text-center">
              <img src={coverImg1} alt="封面图片1" className="w-full h-auto rounded-lg shadow-lg mb-4" />
              <p className="text-lg text-gray-700">探索无限可能</p>
            </div>
            <div className="cover-item text-center">
              <img src={coverImg2} alt="封面图片2" className="w-full h-auto rounded-lg shadow-lg mb-4" />
              <p className="text-lg text-gray-700">连接世界每个角落</p>
            </div>
          </div>
        </div>
      </div>

      {/* 核心功能部分 */}
      <div className="features-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card p-6 bg-gray-50 rounded-lg shadow-md text-center animate-fade-in-delay-3">
              <img src={iconChat} alt="高效沟通" className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">高效沟通</h3>
              <p className="text-gray-600">随时随地，与朋友家人畅快聊天，信息即时送达。</p>
            </div>
            <div className="feature-card p-6 bg-gray-50 rounded-lg shadow-md text-center animate-fade-in-delay-4">
              <img src={iconShare} alt="轻松分享" className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">轻松分享</h3>
              <p className="text-gray-600">图片、视频、文件，一键分享生活精彩瞬间。</p>
            </div>
            <div className="feature-card p-6 bg-gray-50 rounded-lg shadow-md text-center animate-fade-in-delay-5">
              <img src={iconPrivacy} alt="数据安全" className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">数据安全</h3>
              <p className="text-gray-600">多重加密保护，确保您的隐私和数据安全。</p>
            </div>
            <div className="feature-card p-6 bg-gray-50 rounded-lg shadow-md text-center animate-fade-in-delay-6">
              <img src={iconSync} alt="多端同步" className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">多端同步</h3>
              <p className="text-gray-600">手机、平板、电脑，聊天记录实时同步。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 行动呼吁部分 */}
      <div className="cta-section py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">即刻加入富业，享受无缝沟通！</h2>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 text-xl font-semibold py-4 px-10 rounded-full shadow-lg animate-fade-in-delay-7"
          >
            立即体验
          </a>
        </div>
      </div>

      {/* 页脚部分 */}
      <footer className="footer flex items-center justify-center">
        <p className="text-gray-600">© 2025 富业集团. 保留所有权利.</p>
      </footer>
    </div>
  )
}

export default Home 