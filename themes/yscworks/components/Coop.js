import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 合作 CTA 卡 —— 严格对齐 yscai101.com/works 底部合作区块
 * 暖白底 / 34px 圆角 / padding 48px 48px 48px 70px / AVAILABLE 标记
 * @param {*} props
 */
const Coop = () => {
  const label = siteConfig('YSCWORKS_COOP_LABEL', 'PRODUCT COOPERATION')
  const title = siteConfig('YSCWORKS_COOP_TITLE', '🉑 接具体的 AI 小产品与工具合作。')
  const desc = siteConfig(
    'YSCWORKS_COOP_DESC',
    '请说明你想解决的问题、目标用户、预算和期望结果。我会先判断项目是否适合做，再决定合作方式。'
  )
  const available = siteConfig('YSCWORKS_COOP_AVAILABLE', 'AVAILABLE')
  return (
    <section className='yscworks-coop'>
      <div className='ysc-container'>
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
