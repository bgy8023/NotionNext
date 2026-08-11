import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 合作 CTA —— 复刻 yscai101.com/works 底部的合作区块
 * @param {*} props
 */
const Coop = () => {
  const label = siteConfig('YSCWORKS_COOP_LABEL', 'PRODUCT COOPERATION')
  const title = siteConfig('YSCWORKS_COOP_TITLE', '🉑 接具体的 AI 小产品与工具合作。')
  const desc = siteConfig(
    'YSCWORKS_COOP_DESC',
    '请说明你想解决的问题、目标用户、预算和期望结果。我会先判断项目是否适合做，再决定合作方式。'
  )
  return (
    <section className='yscworks-coop'>
      <div className='yscworks-container'>
        <p className='yscworks-coop-label'>{label}</p>
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className='yscworks-coop-row'>
          <SmartLink href='/contact'>查看合作范围 →</SmartLink>
          <SmartLink href='/contact'>联系</SmartLink>
        </div>
      </div>
    </section>
  )
}

export { Coop }
