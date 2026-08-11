import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * START HERE —— 4 个入口
 */
const RouteGrid = () => {
  const label = siteConfig('YSCWORKS_ROUTE_LABEL', CONFIG.YSCWORKS_ROUTE_LABEL, CONFIG)
  const title = siteConfig('YSCWORKS_ROUTE_TITLE', CONFIG.YSCWORKS_ROUTE_TITLE, CONFIG)
  let links = siteConfig('YSCWORKS_ROUTE_LINKS', CONFIG.YSCWORKS_ROUTE_LINKS, CONFIG)
  if (typeof links === 'string') { try { links = JSON.parse(links) } catch (e) { links = CONFIG.YSCWORKS_ROUTE_LINKS } }
  if (!links || links.length === 0) return null

  return (
    <section className='yscworks-route-section' aria-labelledby='route-title'>
      <div className='yscworks-container'>
        <div className='yscworks-route-heading'>
          <p className='yscworks-section-label'>{label}</p>
          <h2 id='route-title'>{title}</h2>
        </div>
        <div className='yscworks-route-grid'>
          {links.map((l, i) => (
            <SmartLink key={i} href={l.href} className='yscworks-route-card'>
              <span>{l.num}</span>
              <div><strong>{l.title}</strong><small>{l.sub}</small></div>
              <i>{l.arrow}</i>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export { RouteGrid }