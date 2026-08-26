import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * /geo 落地页 —— YSC GEO LAB / AI 搜索可见性服务专题
 * 严格对齐 yscai101.com/geo.html
 */
export const GeoComponent = () => {
  const brand = siteConfig('YSCWORKS_BRAND', CONFIG.YSCWORKS_BRAND, CONFIG)

  const services = [
    {
      num: '01 / BASELINE',
      title: 'GEO 基线诊断',
      desc: '检查页面结构、Meta、Schema、内容可读性、实体信息、引用与 AI 友好度，梳理当前基线与优先级。',
      deliver: '交付：诊断报告 + 问题清单'
    },
    {
      num: '02 / ROADMAP',
      title: '90 天行动方案',
      desc: '将品牌目标、网站现状、资源约束转为分阶段动作：先修复，再建设，再验证。',
      deliver: '交付：30/60/90 天路线图'
    },
    {
      num: '03 / ASSETS',
      title: '内容与技术资产',
      desc: '协作建设 FAQ、专题页、案例、JSON-LD、llms.txt、标题与知识库草稿，让信息能被机器与人一起理解。',
      deliver: '交付：可发布资产包'
    },
    {
      num: '04 / RETAINER',
      title: '持续顾问服务',
      desc: '按月复盘诊断、选题与内容表现，管理资产迭代，持续跟踪 AI 搜索环境和业务目标的变化。',
      deliver: '交付：月度复盘 + 下月计划'
    }
  ]

  return (
    <>
      <section className='geo-hero'>
        <div className='container geo-hero-grid'>
          <div className='geo-hero-copy fade-in'>
            <p className='page-kicker'>GEO LAB · GENERATIVE ENGINE OPTIMIZATION</p>
            <h1>让你的专业能力，<br />被 AI 准确理解。</h1>
            <p className='geo-lead'>
              面向有真实业务目标的团队：诊断品牌在 ChatGPT、Claude、Perplexity、Gemini 等 AI 答案中的可见性，把问题落到可执行的内容、结构化数据与 30/60/90 天行动计划。
            </p>
            <div className='home-actions'>
              <SmartLink className='btn btn-primary' href='/contact'>
                咨询 GEO 方案 <span className='btn-icon'>→</span>
              </SmartLink>
              <a className='btn btn-secondary' href='#service'>查看服务方式</a>
            </div>
            <p className='geo-note'>不出售排名，不承诺任何 AI 平台必然推荐；只交付可核验的诊断、资产与优化动作。</p>
          </div>

          <aside className='geo-console fade-in-right' aria-label='GEO 服务交付流程'>
            <div className='geo-console-top'>
              <span /><span /><span /><strong>geo.audit / 01</strong>
            </div>
            <ol>
              <li><b>01</b><div><strong>采集</strong><small>网站结构、内容、实体与引用信号</small></div></li>
              <li><b>02</b><div><strong>诊断</strong><small>找出 AI 理解与引用的关键缺口</small></div></li>
              <li><b>03</b><div><strong>规划</strong><small>形成按优先级排序的行动方案</small></div></li>
              <li><b>04</b><div><strong>沉淀</strong><small>内容、Schema、llms.txt 与知识资产</small></div></li>
            </ol>
            <SmartLink href='/contact'>咨询 GEO 工作流程 →</SmartLink>
          </aside>
        </div>
      </section>

      <section className='section' id='service'>
        <div className='container'>
          <header className='lab-section-head'>
            <p className='section-label'>SERVICE MODEL</p>
            <h2>不是一份报告，<br />而是一套可持续的服务。</h2>
            <p>先以可验证的诊断建立共识，再按业务优先级协作落地。适合希望获得 AI 搜索新增量、且愿意持续建设内容资产的品牌与团队。</p>
          </header>
          <div className='geo-service-grid'>
            {services.map((s, i) => (
              <article key={i} className='fade-in'>
                <span>{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <strong>{s.deliver}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='geo-delivery'>
        <div className='container geo-delivery-grid'>
          <div>
            <p className='section-label'>WHAT CLIENTS RECEIVE</p>
            <h2>每一次优化，<br />都留下可以复用的资产。</h2>
          </div>
          <ul>
            <li><b>品牌实体档案</b><span>让产品、案例、创始人、专业方向与可信来源有清晰的事实基础。</span></li>
            <li><b>内容机会地图</b><span>把问题词、场景词、对比词与商业意图转化为有序选题。</span></li>
            <li><b>技术优化包</b><span>补齐结构化数据、页面信息架构和 AI 爬取、理解所需的基础设置。</span></li>
            <li><b>执行与复盘机制</b><span>明确谁做、先做什么、如何验收，并持续调整下一阶段。</span></li>
          </ul>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='lab-cta-card geo-cta fade-in'>
            <p className='section-label'>START WITH A REAL QUESTION</p>
            <h2>带着你的网站、目标和约束来。<br />先判断是否值得做。</h2>
            <p>请在沟通时说明：业务是什么、希望影响哪类客户决策、已有内容与技术资源、预算范围，以及希望在什么时间看到结果。</p>
            <div className='cta-contact-row'>
              <SmartLink href='/contact'>联系 GEO 服务顾问 →</SmartLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}