import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * yscai101 风格极简导航：品牌圆标 + 20px 链接，fixed 透明
 * @param {*} props
 */
export const Header = props => {
  const brand = siteConfig('YSCWORKS_BRAND', CONFIG.YSCWORKS_BRAND, CONFIG)
  const brandMark = siteConfig('YSCWORKS_BRAND_MARK', CONFIG.YSCWORKS_BRAND_MARK, CONFIG)
  let nav = siteConfig('YSCWORKS_NAV', CONFIG.YSCWORKS_NAV, CONFIG)
  if (typeof nav === 'string') {
    try { nav = JSON.parse(nav) } catch (e) { nav = CONFIG.YSCWORKS_NAV }
  }
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <nav className='yscworks-nav'>
      <div className='yscworks-container'>
        <SmartLink href='/' className='yscworks-brand'>
          <span className='yscworks-brand-mark'>{brandMark}</span>
          <span>{brand}</span>
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
      </div>
    </nav>
  )
}
