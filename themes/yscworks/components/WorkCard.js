import NotionIcon from '@/components/NotionIcon'
import SmartLink from '@/components/SmartLink'

/**
 * 单个项目卡片（对应 yscai101 的 product-case 块）
 * 数据来自 Notion 根页面下的子页面（标准字段）：
 *   post.title          项目名
 *   post.summary        简介（lead）
 *   post.pageIcon       图标/Logo（emoji 或图片）
 *   post.pageCoverThumbnail 视觉卡配图
 *   post.category       状态（建议填「已上线」/「开发中」）
 *   post.tags           标签（用于状态条 / 特性条）
 *   post.href           详情页链接
 *
 * @param {*} param0
 */
const WorkCard = ({ post, index = 0, geo = false }) => {
  if (!post) return null
  const num = String(index + 1).padStart(2, '0')

  // 状态推导：优先 category，其次 tags
  const statusText = post.category || post.tags?.[0] || '项目'
  const isLive = /上线|live|发布/.test(statusText)
  const isBuilding = /开发|building|wip|进行/.test(statusText)
  const statusClass = isLive ? 'live' : isBuilding ? 'building' : 'live'
  const statusLabel = isLive ? '已上线' : isBuilding ? '开发中' : statusText

  // 特性条：取 tags 中除状态外的标签，最多 4 个
  const strip = (post.tags || []).filter(t => t !== statusText).slice(0, 4)
  const cover = post.pageCoverThumbnail || post.pageCover

  return (
    <article className='yscworks-case' id={post.slug}>
      <div className='yscworks-case-copy'>
        <div className='yscworks-meta'>
          <span className={`yscworks-status ${statusClass}`}><i />{statusLabel}</span>
          {post.category && <span>{post.category}</span>}
        </div>

        <div className='yscworks-title'>
          {post.pageIcon
            ? <NotionIcon icon={post.pageIcon} />
            : null}
          <div>
            <p className='yscworks-num'>{num} / {post.title}</p>
            <h2>{post.title}</h2>
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
        <span>{num}—04</span>
        {cover
          ? <img src={cover} alt={post.title} />
          : (post.pageIcon ? <NotionIcon icon={post.pageIcon} /> : null)}
        <strong>{post.title}</strong>
      </div>
    </article>
  )
}

export default WorkCard
