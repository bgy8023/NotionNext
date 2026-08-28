'use client'

import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import { useState, useEffect } from 'react'

/**
 * yscai101 风格极简导航：品牌圆标 + 0.9rem 链接 + hover 下划线动画 + 移动端汉堡菜单
 * @param {*} props
 */
export const Header = props => {
  const brand = siteConfig('YSCWORKS_BRAND', CONFIG.YSCWORKS_BRAND, CONFIG)
  const brandMark = siteConfig('YSCWORKS_BRAND_MARK', CONFIG.YSCWORKS_BRAND_MARK, CONFIG)
  let nav = siteConfig('YSCWORKS_NAV', CONFIG.YSCWORKS_NAV, CONFIG)
  if (typeof nav === 'string') {
    try { nav = JSON.parse(nav) } catch (e) { nav = CONFIG.YSCWORKS_NAV }
  }
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  return (
    <>
      <nav className='yscworks-nav'>
        <div className='yscworks-container'>
          <SmartLink href='/' className='yscworks-brand'>
            <span className='yscworks-brand-mark'>{brandMark}</span>
            <span className='yscworks-brand-name'>{brand}</span>
          </SmartLink>
          <ul className='yscworks-navlinks'>
            {(nav || []).map((item, i) => (
              <li key={i}>
                <SmartLink
                  href={item.href}
                  className={currentPath === item.href ? 'active' : ''}
                >{item.label}</SmartLink>
              </li>
            ))}
          </ul>
          <button
            className={'yscworks-nav-toggle' + (menuOpen ? ' open' : '')}
            aria-label='菜单'
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className='yscworks-mobile-menu' onClick={() => setMenuOpen(false)}>
          <div className='yscworks-mobile-menu-inner'>
            {(nav || []).map((item, i) => (
              <SmartLink
                key={i}
                href={item.href}
                className={currentPath === item.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}>
                {item.label}
              </SmartLink>
            ))}
          </div>
        </div>
      )}
    </>
  )
}