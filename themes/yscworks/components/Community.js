import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * FREE COMMUNITY —— 社区链接
 * 配置为空时自动隐藏整个区块
 */
const Community = () => {
  const label = siteConfig('YSCWORKS_COMMUNITY_LABEL', CONFIG.YSCWORKS_COMMUNITY_LABEL, CONFIG)
  const title = siteConfig('YSCWORKS_COMMUNITY_TITLE', CONFIG.YSCWORKS_COMMUNITY_TITLE, CONFIG)
  const desc = siteConfig('YSCWORKS_COMMUNITY_DESC', CONFIG.YSCWORKS_COMMUNITY_DESC, CONFIG)
  let links = siteConfig('YSCWORKS_COMMUNITY_LINKS', CONFIG.YSCWORKS_COMMUNITY_LINKS, CONFIG)
  if (typeof links === 'string') { try { links = JSON.parse(links) } catch (e) { links = CONFIG.YSCWORKS_COMMUNITY_LINKS } }
  if (!links || links.length === 0) return null

  return (
    <section className='yscworks-lab-resource section'>
      <div className='yscworks-container yscworks-lab-resource-grid'>
        <div className='yscworks-lab-section-head'>
          <p className='yscworks-section-label'>{label}</p>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className='yscworks-resource-links'>
          {links.map((l, i) => (
            <SmartLink key={i} href={l.href}>
              <span>{l.tag}</span>
              <strong>{l.title}</strong>
              <em>{l.sub}</em>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Community }