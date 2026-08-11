'use client'

import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import { useEffect, useState } from 'react'
import CONFIG from '../config'

/**
 * ⌘ Call me 快捷入口弹层 —— 对齐 yscai101.com/works
 * 右下角固定按钮，点击展开 720px 面板（QUICK ACCESS），⌘K / Ctrl+K 唤起，Esc 关闭
 * @param {*} props
 */
const QuickAccess = () => {
  const [open, setOpen] = useState(false)
  let links = siteConfig('YSCWORKS_QUICK_LINKS', CONFIG.YSCWORKS_QUICK_LINKS, CONFIG)
  if (typeof links === 'string') {
    try { links = JSON.parse(links) } catch (e) { links = CONFIG.YSCWORKS_QUICK_LINKS }
  }
  const title = siteConfig('YSCWORKS_QUICK_TITLE', CONFIG.YSCWORKS_QUICK_TITLE, CONFIG)

  useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault()
        setOpen(o => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <button
        className='yscworks-quick-btn'
        aria-haspopup='dialog'
        aria-expanded={open}
        onClick={() => setOpen(true)}>
        <span className='kbd'>⌘</span>
        <span>Call me</span>
      </button>

      <div
        className={`yscworks-quick-overlay ${open ? 'is-open' : ''}`}
        style={{ display: open ? 'flex' : 'none' }}
        role='dialog'
        aria-modal='true'
        onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}>
        <div className='yscworks-quick-panel'>
          <div className='yscworks-quick-header'>
            <h3 className='yscworks-quick-title'>{title}</h3>
            <button className='yscworks-quick-close' aria-label='关闭' onClick={() => setOpen(false)}>×</button>
          </div>
          <ul className='yscworks-quick-list'>
            {(links || []).map((item, i) => (
              <li key={i}>
                <SmartLink href={item.href} onClick={() => setOpen(false)}>
                  <span className='yscworks-quick-num'>{String(i + 1).padStart(2, '0')}</span>
                  <span className='yscworks-quick-text'>
                    {item.label}
                    {item.sub && <span className='yscworks-quick-sub'>{item.sub}</span>}
                  </span>
                  <span className='yscworks-quick-arrow'>→</span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export { QuickAccess }
