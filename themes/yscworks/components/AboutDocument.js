import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

/**
 * /about 页面 —— 深度个人档案组件 (5 章节杂志风格)
 * 严格对齐 yscai101.com/about.html
 */
export const AboutDocument = () => {
  const brand = siteConfig('YSCWORKS_BRAND', CONFIG.YSCWORKS_BRAND, CONFIG)
  const contactEmail = siteConfig('YSCWORKS_CONTACT_EMAIL', CONFIG.YSCWORKS_CONTACT_EMAIL, CONFIG)

  return (
    <>
      <section className="page-intro page-intro-about">
        <div className="container page-intro-grid">
          <div className="page-intro-copy fade-in">
            <p className="page-kicker">ABOUT · VERSION 1.0</p>
            <h1>{brand} 的第一版介绍。</h1>
            <p className="page-summary">
              这是一份会持续迭代的个人说明书：我是谁、过去做过什么、现在在做什么，以及可以怎样与我合作。
            </p>
          </div>
          <aside className="page-intro-card fade-in-right">
            <div className="profile-inline">
              <img
                src="/assets/wechat-avatar.jpg"
                alt={`${brand} 头像`}
                className="page-profile-avatar"
                onError={(e) => { e.target.style.display = "none" }}
              />
              <div>
                <h2>{brand}</h2>
                <p>用 AI 做产品的创作者 / AI 作者</p>
              </div>
            </div>
            <ul className="page-profile-points">
              <li>用 AI 做产品的创作者 / AI 实战者</li>
              <li>暂住天津 / 深圳，支持远程合作</li>
              <li>长期做内容、产品与 AI 实践</li>
              <li>
                <SmartLink href="/contact">联系与技术支持 →</SmartLink>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section about-document-section">
        <div className="container about-document-grid">
          <aside className="about-toc fade-in" aria-label="文章目录">
            <span>目录</span>
            <a href="#intro">01 · 现在的我</a>
            <a href="#identity">02 · 我的身份</a>
            <a href="#history">03 · 过去的积累</a>
            <a href="#now">04 · 现在做什么</a>
            <a href="#business">05 · 内容与业务</a>
            <a href="#beliefs">06 · 想说的话</a>
          </aside>

          <article className="about-document fade-in">
            <header id="intro" className="about-lead-block">
              <p className="about-dropcap">
                大家好，我是 {brand}，用 AI 做产品的创作者，也是一名 AI 实战者。
                过去持续做 AI 内容创作、副业探索与自动化工作流。
                我把主要精力投入 AI 产品开发、AI 定制服务、内容创作与工作流搭建，也在积极探索实践 AI 编程出海与跨境电商。
              </p>
              <blockquote>我做的是实际落地，不是空想和泛谈。</blockquote>
            </header>

            <section id="identity" className="about-chapter">
              <p className="section-label">01 / WHO I AM</p>
              <h2>关于我，我是谁？</h2>
              <div className="identity-list">
                <div>
                  <strong>文科背景与产品思维</strong>
                  <p>这是我理解用户、组织信息和表达产品的起点。</p>
                </div>
                <div>
                  <strong>用 AI 做产品的创作者</strong>
                  <p>用 AI 编程开发产品，搭建内容创作系统，也在尝试出海。</p>
                </div>
                <div>
                  <strong>自媒体内容创作者</strong>
                  <p>长期写公众号文章、深度长文和实践复盘。</p>
                </div>
                <div>
                  <strong>AI 副业实践者</strong>
                  <p>持续做相关项目、产品开发与商业化落地尝试。</p>
                </div>
                <div>
                  <strong>交付与咨询顾问</strong>
                  <p>做过社群、专栏、咨询和产品交付，重视轻运营与真实交付。</p>
                </div>
              </div>
            </section>

            <section id="history" className="about-chapter">
              <p className="section-label">02 / WHAT I HAVE DONE</p>
              <h2>过去的积累与实践。</h2>
              <p>
                累计写了上千篇长短内容，超过 200 万字。
                持续输出 AI 编程、产品开发、Agent Skills、AI 知识库、内容自动化与实践复盘。
              </p>
              <div className="about-proof-row">
                <div>
                  <strong>200 万+</strong>
                  <span>累计内容字数</span>
                </div>
                <div>
                  <strong>1000+</strong>
                  <span>长短内容</span>
                </div>
                <div>
                  <strong>500+人</strong>
                  <span>社群与交流伙伴</span>
                </div>
              </div>
              <p>
                以前的重点是自媒体与私域；现在增加了 AI 编程、产品开发、Agent Skills、AI 知识库、内容自动化和出海实践。
              </p>
              <SmartLink className="reading-link" href="/contact">
                进入免费交流与社群 ↗
              </SmartLink>
            </section>

            <section id="now" className="about-chapter">
              <p className="section-label">03 / CURRENT FOCUS</p>
              <h2>现在主要做三件事。</h2>
              <div className="about-numbered">
                <div>
                  <span>01</span>
                  <h3>用 AI 做产品</h3>
                  <p>
                    使用 Claude Code、Cursor、Codex 等工具开发网站、小程序、浏览器插件和本地软件。
                    目前主要推进个人站、FileDev、MXMY（秘心秘语）和 SayType。
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <h3>搭建 AI 内容工作流</h3>
                  <p>
                    组合 Claude Code、Codex、Obsidian、飞书知识库、Skill、Agent 与自动化流程，
                    整理文章、素材、选题、项目和复盘。先解决自己的问题，再把稳定部分整理为模板、工具和服务。
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <h3>做内容和个人业务</h3>
                  <p>
                    围绕 AI 编程做产品、出海、内容工作流和 AI 工具测评持续更新。
                    专注产品、实践与适合自己的长期业务。
                  </p>
                </div>
              </div>
            </section>

            <section id="business" className="about-chapter">
              <p className="section-label">04 / BUSINESS</p>
              <h2>内容、产品与服务。</h2>
              <p>
                免费内容用于记录和连接，产品用于验证真实需求，服务则解决具体问题。目前可以交流或合作的方向包括：
              </p>
              <ul className="about-checklist">
                <li>AI 编程开发工具和小产品</li>
                <li>AI 定制服务，例如 Agent Skill 定制</li>
                <li>AI 知识库与内容工作流搭建</li>
                <li>复利价值软件、课程、社群和内容产品推广</li>
                <li>其他与创作者、AI 落地和个人业务有关的合作</li>
              </ul>
              <p>有需求可以直接说明问题、预算和希望得到的结果。我会判断目前是否适合做，不合适也会直接说明。</p>
              <SmartLink href="/contact" className="btn btn-primary">
                查看合作方式 <span className="btn-icon">→</span>
              </SmartLink>
            </section>

            <section id="beliefs" className="about-chapter">
              <p className="section-label">05 / NOTES TO SELF</p>
              <h2>所思所信，且行且长。</h2>
              <p className="beliefs-prologue">
                草木有本，江河有源。人之所行，亦由所信。以下八则，不作预言，只作此刻的自省与持守。
              </p>
              <ol className="belief-list">
                <li>
                  <span>01</span>
                  <strong>前路未卜，行则将至。</strong>
                  <p>未来如川，未有定形；旧舟未必能渡新水。所谓确定，不是出发前得到答案，而是在行动中不断校准方向。</p>
                </li>
                <li>
                  <span>02</span>
                  <strong>可栖有枝，不忘生根。</strong>
                  <p>职场可以遮风，也能分担短期风险；但安稳不是停止生长。真正长久的依靠，是离开任何一处枝头，仍有独立生长的能力。</p>
                </li>
                <li>
                  <span>03</span>
                  <strong>先实其仓，后择其方。</strong>
                  <p>第一桶金不只是一笔数目，更是一段可以自主支配的时间。积蓄越厚，选择越从容，人生便少一些被迫，多一些主动。</p>
                </li>
                <li>
                  <span>04</span>
                  <strong>所费之处，即心所向。</strong>
                  <p>钱流向哪里，判断便落在哪里。健康、见识、工具、能力与热爱，都是对未来投下的票，也在悄然塑造将成为的自己。</p>
                </li>
                <li>
                  <span>05</span>
                  <strong>观彼行者，照见远方。</strong>
                  <p>信息差不只藏在消息里，更藏在人的选择与行动里。去看那些仍在生长的人看什么、做什么、与谁同行，远方才会渐渐显形。</p>
                </li>
                <li>
                  <span>06</span>
                  <strong>身安如舟，久行方远。</strong>
                  <p>健康不是一切，却是一切得以发生的河床。护住身体与心力，才有资格穿过周期，等到未来的科技红利真正抵达。</p>
                </li>
                <li>
                  <span>07</span>
                  <strong>善假新器，以成其事。</strong>
                  <p>AI 与新技术不是供人仰望的奇观，而是应当反复使用的器具。持续投入一点预算、一点时间，让技术进入真实生活并产生结果。</p>
                </li>
                <li>
                  <span>08</span>
                  <strong>五力相济，日新又新。</strong>
                  <p>学习使人更新，好奇使人发问，判断使人取舍，执行使事落地，审美使结果有分寸。五者相济，方能在变化中长久前行。</p>
                </li>
              </ol>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}

export default AboutDocument