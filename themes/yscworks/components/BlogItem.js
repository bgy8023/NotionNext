import NotionIcon from '@/components/NotionIcon'
import SmartLink from '@/components/SmartLink'

/**
 * 作品集卡片 —— 严格对齐 yscai101.com/works 的 work-card 结构
 * 数据映射（Notion 数据驱动）：
 *  状态(已上线/开发中) <- post.category 或 tags[0] 关键词判断
 *  分类文本         <- post.category
 *  Logo/封面        <- post.pageIcon / post.pageCoverThumbnail
 *  编号             <- index + 1
 *  H2 大标题        <- post.title
 *  副题/简介         <- post.summary（Notion 摘要字段）
 *  特性标签         <- post.tags（过滤状态词）
 *  主按钮           <- post.href（查看项目）
 * @param {*} param0
 */
const BlogItem = ({ post, index = 0, geo = false }) => {
  if (!post) return null
  const num = String(index + 1).padStart(2, '0')

  // 状态推断：category 或首个 tag 含关键词
  const statusText = post.category || post.tags?.[0] || '项目'
  const isLive = /上线|live|发布|release/.test(statusText)
  const isBuilding = /开发|building|wip|进行|dev/.test(statusText)
  const statusClass = isLive ? 'live' : isBuilding ? 'building' : 'live'
  const statusLabel = isLive ? '已上线' : isBuilding ? '开发中' : statusText

  // 特性标签：过滤掉状态词与分类词
  const strip = (post.tags || [])
    .filter(t => t !== statusText && t !== post.category)
    .slice(0, 4)

  const cover = post.pageCoverThumbnail || post.pageCover
  const summary = post.summary || ''

  // 视觉块关键词：优先用标签，其次固定「诊断 · 规划 · 建设 · 复盘」
  const vtagText = strip.length ? strip.join(' · ') : 'BUILD · SHIP · LEARN'
  const rangeText = `${String(index + 1).padStart(2, '0')}—${String(Math.max(index + 1, 4)).padStart(2, '0')}`

  return (
    <article className='yscworks-case replace' id={post.slug}>
      <div className='yscworks-grid'>
        <div className='yscworks-main'>
          {/* 状态 / 分类行 */}
          <div className='yscworks-meta'>
            <span className={`yscworks-status ${statusClass}`}><i />{statusLabel}</span>
            <span className='yscworks-meta-sep'>·</span>
            <span>{post.category || '作品'}</span>
          </div>

          {/* Logo / 封面 */}
          {cover ? (
            <img src={cover} alt={post.title} className='yscworks-icon' />
          ) : post.pageIcon ? (
            <span className='yscworks-icon'><NotionIcon icon={post.pageIcon} /></span>
          ) : null}

          {/* 编号 */}
          <p className='yscworks-num'>{num} / {post.title.toUpperCase ? post.title.toUpperCase().slice(0, 24) : ''}</p>

          {/* H2 大标题 */}
          <h2 className='yscworks-title-h2'>
            <SmartLink href={post.href}>{post.title}</SmartLink>
          </h2>

          {/* 副题 / 简介 */}
          {summary && <p className='yscworks-lead'>{summary}</p>}

          {/* 特性标签 */}
          {strip.length > 0 && (
            <div className='yscworks-strip'>
              {strip.map((t, i) => <span key={i}>{t}</span>)}
            </div>
          )}

          {/* 行动按钮 */}
          <div className='yscworks-actions'>
            <SmartLink href={post.href} className='yscworks-btn primary'>
              <span className='ysc-dot' />查看项目 <span>→</span>
            </SmartLink>
          </div>
        </div>

        {/* 右视觉块（浅绿/深绿交替） */}
        <div className={`yscworks-visual ${geo ? 'dark-green' : index % 2 === 1 ? 'dark-green' : 'light-green'}`}>
          <div>
            <p className='vnum'>{rangeText}</p>
            <p className='vtags'>{vtagText}</p>
          </div>
          <p className='vproj'>{statusLabel === '已上线' ? 'LIVE · ' : 'WIP · '}{post.title}</p>
        </div>
      </div>
    </article>
  )
}

export default BlogItem
