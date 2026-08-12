import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * 实践数据条 —— 4 个数字
 */
const Stats = () => {
  let stats = siteConfig('YSCWORKS_STATS', CONFIG.YSCWORKS_STATS, CONFIG)
  if (typeof stats === 'string') { try { stats = JSON.parse(stats) } catch (e) { stats = CONFIG.YSCWORKS_STATS } }
  if (!stats || stats.length === 0) return null

  return (
    <section className='yscworks-lab-stats section' aria-label='实践数据'>
      <div className='yscworks-container yscworks-lab-stat-grid'>
        {stats.map((s, i) => {
          const numMatch = String(s.value).match(/^([\d,]+)/)
          const num = numMatch ? parseInt(numMatch[1].replace(/,/g, ''), 10) : 0
          const suffix = String(s.value).replace(/^[\d,]+/, '')
          return (
            <article key={i}>
              <strong
                className='yscworks-stat-number'
                data-count={num}
                data-suffix={suffix}
              >{s.value}</strong>
              <span>{s.label}</span>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export { Stats }