import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 页脚
 */
const Footer = () => {
  const brand = siteConfig('YSCWORKS_BRAND', '成云杉 YSC', CONFIG)
  const desc = siteConfig('YSCWORKS_FOOTER_DESC', CONFIG.YSCWORKS_FOOTER_DESC, CONFIG)
  const year = new Date().getFullYear()

  return (
    <footer className='yscworks-footer'>
      <div className='yscworks-container'>
        <div className='yscworks-footer-grid'>
          <div>
            <div className='yscworks-footer-logo'>{brand}</div>
            <p className='yscworks-footer-desc'>{desc}</p>
          </div>
          <div className='yscworks-footer-col'>
            <h4>导航</h4>
            <SmartLink href='/'>首页</SmartLink>
            <SmartLink href='/category'>写作</SmartLink>
            <SmartLink href='/'>项目</SmartLink>
            <SmartLink href='/about'>关于</SmartLink>
          </div>
          <div className='yscworks-footer-col'>
            <h4>产品</h4>
            <SmartLink href='#'>FileDev</SmartLink>
            <SmartLink href='#mxmy'>MXMY</SmartLink>
            <SmartLink href='#saytype'>SayType</SmartLink>
          </div>
          <div className='yscworks-footer-col'>
            <h4>法律信息</h4>
            <SmartLink href='/privacy'>隐私政策</SmartLink>
            <SmartLink href='/terms'>服务条款</SmartLink>
          </div>
          <div className='yscworks-footer-col'>
            <h4>联系＆支持</h4>
            <a className='yscworks-footer-desc' href='mailto:3087465343@qq.com'>3087465343@qq.com</a>
            <span className='yscworks-footer-desc'>微信：3087465343</span>
          </div>
        </div>
        <div className='yscworks-footer-bottom'>
          <span>© {year} {brand}. 保留所有权利。</span>
          <span>由 @成云杉·AI编程出海变现 提供技术支持。</span>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
