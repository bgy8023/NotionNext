import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 顶部导航
 */
const Header = ({ post }) => {
  const brand = siteConfig('YSCWORKS_BRAND', '成云杉 YSC', CONFIG)
  let nav = siteConfig('YSCWORKS_NAV', CONFIG.YSCWORKS_NAV, CONFIG)
  // 兼容字符串 / 对象两种配置
  if (typeof nav === 'string') {
    try { nav = JSON.parse(nav) } catch (e) { nav = CONFIG.YSCWORKS_NAV }
  }
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <nav className='yscworks-nav'>
      <div className='yscworks-container'>
        <SmartLink href='/' className='yscworks-brand'>{brand}</SmartLink>
        <div className='yscworks-navlinks'>
          {nav?.map((item, i) => (
            <SmartLink
              key={i}
              href={item.href}
              className={currentPath === item.href ? 'active' : ''}
            >{item.label}</SmartLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export { Header }
