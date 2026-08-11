import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * RECENTLY SHIPPING —— 最近动态列表
 */
const Updates = () => {
  const label = siteConfig('YSCWORKS_UPDATES_LABEL', CONFIG.YSCWORKS_UPDATES_LABEL, CONFIG)
  const title = siteConfig('YSCWORKS_UPDATES_TITLE', CONFIG.YSCWORKS_UPDATES_TITLE, CONFIG)
  const desc = siteConfig('YSCWORKS_UPDATES_DESC', CONFIG.YSCWORKS_UPDATES_DESC, CONFIG)
  let updates = siteConfig('YSCWORKS_UPDATES', CONFIG.YSCWORKS_UPDATES, CONFIG)
  if (typeof updates === 'string') { try { updates = JSON.parse(updates) } catch (e) { updates = CONFIG.YSCWORKS_UPDATES } }
  if (!updates || updates.length === 0) return null

  return (
    <section className='yscworks-lab-updates section' id='updates'>
      <div className='yscworks-container yscworks-lab-updates-grid'>
        <div className='yscworks-lab-section-head'>
          <p className='yscworks-section-label'>{label}</p>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className='yscworks-update-list'>
          {updates.map((u, i) => (
            <SmartLink key={i} href={u.link?.href || '/'}>
              <span>{u.tag}</span>
              <strong>{u.title}</strong>
              <em>{u.link?.label || '查看 →'}</em>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Updates }