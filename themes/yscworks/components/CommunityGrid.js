import SmartLink from '@/components/SmartLink'
import { useState } from 'react'

/**
 * /contact 页面 —— 免费社群 + 付费推荐社群矩阵 (含二维码灯箱预览)
 * 严格对齐 yscai101.com/contact.html
 */
export const CommunityGrid = () => {
  const [previewImg, setPreviewImg] = useState(null)

  const freeEntries = [
    {
      tag: '免费交流',
      title: 'Mars1024 · AI 编程与产品实践',
      desc: '实践记录、AI 工具、自媒体、日常思考与项目进展。自然增长，同行交流。',
      link: '/contact',
      action: '进入交流 ↗'
    },
    {
      tag: '免费交流群 01',
      title: 'AI 编程学习交流群',
      desc: '分享 AI 编程学习、产品实践、动态和阶段性思考。',
      link: '/contact',
      action: '加入群聊 ↗'
    },
    {
      tag: '免费交流群 02',
      title: '内容工作流与出海实践群',
      desc: '围绕内容创作系统、自动化流程与出海实践进行交流。',
      link: '/contact',
      action: '加入群聊 ↗'
    }
  ]

  const paidCommunities = [
    {
      tag: '推荐社群',
      title: 'AI 破局俱乐部',
      desc: '更看重行动营、线下组局和沙龙等高行动密度活动。',
      img: '/assets/community-ai-breakthrough.png',
      link: 'https://t.zsxq.com/uFgH1'
    },
    {
      tag: '推荐社群',
      title: 'IDO老徐 · 陪你副业避坑',
      desc: '适合正在尝试或已经开始做副业、希望少踩坑的人。',
      img: '/assets/community-ido.png',
      link: 'https://t.zsxq.com/QkMGX'
    },
    {
      tag: '推荐社群',
      title: 'caoz 的成长陪伴星球',
      desc: '曹政老师的个人成长星球，覆盖互联网经验与长期判断。',
      img: '/assets/community-caoz.png',
      link: 'https://t.zsxq.com/RYNmR'
    },
    {
      tag: '推荐社群',
      title: '鹿鸣堂 · 千万进阶之路',
      desc: '由飞巴运营，围绕长期成长、认知进阶与实践积累展开。',
      img: '/assets/community-lumingtang.jpg',
      link: 'https://t.zsxq.com/WpFJ5'
    },
    {
      tag: '推荐社群',
      title: '飞巴成长陪伴星球',
      desc: '关注长期成长与持续陪伴，适合希望建立稳定学习节奏的人。',
      img: '/assets/community-feiba.jpg',
      link: 'https://t.zsxq.com/tREf1'
    },
    {
      tag: '出品 · 早期阶段',
      title: 'AI 出海赚钱案例库',
      desc: '聚焦 AI 出海案例拆解、视野与避坑，内容正在持续建设。',
      img: '/assets/community-ai-overseas.png',
      link: 'https://t.zsxq.com/3jux9',
      owned: true
    }
  ]

  return (
    <>
      {/* 免费入口 */}
      <section className='section community-free-section'>
        <div className='container'>
          <div className='lab-section-head fade-in'>
            <p className='section-label'>FREE ENTRY</p>
            <h2>不谈合作，也可以先从免费交流开始。</h2>
          </div>
          <div className='free-entry-grid'>
            {freeEntries.map((fe, i) => (
              <SmartLink
                key={i}
                href={fe.link}
                className={`free-entry-card fade-in ${i > 0 ? `delay-${i}` : ''}`}>
                <span>{fe.tag}</span>
                <h3>{fe.title}</h3>
                <p>{fe.desc}</p>
                <strong>{fe.action}</strong>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      {/* 推荐社群 */}
      <section className='section community-recommend-section'>
        <div className='container'>
          <div className='lab-section-head fade-in'>
            <p className='section-label'>PAID COMMUNITIES</p>
            <h2>我关注或推荐的社群。</h2>
            <p>基于个人体验和用途整理的入口，请按自己的需求判断。</p>
          </div>
          <div className='community-card-grid'>
            {paidCommunities.map((c, i) => (
              <a
                key={i}
                className={`community-card fade-in ${c.owned ? 'community-card-owned' : ''} ${i % 2 === 1 ? 'delay-1' : ''}`}
                href={c.link}
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src={c.img}
                  alt={`${c.title} 介绍卡`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPreviewImg(c.img);
                  }}
                  title='点击放大查看二维码'
                />
                <div>
                  <span>{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <strong>查看入口 ↗</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 原图灯箱预览 */}
      {previewImg && (
        <div
          className='community-preview-overlay open'
          role='dialog'
          aria-modal='true'
          onClick={() => setPreviewImg(null)}>
          <div className='community-preview-panel'>
            <button
              type='button'
              className='community-preview-close'
              aria-label='关闭原图预览'
              onClick={() => setPreviewImg(null)}>
              ×
            </button>
            <img src={previewImg} alt='二维码原图预览' />
          </div>
        </div>
      )}
    </>
  )
}