import NotionIcon from '@/components/NotionIcon'
import SmartLink from '@/components/SmartLink'

/**
 * 作品集卡片 —— 复刻 yscai101.com/works 的 product-case 块
 * @param {*} param0
 */
const BlogItem = ({ post, index = 0, geo = false }) => {
  if (!post) return null
  const num = String(index + 1).padStart(2, '0')

  const statusText = post.category || post.tags?.[0] || '项目'
  const isLive = /上线|live|发布/.test(statusText)
  const isBuilding = /开发|building|wip|进行/.test(statusText)
  const statusClass = isLive ? 'live' : isBuilding ? 'building' : 'live'
  const statusLabel = isLive ? '已上线' : isBuilding ? '开发中' : statusText

  const strip = (post.tags || []).filter(t => t !== statusText).slice(0, 4)
  const cover = post.pageCoverThumbnail || post.pageCover

  return (
    <article className='yscworks-case replace' id={post.slug}>
      <div>
        <div className='yscworks-meta'>
          <span className={`yscworks-status ${statusClass}`}><i />{statusLabel}</span>
          {post.category && <span>{post.category}</span>}
        </div>

        <div className='yscworks-title'>
          {post.pageIcon ? (
            <span className='yscworks-icon'><NotionIcon icon={post.pageIcon} /></span>
          ) : null}
          <div>
            <p className='yscworks-num'>{num} / {post.title}</p>
            <h2>
              <SmartLink href={post.href}>{post.title}</SmartLink>
            </h2>
          </div>
        </div>

        {post.summary && <p className='yscworks-lead'>{post.summary}</p>}

        {strip.length > 0 && (
          <div className='yscworks-strip'>
            {strip.map((t, i) => <span key={i}>{t}</span>)}
          </div>
        )}

        <div className='yscworks-actions'>
          <SmartLink href={post.href} className='yscworks-btn primary'>
            查看项目 <span>→</span>
          </SmartLink>
        </div>
      </div>

      <div className={`yscworks-visual ${geo ? 'geo' : ''}`}>
        <span className='vnum'>{num}—04</span>
        {cover ? (
          <img src={cover} alt={post.title} />
        ) : post.pageIcon ? (
          <NotionIcon icon={post.pageIcon} />
        ) : null}
        <div>
          <small>{statusLabel.toUpperCase()}</small>
          <strong>{post.title}</strong>
        </div>
      </div>
    </article>
  )
}

export default BlogItem
