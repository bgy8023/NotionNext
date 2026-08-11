import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CopyRightDate from '@/components/CopyRightDate'
import BeiAnSite from '@/components/BeiAnSite'
import BeiAnGongAn from '@/components/BeiAnGongAn'
import CONFIG from '../config'

/**
 * yscai101 风格四栏页脚
 * 品牌 + 一句话简介 + 导航/产品/法律信息/联系支持 + 版权行
 * @param {*} props
 */
export const Footer = props => {
  const brand = siteConfig('YSCWORKS_BRAND', CONFIG.YSCWORKS_BRAND, CONFIG)
  const tagline = siteConfig('YSCWORKS_FOOTER_DESC', CONFIG.YSCWORKS_FOOTER_DESC, CONFIG)
  const email = siteConfig('YSCWORKS_CONTACT_EMAIL', CONFIG.YSCWORKS_CONTACT_EMAIL, CONFIG)
  let nav = siteConfig('YSCWORKS_NAV', CONFIG.YSCWORKS_NAV, CONFIG)
  if (typeof nav === 'string') {
    try { nav = JSON.parse(nav) } catch (e) { nav = CONFIG.YSCWORKS_NAV }
  }
  let products = siteConfig('YSCWORKS_FOOTER_PRODUCTS', CONFIG.YSCWORKS_FOOTER_PRODUCTS, CONFIG)
  if (typeof products === 'string') {
    try { products = JSON.parse(products) } catch (e) { products = CONFIG.YSCWORKS_FOOTER_PRODUCTS }
  }

  return (
    <footer className='yscworks-footer z-10 relative w-full'>
      <div className='ysc-container'>
        <div className='yscworks-footer-grid'>
          <div>
            <h4 className='yscworks-footer-brand'>{brand}</h4>
            <p className='yscworks-footer-tagline'>{tagline}</p>
          </div>

          <div className='yscworks-footer-col'>
            <h4>导航</h4>
            <ul>
              {(nav || []).map((item, i) => (
                <li key={i}>
                  <SmartLink href={item.href}>{item.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='yscworks-footer-col'>
            <h4>产品</h4>
            <ul>
              {(products || []).map((item, i) => (
                <li key={i}>
                  <SmartLink href={item.href}>{item.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='yscworks-footer-col'>
            <h4>法律信息</h4>
            <ul>
              <li><SmartLink href='/privacy'>隐私政策</SmartLink></li>
              <li><SmartLink href='/terms'>服务条款</SmartLink></li>
            </ul>
          </div>
        </div>

        <div className='yscworks-footer-bottom'>
          <span>© <CopyRightDate /> {brand}. 保留所有权利。</span>
          <span className='flex flex-wrap gap-x-2'>
            <BeiAnSite />
            <BeiAnGongAn />
            {email && <a href={`mailto:${email}`}>{email}</a>}
          </span>
        </div>
      </div>
    </footer>
  )
}
