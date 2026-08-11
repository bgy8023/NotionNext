import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 顶部动态信号条 —— 对齐 yscai101.com 首页 signal-strip
 * NOW / BUILDING / SERVICE / OPEN 滚动展示
 */
const SignalStrip = () => {
  let signals = siteConfig('YSCWORKS_SIGNALS', CONFIG.YSCWORKS_SIGNALS, CONFIG)
  if (typeof signals === 'string') {
    try { signals = JSON.parse(signals) } catch (e) { signals = CONFIG.YSCWORKS_SIGNALS }
  }
  if (!signals || signals.length === 0) return null

  const items = [...signals, ...signals]
  return (
    <div className='yscworks-signal-strip' aria-label='当前动态'>
      <div className='yscworks-signal-track'>
        {items.map((s, i) => (
          <span key={i} aria-hidden={i >= signals.length}>
            <b>{s.tag}</b> {s.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export { SignalStrip }