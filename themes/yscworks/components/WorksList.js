import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import { ProductCase } from './ProductCase'

// yscai101.com 4 大核心产品案例默认数据（当 Notion 暂无对应数据时保障 100% 视觉展示）
const DEFAULT_CASES = [
  {
    id: 'geo',
    code: 'GEO / PRODUCT',
    title: 'YSC GEO LAB',
    slogan: 'AI 搜索可见性与生成式引擎优化实验室',
    lead: '面向 AI 搜索时代的可见性实验与监测工具，帮助内容与品牌在 ChatGPT、Claude、Perplexity、Kimi、豆包等生成式回答中获得更高引用权重。',
    status: '已上线',
    category: 'AI 搜索 · 实验室',
    tags: ['AI 搜索可见性', 'GEO 评分', '品牌引用监测', '生成式引擎优化'],
    facts: [
      { label: '形态', value: 'Web / 报告' },
      { label: '状态', value: '实验推进中' },
      { label: '目标', value: 'AI 搜索可见性' },
      { label: '技术', value: 'LLM 评估流' }
    ],
    next: '正在迭代针对国内与海外 6 大主流 AI 搜索的自动化监测管线。',
    primaryLink: { label: '查看 GEO 专题', href: '/geo', target: '_self' },
    secondaryLink: { label: '预约测试', href: '/contact', target: '_self' },
    visual: {
      className: 'geo-visual',
      range: '01—04',
      strong: 'GEO LAB',
      small: 'AI Search Visibility & Brand Citation'
    }
  },
  {
    id: 'filedev',
    code: 'FILEDEV / PRODUCT',
    title: 'FileDev · 开发者文件中心',
    slogan: '面向技术创作者与开发者的多端文件与知识交付工具',
    lead: '解决技术资料分发、代码包下载、教程配套资源交付难题，已上线微信小程序与 Web 端，提供干净快速的文件索引与授权访问。',
    status: '已上线',
    category: 'Web · 微信小程序',
    tags: ['Next.js', '微信小程序', '云存储', '内容交付'],
    facts: [
      { label: '多端', value: 'Web + 小程序' },
      { label: '用户', value: '10,000+ 访问' },
      { label: '交付', value: '秒级极速下载' },
      { label: '架构', value: 'Serverless' }
    ],
    next: '已上线微信小程序，正在增加会员体系与专属内容分发渠道。',
    primaryLink: { label: '体验小程序', href: '/contact', target: '_self' },
    secondaryLink: { label: '查看架构解析', href: '/category', target: '_self' },
    visual: {
      className: 'filedev-visual',
      range: '02—04',
      strong: 'FileDev',
      small: 'Developer File & Knowledge Hub'
    }
  },
  {
    id: 'mxmy',
    code: 'MXMY / PRODUCT',
    title: 'MXMY · 自动化营销引擎',
    slogan: '多渠道 AI 内容矩阵与自动化获客工作流',
    lead: '将公众号、小红书、推特等多平台内容生产、选题抓取、图文排版与发布流程完全串联，实现一人团队驱动全网营销矩阵。',
    status: '开发中',
    category: '自动化 · 工作流',
    tags: ['AI Agent', '多平台分发', '自动化排版', '数据看板'],
    facts: [
      { label: '定位', value: '矩阵增长引擎' },
      { label: '阶段', value: '私有测试' },
      { label: '效率', value: '提升 500%' },
      { label: '交付', value: 'Agent Skill' }
    ],
    next: '正在打通小红书与微信公众号的自动排版 API 与定时发布管线。',
    primaryLink: { label: '了解工作流', href: '/contact', target: '_self' },
    secondaryLink: { label: '定制咨询', href: '/contact', target: '_self' },
    visual: {
      className: 'mxmy-visual',
      range: '03—04',
      strong: 'MXMY',
      small: 'Marketing Automation & Growth'
    }
  },
  {
    id: 'saytype',
    code: 'SAYTYPE / PRODUCT',
    title: 'SayType · 语音驱动创作助手',
    slogan: '把口语化碎碎念实时整理成高质量结构化长文',
    lead: '基于 Whisper 与大模型深度精修提示词，解决创作者“想得到说得出却懒得打字排版”的痛点，直接输出公众号/博客级排版 Markdown。',
    status: '开发中',
    category: '客户端 · 生产力',
    tags: ['语音识别', '长文整理', 'Markdown', '桌面端'],
    facts: [
      { label: '输入', value: '实时语音/录音' },
      { label: '输出', value: '结构化长文' },
      { label: '模型', value: 'Whisper + LLM' },
      { label: '平台', value: 'Mac / Web' }
    ],
    next: '正在开发 macOS 原生菜单栏常驻版本与快捷键一键唤起。',
    primaryLink: { label: '加入等待列表', href: '/contact', target: '_self' },
    secondaryLink: { label: '交流反馈', href: '/contact', target: '_self' },
    visual: {
      className: 'saytype-visual',
      range: '04—04',
      strong: 'SayType',
      small: 'Voice-Driven Writing Assistant'
    }
  }
]

/**
 * /works 深度案例展厅：Hero + 产品矩阵 (ProductCase) + 合作 CTA
 */
const WorksList = ({ posts = [], showHero = true, showCta = true }) => {
  const heroKicker = siteConfig('YSCWORKS_HERO_KICKER', 'WORKS · PRODUCTS', CONFIG)
  const heroTitle = siteConfig('YSCWORKS_HERO_TITLE', '做出来的产品，才是最好的说明。', CONFIG)
  const heroDesc = siteConfig('YSCWORKS_HERO_DESC', '这里记录我正在独立开发、持续迭代和维护的 AI 工具、产品原型与业务系统。', CONFIG)
  const coopLabel = siteConfig('YSCWORKS_COOP_LABEL', 'COOPERATION', CONFIG)
  const coopTitle = siteConfig('YSCWORKS_COOP_TITLE', '有想法？我们一起把第一版跑起来。', CONFIG)
  const coopDesc = siteConfig('YSCWORKS_COOP_DESC', '无论是 AI 原型开发、工作流搭建，还是具体业务落地，随时联系我。', CONFIG)

  // 如果 Notion 传进了项目 post，则与默认数据做智能融合
  const casesToRender = posts && posts.length >= 4 
    ? posts.map((p, idx) => ({ post: p, index: idx }))
    : DEFAULT_CASES.map((item, idx) => ({ defaultItem: item, index: idx }))

  return (
    <>
      {showHero && (
        <section className='page-intro'>
          <div className='container page-intro-single'>
            <p className='page-kicker'>
              <span className='live-dot' />
              {heroKicker}
            </p>
            <h1>{heroTitle}</h1>
            <p className='page-summary'>{heroDesc}</p>
          </div>
        </section>
      )}

      <section className='section works-section'>
        <div className='container'>
          <div className='product-case-list'>
            {casesToRender.map((c, i) => (
              <ProductCase
                key={i}
                post={c.post}
                defaultItem={c.defaultItem}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {showCta && (
        <section className='section cta-section' style={{ paddingTop: 0 }}>
          <div className='container'>
            <div className='coop-card'>
              <p className='coop-label'>{coopLabel}</p>
              <h2>{coopTitle}</h2>
              <p>{coopDesc}</p>
              <div className='coop-actions'>
                <SmartLink href='/contact' className='btn btn-primary'>
                  发起合作咨询 <span className='btn-icon'>→</span>
                </SmartLink>
                <SmartLink href='/about' className='btn btn-secondary'>
                  了解更多关于我
                </SmartLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export { WorksList }
