/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'

/**
 * yscworks 主题全局样式 —— yscai101.com/works 奶油底 + 陶土橙编辑风
 * 只对 #theme-yscworks 容器内生效；不支持 tailwind @apply 语法
 */
const Style = () => {
  return (
    <style jsx global>{`
    #theme-yscworks {
      --bg-primary: #f4ede2;
      --bg-secondary: #e9dcc8;
      --bg-card: rgba(250, 246, 240, 0.62);
      --bg-card-hover: rgba(255, 251, 246, 0.88);
      --text-primary: #241b15;
      --text-secondary: #65584d;
      --text-muted: #918276;
      --accent: #bb5d37;
      --accent-light: #d69254;
      --accent-purple: #566d8a;
      --gradient-accent: linear-gradient(135deg, #b85b35, #e7c37f);
      --border-color: rgba(91, 63, 41, 0.12);
      --border-color-hover: rgba(91, 63, 41, 0.22);
      --container-width: 1200px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --font-sans: system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
    }

    /* ===== 主题容器 ===== */
    #theme-yscworks {
      background: var(--bg-primary);
      color: var(--text-primary);
      font-family: var(--font-sans);
      -webkit-font-smoothing: antialiased;
      line-height: 1.6;
      min-height: 100vh;
    }
    #theme-yscworks a { color: inherit; text-decoration: none; }
    #theme-yscworks * { box-sizing: border-box; }

    /* ===== 顶部导航（套用 example 结构，重定义视觉） ===== */
    #theme-yscworks header,
    #theme-yscworks .navbar {
      background: rgba(244, 237, 226, 0.82);
      backdrop-filter: saturate(160%) blur(14px);
      border-bottom: 1px solid var(--border-color);
    }
    #theme-yscworks header a,
    #theme-yscworks .navbar a {
      color: var(--text-secondary);
    }
    #theme-yscworks header a:hover,
    #theme-yscworks .navbar a:hover {
      color: var(--text-primary);
    }

    /* ===== 顶部导航（yscai101 极简风格） ===== */
    #theme-yscworks .yscworks-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      height: 72px;
      display: flex;
      align-items: center;
      background: rgba(244, 237, 226, 0.82);
      backdrop-filter: saturate(160%) blur(14px);
      border-bottom: 1px solid var(--border-color);
    }
    #theme-yscworks .yscworks-nav .yscworks-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    #theme-yscworks .yscworks-brand {
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: .02em;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-navlinks { display: flex; gap: 30px; }
    #theme-yscworks .yscworks-navlinks a {
      color: var(--text-secondary);
      font-size: .95rem;
      transition: color .2s;
    }
    #theme-yscworks .yscworks-navlinks a:hover,
    #theme-yscworks .yscworks-navlinks a.active {
      color: var(--text-primary);
      font-weight: 600;
    }

    /* ===== Hero（首页顶部） ===== */
    #theme-yscworks .yscworks-hero {
      position: relative;
      padding: 88px 0 40px;
      overflow: hidden;
    }
    #theme-yscworks .yscworks-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 82% 14%, rgba(206, 66, 39, 0.18), transparent 10%),
        radial-gradient(circle at 78% 12%, rgba(239, 186, 98, 0.24), transparent 18%),
        radial-gradient(circle at 14% 64%, rgba(55, 101, 146, 0.08), transparent 18%),
        linear-gradient(180deg, rgba(255, 250, 239, 0.8), rgba(244, 237, 226, 0));
    }
    #theme-yscworks .yscworks-hero .yscworks-container {
      position: relative;
      z-index: 1;
      max-width: 820px;
    }
    #theme-yscworks .yscworks-kicker {
      font-size: .78rem;
      letter-spacing: .16em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 18px;
    }
    #theme-yscworks .yscworks-hero h1 {
      max-width: 14ch;
      font-size: clamp(2.8rem, 6vw, 4.6rem);
      line-height: .96;
      letter-spacing: -.055em;
      margin-bottom: 22px;
      font-weight: 800;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-hero p {
      max-width: 590px;
      font-size: 1.05rem;
      color: var(--text-secondary);
      line-height: 1.9;
    }

    /* ===== 合作 CTA ===== */
    #theme-yscworks .yscworks-coop {
      margin: 40px 0 20px;
      padding: 48px;
      border-radius: var(--radius-xl);
      background: var(--gradient-accent);
      color: #fff;
      position: relative;
      overflow: hidden;
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-label {
      font-size: .82rem;
      letter-spacing: .14em;
      text-transform: uppercase;
      opacity: .9;
    }
    #theme-yscworks .yscworks-coop h2 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      line-height: 1.15;
      margin: 10px 0;
      color: #fff;
    }
    #theme-yscworks .yscworks-coop p {
      max-width: 620px;
      opacity: .95;
      line-height: 1.8;
      margin-bottom: 20px;
      color: #fff;
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-row { display: flex; gap: 24px; }
    #theme-yscworks .yscworks-coop .yscworks-coop-row a {
      color: #fff;
      font-weight: 600;
      border-bottom: 1px solid rgba(255, 255, 255, .5);
      padding-bottom: 2px;
    }

    /* ===== 作品卡片（BlogItem 渲染） ===== */
    #theme-yscworks .yscworks-case {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
      gap: 36px;
      align-items: stretch;
      padding: 36px;
      border-radius: var(--radius-xl);
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: 0 18px 50px rgba(83, 53, 37, .07);
      transition: transform .3s, border-color .3s, background .3s;
      margin-bottom: 28px;
    }
    #theme-yscworks .yscworks-case:hover {
      transform: translateY(-3px);
      border-color: var(--border-color-hover);
      background: var(--bg-card-hover);
    }
    #theme-yscworks .yscworks-meta {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 18px;
      font-size: .85rem;
      color: var(--text-secondary);
      flex-wrap: wrap;
    }
    #theme-yscworks .yscworks-status {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-weight: 600;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-status i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    #theme-yscworks .yscworks-status.live i { background: #3aa76d; box-shadow: 0 0 0 4px rgba(58, 167, 109, .18); }
    #theme-yscworks .yscworks-status.building i { background: #d69254; box-shadow: 0 0 0 4px rgba(214, 146, 84, .18); }
    #theme-yscworks .yscworks-title {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 14px;
    }
    #theme-yscworks .yscworks-title .yscworks-icon {
      width: 54px;
      height: 54px;
      border-radius: 14px;
      object-fit: contain;
      background: #fff;
      padding: 6px;
      border: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
    }
    #theme-yscworks .yscworks-title img {
      width: 54px;
      height: 54px;
      border-radius: 14px;
      object-fit: contain;
      background: #fff;
      padding: 6px;
      border: 1px solid var(--border-color);
    }
    #theme-yscworks .yscworks-title .yscworks-num {
      font-size: .82rem;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 6px;
    }
    #theme-yscworks .yscworks-title h2 {
      font-size: 1.9rem;
      font-weight: 800;
      letter-spacing: -.02em;
      margin: 0;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-title h2 a { color: inherit; }
    #theme-yscworks .yscworks-lead {
      color: var(--text-secondary);
      line-height: 1.85;
      max-width: 60ch;
    }
    #theme-yscworks .yscworks-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0;
    }
    #theme-yscworks .yscworks-strip span {
      padding: 7px 14px;
      border-radius: 999px;
      background: rgba(91, 63, 41, .06);
      border: 1px solid var(--border-color);
      font-size: .85rem;
      color: var(--text-secondary);
    }
    #theme-yscworks .yscworks-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 22px; }
    #theme-yscworks .yscworks-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      border-radius: 999px;
      font-weight: 600;
      font-size: .95rem;
      transition: transform .2s, box-shadow .2s, opacity .2s;
    }
    #theme-yscworks .yscworks-btn.primary {
      background: var(--gradient-accent);
      color: #fff;
      box-shadow: 0 10px 26px rgba(184, 91, 53, .32);
    }
    #theme-yscworks .yscworks-btn.primary:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(184, 91, 53, .4); }
    #theme-yscworks .yscworks-btn.secondary { border: 1px solid var(--border-color); color: var(--text-primary); }

    /* 暗青视觉卡 */
    #theme-yscworks .yscworks-visual {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 340px;
      padding: 28px;
      color: #f7efe7;
      background: #2b3436;
      border-radius: var(--radius-xl);
      position: relative;
      overflow: hidden;
    }
    #theme-yscworks .yscworks-visual::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 80% 18%, rgba(99, 102, 241, .35), transparent 40%),
        radial-gradient(circle at 20% 80%, rgba(168, 85, 247, .28), transparent 45%);
    }
    #theme-yscworks .yscworks-visual > * { position: relative; z-index: 1; }
    #theme-yscworks .yscworks-visual .vnum { font-size: 2.4rem; font-weight: 800; letter-spacing: .04em; opacity: .9; }
    #theme-yscworks .yscworks-visual img { width: 60px; height: 60px; border-radius: 14px; background: #fff; padding: 8px; object-fit: contain; }
    #theme-yscworks .yscworks-visual strong { font-size: 1.4rem; line-height: 1.4; font-weight: 700; max-width: 18ch; }
    #theme-yscworks .yscworks-visual small { font-size: .85rem; opacity: .7; letter-spacing: .18em; text-transform: uppercase; }

    /* 正文排版（详情页） */
    #theme-yscworks article h2 { color: var(--text-primary); }
    #theme-yscworks article p { color: var(--text-secondary); }
    #theme-yscworks .mb-12 { margin-bottom: 28px; }

    /* 页脚 */
    #theme-yscworks footer {
      margin-top: 80px;
      padding: 64px 0 36px;
      background: var(--bg-secondary);
      border-top: 1px solid var(--border-color);
      color: var(--text-secondary);
    }

    /* 响应式 */
    @media (max-width: 900px) {
      #theme-yscworks .yscworks-case { grid-template-columns: 1fr; }
    }
    @media (max-width: 560px) {
      #theme-yscworks .yscworks-case { padding: 24px; }
      #theme-yscworks .yscworks-title h2 { font-size: 1.5rem; }
    }

    ${themeConsoleStyle('yscworks', CONFIG)}
  `}</style>
  )
}

export { Style }
