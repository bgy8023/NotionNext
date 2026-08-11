import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * yscai101 风格极简导航：品牌 + 少量链接
 * @param {*} props
 */
export const Header = props => {
  const brand = siteConfig('YSCWORKS_BRAND', CONFIG.YSCWORKS_BRAND, CONFIG)
  let nav = siteConfig('YSCWORKS_NAV', CONFIG.YSCWORKS_NAV, CONFIG)
  if (typeof nav === 'string') {
    try { nav = JSON.parse(nav) } catch (e) { nav = CONFIG.YSCWORKS_NAV }
  }
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <nav className='yscworks-nav'>
      <div className='yscworks-container'>
        <SmartLink href='/' className='yscworks-brand'>{brand}</SmartLink>
        <div className='yscworks-navlinks'>
          {(nav || []).map((item, i) => (
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
