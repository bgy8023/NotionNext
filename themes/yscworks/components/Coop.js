import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 合作 CTA 卡 —— 严格对齐 yscai101.com/works 底部合作区块
 * 暖白底 / 34px 圆角 / padding 48px 48px 48px 70px / AVAILABLE 标记
 * @param {*} props
 */
const Coop = () => {
  const label = siteConfig('YSCWORKS_COOP_LABEL', CONFIG.YSCWORKS_COOP_LABEL, CONFIG)
  const title = siteConfig('YSCWORKS_COOP_TITLE', CONFIG.YSCWORKS_COOP_TITLE, CONFIG)
  const desc = siteConfig(
    'YSCWORKS_COOP_DESC',
    CONFIG.YSCWORKS_COOP_DESC,
    CONFIG
  )
  const available = siteConfig('YSCWORKS_COOP_AVAILABLE', CONFIG.YSCWORKS_COOP_AVAILABLE || 'AVAILABLE', CONFIG)
  return (
    <section className='yscworks-coop'>
      <div className='yscworks-container'>
        <div className='yscworks-coop-card'>
          <p className='yscworks-coop-label'>{label}</p>
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className='yscworks-coop-row'>
            <SmartLink href='/contact'>查看合作范围 →</SmartLink>
            <SmartLink href='/contact'>联系</SmartLink>
          </div>
          <span className='yscworks-coop-status'><i />{available}</span>
        </div>
      </div>
    </section>
  )
}

export { Coop }
