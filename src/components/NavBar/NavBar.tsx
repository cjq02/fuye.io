import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import { AppOutline, MessageOutline, UserOutline } from 'antd-mobile-icons'
import './NavBar.css'

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
      title: '首页',
    },
  ]

  return (
    <nav className="navbar">
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
    </nav>
  )
}

export default NavBar 