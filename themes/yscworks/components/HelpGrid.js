import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * HOW I CAN HELP —— 3 张服务卡 + 合作前提示
 */
const HelpGrid = () => {
  const label = siteConfig('YSCWORKS_HELP_LABEL', CONFIG.YSCWORKS_HELP_LABEL, CONFIG)
  const title = siteConfig('YSCWORKS_HELP_TITLE', CONFIG.YSCWORKS_HELP_TITLE, CONFIG)
  const desc = siteConfig('YSCWORKS_HELP_DESC', CONFIG.YSCWORKS_HELP_DESC, CONFIG)
  let cards = siteConfig('YSCWORKS_HELP_CARDS', CONFIG.YSCWORKS_HELP_CARDS, CONFIG)
  if (typeof cards === 'string') { try { cards = JSON.parse(cards) } catch (e) { cards = CONFIG.YSCWORKS_HELP_CARDS } }
  const next = siteConfig('YSCWORKS_HELP_NEXT', CONFIG.YSCWORKS_HELP_NEXT, CONFIG)
  let nextLink = siteConfig('YSCWORKS_HELP_NEXT_LINK', CONFIG.YSCWORKS_HELP_NEXT_LINK, CONFIG)
  if (typeof nextLink === 'string') { try { nextLink = JSON.parse(nextLink) } catch (e) { nextLink = CONFIG.YSCWORKS_HELP_NEXT_LINK } }

  return (
    <section className='yscworks-help-section section' id='help' aria-labelledby='help-title'>
      <div className='yscworks-container'>
        <header className='yscworks-help-head'>
          <div>
            <p className='yscworks-section-label'>{label}</p>
            <h2 id='help-title'>{title}</h2>
          </div>
          <p>{desc}</p>
        </header>

        <div className='yscworks-help-grid'>
          {(cards || []).map((c, i) => (
            <article key={i} className='yscworks-help-card'>
              <span className='yscworks-help-index'>{c.index}</span>
              <h3>{c.title}</h3>
              <p className='yscworks-help-situation'><b>你可能正在：</b>{c.situation}</p>
              <div className='yscworks-help-delivery'><span>我可以帮你</span><p>{c.delivery}</p></div>
              <div className='yscworks-help-proof'><span>已有实践</span><strong>{c.proof}</strong></div>
              {c.link && <SmartLink href={c.link.href}>{c.link.label}</SmartLink>}
            </article>
          ))}
        </div>

        {next && (
          <div className='yscworks-help-next'>
            <p><span>合作前请准备</span>{next}</p>
            {nextLink && <SmartLink href={nextLink.href}>{nextLink.label}</SmartLink>}
          </div>
        )}
      </div>
    </section>
  )
}

export { HelpGrid }