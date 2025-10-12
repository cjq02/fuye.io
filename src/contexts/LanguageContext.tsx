import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import zhLanguagePack from '../locales/zh.json'
import enLanguagePack from '../locales/en.json'

// 支持的语言类型
export type Language = 'zh' | 'en'

// 语言上下文类型
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  getLanguageDisplayName: (lang: Language) => string
}

// 创建语言上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 语言包类型
interface LanguagePack {
  [key: string]: string
}


// 语言包映射
const languagePacks: Record<Language, LanguagePack> = {
  zh: zhLanguagePack,
  en: enLanguagePack
}

// 语言显示名称映射
const languageDisplayNames: Record<Language, string> = {
  zh: '中文',
  en: 'EN'
}

// 语言提供者组件属性
interface LanguageProviderProps {
  children: ReactNode
}

// 语言提供者组件
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 从 localStorage 获取保存的语言，默认为中文
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('fuye-language') as Language
      return savedLanguage || 'zh'
    }
    return 'zh'
  })

  // 设置语言并保存到 localStorage
  const setLanguage = (lang: Language): void => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('fuye-language', lang)
    }
  }

  // 翻译函数
  const t = (key: string): string => {
    const pack = languagePacks[language]
    return pack[key] || key
  }

  // 获取语言显示名称
  const getLanguageDisplayName = (lang: Language): string => {
    return languageDisplayNames[lang]
  }

  // 设置页面标题
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = language === 'zh' ? '富业' : 'FUYE'
    }
  }, [language])

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    getLanguageDisplayName
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// 使用语言上下文的 Hook
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
