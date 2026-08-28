import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import MagBlogItem from './MagBlogItem'

/**
 * 杂志风博客列表 —— 无限滚动版
 */
export const BlogListScroll = props => {
  const { posts = [] } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, NOTION_CONFIG)

  const totalCount = posts.length
  const hasMore = page * POSTS_PER_PAGE < totalCount
  const postsToShow = posts.slice(0, POSTS_PER_PAGE * page)

  const handleGetMore = () => {
    if (!hasMore) return
    updatePage(page + 1)
  }

  const targetRef = useRef(null)

  const scrollTrigger = useCallback(
    throttle(() => {
      const scrollS = window.scrollY + window.outerHeight
      const clientHeight = targetRef?.current ? targetRef.current.clientHeight : 0
      if (scrollS > clientHeight + 100) {
        handleGetMore()
      }
    }, 500)
  )

  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger, { passive: true })
    return () => window.removeEventListener('scroll', scrollTrigger)
  })

  return (
    <div id='posts-wrapper' className='w-full' ref={targetRef}>
      <div className='mag-article-list'>
        {postsToShow.map((post, i) => (
          <MagBlogItem key={post.id || i} post={post} index={i} />
        ))}
      </div>

      {hasMore && (
        <div
          onClick={handleGetMore}
          className='w-full my-8 py-4 text-center cursor-pointer text-[#B84D33] hover:underline font-mono text-sm'>
          {locale?.COMMON?.MORE || '加载更多'} ↓
        </div>
      )}
    </div>
  )
}

export default BlogListScroll
