/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import './home.css'
import logoImg from '../../assets/img/logo.png'
import coverImg1 from '../../assets/img/hom-cover1jpg.jpg'
import coverImg2 from '../../assets/img/home-cover2.jpg'
import mainVideo from '../../assets/video/t_main_Android_demo_2x.mp4'

// 导入新功能的图标
import iconFast from '../../assets/img/icon_fast.svg'
import iconSecure from '../../assets/img/icon_secure.svg'
import iconPrivacy from '../../assets/img/icon_privacy.svg'
import iconSync from '../../assets/img/icon_sync.svg'

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
            href="https://im.fuye.io/app/index.php?i=1&c=entry&a=site&m=mdkeji_im&do=Index&state=Index"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img src={logoImg} alt="Telegram" className="h-36 mx-auto" />
          </a>
          <h1>FUYE.IO</h1>
          <h1 className="subtitle">信息时代的新纪元</h1>
        </div>
      </div>

      {/* 视频部分 */}
      <div className="video-section py-16">
        <div className="container mx-auto px-4">
          <div className="w-1/2 mx-auto">
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

      {/* 行动呼吁部分 */}
      <div className="cta-section py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">加入富业，开始您的数字旅程！</h2>
          <a
            href="https://im.fuye.io/app/index.php?i=1&c=entry&a=site&m=mdkeji_im&do=Index&state=Index"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 text-xl font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            立即开始
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