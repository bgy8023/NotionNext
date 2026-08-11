import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import WorkCard from './WorkCard'

/**
 * 作品集首页区块：Hero + 项目列表（编号卡片）+ 合作 CTA
 * @param {*} props  { posts, showHero, showCta }
 */
const WorksList = ({ posts = [], showHero = true, showCta = true }) => {
  const heroKicker = siteConfig('YSCWORKS_HERO_KICKER', CONFIG.YSCWORKS_HERO_KICKER, CONFIG)
  const heroTitle = siteConfig('YSCWORKS_HERO_TITLE', CONFIG.YSCWORKS_HERO_TITLE, CONFIG)
  const heroDesc = siteConfig('YSCWORKS_HERO_DESC', CONFIG.YSCWORKS_HERO_DESC, CONFIG)
  const coopLabel = siteConfig('YSCWORKS_COOP_LABEL', CONFIG.YSCWORKS_COOP_LABEL, CONFIG)
  const coopTitle = siteConfig('YSCWORKS_COOP_TITLE', CONFIG.YSCWORKS_COOP_TITLE, CONFIG)
  const coopDesc = siteConfig('YSCWORKS_COOP_DESC', CONFIG.YSCWORKS_COOP_DESC, CONFIG)

  return (
    <>
      {showHero && (
        <section className='yscworks-hero'>
          <div className='yscworks-container'>
            <p className='yscworks-kicker'>{heroKicker}</p>
            <h1>{heroTitle}</h1>
            <p>{heroDesc}</p>
          </div>
        </section>
      )}

      <section className='yscworks-section'>
        <div className='yscworks-container'>
          <div className='yscworks-works'>
            {posts.map((post, i) => (
              <WorkCard key={post.id || i} post={post} index={i} geo={i === 0} />
            ))}
            {posts.length === 0 && (
              <p style={{ color: 'var(--text-secondary)' }}>暂无项目，请在 Notion 根页面下添加子页面。</p>
            )}
          </div>
        </div>
      </section>

      {showCta && (
        <section className='yscworks-section' style={{ paddingTop: 0 }}>
          <div className='yscworks-container'>
            <div className='yscworks-coop'>
              <p className='yscworks-coop-label'>{coopLabel}</p>
              <h2>{coopTitle}</h2>
              <p>{coopDesc}</p>
              <div className='yscworks-coop-row'>
                <SmartLink href='/contact'>查看合作范围 →</SmartLink>
                <SmartLink href='/contact'>联系</SmartLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export { WorksList }
