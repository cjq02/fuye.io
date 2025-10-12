/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import '@/pages/home/home.css'
import logoImg from '@/assets/img/logo.png'
import coverImg1 from '@/assets/img/hom-cover1jpg.jpg'
import coverImg2 from '@/assets/img/home-cover2.jpg'
import mainVideo from '@/assets/video/t_main_Android_demo_2x.mp4'

// 导入新功能的图标
import iconChat from '@/assets/svg/chat.svg'
import iconGroup from '@/assets/img/group.jpg'
import iconCash from '@/assets/img/cash.jpg'
import iconTool from '@/assets/svg/tool.svg'

// 常量定义
const APP_URL = 'https://im.fuye.io/app/index.php?i=1&c=entry&a=site&m=mdkeji_im&do=Index&state=Index'

/**
 * 首页组件
 * @returns {React.ReactElement} 渲染的首页组件
 */
function Home(): React.ReactElement {
  const { t } = useLanguage()
  
  useEffect(() => {
    // 页面标题已在 LanguageContext 中设置
  }, [])

  return (
    <div className="page-container home-container">
      {/* 浮动立即体验按钮（顶部居中固定浮动） */}
      {/*
        @description 固定浮动在页面顶部居中的立即体验按钮，点击跳转 APP_URL
        @returns {JSX.Element} 浮动按钮
      */}
      <a
        href={APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-1/2 top-20 z-50 text-white text-xl font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-200 wave-bg"
        style={{ transform: 'translateX(-50%)' }}
      >
        {t('home.experience')}
      </a>

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
          <h1
            className="text-10xl md:text-10xl font-extrabold animate-fade-in-delay animate-breathing neon-text"
            style={{ background: 'transparent', cursor: 'pointer' }}
            onClick={() => { window.open(APP_URL, '_blank', 'noopener,noreferrer') }}
          >
            {/* FUYE.IO 已去除 */}
          </h1>
          <p className="text-lg text-gray-600 mt-10 animate-text-1">{t('home.subtitle1')}</p>
          <p className="text-lg text-gray-600 mt-2 animate-text-2">{t('home.subtitle2')}</p>
        </div>
      </div>

      {/* 视频部分 */}
      <div className="video-section py-16">
        <div className="container mx-auto px-4">
          <div className="w-1/2 mx-auto animate-fade-in-delay-2">
            <video
              className="w-full rounded-lg shadow-xl pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              controlsList="nodownload nofullscreen noremoteplayback"
            >
              <source src={mainVideo} type="video/mp4" />
              {t('home.videoNotSupported')}
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
              <p className="text-lg text-gray-700">{t('home.cover1.title')}</p>
              <p className="text-lg text-gray-700">{t('home.cover1.subtitle')}<a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1 mr-1">fuye.io</a></p>
            </div>
            <div className="cover-item text-center">
              <img src={coverImg2} alt="封面图片2" className="w-full h-auto rounded-lg shadow-lg mb-4" />
              <p className="text-lg text-gray-700"><span>{t('home.cover2.title')}</span><span className='ml-4'>{t('home.cover2.subtitle')}</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* 核心功能部分 */}
      <div className="features-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t('home.features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card p-6 bg-gray-50 rounded-lg shadow-md text-center animate-fade-in-delay-3">
              <img src={iconChat} alt={t('home.features.communication.title')} className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">{t('home.features.communication.title')}</h3>
              <div className="space-y-3">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm animate-float-1 inline-block">{t('home.features.communication.noRealName')}</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm animate-float-2 inline-block">{t('home.features.communication.noVPN')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm animate-float-2 inline-block">{t('home.features.communication.oneClickLogin')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-600 rounded-full text-sm animate-float-3 inline-block">{t('home.features.communication.private')}</span>
                  <span className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm animate-float-4 inline-block">{t('home.features.communication.group')}</span>
                  <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm animate-float-5 inline-block">{t('home.features.communication.voice')}</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm animate-float-6 inline-block">{t('home.features.communication.video')}</span>
                </div>
              </div>
            </div>
            <div className="feature-card p-6 bg-gray-50 rounded-lg shadow-md text-center animate-fade-in-delay-4">
              <img src={iconGroup} alt={t('home.features.group.title')} className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">{t('home.features.group.title')}</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm animate-float-1">{t('home.features.group.redPacket')}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm animate-float-2">{t('home.features.group.luckyPacket')}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm animate-float-3">{t('home.features.group.transfer')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm animate-float-4">{t('home.features.group.autoReply')}</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm animate-float-5">{t('home.features.group.admin')}</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm animate-float-6">{t('home.features.group.adLink')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm animate-float-1">{t('home.features.group.memberLimit')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm animate-float-2">{t('home.features.group.inviteCode')}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm animate-float-3">{t('home.features.group.password')}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm animate-float-4">{t('home.features.group.paid')}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm animate-float-5">{t('home.features.group.review')}</span>
                </div>
                <p className="text-gray-600 animate-float-6">{t('home.features.group.more')}</p>
              </div>
            </div>
            <div className="feature-card p-6 bg-gray-50 rounded-lg shadow-md text-center animate-fade-in-delay-5">
              <img src={iconCash} alt={t('home.features.cash.title')} className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">{t('home.features.cash.title')}</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm animate-float-1">{t('home.features.cash.personalLink')}</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm animate-float-2">{t('home.features.cash.qrCode')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm animate-float-3">{t('home.features.cash.inviteCommission')}</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm animate-float-4">{t('home.features.cash.consumption')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm animate-float-5">{t('home.features.cash.groupPromotion')}</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm animate-float-6">{t('home.features.cash.continuousIncome')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm animate-float-1">{t('home.features.cash.noRealName')}</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm animate-float-2">{t('home.features.cash.privacy')}</span>
                </div>
              </div>
            </div>
            <div className="feature-card p-6 bg-gray-50 rounded-lg shadow-md text-center animate-fade-in-delay-6">
              <img src={iconTool} alt={t('home.features.tools.title')} className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">{t('home.features.tools.title')}</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm animate-float-3">{t('home.features.tools.networkTools')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm animate-float-4">{t('home.features.tools.easyNetwork')}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm animate-float-5">{t('home.features.tools.efficiency')}</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm animate-float-6">{t('home.features.tools.expert')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 行动呼吁部分 */}
      <div className="cta-section py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">{t('home.cta.title1')}</h2>
          <h2 className="text-4xl font-bold mb-8">{t('home.cta.title2')}</h2>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 text-xl font-semibold py-4 px-10 rounded-full shadow-lg animate-fade-in-delay-7"
          >
            {t('home.cta.experience')}
          </a>
        </div>
      </div>

      {/* 页脚部分 */}
      <footer className="footer flex items-center justify-center">
        <p className="text-gray-600">{t('footer.copyright')}</p>
      </footer>
    </div>
  )
}

export default Home 