'use client'

import Comment from '@/components/Comment'
import replaceSearchResult from '@/components/Mark'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import { Transition } from '@headlessui/react'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BlogListArchive from './components/BlogListArchive'
import { BlogListPage } from './components/BlogListPage'
import { BlogListScroll } from './components/BlogListScroll'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PostLock } from './components/PostLock'
import { PostMeta } from './components/PostMeta'
import SearchInput from './components/SearchInput'
import { SideBar } from './components/SideBar'
import TitleBar from './components/TitleBar'
import CONFIG from './config'
import { Style } from './style'
import { Hero } from './components/Hero'
import { Coop } from './components/Coop'
import { QuickAccess } from './components/QuickAccess'
import { SignalStrip } from './components/SignalStrip'
import { HelpGrid } from './components/HelpGrid'
import { Stats } from './components/Stats'
import { RouteGrid } from './components/RouteGrid'
import { WhatIDo } from './components/WhatIDo'
import { Projects } from './components/Projects'
import { Updates } from './components/Updates'
import { Community } from './components/Community'
import { Effects } from './components/Effects'
import { WorksList } from './components/WorksList'
import { AboutDocument } from './components/AboutDocument'
import { GeoComponent } from './components/GeoComponent'
import { ProductCase } from './components/ProductCase'
import { ServiceGrid } from './components/ServiceGrid'
import { CommunityGrid } from './components/CommunityGrid'

/**
 * 基础布局框架
 * 1.其它页面都嵌入在LayoutBase中
 * 2.采用左右两侧布局，移动端使用顶部导航栏
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, post } = props
  const { onLoading, fullWidth, locale } = useGlobal()

  // 文章详情页左右布局改为上下布局
  const LAYOUT_VERTICAL =
    post && siteConfig('EXAMPLE_ARTICLE_LAYOUT_VERTICAL', false, CONFIG)

  // 网站左右布局颠倒
  const LAYOUT_SIDEBAR_REVERSE = siteConfig('LAYOUT_SIDEBAR_REVERSE', false)

  return (
    <div
      id='theme-yscworks'
      className={`${siteConfig('FONT_STYLE')} dark:text-gray-300 scroll-smooth`}>
      <Style />

      {/* 页头 */}
      <Header {...props} />
      {/* 标题栏：仅文章详情页显示，首页/列表页由 Hero 承担 */}
      {post && <TitleBar {...props} />}

      {/* 主体 */}
      <div id='container-inner' className='w-full relative z-10'>
        <div
          id='container-wrapper'
          className={`relative mx-auto justify-center md:flex py-8 px-2
          ${LAYOUT_SIDEBAR_REVERSE ? 'flex-row-reverse' : ''} 
          ${LAYOUT_VERTICAL ? 'items-center flex-col' : 'items-start'} 
          `}>
          {/* 内容 */}
          <div
            className={`${fullWidth ? '' : LAYOUT_VERTICAL ? 'max-w-[1200px]' : 'max-w-[1200px]'} w-full xl:px-14 lg:px-4`}>
            <Transition
              show={!onLoading}
              appear={true}
              enter='transition ease-in-out duration-700 transform order-first'
              enterFrom='opacity-0 translate-y-16'
              enterTo='opacity-100'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-16'
              unmount={false}>
              {/* 嵌入模块 */}
              {props.slotTop}
              {children}
            </Transition>
          </div>

          {/* 侧边栏 */}
          {!fullWidth && (
            <div
              className={`${
                LAYOUT_VERTICAL
                  ? 'flex space-x-0 md:space-x-2 md:flex-row flex-col w-full max-w-5xl justify-center xl:px-14 lg:px-4'
                  : 'md:w-64 sticky top-8'
              }`}>
              <SideBar {...props} />
            </div>
          )}
        </div>
      </div>

      {/* 页脚 */}
      <Footer {...props} />

      {/* 回顶按钮 */}
      <button
        className='yscworks-back-to-top back-to-top'
        aria-label='返回顶部'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>

      {/* ⌘ Call me 快捷入口 */}
      <QuickAccess />

      {/* 客户端交互效果（信号轮播/光晕/渐入/计数/滚动） */}
      <Effects />
    </div>
  )
}

/**
 * 首页 —— 对齐 yscai101.com 首页 12 区块结构
 * SignalStrip → Hero → HelpGrid → Stats → RouteGrid → WhatIDo
 * → Projects(产品矩阵, Notion子页面驱动) → Updates → Community → 写作 → Coop
 * @param {*} props
 * @returns
 */
const LayoutIndex = props => {
  const { posts } = props
  // 文章列表（写作区块）：取最新 4 篇
  const recentPosts = (posts || []).slice(0, 4)

  return (
    <>
      <SignalStrip />
      <Hero />
      <HelpGrid />
      <Stats />
      <RouteGrid />
      <WhatIDo />
      <Projects posts={posts || []} />
      <Updates />
      <Community />

      {/* 写作区块：PUBLIC NOTES 文章列表 */}
      <section className='yscworks-lab-writing section'>
        <div className='yscworks-container yscworks-lab-writing-grid'>
          <div className='yscworks-lab-section-head'>
            <p className='yscworks-section-label'>
              {siteConfig('YSCWORKS_WRITING_LABEL', 'PUBLIC NOTES')}
            </p>
            <h2>{siteConfig('YSCWORKS_WRITING_TITLE', '把真实过程写下来。')}</h2>
            <p>{siteConfig('YSCWORKS_WRITING_DESC', '网站只收录已经存在的文章。')}</p>
            <div className='yscworks-home-actions'>
              <SmartLink href='/category' className='yscworks-btn yscworks-btn-secondary'>进入写作</SmartLink>
            </div>
          </div>
          <div className='yscworks-lab-note-list'>
            {recentPosts.map((p, i) => (
              <SmartLink key={p.id || i} href={`/article/${p.slug}`}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <strong>{p.title}</strong>
                <em>{(p.category || '文章')}</em>
              </SmartLink>
            ))}
            {recentPosts.length === 0 && (
              <p style={{ color: 'var(--text-secondary)' }}>暂无文章，请在 Notion 中添加。</p>
            )}
          </div>
        </div>
      </section>

      <Coop />
    </>
  )
}

/**
 * 文章列表
 * @param {*} props
 * @returns
 */
const LayoutPostList = props => {
  const { category, tag } = props

  return (
    <>
      {/* 显示分类 */}
      {category && (
        <div className='pb-12'>
          <i className='mr-1 fas fa-folder-open' />
          {category}
        </div>
      )}
      {/* 显示标签 */}
      {tag && <div className='pb-12'>#{tag}</div>}

      {siteConfig('POST_LIST_STYLE') === 'page' ? (
        <BlogListPage {...props} />
      ) : (
        <BlogListScroll {...props} />
      )}
    </>
  )
}

/**
 * 文章详情页
 * @param {*} props
 * @returns
 */
const LayoutSlug = props => {
  const { post, lock, validPassword } = props
  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    // 404
    if (!post) {
      setTimeout(
        () => {
          if (isBrowser) {
            const article = document.querySelector('#article-wrapper #notion-article')
            if (!article) {
              router.push('/404').then(() => {
                console.warn('找不到页面', router.asPath)
              })
            }
          }
        },
        waiting404
      )
    }
  }, [post])
  return (
    <>
      {lock ? (
        <PostLock validPassword={validPassword} />
      ) : post && (
        <div>
          <PostMeta post={post} />
          <div id='article-wrapper'>
            <NotionPage post={post} />
            <ShareBar post={post} />
          </div>
          <Comment frontMatter={post} />
        </div>
      )}
    </>
  )
}

/**
 * 404页
 * @param {*} props
 * @returns
 */
const Layout404 = props => {
  const router = useRouter()
  useEffect(() => {
    // 延时3秒如果加载失败就返回首页
    setTimeout(() => {
      const article = isBrowser && document.getElementById('article-wrapper')
      if (!article) {
        router.push('/').then(() => {
          // console.log('找不到页面', router.asPath)
        })
      }
    }, 3000)
  }, [])

  return <>
        <div className='md:-mt-20 text-black w-full h-screen text-center justify-center content-center items-center flex flex-col'>
            <div className='dark:text-gray-200'>
                <h2 className='inline-block border-r-2 border-gray-600 mr-2 px-3 py-2 align-top'><i className='mr-2 fas fa-spinner animate-spin' />404</h2>
                <div className='inline-block text-left h-32 leading-10 items-center'>
                    <h2 className='m-0 p-0'>页面无法加载，即将返回首页</h2>
                </div>
            </div>
        </div>
    </>
}

/**
 * 搜索页
 * @param {*} props
 * @returns
 */
const LayoutSearch = props => {
  const { keyword } = props
  const router = useRouter()
  useEffect(() => {
    if (isBrowser) {
      // 高亮搜索到的结果
      const container = document.getElementById('posts-wrapper')
      if (keyword && container) {
        replaceSearchResult({
          doms: container,
          search: keyword,
          target: {
            element: 'span',
            className: 'text-red-500 border-b border-dashed'
          }
        })
      }
    }
  }, [router])

  return (
    <>
      <div className='pb-12'>
        <SearchInput {...props} />
      </div>
      <LayoutPostList {...props} />
    </>
  )
}

/**
 * 归档列表
 * @param {*} props
 * @returns 按照日期将文章分组排序
 */
const LayoutArchive = props => {
  const { archivePosts } = props
  return (
    <>
      <div className='mb-10 pb-20 md:py-12 p-3  min-h-screen w-full'>
        {Object.keys(archivePosts).map(archiveTitle => (
          <BlogListArchive
            key={archiveTitle}
            archiveTitle={archiveTitle}
            archivePosts={archivePosts}
          />
        ))}
      </div>
    </>
  )
}

/**
 * 分类列表
 * @param {*} props
 * @returns
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  return (
    <>
      <div id='category-list' className='duration-200 flex flex-wrap'>
        {categoryOptions?.map(category => (
          <SmartLink
            key={category.name}
            href={`/category/${category.name}`}
            passHref
            legacyBehavior>
            <div
              className={
                'hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'
              }>
              <i className='mr-4 fas fa-folder' />
              {category.name}({category.count})
            </div>
          </SmartLink>
        ))}
      </div>
    </>
  )
}

/**
 * 标签列表
 * @param {*} props
 * @returns
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  return (
    <>
      <div id='tags-list' className='duration-200 flex flex-wrap'>
        {tagOptions.map(tag => (
          <div key={tag.name} className='p-2'>
            <SmartLink
              key={tag}
              href={`/tag/${encodeURIComponent(tag.name)}`}
              passHref
              className={`cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200 mr-2 py-1 px-2 text-xs whitespace-nowrap dark:hover:text-white text-gray-600 hover:shadow-xl dark:border-gray-400 notion-${tag.color}_background dark:bg-gray-800`}>
              <div className='font-light dark:text-gray-400'>
                <i className='mr-1 fas fa-tag' />{' '}
                {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
              </div>
            </SmartLink>
          </div>
        ))}
      </div>
    </>
  )
}

/**
 * /works 项目与产品深度展厅页 (1:1 对齐 yscai101.com/works.html)
 */
const LayoutWorks = props => {
  const { posts } = props
  const brand = siteConfig('YSCWORKS_BRAND', CONFIG.YSCWORKS_BRAND, CONFIG)

  const defaultCases = [
    {
      id: 'case-geo',
      code: 'YSC GEO LAB',
      title: 'YSC GEO LAB · AI 搜索可见性实验室',
      slogan: '面向生成式引擎 (GEO) 与 AI 搜索的可见性优化实验。',
      lead: '随着 ChatGPT Search、Perplexity、Kimi、豆包等 AI 引擎成为新搜索入口，传统 SEO 正在向 GEO (Generative Engine Optimization) 演进。本实验室专注研究 AI 引用逻辑与可见性基线。',
      status: '已上线',
      category: '实验 · 咨询 · 工具',
      tags: ['AI 搜索', 'GEO 诊断', '可见性优化', '技术咨询'],
      facts: [
        { label: '定位', value: 'AI 搜索可见性实验' },
        { label: '状态', value: '持续研究与测试' },
        { label: '支持', value: 'GEO 诊断报告 + 改造方案' }
      ],
      next: '持续更新 GEO 测评案例与落地实验。',
      primaryLink: { href: '/geo', label: '进入 GEO 实验室' },
      secondaryLink: { href: '/contact', label: '咨询 GEO 方案' },
      visual: {
        range: '01—04',
        icon: '/assets/yscgeo-logo.svg',
        strong: 'YSC GEO LAB',
        small: 'GENERATIVE ENGINE OPTIMIZATION'
      }
    },
    {
      id: 'case-filedev',
      code: 'FILEDEV',
      title: 'FileDev · 跨端文件传输与开发辅助工具',
      slogan: '局域网极速文件互传与开发者日常提效小工具。',
      lead: '专为多设备开发与设计场景打造的轻量文件传输方案。支持零配置局域网极速直连、剪贴板多端同步与文本快传，无需登录第三方服务器。',
      status: '测试中',
      category: 'Web · 小程序 · 工具',
      tags: ['WebRTC', '局域网互传', '小程序', '无损传输'],
      facts: [
        { label: '形态', value: 'Web / 微信小程序' },
        { label: '核心', value: 'P2P 局域网直连' },
        { label: '阶段', value: '小范围内测' }
      ],
      next: '正在完善小程序端剪贴板自动同步与断点续传。',
      primaryLink: { href: 'https://filedev.mars1024.com', label: '访问 FileDev Web 版', target: '_blank' },
      secondaryLink: { href: '/contact', label: '申请内测' },
      visual: {
        range: '02—04',
        icon: '/assets/filedev-logo.png',
        strong: 'FILEDEV',
        small: 'FAST LAN FILE TRANSFER'
      },
      qr: {
        src: '/assets/filedev-mini-program.png',
        alt: 'FileDev 小程序码',
        caption: '微信扫码体验 FileDev 小程序'
      }
    },
    {
      id: 'case-mxmy',
      code: 'MXMY',
      title: '秘心秘语 · 情感互动与解忧倾诉 AI 伴侣',
      slogan: '基于大语言模型的沉浸式角色扮演与情感陪伴系统。',
      lead: '深度定制人格设定与长记忆检索机制，提供全天候温情倾听、情绪疏导与趣味互动，让每一次对话都充满理解与共鸣。',
      status: '开发中',
      category: 'AI Agent · 移动端',
      tags: ['LLM', '情感陪伴', '角色设定', '长记忆'],
      facts: [
        { label: '类型', value: 'AI 对话与陪伴' },
        { label: '特性', value: '长上下文记忆 + 拟真语调' },
        { label: '阶段', value: '模型调优与灰度测试' }
      ],
      next: '优化角色语调一致性与多轮对话记忆召回率。',
      primaryLink: { href: '/contact', label: '了解方案' },
      visual: {
        range: '03—04',
        icon: '/assets/mxmy-logo.png',
        strong: 'MXMY',
        small: 'AI COMPANION & AGENT'
      }
    },
    {
      id: 'case-saytype',
      code: 'SAYTYPE',
      title: 'SayType · 极速语音转文字与灵感速记助手',
      slogan: '将语音即时转化为结构化笔记与 Markdown 卡片。',
      lead: '结合前沿语音识别模型与智能重写算法，快速捕捉灵光一闪的念头，自动去除口语冗余并整理成清晰易读的书面表达。',
      status: '规划中',
      category: '桌面端 · 插件',
      tags: ['ASR', '语音速记', 'Markdown 导出', '提效工具'],
      facts: [
        { label: '平台', value: 'Mac / 浏览器扩展' },
        { label: '核心', value: '本地近场语音快识' },
        { label: '阶段', value: '原型构思' }
      ],
      next: '技术选型与本地模型推理延时压测。',
      primaryLink: { href: '/contact', label: '交流反馈' },
      visual: {
        range: '04—04',
        icon: '/assets/saytype-logo.png',
        strong: 'SAYTYPE',
        small: 'VOICE TO STRUCTURED TEXT'
      }
    }
  ]

  return (
    <>
      <section className='page-intro page-intro-works'>
        <div className='container page-intro-grid'>
          <div className='page-intro-copy fade-in'>
            <p className='page-kicker'>WORKS · PORTFOLIO</p>
            <h1>在实践中做出来的产品与项目。</h1>
            <p className='page-summary'>
              这里记录我使用 AI 独立设计、开发或主导落地的产品、工具与实验。坚持真实可用、持续迭代与解决具体问题。
            </p>
          </div>
        </div>
      </section>

      <section className='section product-case-section'>
        <div className='container'>
          {defaultCases.map((item, i) => (
            <ProductCase key={item.id} defaultItem={item} index={i} />
          ))}
          {posts && posts.length > 0 && posts.map((p, i) => (
            <ProductCase key={p.id || i} post={p} index={defaultCases.length + i} />
          ))}
        </div>
      </section>

      <Coop />
    </>
  )
}

/**
 * /contact 联系与服务页 (1:1 对齐 yscai101.com/contact.html)
 */
const LayoutContact = props => {
  const brand = siteConfig('YSCWORKS_BRAND', CONFIG.YSCWORKS_BRAND, CONFIG)

  return (
    <>
      <section className='page-intro page-intro-contact'>
        <div className='container page-intro-grid'>
          <div className='page-intro-copy fade-in'>
            <p className='page-kicker'>SERVICE · CONTACT</p>
            <h1>先把问题说具体，我们再谈合作。</h1>
            <p className='page-summary'>
              请直接说明你在做什么、遇到什么问题、预算范围和希望得到的结果。我会判断目前是否适合做，不合适也会直接说明。
            </p>
          </div>
          <aside className='page-intro-card fade-in-right'>
            <h2>直接联系方式</h2>
            <ul className='contact-direct-list'>
              <li>
                <strong>微信</strong>
                <span>Mars1024_AI (添加请备注来意)</span>
              </li>
              <li>
                <strong>邮箱</strong>
                <a href='mailto:contact@mars1024.com'>contact@mars1024.com</a>
              </li>
              <li>
                <strong>合作原则</strong>
                <span>真诚沟通 · 拒绝画饼 · 按期交付</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='section-head fade-in'>
            <p className='section-label'>01 / SERVICES</p>
            <h2>目前开放的 6 项定制服务。</h2>
            <p>服务围绕正在真实使用和持续迭代的能力展开，务求解决实际业务痛点。</p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section className='section community-section'>
        <div className='container'>
          <div className='section-head fade-in'>
            <p className='section-label'>02 / COMMUNITY</p>
            <h2>交流群与同行矩阵。</h2>
            <p>加入免费交流群或探索推荐的高质量同行社群，与 500+ AI 实践者共同进化。</p>
          </div>
          <CommunityGrid />
        </div>
      </section>

      <Coop />
    </>
  )
}

/**
 * /about 关于创作者档案页
 */
const LayoutAbout = props => {
  return (
    <>
      <AboutDocument {...props} />
      <Coop />
    </>
  )
}

/**
 * /geo 专题实验室页
 */
const LayoutGeo = props => {
  return (
    <>
      <GeoComponent {...props} />
      <Coop />
    </>
  )
}

export {
  Layout404,
  LayoutAbout,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutContact,
  LayoutGeo,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  LayoutWorks,
  CONFIG as THEME_CONFIG
}
