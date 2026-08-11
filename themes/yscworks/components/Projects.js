import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import WorkCard from './WorkCard'

/**
 * CURRENT PRODUCTS —— 产品矩阵（Notion 子页面驱动）
 * 复用 WorkCard，保留 yscai101 lab-project-card 的样式类
 */
const Projects = ({ posts = [] }) => {
  const label = siteConfig('YSCWORKS_PROJECTS_LABEL', CONFIG.YSCWORKS_PROJECTS_LABEL, CONFIG)
  const title = siteConfig('YSCWORKS_PROJECTS_TITLE', CONFIG.YSCWORKS_PROJECTS_TITLE, CONFIG)
  const desc = siteConfig('YSCWORKS_PROJECTS_DESC', CONFIG.YSCWORKS_PROJECTS_DESC, CONFIG)

  return (
    <section className='yscworks-lab-projects section' id='works'>
      <div className='yscworks-container'>
        <div className='yscworks-lab-section-head'>
          <p className='yscworks-section-label'>{label}</p>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className='yscworks-lab-project-grid'>
          {posts.map((post, i) => (
            <WorkCard key={post.id || i} post={post} index={i} />
          ))}
          {posts.length === 0 && (
            <p style={{ color: 'var(--text-secondary)' }}>
              暂无项目，请在 Notion 根页面下添加子页面。
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export { Projects }