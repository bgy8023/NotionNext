'use client'

import NotionPage from '@/components/NotionPage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isBrowser } from '@/lib/utils'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WorksList } from './components/WorksList'
import CONFIG from './config'
import { Style } from './style'

/**
 * 基础布局：所有页面都嵌入其中
 */
const LayoutBase = props => {
  const { children } = props
  return (
    <div id='theme-yscworks'>
      <Style />
      <Header {...props} />
      <main>{children}</main>
      <Footer {...props} />
      <button
        className='yscworks-totop'
        aria-label='返回顶部'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >↑</button>
    </div>
  )
}

/**
 * 首页：作品集（Hero + 编号项目卡片 + 合作 CTA）
 */
const LayoutIndex = props => {
  return (
    <LayoutBase {...props}>
      <WorksList posts={props.posts || []} showHero showCta />
    </LayoutBase>
  )
}

/**
 * 文章/项目列表（分类、标签页复用作品集样式，不显示 Hero/CTA）
 */
const LayoutPostList = props => {
  const { category, tag } = props
  return (
    <LayoutBase {...props}>
      <section className='yscworks-section'>
        <div className='yscworks-container'>
          {category && <p style={{ marginBottom: 24, color: 'var(--text-secondary)' }}><i className='mr-1' />分类：{category}</p>}
          {tag && <p style={{ marginBottom: 24, color: 'var(--text-secondary)' }}>#{tag}</p>}
          <WorksList posts={props.posts || []} showHero={false} showCta={false} />
        </div>
      </section>
    </LayoutBase>
  )
}

/**
 * 详情页：渲染 Notion 内容
 */
const LayoutSlug = props => {
  const { post, lock, validPassword } = props
  const router = useRouter()
  const waiting404 = Math.max(1, Number(siteConfig('POST_WAITING_TIME_FOR_404', 8)) || 8) * 1000
  useEffect(() => {
    if (!post) {
      const t = setTimeout(() => {
        if (isBrowser) {
          const article = document.querySelector('#article-wrapper #notion-article')
          if (!article) router.push('/404')
        }
      }, waiting404)
      return () => clearTimeout(t)
    }
  }, [post])

  return (
    <LayoutBase {...props}>
      {lock ? (
        <div className='yscworks-detail yscworks-container'>该内容已加密。</div>
      ) : post && (
        <div className='yscworks-detail yscworks-container'>
          <SmartLink href='/' className='yscworks-back'>← 返回项目</SmartLink>
          <h1>{post.title}</h1>
          {post.summary && <p className='yscworks-lead'>{post.summary}</p>}
          <div id='article-wrapper'>
            <NotionPage post={post} />
          </div>
        </div>
      )}
    </LayoutBase>
  )
}

/**
 * 404
 */
const Layout404 = props => {
  const router = useRouter()
  useEffect(() => {
    const t = setTimeout(() => {
      const article = isBrowser && document.getElementById('article-wrapper')
      if (!article) router.push('/')
    }, 3000)
    return () => clearTimeout(t)
  }, [])
  return (
    <LayoutBase {...props}>
      <div className='yscworks-detail yscworks-container' style={{ textAlign: 'center', minHeight: '60vh' }}>
        <h2>404 · 页面无法加载，即将返回首页</h2>
      </div>
    </LayoutBase>
  )
}

/**
 * 搜索页
 */
const LayoutSearch = props => {
  const { keyword } = props
  return (
    <LayoutBase {...props}>
      <section className='yscworks-section'>
        <div className='yscworks-container'>
          <p style={{ marginBottom: 24, color: 'var(--text-secondary)' }}>搜索：{keyword}</p>
          <WorksList posts={props.posts || []} showHero={false} showCta={false} />
        </div>
      </section>
    </LayoutBase>
  )
}

/**
 * 归档列表
 */
const LayoutArchive = props => {
  const { archivePosts } = props
  return (
    <LayoutBase {...props}>
      <section className='yscworks-section'>
        <div className='yscworks-container'>
          <WorksList posts={Object.values(archivePosts || {}).flat() || []} showHero={false} showCta={false} />
        </div>
      </section>
    </LayoutBase>
  )
}

/**
 * 分类列表
 */
const LayoutCategoryIndex = props => {
  const { categoryOptions } = props
  return (
    <LayoutBase {...props}>
      <section className='yscworks-section'>
        <div className='yscworks-container'>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {categoryOptions?.map(c => (
              <SmartLink key={c.name} href={`/category/${c.name}`} className='yscworks-btn secondary'>{c.name}({c.count})</SmartLink>
            ))}
          </div>
        </div>
      </section>
    </LayoutBase>
  )
}

/**
 * 标签列表
 */
const LayoutTagIndex = props => {
  const { tagOptions } = props
  return (
    <LayoutBase {...props}>
      <section className='yscworks-section'>
        <div className='yscworks-container'>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {tagOptions?.map(t => (
              <SmartLink key={t.name} href={`/tag/${encodeURIComponent(t.name)}`} className='yscworks-btn secondary'>{t.name}{t.count ? `(${t.count})` : ''}</SmartLink>
            ))}
          </div>
        </div>
      </section>
    </LayoutBase>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
