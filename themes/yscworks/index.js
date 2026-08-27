'use client'

import Comment from '@/components/Comment'
import replaceSearchResult from '@/components/Mark'
import NotionPage from '@/components/NotionPage'
import ShareBar from '@/components/ShareBar'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
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
import { ServiceGrid } from './components/ServiceGrid'
import { CommunityGrid } from './components/CommunityGrid'

/**
 * 基础布局框架 (单列全宽杂志风，对齐 yscai101.com)
 * @param {*} props
 * @returns {JSX.Element}
 */
const LayoutBase = props => {
  const { children, post } = props

  return (
    <div
      id='theme-yscworks'
      className={`${siteConfig('FONT_STYLE')} scroll-smooth min-h-screen flex flex-col justify-between`}>
      <Style />

      {/* 顶部极简导航栏 */}
      <Header {...props} />

      {/* 文章详情页专用标题栏 */}
      {post && <TitleBar {...props} />}

      {/* 主体内容区（全宽单列流） */}
      <main id='main-content' className='w-full grow'>
        {props.slotTop}
        {children}
      </main>

      {/* 底部四栏页脚 */}
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

      {/* 客户端微交互动效 */}
      <Effects />
    </div>
  )
}

/**
 * 首页 —— 1:1 对齐 yscai101.com 首页 12 大区块
 * SignalStrip → Hero → HelpGrid → Stats → RouteGrid → WhatIDo
 * → Projects → Updates → Community → Writing → Coop
 */
const LayoutIndex = props => {
  const { posts } = props
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
 * 文章列表页（博客/分类/标签）
 */
const LayoutPostList = props => {
  const { category, tag } = props

  return (
    <div className='container mx-auto py-12'>
      {/* 显示分类 */}
      {category && (
        <div className='pb-8 text-2xl font-bold'>
          <i className='mr-2 fas fa-folder-open text-[#B84D33]' />
          {category}
        </div>
      )}
      {/* 显示标签 */}
      {tag && <div className='pb-8 text-2xl font-bold'>#{tag}</div>}

      {siteConfig('POST_LIST_STYLE') === 'page' ? (
        <BlogListPage {...props} />
      ) : (
        <BlogListScroll {...props} />
      )}
    </div>
  )
}

/**
 * 文章详情页 (杂志风沉浸式阅读)
 */
const LayoutSlug = props => {
  const { post, lock, validPassword } = props
  const router = useRouter()
  const waiting404 = siteConfig('POST_WAITING_TIME_FOR_404') * 1000
  useEffect(() => {
    if (!post) {
      setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector('#article-wrapper #notion-article')
          if (!article) {
            router.push('/404').then(() => {
              console.warn('找不到页面', router.asPath)
            })
          }
        }
      }, waiting404)
    }
  }, [post])

  return (
    <div className='container mx-auto py-8 max-w-[900px]'>
      {lock ? (
        <PostLock validPassword={validPassword} />
      ) : post && (
        <div>
          <PostMeta post={post} />
          <div id='article-wrapper' className='mt-8'>
            <NotionPage post={post} />
            <ShareBar post={post} />
          </div>
          <Comment frontMatter={post} />
        </div>
      )}
    </div>
  )
}

/**
 * 404 页
 */
const Layout404 = props => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      const article = isBrowser && document.getElementById('article-wrapper')
      if (!article) {
        router.push('/')
      }
    }, 3000)
  }, [])

  return (
    <div className='w-full min-h-[60vh] flex flex-col justify-center items-center text-center py-24'>
      <h2 className='text-4xl font-bold mb-4'><i className='mr-3 fas fa-spinner animate-spin text-[#B84D33]' />404</h2>
      <p className='text-lg opacity-70'>页面无法加载，即将返回首页...</p>
    </div>
  )
}

/**
 * 搜索页
 */
const LayoutSearch = props => {
  const { keyword } = props
  const router = useRouter()
  useEffect(() => {
    if (isBrowser) {
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
    <div className='container mx-auto py-12'>
      <div className='pb-8'>
        <SearchInput {...props} />
      </div>
      <LayoutPostList {...props} />
    </div>
  )
}

/**
 * 归档列表
 */
const LayoutArchive = props => {
  const { archivePosts } = props
  return (
    <div className='container mx-auto py-12'>
      {Object.keys(archivePosts || {}).map(archiveTitle => (
        <BlogListArchive
          key={archiveTitle}
          archiveTitle={archiveTitle}
          archivePosts={archivePosts}
        />
      ))}
    </div>
  )
}

/**
 * 分类列表
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  return (
    <div className='container mx-auto py-12'>
      <div id='category-list' className='flex flex-wrap gap-4'>
        {categoryOptions?.map(category => (
          <SmartLink
            key={category.name}
            href={`/category/${category.name}`}
            className='px-6 py-3 rounded-lg border border-[rgba(78,46,29,0.15)] bg-[rgba(255,251,246,0.6)] hover:border-[#B84D33] hover:text-[#B84D33] transition-all'>
            <i className='mr-2 fas fa-folder' />
            {category.name} ({category.count})
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

/**
 * 标签列表
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  return (
    <div className='container mx-auto py-12'>
      <div id='tags-list' className='flex flex-wrap gap-3'>
        {tagOptions?.map(tag => (
          <SmartLink
            key={tag.name}
            href={`/tag/${encodeURIComponent(tag.name)}`}
            className='px-4 py-2 rounded-full border border-[rgba(78,46,29,0.15)] bg-[rgba(255,251,246,0.6)] hover:border-[#B84D33] hover:text-[#B84D33] text-sm transition-all'>
            <i className='mr-1 fas fa-tag' />
            {tag.name} {tag.count ? `(${tag.count})` : ''}
          </SmartLink>
        ))}
      </div>
    </div>
  )
}

/**
 * /works 项目与产品矩阵页
 */
const LayoutWorks = props => {
  const { posts } = props
  return (
    <WorksList posts={posts || []} showHero={true} showCta={true} />
  )
}

/**
 * /contact 联系与服务页
 */
const LayoutContact = props => {
  const label = siteConfig('YSCWORKS_COOP_LABEL', 'SERVICE · CONTACT')
  const title = '先把问题说具体，我们再谈合作。'
  const desc = '请直接说明你在做什么、遇到什么问题、预算范围和希望得到的结果。我会判断目前是否适合做，不合适也会直接说明。'

  return (
    <>
      <section className='page-intro'>
        <div className='container page-intro-single'>
          <p className='page-kicker'>
            <span className='live-dot' />
            {label}
          </p>
          <h1>{title}</h1>
          <p className='page-summary'>{desc}</p>
        </div>
      </section>

      <section className='section contact-section'>
        <div className='container'>
          <ServiceGrid />
        </div>
      </section>

      <section className='section community-section'>
        <div className='container'>
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
