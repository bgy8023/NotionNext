import NotionIcon from '@/components/NotionIcon'
import SmartLink from '@/components/SmartLink'

/**
 * /works 专属产品深度案例卡片 (对齐 yscai101.com product-case)
 * 支持 GEO / FileDev / MXMY / SayType 等 1:1 展示
 */
export const ProductCase = ({ post, index = 0, defaultItem = null }) => {
  const num = String(index + 1).padStart(2, '0')
  const item = defaultItem || {
    title: post?.title || '产品名称',
    slogan: post?.summary || '产品一句话简介',
    lead: post?.summary || '产品深度介绍与背景说明',
    status: post?.category || '已上线',
    category: post?.tags?.[0] || 'Web · 工具',
    tags: post?.tags || ['AI', '自动化'],
    facts: [
      { label: 'Web', value: '可直接访问' },
      { label: '状态', value: '持续迭代中' }
    ],
    link: post?.slug ? `/article/${post.slug}` : '#',
    linkText: '查看详情'
  }

  const isLive = /上线|live|发布/i.test(item.status || '')
  const isBuilding = /开发|building|wip|进行/i.test(item.status || '')
  const statusClass = isLive ? 'status-live' : isBuilding ? 'status-building' : 'status-live'
  const statusText = isLive ? '已上线' : isBuilding ? '开发中' : (item.status || '已上线')

  return (
    <article className={`product-case fade-in ${item.extraClass || ''}`} id={item.id || `product-${index}`}>
      <div className='product-case-copy'>
        <div className='product-case-meta'>
          <span className={statusClass}><i />{statusText}</span>
          {item.category && <span>{item.category}</span>}
        </div>

        <div className='product-title'>
          {item.icon ? (
            <img src={item.icon} alt={item.title} onError={(e) => { e.target.style.display = 'none' }} />
          ) : post?.pageIcon ? (
            <NotionIcon icon={post.pageIcon} />
          ) : null}
          <div>
            <p className='section-label'>{num} / {item.code || item.title.toUpperCase()}</p>
            <h2>{item.title}</h2>
          </div>
        </div>

        {item.slogan && <p className='product-slogan'>{item.slogan}</p>}
        {item.lead && <p className='product-case-lead'>{item.lead}</p>}

        {item.facts && item.facts.length > 0 && (
          <div className='product-facts'>
            {item.facts.map((f, fi) => (
              <div key={fi}>
                <strong>{f.label}</strong>
                <span>{f.value}</span>
              </div>
            ))}
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className='product-status-strip'>
            {item.tags.map((t, ti) => <span key={ti}>{t}</span>)}
          </div>
        )}

        {item.next && (
          <p className='product-next'>
            <strong>当前状态：</strong>{item.next}
          </p>
        )}

        <div className='home-actions'>
          {item.primaryLink && (
            <SmartLink href={item.primaryLink.href} className='btn btn-primary' target={item.primaryLink.target || '_self'}>
              {item.primaryLink.label} <span className='btn-icon'>→</span>
            </SmartLink>
          )}
          {item.secondaryLink && (
            <SmartLink href={item.secondaryLink.href} className='btn btn-secondary' target={item.secondaryLink.target || '_self'}>
              {item.secondaryLink.label}
            </SmartLink>
          )}
        </div>
      </div>

      {item.visual && (
        <div className={`product-visual ${item.visual.className || ''}`}>
          {item.visual.range && <span>{item.visual.range}</span>}
          {item.visual.icon && <img src={item.visual.icon} alt='' onError={(e) => { e.target.style.display = 'none' }} />}
          {item.visual.strong && <strong>{item.visual.strong}</strong>}
          {item.visual.small && <small>{item.visual.small}</small>}
        </div>
      )}

      {item.qr && (
        <figure className='product-qr'>
          <img src={item.qr.src} alt={item.qr.alt || '小程序码'} onError={(e) => { e.target.style.display = 'none' }} />
          <figcaption>{item.qr.caption}</figcaption>
        </figure>
      )}
    </article>
  )
}
