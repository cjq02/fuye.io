import { useEffect } from 'react'
import { Button } from 'antd-mobile'
import '../../App.css'

/**
 * 首页组件
 * @returns {React.ReactElement} 渲染的首页组件
 */
function Home(): React.ReactElement {
  useEffect(() => {
    // 设置页面标题
    document.title = 'Telegram - 一个新时代的通讯工具'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <img src="/telegram-logo.svg" alt="Telegram" className="h-8" />
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-telegram-blue">功能</a>
              <a href="#" className="text-gray-600 hover:text-telegram-blue">安全</a>
              <a href="#" className="text-gray-600 hover:text-telegram-blue">下载</a>
              <a href="#" className="text-gray-600 hover:text-telegram-blue">API</a>
            </div>
          </div>
          <Button color="primary" className="bg-telegram-blue">
            开始使用
          </Button>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="pt-20">
        {/* Hero 部分 */}
        <section className="bg-gradient-to-b from-telegram-blue to-telegram-light-blue text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              简单、快速、安全
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              一个新时代的通讯工具
            </p>
            <div className="flex justify-center space-x-4">
              <Button color="primary" className="bg-white text-telegram-blue">
                下载 Telegram
              </Button>
              <Button color="default" className="bg-transparent border-2 border-white">
                了解更多
              </Button>
            </div>
          </div>
        </section>

        {/* 特性部分 */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">快速</h3>
                <p className="text-gray-600">Telegram 提供最快的消息传递速度</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">安全</h3>
                <p className="text-gray-600">端到端加密确保您的消息安全</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">免费</h3>
                <p className="text-gray-600">完全免费，无广告，无订阅</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Telegram. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  )
}

export default Home 