import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * /contact 页面 —— 6 大定制服务卡片 (对齐 yscai101.com/contact.html)
 */
export const ServiceGrid = () => {
  const defaultServices = [
    {
      num: '01',
      title: 'AI 小产品与工具',
      desc: '网站、小程序、浏览器插件和本地工具的需求梳理、原型与开发协作。',
      fit: '适合：已有明确场景与目标用户'
    },
    {
      num: '02',
      title: 'Agent Skill 定制',
      desc: '把重复业务流程整理成可调用、可复用的 Skill，减少机械操作和沟通成本。',
      fit: '适合：已有稳定重复流程'
    },
    {
      num: '03',
      title: 'AI 知识库搭建',
      desc: '围绕个人或小团队资料，梳理内容结构、检索入口和实际使用方式。',
      fit: '适合：资料多但无法高效利用'
    },
    {
      num: '04',
      title: '内容工作流搭建',
      desc: '结合 Codex、Claude Code、Obsidian、飞书知识库、Agent 和自动化流程，搭建内容系统。',
      fit: '已累计服务 15位+客户'
    },
    {
      num: '05',
      title: '内容与产品推广',
      desc: '接受合适的软件、课程、社群及内容产品合作，优先考虑有复利价值的产品。',
      fit: '需要提前体验与判断'
    },
    {
      num: '06',
      title: '发起一次合作',
      desc: '联系时请写清：问题、预算、希望得到的结果和时间要求。',
      link: '#site-contact',
      linkLabel: '联系'
    }
  ]

  return (
    <section className='section' id='services'>
      <div className='container'>
        <div className='lab-section-head fade-in'>
          <p className='section-label'>SERVICES</p>
          <h2>目前开放的合作方向。</h2>
          <p>服务围绕我正在真实使用和持续迭代的能力展开，不承诺不熟悉的领域。</p>
        </div>
        <div className='service-grid'>
          {defaultServices.map((s, i) => (
            <article key={i} className={`service-card fade-in ${i % 2 === 1 ? 'delay-1' : ''}`}>
              <span>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.fit && <strong>{s.fit}</strong>}
              {s.link && (
                <strong>
                  <a href={s.link}>{s.linkLabel}</a>
                </strong>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}