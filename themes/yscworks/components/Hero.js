import { siteConfig } from '@/lib/config'

/**
 * 首页 Hero —— 复刻 yscai101.com/works 的 intro
 * @param {*} props
 */
const Hero = () => {
  const kicker = siteConfig('YSCWORKS_HERO_KICKER', 'PRODUCTS · BUILD IN PUBLIC')
  const title = siteConfig('YSCWORKS_HERO_TITLE', '把想法做出来，再让真实反馈说话。')
  const desc = siteConfig(
    'YSCWORKS_HERO_DESC',
    '我不是传统程序员，而是用 AI 编程推进产品的创作者。这里不只展示名称，也说明每个项目当前做到哪里。'
  )
  return (
    <section className='yscworks-hero'>
      <div className='ysc-container'>
        <p className='yscworks-kicker'>{kicker}</p>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  )
}

export { Hero }
