import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import type { Language } from '../../contexts/LanguageContext'
import './NavBar.css'
import telegramIcon from '../../assets/img/telegram.png'
import globeIcon from '../../assets/svg/global.svg'
import logoImg from '../../assets/img/logo.png'

/**
 * 导航栏组件
 * @returns {React.ReactElement} 渲染的导航栏组件
 */
function NavBar(): React.ReactElement {
  const { language, setLanguage, t, getLanguageDisplayName } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 语言切换选项
  const languageOptions: { key: Language; label: string }[] = [
    {
      key: 'zh',
      label: '中文',
    },
    {
      key: 'en',
      label: 'English',
    },
  ]

  // 处理语言切换
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsLanguageDropdownOpen(false)
  }

  // 点击外部区域关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  const APP_URL = 'https://im.fuye.io/app/index.php?i=1&c=entry&a=site&m=mdkeji_im&do=Index&state=Index'

  return (
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginLeft: '16px' }} onClick={() => window.location.href = '/'}>
          <img src={logoImg} alt="logo" style={{ width: 24, height: 24 }} />
          <span style={{ fontSize: '16px', fontWeight: 600, color: '#0088cc' }}>{t('nav.fuye')}</span>
        </div>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '6px 16px',
            fontSize: '14px',
            color: '#fff',
            fontWeight: 600,
            textDecoration: 'none',
            borderRadius: '4px',
            backgroundColor: '#0088cc',
            border: '1px solid #0088cc',
            transition: 'all 0.2s',
            marginLeft: '12px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#006ba3'
            e.currentTarget.style.borderColor = '#006ba3'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0088cc'
            e.currentTarget.style.borderColor = '#0088cc'
          }}
        >
          {t('nav.login')}
        </a>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* 语言切换下拉菜单 */}
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '8px 12px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              borderRadius: '6px',
              fontSize: '15px',
              color: '#0088cc',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            <img src={globeIcon} alt="language" style={{ width: 16, height: 16, filter: 'brightness(0) saturate(100%) invert(27%) sepia(96%) saturate(1444%) hue-rotate(194deg) brightness(91%) contrast(101%)' }} />
            <span>{getLanguageDisplayName(language)}</span>
          </button>
          
          {/* 下拉菜单 */}
          {isLanguageDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '4px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                zIndex: 1000,
                minWidth: '120px'
              }}
            >
              {languageOptions.map(option => (
                <div
                  key={option.key}
                  onClick={() => handleLanguageChange(option.key)}
                  style={{
                    padding: '12px 16px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    color: '#0088cc',
                    backgroundColor: language === option.key ? '#f0f8ff' : 'transparent',
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (language !== option.key) {
                      e.currentTarget.style.backgroundColor = '#f5f5f5'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (language !== option.key) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <a
          className="navbar-telegram-btn"
          href="https://t.me/fuyeip"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginRight: '1rem', textDecoration: 'none', color: '#0088cc', fontWeight: 600, fontSize: '1rem' }}
        >
          <img src={telegramIcon} alt="telegram" style={{ width: 22, height: 22 }} />
          {t('nav.telegram')}
        </a>
      </div>
    </nav>
  )
}

export default NavBar 