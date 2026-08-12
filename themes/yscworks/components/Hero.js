import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 首页 Hero —— 完整版，对齐 yscai101.com 首页 lab-hero
 * 左侧：kicker + 标题 + lead + 标签 + 按钮组
 * 右侧：终端风 console 卡（头像/产品/服务/进展/宣言）
 */
const Hero = () => {
  const kicker = siteConfig('YSCWORKS_HERO_KICKER', CONFIG.YSCWORKS_HERO_KICKER, CONFIG)
  const title = siteConfig('YSCWORKS_HERO_TITLE', CONFIG.YSCWORKS_HERO_TITLE, CONFIG)
  const desc = siteConfig('YSCWORKS_HERO_DESC', CONFIG.YSCWORKS_HERO_DESC, CONFIG)
  let tags = siteConfig('YSCWORKS_HERO_TAGS', CONFIG.YSCWORKS_HERO_TAGS, CONFIG)
  if (typeof tags === 'string') { try { tags = JSON.parse(tags) } catch (e) { tags = CONFIG.YSCWORKS_HERO_TAGS } }
  let buttons = siteConfig('YSCWORKS_HERO_BUTTONS', CONFIG.YSCWORKS_HERO_BUTTONS, CONFIG)
  if (typeof buttons === 'string') { try { buttons = JSON.parse(buttons) } catch (e) { buttons = CONFIG.YSCWORKS_HERO_BUTTONS } }

  const cTitle = siteConfig('YSCWORKS_HERO_CONSOLE_TITLE', CONFIG.YSCWORKS_HERO_CONSOLE_TITLE, CONFIG)
  const cName = siteConfig('YSCWORKS_HERO_CONSOLE_NAME', CONFIG.YSCWORKS_HERO_CONSOLE_NAME, CONFIG)
  const cRole = siteConfig('YSCWORKS_HERO_CONSOLE_ROLE', CONFIG.YSCWORKS_HERO_CONSOLE_ROLE, CONFIG)
  let cLines = siteConfig('YSCWORKS_HERO_CONSOLE_LINES', CONFIG.YSCWORKS_HERO_CONSOLE_LINES, CONFIG)
  if (typeof cLines === 'string') { try { cLines = JSON.parse(cLines) } catch (e) { cLines = CONFIG.YSCWORKS_HERO_CONSOLE_LINES } }
  const cSignal = siteConfig('YSCWORKS_HERO_CONSOLE_SIGNAL', CONFIG.YSCWORKS_HERO_CONSOLE_SIGNAL, CONFIG)
  const cManifesto = siteConfig('YSCWORKS_HERO_CONSOLE_MANIFESTO', CONFIG.YSCWORKS_HERO_CONSOLE_MANIFESTO, CONFIG)
  const cSign = siteConfig('YSCWORKS_HERO_CONSOLE_SIGN', CONFIG.YSCWORKS_HERO_CONSOLE_SIGN, CONFIG)

  return (
    <section className='yscworks-lab-hero' id='hero'>
      <div className='yscworks-container yscworks-lab-hero-grid'>
        <div className='yscworks-lab-hero-copy'>
          <div className='yscworks-lab-kicker'>
            <span className='yscworks-live-dot' />
            {kicker}
          </div>
          <h1>{title}</h1>
          <p className='yscworks-lab-lead'>{desc}</p>
          {tags?.length > 0 && (
            <div className='yscworks-lab-tags' aria-label='当前身份'>
              {tags.map((t, i) => <span key={i}>{t}</span>)}
            </div>
          )}
          {buttons?.length > 0 && (
            <div className='yscworks-home-actions'>
              {buttons.map((b, i) => (
                <SmartLink key={i} href={b.href} className={`yscworks-btn yscworks-btn-${b.style || 'secondary'}`}>
                  {b.label}
                </SmartLink>
              ))}
            </div>
          )}
        </div>

        <aside className='yscworks-lab-console' aria-label='当前进展'>
          <div className='yscworks-console-topbar'>
            <span /><span /><span /><strong>{cTitle}</strong>
          </div>
          <div className='yscworks-console-profile'>
            <div className='yscworks-console-avatar'>{cName.charAt(0)}</div>
            <div>
              <p>{cName}</p>
              <strong>{cRole}</strong>
            </div>
          </div>
          <div className='yscworks-console-lines'>
            {(cLines || []).map((l, i) => (
              <p key={i}><span>{l.key}</span> {l.value}</p>
            ))}
          </div>
          <div className='yscworks-console-build' aria-live='polite'>
            <div>
              <span>live signal</span>
              <strong
                id='yscworksConsoleSignal'
                data-messages={JSON.stringify(
                  siteConfig('YSCWORKS_HERO_CONSOLE_SIGNALS', CONFIG.YSCWORKS_HERO_CONSOLE_SIGNALS, CONFIG)
                )}
              >{cSignal}</strong>
            </div>
            <div className='yscworks-console-progress'><i /></div>
            <small>BUILD IN PUBLIC · 持续更新</small>
          </div>
          <div className='yscworks-console-manifesto'>
            <span>WORKING PRINCIPLE</span>
            <strong>{cManifesto}</strong>
            <small>{cSign}</small>
          </div>
        </aside>
      </div>
    </section>
  )
}

export { Hero }
