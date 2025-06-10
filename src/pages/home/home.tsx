/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import './home.css'
import logoImg from '../../assets/img/logo.png'
import coverImg1 from '../../assets/img/hom-cover1jpg.jpg'
import coverImg2 from '../../assets/img/home-cover2.jpg'
import mainVideo from '../../assets/video/t_main_Android_demo_2x.mp4'

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
      <div className="video-section py-16 bg-gray-50">
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

      {/* 页脚部分 */}
      <footer className="footer bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="footer-copyright mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">© 2025 富业集团. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home 