import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

/**
 * 杂志风博客条目 —— 严格对齐 yscai101.com/blog.html 编辑风文章流
 * 数据映射：
 *  序号        <- index + 1 (01/02...)
 *  标题        <- post.title
 *  分类/标签   <- post.category / post.tags?.[0]
 *  日期        <- post.publishDay / post.date
 *  摘要        <- post.summary (Notion 摘要)
 *  链接        <- post.href
 */
export const MagBlogItem = ({ post, index = 0 }) => {
  if (!post) return null
  const num = String(index + 1).padStart(2, '0')
  const category = post.category || post.tags?.[0] || '文章'

  // 安全提取日期
  let publishDate = ''
  if (post.publishDay) {
    publishDate = post.publishDay
  } else if (post.date) {
    const raw = typeof post.date === 'string' ? post.date : post.date?.start_date
    if (raw) {
      publishDate = raw
    }
  } else if (post.publishDate) {
    try {
      const d = new Date(post.publishDate)
      if (!isNaN(d.getTime())) {
        publishDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
      }
    } catch (e) {}
  }

  const summary = post.summary || ''

  return (
    <article className='mag-article'>
      <div className='mag-article-meta'>
        <span className='mag-article-num'>{num}</span>
        {publishDate && <time className='mag-article-date'>{publishDate}</time>}
        <span className='mag-article-category'>{category}</span>
      </div>
      <div className='mag-article-content'>
        <h2 className='mag-article-title'>
          <SmartLink href={post.href}>{post.title}</SmartLink>
        </h2>
        {summary && <p className='mag-article-summary'>{summary}</p>}
      </div>
    </article>
  )
}

export default MagBlogItem
