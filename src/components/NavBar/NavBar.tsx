import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import './NavBar.css'
import telegramIcon from '../../assets/img/telegram.png'

/**
 * 导航栏组件
 * @returns {React.ReactElement} 渲染的导航栏组件
 */
function NavBar(): React.ReactElement {
  const navigate = useNavigate()
  const location = useLocation()

  const tabs = [
    {
      key: '/',
      title: '富业',
    },
  ]

  return (
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Tabs
        activeKey={location.pathname}
        onChange={value => navigate(value)}
        className="navbar-tabs"
      >
        {tabs.map(item => (
          <Tabs.Tab
            key={item.key}
            title={
              <div className="tab-item">
                <span>{item.title}</span>
              </div>
            }
          />
        ))}
      </Tabs>
      <a
        className="navbar-telegram-btn"
        href="https://t.me/fuyeip"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginRight: '1rem', textDecoration: 'none', color: '#0088cc', fontWeight: 600, fontSize: '1rem' }}
      >
        <img src={telegramIcon} alt="telegram" style={{ width: 22, height: 22 }} />
        FUYE.IO
      </a>
    </nav>
  )
}

export default NavBar 