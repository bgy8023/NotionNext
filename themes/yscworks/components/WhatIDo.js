import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * WHAT I DO —— 三件事
 */
const WhatIDo = () => {
  const label = siteConfig('YSCWORKS_MAP_LABEL', CONFIG.YSCWORKS_MAP_LABEL, CONFIG)
  const title = siteConfig('YSCWORKS_MAP_TITLE', CONFIG.YSCWORKS_MAP_TITLE, CONFIG)
  const desc = siteConfig('YSCWORKS_MAP_DESC', CONFIG.YSCWORKS_MAP_DESC, CONFIG)
  let cards = siteConfig('YSCWORKS_MAP_CARDS', CONFIG.YSCWORKS_MAP_CARDS, CONFIG)
  if (typeof cards === 'string') { try { cards = JSON.parse(cards) } catch (e) { cards = CONFIG.YSCWORKS_MAP_CARDS } }
  if (!cards || cards.length === 0) return null

  return (
    <section className='yscworks-lab-map section' id='map'>
      <div className='yscworks-container'>
        <div className='yscworks-lab-section-head'>
          <p className='yscworks-section-label'>{label}</p>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className='yscworks-lab-map-grid yscworks-lab-map-grid-three'>
          {cards.map((c, i) => (
            <article key={i} className='yscworks-lab-map-card'>
              <span>{c.index}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              {c.link && <SmartLink href={c.link.href}>{c.link.label}</SmartLink>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export { WhatIDo }