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

  // 状态推断：仅在 category+tags 命中「开发|wip|内测|进行」时为「开发中」，否则默认「已上线」
  const corpus = [post.category, ...(post.tags || [])].filter(Boolean).join(' ')
  const isBuilding = /开发|内测|进行|wip|building|dev/i.test(corpus)
  const statusLabel = isBuilding ? '开发中' : '已上线'
  const statusClass = isBuilding ? 'building' : 'live'

  // 分类显示：与状态文本重复则隐藏
  const showCategory = post.category && post.category !== statusLabel

  // 特性标签：过滤状态词
  const strip = (post.tags || []).filter(t => t !== statusLabel).slice(0, 4)

  const cover = post.pageCoverThumbnail || post.pageCover
  const summary = post.summary || ''

  // 视觉块关键词
  const vtagText = strip.length ? strip.join(' · ') : 'BUILD · SHIP · LEARN'
  const rangeText = `${String(index + 1).padStart(2, '0')}—${String(Math.max(index + 1, 4)).padStart(2, '0')}`
  // 编号项目名：截取标题前 12 字符（参考站是短代号）
  const shortName = post.title.length > 12 ? post.title.slice(0, 12) + '…' : post.title

  return (
    <article className='yscworks-case replace' id={post.slug}>
      <div className='yscworks-grid'>
        <div className='yscworks-main'>
          {/* 状态 / 分类行 */}
          <div className='yscworks-meta'>
            <span className={`yscworks-status ${statusClass}`}><i />{statusLabel}</span>
            {showCategory && (
              <>
                <span className='yscworks-meta-sep'>·</span>
                <span>{post.category}</span>
              </>
            )}
          </div>

          {/* Logo / 封面 */}
          {cover ? (
            <img src={cover} alt={post.title} className='yscworks-icon' />
          ) : post.pageIcon ? (
            <span className='yscworks-icon'><NotionIcon icon={post.pageIcon} /></span>
          ) : null}

          {/* 编号 */}
          <p className='yscworks-num'>{num} / {shortName}</p>

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

        {/* 右视觉块（绿/浅绿交替，首卡 geo 或首项用深绿） */}
        <div className={`yscworks-visual ${geo || index === 0 ? 'dark-green' : (index % 2 === 0 ? 'light-green' : 'dark-green')}`}>
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
