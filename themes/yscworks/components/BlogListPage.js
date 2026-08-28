import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import MagBlogItem from './MagBlogItem'

/**
 * 杂志风博客列表 —— 分页版
 * 严格对齐 yscai101.com/blog.html 编辑风
 */
export const BlogListPage = props => {
  const { page = 1, posts = [], postCount } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const router = useRouter()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', 12, NOTION_CONFIG)
  const totalPage = Math.ceil((postCount || posts.length) / POSTS_PER_PAGE)
  const currentPage = +page

  const showPrev = currentPage > 1
  const showNext = currentPage < totalPage
  const pagePrefix = router.asPath
    .split('?')[0]
    .replace(/\/page\/[1-9]\d*/, '')
    .replace(/\/$/, '')
    .replace('.html', '')

  return (
    <div className='w-full'>
      <div className='mag-article-list' id='posts-wrapper'>
        {posts.map((post, i) => (
          <MagBlogItem key={post.id || i} post={post} index={(currentPage - 1) * POSTS_PER_PAGE + i} />
        ))}
        {posts.length === 0 && (
          <div className='py-16 text-center text-[#988A7F]'>
            <p>暂无相关文章</p>
          </div>
        )}
      </div>

      {totalPage > 1 && (
        <div className='flex justify-between items-center py-8 mt-8 border-t border-[rgba(78,46,29,0.11)] text-sm'>
          <SmartLink
            href={{
              pathname:
                currentPage - 1 === 1
                  ? `${pagePrefix}/`
                  : `${pagePrefix}/page/${currentPage - 1}`,
              query: router.query.s ? { s: router.query.s } : {}
            }}
            className={`${showPrev ? 'text-[#1F1915] hover:text-[#B84D33] font-semibold' : 'opacity-0 pointer-events-none'} transition-colors`}>
            ← {locale?.PAGINATION?.PREV || '上一页'}
          </SmartLink>
          <span className='text-xs text-[#988A7F] font-mono'>
            {currentPage} / {totalPage}
          </span>
          <SmartLink
            href={{
              pathname: `${pagePrefix}/page/${currentPage + 1}`,
              query: router.query.s ? { s: router.query.s } : {}
            }}
            className={`${showNext ? 'text-[#1F1915] hover:text-[#B84D33] font-semibold' : 'opacity-0 pointer-events-none'} transition-colors`}>
            {locale?.PAGINATION?.NEXT || '下一页'} →
          </SmartLink>
        </div>
      )}
    </div>
  )
}

export default BlogListPage
