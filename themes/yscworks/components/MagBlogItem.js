import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

/**
 * 杂志风博客条目 —— 严格对齐 yscai101.com/blog.html 编辑风文章流
 * 数据映射：
 *  序号        <- index + 1 (01/02...)
 *  标题        <- post.title
 *  分类/标签   <- post.category / post.tags[0]
 *  日期        <- post.date
 *  摘要        <- post.summary (Notion 摘要)
 *  链接        <- post.href
 */
export const MagBlogItem = ({ post, index = 0 }) => {
  if (!post) return null
  const num = String(index + 1).padStart(2, '0')
  const category = post.category || '文章'
  const publishDate = post.date
    ? new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  const summary = post.summary || ''

  return (
    <article className='mag-article'>
      <div className='mag-article-meta'>
        <span className='mag-article-num'>{num}</span>
        <time className='mag-article-date'>{publishDate}</time>
        <span className='mag-article-category'>{category}</span>
      </div>
      <h2 className='mag-article-title'>
        <SmartLink href={post.href}>{post.title}</SmartLink>
      </h2>
      {summary && <p className='mag-article-summary'>{summary}</p>}
    </article>
  )
}

export default MagBlogItem
