/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import { PORT_STYLES } from './port-styles'

/**
 * yscworks 主题全局样式 —— 严格对齐 yscai101.com/works 编辑风暖纸质感
 * 设计令牌来源：design-system-expert（彩格调）输出，参考站权威计算值
 * 原型参照：prototype/works_prototype.html（已通过质量审查与交付校验）
 * 只对 #theme-yscworks 容器内生效；不支持 tailwind @apply 语法
 */
const Style = () => {
  return (
    <style jsx global>{`
    #theme-yscworks {
      /* ===== 色彩令牌（对齐 yscai101.com 暖纸主题） ===== */
      --bg: #f4ede2;
      --bg-soft: rgba(244, 237, 226, 0.82);
      --bg-secondary: #e9dcc8;
      --bg-card: rgba(250, 246, 240, 0.62);
      --bg-card-hover: rgba(255, 251, 246, 0.88);
      --text-primary: #241b15;
      --text-secondary: #65584d;
      --text-muted: #918276;
      --accent: #bb5d37;
      --accent-light: #d69254;
      --accent-soft: rgb(154, 100, 45);
      --accent-purple: #566d8a;
      --accent-pink: #cf7b56;
      --gradient-accent: linear-gradient(135deg, #b85b35, #e7c37f);
      --green: #2d5f56;
      --green-2: #3b7057;
      --green-3: #315f49;
      --green-light: #EDF4EE;
      --gold: #e7c37f;
      --dark-base: #252827;
      --dark-text: #f7efe7;
      --panel: rgba(255, 251, 246, 0.66);
      --panel-strong: rgba(255, 251, 246, 0.78);
      --panel-cream: rgba(250, 246, 240, 0.62);
      --panel-cream-strong: rgba(255, 251, 246, 0.88);
      --border-card: rgba(91, 63, 41, 0.1);
      --border-card-hover: rgba(91, 63, 41, 0.2);
      --border-cta: rgba(77, 58, 42, 0.12);
      --border-btn-main: rgba(184, 91, 53, 0.16);
      --border-btn-sub: rgba(82, 57, 38, 0.12);
      --tag-bg: rgba(255, 255, 255, 0.58);
      --shadow-quick: rgba(31, 27, 24, 0.28) 0 28px 90px;
      --shadow-card: 0 24px 70px rgba(68, 48, 34, 0.08);
      --shadow-card-hover: 0 28px 78px rgba(68, 48, 34, 0.12);
      --shadow-btn: 0 8px 22px rgba(184, 91, 53, 0.16);
      --shadow-btn-hover: 0 12px 28px rgba(184, 91, 53, 0.18);
      --glow-color: rgba(231, 189, 96, 0.16);

      /* ===== 排版令牌 ===== */
      --font-sans: system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', 'Segoe UI', sans-serif;
      --font-serif: Georgia, 'Noto Serif SC', 'Songti SC', serif;
      --font-mono: 'SF Mono', 'Cascadia Code', ui-monospace, Consolas, monospace;
      --fs-body: 16px;
      --fs-hero: 6.7rem;
      --fs-card-h2: 4.4rem;
      --fs-cta: 4.4rem;
      --fs-nav: 0.9rem;
      --fs-num: 12px;
      --fs-kicker: 13.44px;
      --fs-quick-title: 32px;
      --lh-tight: 0.96;
      --lh-heading: 1.05;

      /* ===== 几何令牌 ===== */
      --container: 1200px;
      --nav-height: 72px;
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --radius-card: 24px;
      --radius-hero: 36px;
      --radius-cta: 34px;
      --radius-quick-btn: 6px;
      --radius-quick-panel: 8px;
      --transition-fast: 0.2s ease;
      --transition-normal: 0.3s ease;
      --transition-slow: 0.5s ease;
    }

    /* ===== 基础 ===== */
    #theme-yscworks {
      background: var(--bg);
      color: var(--text-primary);
      font-family: var(--font-sans);
      font-size: var(--fs-body);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
    }
    #theme-yscworks a { color: inherit; text-decoration: none; }
    #theme-yscworks * { box-sizing: border-box; }
    #theme-yscworks .ysc-container {
      max-width: var(--container);
      margin: 0 auto;
      padding: 0 32px;
    }
    @media (max-width: 720px) {
      #theme-yscworks .ysc-container { padding: 0 20px; }
    }

    /* ===== 顶部导航（fixed 透明，对齐参考站） ===== */
    #theme-yscworks header,
    #theme-yscworks .navbar {
      background: rgba(244, 237, 226, 0.82);
      backdrop-filter: saturate(160%) blur(14px);
      border-bottom: 1px solid var(--border-card);
    }
    #theme-yscworks .yscworks-nav {
      position: sticky;
      top: 0;
      z-index: 50;
      background: transparent;
      backdrop-filter: saturate(120%);
    }
    /* 全局容器（所有区块共用） */
    #theme-yscworks .yscworks-container {
      max-width: var(--container);
      margin: 0 auto;
      padding: 0 24px;
    }
    @media (max-width: 720px) {
      #theme-yscworks .yscworks-container { padding: 0 18px; }
    }
    #theme-yscworks .yscworks-nav .yscworks-container {
      max-width: var(--container);
      margin: 0 auto;
      padding: 22px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    @media (max-width: 520px) {
      #theme-yscworks .yscworks-nav .yscworks-container { padding: 18px 20px; }
    }
    #theme-yscworks .yscworks-brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 18px;
      color: var(--text-primary);
      letter-spacing: 0.01em;
    }
    #theme-yscworks .yscworks-brand .yscworks-brand-mark {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--gradient-accent);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      box-shadow: 0 0 0 1px rgba(58,105,82,0.28), 0 5px 14px rgba(75,53,37,0.1);
      flex-shrink: 0;
    }
    #theme-yscworks .yscworks-brand .yscworks-brand-name {
      font-family: var(--font-serif);
      font-weight: 500;
    }
    /* 汉堡菜单按钮（移动端） */
    #theme-yscworks .yscworks-nav-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 6px;
    }
    #theme-yscworks .yscworks-nav-toggle span {
      display: block;
      width: 22px;
      height: 2px;
      background: var(--text-primary);
      border-radius: 1px;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
    #theme-yscworks .yscworks-nav-toggle.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    #theme-yscworks .yscworks-nav-toggle.open span:nth-child(2) {
      opacity: 0;
    }
    #theme-yscworks .yscworks-nav-toggle.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
    /* 移动端菜单 */
    #theme-yscworks .yscworks-mobile-menu {
      position: fixed;
      inset: 0;
      z-index: 49;
      background: rgba(244,237,226,0.98);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: yscworks-menuIn 0.25s ease;
    }
    @keyframes yscworks-menuIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    #theme-yscworks .yscworks-mobile-menu-inner {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
    #theme-yscworks .yscworks-mobile-menu-inner a {
      font-family: var(--font-serif);
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    #theme-yscworks .yscworks-mobile-menu-inner a:hover,
    #theme-yscworks .yscworks-mobile-menu-inner a.active {
      color: var(--accent);
    }
    @media (max-width: 520px) {
      #theme-yscworks .yscworks-nav-toggle { display: flex; }
    }
    #theme-yscworks .yscworks-navlinks {
      display: flex;
      gap: 36px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    #theme-yscworks .yscworks-navlinks a {
      position: relative;
      font-size: var(--fs-nav);
      color: var(--text-primary);
      opacity: 0.86;
      transition: opacity 0.18s ease;
    }
    #theme-yscworks .yscworks-navlinks a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: width 0.3s ease;
    }
    #theme-yscworks .yscworks-navlinks a:hover::after,
    #theme-yscworks .yscworks-navlinks a.active::after {
      width: 100%;
    }
    #theme-yscworks .yscworks-navlinks a:hover { opacity: 1; }
    #theme-yscworks .yscworks-navlinks a.active { color: var(--accent); opacity: 1; }
    @media (max-width: 720px) {
      #theme-yscworks .yscworks-navlinks { gap: 18px; }
      #theme-yscworks .yscworks-navlinks a { font-size: 16px; }
    }
    @media (max-width: 520px) {
      #theme-yscworks .yscworks-navlinks { display: none; }
    }

    /* ===== Hero（对齐参考站 63.2px/700） ===== */
    #theme-yscworks .yscworks-hero {
      padding: 96px 0 72px;
      position: relative;
    }
    #theme-yscworks .yscworks-kicker {
      font-size: var(--fs-num);
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin: 0 0 22px;
    }
    #theme-yscworks .yscworks-hero .yscworks-kicker { color: var(--accent); }
    #theme-yscworks .yscworks-hero h1 {
      font-family: var(--font-serif);
      font-size: clamp(3.5rem, 7vw, 6.7rem);
      font-weight: 500;
      line-height: 0.96;
      letter-spacing: 0;
      margin: 0 0 22px;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-hero p {
      max-width: 590px;
      font-size: 1.08rem;
      line-height: 1.95;
      color: var(--text-secondary);
      margin: 0;
    }

    /* ===== 作品卡（透明底/圆角0/padding 46px/1px 描边） ===== */
    #theme-yscworks .yscworks-list {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-bottom: 80px;
    }
    #theme-yscworks .yscworks-case {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 28px;
      padding: 46px;
      position: relative;
      transition: box-shadow 0.35s ease, background 0.35s ease;
      margin-bottom: 0;
      box-shadow: var(--shadow-card);
    }
    #theme-yscworks .yscworks-case:hover {
      box-shadow: var(--shadow-card-hover);
      background: var(--bg-card-hover);
    }
    #theme-yscworks .yscworks-case .yscworks-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 360px;
      gap: 32px;
      align-items: stretch;
    }
    @media (max-width: 900px) {
      #theme-yscworks .yscworks-case .yscworks-grid { grid-template-columns: 1fr; }
      #theme-yscworks .yscworks-case { padding: 32px; }
    }
    @media (max-width: 520px) {
      #theme-yscworks .yscworks-case { padding: 24px; }
    }

    /* 状态 / 分类行 */
    #theme-yscworks .yscworks-meta {
      display: flex;
      align-items: center;
      gap: 14px;
      font-size: 13px;
      color: var(--text-secondary);
      margin-bottom: 26px;
      flex-wrap: wrap;
    }
    #theme-yscworks .yscworks-status { display: inline-flex; align-items: center; gap: 7px; }
    #theme-yscworks .yscworks-status i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
    }
    #theme-yscworks .yscworks-status.live i { background: var(--green); }
    #theme-yscworks .yscworks-status.building i { background: var(--accent); }
    #theme-yscworks .yscworks-status.live { color: var(--green); font-weight: 500; }
    #theme-yscworks .yscworks-status.building { color: var(--accent); font-weight: 500; }
    #theme-yscworks .yscworks-meta-sep { color: rgba(78, 46, 29, 0.25); }

    /* Logo */
    #theme-yscworks .yscworks-icon,
    #theme-yscworks .yscworks-main img.yscworks-icon {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      background: var(--panel);
      border: 1px solid var(--border-card);
      display: flex;
      align-items: center;
      justify-content: center;
      object-fit: contain;
      padding: 6px;
      margin-bottom: 28px;
      font-size: 26px;
    }

    /* 编号 */
    #theme-yscworks .yscworks-num {
      font-size: var(--fs-num);
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin: 0 0 14px;
    }

    /* H2 大标题（Georgia serif, 大字号, 500） */
    #theme-yscworks .yscworks-title-h2 {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 5vw, 4.4rem);
      font-weight: 500;
      line-height: 1.05;
      letter-spacing: 0;
      margin: 0 0 16px;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-title-h2 a { color: inherit; }

    /* 副题 */
    #theme-yscworks .yscworks-sub {
      font-size: 13.44px;
      color: var(--text-primary);
      opacity: 0.78;
      margin: 0 0 18px;
    }

    /* 简介 */
    #theme-yscworks .yscworks-lead {
      font-size: 13.44px;
      line-height: 1.7;
      color: var(--text-secondary);
      margin: 0 0 26px;
      max-width: 620px;
    }

    /* 标签 chips（白半透明底/次色/圆角0） */
    #theme-yscworks .yscworks-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 28px;
    }
    #theme-yscworks .yscworks-strip span {
      display: inline-block;
      padding: 6px 14px;
      background: var(--tag-bg);
      color: var(--text-secondary);
      font-size: 12.5px;
      border-radius: 999px;
      border: 1px solid var(--border-card);
    }

    /* 按钮行（胶囊 999px） */
    #theme-yscworks .yscworks-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 0;
    }
    /* 主按钮：白字 + 陶土红描边 + 透明底 */
    #theme-yscworks .yscworks-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 22px;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 500;
      transition: background 0.18s ease, color 0.18s ease;
    }
    #theme-yscworks .yscworks-btn.primary {
      border: 1px solid var(--border-btn-main);
      background: transparent;
      color: #fff;
    }
    #theme-yscworks .yscworks-btn.primary:hover {
      background: var(--accent);
      color: #fff;
      border-color: var(--accent);
    }
    #theme-yscworks .yscworks-btn.primary .ysc-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fff;
      transition: background 0.18s ease;
    }
    #theme-yscworks .yscworks-btn.primary:hover .ysc-dot { background: #fff; }
    /* 次按钮：主色字 + 暖白底 + 细描边 */
    #theme-yscworks .yscworks-btn.secondary {
      border: 1px solid var(--border-btn-sub);
      background: var(--panel);
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-btn.secondary:hover { background: rgba(255, 251, 246, 0.95); }

    /* 状态说明（金句） */
    #theme-yscworks .yscworks-statusnote {
      font-size: 13px;
      color: var(--text-secondary);
      margin: -12px 0 24px;
      line-height: 1.7;
    }
    #theme-yscworks .yscworks-statusnote .ysc-quote { color: var(--text-primary); font-weight: 500; }

    /* 右视觉块（绿/浅绿/暖白，无抢戏深色） */
    #theme-yscworks .yscworks-visual {
      border-radius: 28px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 260px;
      position: relative;
      overflow: hidden;
    }
    #theme-yscworks .yscworks-visual.dark-green { background: var(--green); color: #fff; }
    #theme-yscworks .yscworks-visual.light-green { background: var(--green-light); color: var(--text-primary); }
    #theme-yscworks .yscworks-visual .vnum {
      font-size: 56px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.01em;
      margin: 0;
    }
    #theme-yscworks .yscworks-visual .vtags {
      font-size: 13px;
      opacity: 0.86;
      margin: 14px 0 18px;
      letter-spacing: 0.02em;
    }
    #theme-yscworks .yscworks-visual .vproj {
      font-size: 12px;
      opacity: 0.66;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin: 0;
    }
    #theme-yscworks .yscworks-visual .vquote {
      font-size: 18px;
      line-height: 1.5;
      font-weight: 500;
      margin: 0;
      color: var(--green);
    }
    #theme-yscworks .yscworks-visual .vquote .accent { color: var(--accent); }
    #theme-yscworks .yscworks-visual .vstack { margin-top: 18px; }
    #theme-yscworks .yscworks-visual .vstack div {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      opacity: 0.55;
      padding: 6px 0;
      border-top: 1px solid rgba(31, 25, 21, 0.10);
    }
    #theme-yscworks .yscworks-visual .vstack div:last-child { border-bottom: 1px solid rgba(31, 25, 21, 0.10); }

    /* ===== 合作 CTA 卡（34px 圆角/暖白底/不对称 padding） ===== */
    #theme-yscworks .yscworks-coop {
      margin: 0;
      padding: 80px 0 100px;
      background: transparent;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-card {
      background: var(--panel-cream-strong);
      border: 1px solid var(--border-cta);
      border-radius: var(--radius-cta);
      padding: 48px 48px 48px 70px;
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-card);
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-card::after {
      content: 'AVAILABLE';
      position: absolute;
      bottom: -20px;
      right: 30px;
      font-size: clamp(6rem, 12vw, 11rem);
      font-weight: 800;
      color: rgba(184,91,53,0.06);
      letter-spacing: -0.04em;
      line-height: 1;
      pointer-events: none;
      z-index: 0;
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-card > * { position: relative; z-index: 1; }
    @media (max-width: 720px) {
      #theme-yscworks .yscworks-coop .yscworks-coop-card {
        padding: 36px 28px 36px 36px;
        border-radius: 24px;
      }
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-label {
      font-size: var(--fs-num);
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin: 0 0 14px;
      opacity: 1;
    }
    #theme-yscworks .yscworks-coop h2 {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 5vw, var(--fs-cta));
      font-weight: 500;
      line-height: 1.04;
      letter-spacing: 0;
      color: var(--text-primary);
      margin: 14px 0 18px;
      max-width: 820px;
    }
    #theme-yscworks .yscworks-coop p {
      font-size: 14px;
      color: var(--text-secondary);
      margin: 0 0 22px;
      max-width: 720px;
      line-height: 1.7;
      opacity: 1;
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-row {
      display: flex;
      gap: 14px;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 22px;
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-row a {
      font-size: 14px;
      color: var(--text-primary);
      border: 1px solid var(--border-card);
      border-radius: 999px;
      padding: 8px 18px;
      transition: border-color 0.18s ease, color 0.18s ease;
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-row a:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }
    #theme-yscworks .yscworks-coop .yscworks-coop-status i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      display: inline-block;
    }

    /* ===== 页脚（四栏，padding 60px 0 40px） ===== */
    #theme-yscworks footer.yscworks-footer {
      margin-top: 0;
      padding: 60px 0 40px;
      border-top: 1px solid var(--border-card);
      background: transparent;
      color: var(--text-secondary);
    }
    #theme-yscworks .yscworks-footer .yscworks-footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
      gap: 40px;
      margin-bottom: 50px;
    }
    @media (max-width: 900px) {
      #theme-yscworks .yscworks-footer .yscworks-footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
    }
    @media (max-width: 520px) {
      #theme-yscworks .yscworks-footer .yscworks-footer-grid { grid-template-columns: 1fr; }
    }
    #theme-yscworks .yscworks-footer-brand {
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 14px;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-footer-tagline {
      font-size: 14px;
      color: var(--text-secondary);
      margin: 0;
      line-height: 1.7;
      max-width: 280px;
    }
    #theme-yscworks .yscworks-footer-col h4 {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-primary);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin: 0 0 16px;
    }
    #theme-yscworks .yscworks-footer-col ul { list-style: none; margin: 0; padding: 0; }
    #theme-yscworks .yscworks-footer-col li { margin-bottom: 10px; }
    #theme-yscworks .yscworks-footer-col a {
      font-size: 14px;
      color: var(--text-secondary);
      transition: color 0.18s ease;
    }
    #theme-yscworks .yscworks-footer-col a:hover { color: var(--text-primary); }
    #theme-yscworks .yscworks-footer-bottom {
      padding-top: 24px;
      border-top: 1px solid var(--border-card);
      font-size: 12.5px;
      color: var(--text-secondary);
      display: flex;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    /* ===== ⌘ Call me 快捷入口 ===== */
    #theme-yscworks .yscworks-quick-btn {
      position: fixed;
      bottom: 22px;
      right: 22px;
      z-index: 60;
      background: var(--panel-cream);
      border: 2px solid var(--green-2);
      border-radius: var(--radius-quick-btn);
      padding: 9px 14px;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-primary);
      box-shadow: 0 4px 14px rgba(45, 95, 86, 0.18);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      transition: transform 0.18s ease, box-shadow 0.18s ease;
      font-family: var(--font-sans);
    }
    #theme-yscworks .yscworks-quick-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(45, 95, 86, 0.26);
    }
    #theme-yscworks .yscworks-quick-btn .kbd {
      font-family: var(--font-sans);
      background: rgba(63, 115, 91, 0.12);
      color: var(--green-2);
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 11px;
      font-weight: 600;
    }
    #theme-yscworks .yscworks-quick-overlay {
      position: fixed;
      inset: 0;
      z-index: 70;
      background: rgba(31, 25, 21, 0.18);
      backdrop-filter: blur(2px);
      display: none;
      align-items: flex-start;
      justify-content: center;
      padding-top: 88px;
    }
    #theme-yscworks .yscworks-quick-overlay.is-open { display: flex; }
    #theme-yscworks .yscworks-quick-panel {
      width: 720px;
      max-width: calc(100vw - 32px);
      background: var(--panel-cream-strong);
      border: 1px solid rgba(82, 57, 38, 0.18);
      border-radius: var(--radius-quick-panel);
      box-shadow: var(--shadow-quick);
      padding: 28px 32px 18px;
      position: relative;
      animation: yscPanelIn 0.22s cubic-bezier(.2,.7,.3,1);
    }
    @keyframes yscPanelIn {
      from { opacity: 0; transform: translateY(-8px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    #theme-yscworks .yscworks-quick-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
    }
    #theme-yscworks .yscworks-quick-title {
      font-size: var(--fs-quick-title);
      font-weight: 500;
      margin: 0;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-quick-close {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid var(--border-card);
      color: var(--text-secondary);
      background: transparent;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      transition: background 0.18s ease;
    }
    #theme-yscworks .yscworks-quick-close:hover { background: rgba(78, 46, 29, 0.06); }
    #theme-yscworks .yscworks-quick-list { list-style: none; margin: 0; padding: 0; }
    #theme-yscworks .yscworks-quick-list li { border-bottom: 1px solid var(--border-card); }
    #theme-yscworks .yscworks-quick-list li:last-child { border-bottom: none; }
    #theme-yscworks .yscworks-quick-list a {
      display: grid;
      grid-template-columns: 36px 1fr auto;
      gap: 14px;
      align-items: center;
      padding: 22px 4px;
      transition: background 0.18s ease;
    }
    #theme-yscworks .yscworks-quick-list a:hover { background: rgba(78, 46, 29, 0.03); }
    #theme-yscworks .yscworks-quick-num {
      font-size: var(--fs-num);
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }
    #theme-yscworks .yscworks-quick-text {
      font-size: 15px;
      color: var(--text-primary);
      font-weight: 500;
    }
    #theme-yscworks .yscworks-quick-sub {
      display: block;
      font-size: 12.5px;
      color: var(--text-secondary);
      font-weight: 400;
      margin-top: 2px;
    }
    #theme-yscworks .yscworks-quick-arrow {
      color: var(--text-secondary);
      font-size: 18px;
      transition: transform 0.18s ease, color 0.18s ease;
    }
    #theme-yscworks .yscworks-quick-list a:hover .yscworks-quick-arrow {
      transform: translateX(3px);
      color: var(--accent);
    }

    /* ===== 正文排版（详情页） ===== */
    #theme-yscworks article h2 { color: var(--text-primary); }
    #theme-yscworks article p { color: var(--text-secondary); }
    #theme-yscworks .mb-12 { margin-bottom: 28px; }

    /* 回顶按钮 */
    #theme-yscworks .fas.fa-angle-up { color: var(--text-secondary); }

    /* reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      #theme-yscworks * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }

    /* ================================================================
       Mars1024 首页完整区块（复刻 yscai101.com 首页）
       ================================================================ */

    /* 通用区块头 */
    #theme-yscworks .yscworks-section-label {
      font-size: var(--fs-num);
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin: 0 0 14px;
    }
    #theme-yscworks .yscworks-lab-section-head {
      margin-bottom: 44px;
      max-width: 640px;
    }
    #theme-yscworks .yscworks-lab-section-head h2 {
      font-family: var(--font-serif);
      font-size: clamp(2.4rem, 5vw, 4.4rem);
      font-weight: 500;
      line-height: 1.05;
      letter-spacing: 0;
      margin: 0 0 14px;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-lab-section-head p:last-child {
      color: var(--text-secondary);
      font-size: 15px;
      line-height: 1.7;
      margin: 0;
    }
    #theme-yscworks .yscworks-home-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }
    #theme-yscworks .yscworks-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 24px;
      font-size: 15px;
      font-weight: 500;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: all 0.18s ease;
      text-decoration: none;
      cursor: pointer;
    }
    #theme-yscworks .yscworks-btn-primary {
      background: var(--accent);
      color: #fff;
      border-color: var(--border-btn-main);
    }
    #theme-yscworks .yscworks-btn-primary:hover { background: #a3412b; }
    #theme-yscworks .yscworks-btn-secondary {
      background: var(--panel-strong);
      color: var(--text-primary);
      border-color: var(--border-btn-sub);
    }
    #theme-yscworks .yscworks-btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
    #theme-yscworks .yscworks-btn-ghost {
      background: transparent;
      color: var(--text-secondary);
      border-color: transparent;
    }
    #theme-yscworks .yscworks-btn-ghost:hover { color: var(--accent); }

    /* ===== 1. 动态信号条 ===== */
    #theme-yscworks .yscworks-signal-strip {
      overflow: hidden;
      background: var(--text-primary);
      color: var(--bg);
      padding: 10px 0;
      white-space: nowrap;
      position: relative;
    }
    #theme-yscworks .yscworks-signal-track {
      display: inline-flex;
      gap: 48px;
      padding-left: 100%;
      animation: yscworks-marquee 30s linear infinite;
    }
    #theme-yscworks .yscworks-signal-track span {
      font-size: 13px;
      opacity: 0.92;
    }
    #theme-yscworks .yscworks-signal-track b {
      color: var(--accent);
      margin-right: 8px;
      font-weight: 700;
      letter-spacing: 0.1em;
    }
    @keyframes yscworks-marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* ===== 2. Hero（lab-hero + console） ===== */
    #theme-yscworks .yscworks-lab-hero {
      padding: calc(var(--nav-height) + 46px) 0 52px;
      position: relative;
    }
    #theme-yscworks .yscworks-lab-hero-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
      gap: 28px;
      align-items: stretch;
    }
    @media (max-width: 1100px) {
      #theme-yscworks .yscworks-lab-hero-grid { grid-template-columns: 1fr; gap: 28px; }
    }
    #theme-yscworks .yscworks-lab-hero-copy {
      min-height: 620px;
      padding: clamp(32px, 5vw, 58px);
      border-radius: var(--radius-hero);
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      box-shadow: var(--shadow-card);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    #theme-yscworks .yscworks-lab-hero-copy::before {
      content: '';
      position: absolute;
      top: -60px;
      right: -60px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(242,199,122,0.28), transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: yscworks-labFloat 9s ease-in-out infinite;
    }
    #theme-yscworks .yscworks-lab-hero-copy::after {
      content: '';
      position: absolute;
      bottom: -40px;
      left: -40px;
      width: 160px;
      height: 160px;
      background: radial-gradient(circle, rgba(86,109,138,0.12), transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: yscworks-labFloat 11s ease-in-out infinite reverse;
    }
    @keyframes yscworks-labFloat {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(22px) scale(1.05); }
    }
    #theme-yscworks .yscworks-lab-hero-copy > * { position: relative; z-index: 1; }
    @media (max-width: 1100px) {
      #theme-yscworks .yscworks-lab-hero-copy { min-height: auto; }
    }
    #theme-yscworks .yscworks-lab-kicker {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: var(--fs-num);
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin-bottom: 24px;
    }
    #theme-yscworks .yscworks-live-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 0 0 rgba(45, 95, 86, 0.4);
      animation: yscworks-labPulse 1.7s ease-out infinite;
    }
    @keyframes yscworks-labPulse {
      0% { box-shadow: 0 0 0 0 rgba(45, 95, 86, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(45, 95, 86, 0); }
      100% { box-shadow: 0 0 0 0 rgba(45, 95, 86, 0); }
    }
    #theme-yscworks .yscworks-lab-hero-copy h1 {
      font-family: var(--font-serif);
      font-size: clamp(3.5rem, 7vw, 6.7rem);
      font-weight: 500;
      line-height: 0.96;
      letter-spacing: 0;
      margin: 0 0 22px;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-lab-lead {
      max-width: 560px;
      font-size: 1.08rem;
      line-height: 1.95;
      color: var(--text-secondary);
      margin: 0 0 26px;
    }
    #theme-yscworks .yscworks-lab-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 10px;
    }
    #theme-yscworks .yscworks-lab-tags span {
      font-size: 13px;
      color: var(--text-primary);
      background: var(--tag-bg);
      border: 1px solid var(--border-card);
      border-radius: 999px;
      padding: 6px 14px;
    }

    /* console 卡 — 深色终端风 */
    #theme-yscworks .yscworks-lab-console {
      background: linear-gradient(145deg, rgba(33,30,28,0.97), rgba(28,25,23,0.97));
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: var(--radius-hero);
      padding: 0;
      overflow: hidden;
      box-shadow: var(--shadow-card);
      position: relative;
      min-height: 620px;
      display: flex;
      flex-direction: column;
    }
    #theme-yscworks .yscworks-lab-console::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 30px 30px;
      pointer-events: none;
      z-index: 0;
    }
    #theme-yscworks .yscworks-lab-console > * { position: relative; z-index: 1; }
    @media (max-width: 1100px) {
      #theme-yscworks .yscworks-lab-console { min-height: auto; }
    }
    #theme-yscworks .yscworks-console-topbar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: rgba(255,255,255,0.02);
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    #theme-yscworks .yscworks-console-topbar span {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: var(--border-card-hover);
    }
    #theme-yscworks .yscworks-console-topbar span:first-child { background: #e8a0a0; }
    #theme-yscworks .yscworks-console-topbar span:nth-child(2) { background: #e8cfa0; }
    #theme-yscworks .yscworks-console-topbar span:nth-child(3) { background: #a0cfa8; }
    #theme-yscworks .yscworks-console-topbar strong {
      margin-left: auto;
      font-size: 12.5px;
      font-weight: 600;
      color: rgba(247,239,231,0.5);
      font-family: var(--font-mono);
    }
    #theme-yscworks .yscworks-console-profile {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 18px 20px 10px;
    }
    #theme-yscworks .yscworks-console-avatar {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      background: var(--accent);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 700;
      flex-shrink: 0;
    }
    #theme-yscworks .yscworks-console-profile p {
      margin: 0 0 3px;
      font-size: 16px;
      font-weight: 700;
      color: var(--dark-text);
    }
    #theme-yscworks .yscworks-console-profile strong {
      font-size: 12.5px;
      font-weight: 400;
      color: rgba(247,239,231,0.6);
      line-height: 1.4;
    }
    #theme-yscworks .yscworks-console-lines {
      padding: 6px 20px 14px;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    #theme-yscworks .yscworks-console-lines p {
      margin: 0;
      font-size: 0.82rem;
      color: rgba(247,239,231,0.85);
      font-family: var(--font-mono);
    }
    #theme-yscworks .yscworks-console-lines p span {
      display: inline-block;
      min-width: 64px;
      color: var(--gold);
      font-weight: 600;
    }
    #theme-yscworks .yscworks-console-build {
      margin: 0 20px 14px;
      padding: 14px 16px;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      background: rgba(255,255,255,0.03);
    }
    #theme-yscworks .yscworks-console-build > div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    #theme-yscworks .yscworks-console-build span {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: rgba(247,239,231,0.5);
      text-transform: uppercase;
    }
    #theme-yscworks .yscworks-console-build strong {
      font-size: 13.5px;
      color: var(--dark-text);
    }
    #theme-yscworks .yscworks-console-progress {
      height: 6px;
      border-radius: 3px;
      background: rgba(31, 25, 21, 0.08);
      overflow: hidden;
      margin-bottom: 8px;
    }
    #theme-yscworks .yscworks-console-progress i {
      display: block;
      height: 100%;
      width: 68%;
      background: var(--green);
      border-radius: 3px;
      animation: yscworks-progress 3s ease-in-out infinite;
    }
    @keyframes yscworks-progress {
      0% { width: 30%; }
      50% { width: 82%; }
      100% { width: 30%; }
    }
    #theme-yscworks .yscworks-console-build small {
      font-size: 11.5px;
      color: rgba(247,239,231,0.5);
    }
    #theme-yscworks .yscworks-console-manifesto {
      padding: 18px 20px 22px;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    #theme-yscworks .yscworks-console-manifesto span {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: rgba(247,239,231,0.5);
      text-transform: uppercase;
    }
    #theme-yscworks .yscworks-console-manifesto strong {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.35;
      color: var(--dark-text);
      white-space: pre-line;
    }
    #theme-yscworks .yscworks-console-manifesto small {
      font-size: 12px;
      color: rgba(247,239,231,0.5);
      font-family: var(--font-mono);
    }

    /* ===== 3. HOW I CAN HELP — 绿色点状纹理 + border 网格 ===== */
    #theme-yscworks .yscworks-help-section {
      padding: 82px 0 54px;
      border-top: 1px solid var(--border-card);
      position: relative;
      background:
        radial-gradient(circle, rgba(59,112,87,0.07) 1px, transparent 1.5px) 0 0 / 20px 20px,
        linear-gradient(180deg, rgba(45,95,86,0.015), transparent 60%);
    }
    #theme-yscworks .yscworks-help-section::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50%;
      background: radial-gradient(circle at 80% 20%, rgba(59,112,87,0.06), transparent 60%);
      pointer-events: none;
    }
    #theme-yscworks .yscworks-help-section > * { position: relative; }
    #theme-yscworks .yscworks-help-head {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
      gap: 48px;
      margin-bottom: 44px;
      align-items: start;
    }
    @media (max-width: 860px) { #theme-yscworks .yscworks-help-head { grid-template-columns: 1fr; gap: 20px; } }
    #theme-yscworks .yscworks-help-head h2 {
      font-family: var(--font-serif);
      font-size: clamp(2.7rem, 3.8vw, 3.35rem);
      font-weight: 500;
      line-height: 1.08;
      margin: 0;
      color: var(--text-primary);
      white-space: pre-line;
    }
    #theme-yscworks .yscworks-help-head > p {
      color: var(--text-secondary);
      font-size: 15px;
      line-height: 1.7;
      margin: 0;
      padding-top: 6px;
    }
    #theme-yscworks .yscworks-help-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0;
      border: 1px solid var(--border-card);
      border-radius: 0;
      overflow: hidden;
    }
    @media (max-width: 900px) { #theme-yscworks .yscworks-help-grid { grid-template-columns: 1fr; } }
    #theme-yscworks .yscworks-help-card {
      background: transparent;
      border: none;
      border-right: 1px solid var(--border-card);
      border-radius: 0;
      padding: 32px 30px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      transition: background 0.25s ease, transform 0.25s ease;
    }
    #theme-yscworks .yscworks-help-card:last-child { border-right: none; }
    @media (max-width: 900px) {
      #theme-yscworks .yscworks-help-card {
        border-right: none;
        border-bottom: 1px solid var(--border-card);
      }
      #theme-yscworks .yscworks-help-card:last-child { border-bottom: none; }
    }
    #theme-yscworks .yscworks-help-card:hover {
      background: rgba(59,112,87,0.04);
    }
    #theme-yscworks .yscworks-help-index {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.1em;
      color: var(--green-2);
    }
    #theme-yscworks .yscworks-help-card h3 {
      font-family: var(--font-serif);
      font-size: 1.7rem;
      font-weight: 500;
      margin: 0;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-help-situation {
      font-size: 14px;
      line-height: 1.65;
      color: var(--text-secondary);
      margin: 0;
    }
    #theme-yscworks .yscworks-help-situation b { color: var(--text-primary); font-weight: 600; }
    #theme-yscworks .yscworks-help-delivery {
      border-left: 3px solid var(--green-2);
      padding: 4px 0 4px 14px;
    }
    #theme-yscworks .yscworks-help-delivery span,
    #theme-yscworks .yscworks-help-proof span {
      display: block;
      font-size: 11.5px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--text-secondary);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    #theme-yscworks .yscworks-help-delivery p {
      font-size: 14px;
      line-height: 1.65;
      color: var(--text-primary);
      margin: 0;
    }
    #theme-yscworks .yscworks-help-proof strong {
      font-size: 14px;
      color: var(--green-2);
      font-weight: 600;
    }
    #theme-yscworks .yscworks-help-card > a {
      margin-top: auto;
      font-size: 14.5px;
      font-weight: 600;
      color: var(--accent);
      text-decoration: none;
    }
    #theme-yscworks .yscworks-help-card > a:hover { text-decoration: underline; }
    #theme-yscworks .yscworks-help-next {
      margin-top: 36px;
      padding: 18px 28px;
      background: transparent;
      border: 2px solid var(--green-2);
      border-radius: 999px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      transition: background 0.25s ease;
    }
    #theme-yscworks .yscworks-help-next:hover {
      background: var(--green-2);
    }
    #theme-yscworks .yscworks-help-next:hover p,
    #theme-yscworks .yscworks-help-next:hover p span,
    #theme-yscworks .yscworks-help-next:hover a {
      color: #fff;
    }
    #theme-yscworks .yscworks-help-next p {
      margin: 0;
      font-size: 14.5px;
      color: var(--text-secondary);
    }
    #theme-yscworks .yscworks-help-next p span {
      color: var(--text-primary);
      font-weight: 600;
      margin-right: 10px;
    }
    #theme-yscworks .yscworks-help-next a {
      color: var(--green-2);
      font-weight: 600;
      font-size: 14.5px;
      text-decoration: none;
      white-space: nowrap;
    }
    #theme-yscworks .yscworks-help-next a:hover { text-decoration: underline; }

    /* ===== 4. 实践数据 — 独立卡片 ===== */
    #theme-yscworks .yscworks-lab-stats {
      padding: 22px 0 44px;
    }
    #theme-yscworks .yscworks-lab-stat-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 20px;
      border: none;
      padding: 0;
    }
    @media (max-width: 1100px) { #theme-yscworks .yscworks-lab-stat-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 700px) { #theme-yscworks .yscworks-lab-stat-grid { grid-template-columns: 1fr; } }
    #theme-yscworks .yscworks-lab-stat-grid article {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 24px 28px;
      min-height: 132px;
      border: 1px solid var(--border-card);
      border-radius: var(--radius-xl);
      background: var(--bg-card);
      transition: background 0.3s ease, box-shadow 0.3s ease;
    }
    #theme-yscworks .yscworks-lab-stat-grid article:hover {
      background: var(--bg-card-hover);
      box-shadow: var(--shadow-card);
    }
    #theme-yscworks .yscworks-lab-stat-grid strong {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.01em;
      font-variant-numeric: tabular-nums;
    }
    #theme-yscworks .yscworks-lab-stat-grid span {
      font-size: 13.5px;
      color: var(--text-secondary);
    }

    /* ===== 5. START HERE ===== */
    #theme-yscworks .yscworks-route-section {
      padding: 0 0 72px;
    }
    #theme-yscworks .yscworks-route-heading {
      margin-bottom: 32px;
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 20px;
    }
    #theme-yscworks .yscworks-route-heading h2 {
      font-family: var(--font-serif);
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 500;
      margin: 0;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-route-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0;
      border: 1px solid var(--border-card);
      border-radius: 0;
      overflow: hidden;
    }
    @media (max-width: 760px) { #theme-yscworks .yscworks-route-grid { grid-template-columns: 1fr; } }
    #theme-yscworks .yscworks-route-card {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 28px 24px;
      border: none;
      border-right: 1px solid var(--border-card);
      border-bottom: 1px solid var(--border-card);
      border-radius: 0;
      background: transparent;
      text-decoration: none;
      transition: background 0.3s ease, color 0.3s ease;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-route-card:nth-child(2n) { border-right: none; }
    #theme-yscworks .yscworks-route-card:nth-last-child(-n+2) { border-bottom: none; }
    @media (max-width: 760px) {
      #theme-yscworks .yscworks-route-card { border-right: none; }
      #theme-yscworks .yscworks-route-card:nth-last-child(-n+2) { border-bottom: 1px solid var(--border-card); }
      #theme-yscworks .yscworks-route-card:last-child { border-bottom: none; }
    }
    #theme-yscworks .yscworks-route-card:hover {
      background: var(--dark-base);
      color: var(--dark-text);
    }
    #theme-yscworks .yscworks-route-card:hover > span,
    #theme-yscworks .yscworks-route-card:hover strong,
    #theme-yscworks .yscworks-route-card:hover small,
    #theme-yscworks .yscworks-route-card:hover i {
      color: var(--dark-text);
    }
    #theme-yscworks .yscworks-route-card > span {
      font-size: 12px;
      font-weight: 700;
      color: var(--accent);
      font-family: ui-monospace, Consolas, monospace;
    }
    #theme-yscworks .yscworks-route-card > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    #theme-yscworks .yscworks-route-card strong {
      font-size: 16.5px;
      font-weight: 600;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-route-card small {
      font-size: 13px;
      color: var(--text-secondary);
    }
    #theme-yscworks .yscworks-route-card i {
      font-style: normal;
      color: var(--text-secondary);
      font-size: 17px;
      transition: transform 0.18s ease, color 0.18s ease;
    }
    #theme-yscworks .yscworks-route-card:hover i { transform: translateX(3px); color: var(--accent); }

    /* ===== 6. WHAT I DO ===== */
    #theme-yscworks .yscworks-lab-map {
      padding: 100px 0;
      border-top: 1px solid var(--border-card);
    }
    #theme-yscworks .yscworks-lab-map-grid {
      display: grid;
      gap: 20px;
    }
    #theme-yscworks .yscworks-lab-map-grid-three {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (max-width: 860px) { #theme-yscworks .yscworks-lab-map-grid-three { grid-template-columns: 1fr; } }
    #theme-yscworks .yscworks-lab-map-card {
      padding: 30px 28px;
      border: 1px solid var(--border-card);
      border-radius: 28px;
      background: var(--bg-card);
      display: flex;
      flex-direction: column;
      gap: 12px;
      min-height: 300px;
      box-shadow: var(--shadow-card);
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }
    #theme-yscworks .yscworks-lab-map-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-card-hover);
    }
    #theme-yscworks .yscworks-lab-map-card > span {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.1em;
      color: var(--accent);
    }
    #theme-yscworks .yscworks-lab-map-card h3 {
      font-family: var(--font-serif);
      font-size: 2rem;
      font-weight: 500;
      margin: 0;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-lab-map-card p {
      font-size: 14px;
      line-height: 1.65;
      color: var(--text-secondary);
      margin: 0;
    }
    #theme-yscworks .yscworks-lab-map-card a {
      margin-top: auto;
      font-size: 14px;
      font-weight: 600;
      color: var(--accent);
      text-decoration: none;
    }
    #theme-yscworks .yscworks-lab-map-card a:hover { text-decoration: underline; }

    /* ===== 7. CURRENT PRODUCTS（产品矩阵，复用 yscworks-case） ===== */
    #theme-yscworks .yscworks-lab-projects {
      padding: 100px 0;
      border-top: 1px solid var(--border-card);
    }
    #theme-yscworks .yscworks-lab-project-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }
    @media (max-width: 900px) { #theme-yscworks .yscworks-lab-project-grid { grid-template-columns: 1fr; } }
    #theme-yscworks .yscworks-lab-project-grid .yscworks-case {
      padding: 34px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin: 0;
    }

    /* ===== 8. RECENTLY SHIPPING ===== */
    #theme-yscworks .yscworks-lab-updates {
      padding: 100px 0;
      border-top: 1px solid var(--border-card);
    }
    #theme-yscworks .yscworks-lab-updates-grid {
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
      gap: 56px;
      align-items: start;
    }
    @media (max-width: 860px) { #theme-yscworks .yscworks-lab-updates-grid { grid-template-columns: 1fr; gap: 32px; } }
    #theme-yscworks .yscworks-update-list {
      display: flex;
      flex-direction: column;
      gap: 0;
      border: 1px solid var(--border-card);
      border-radius: 0;
      overflow: hidden;
    }
    #theme-yscworks .yscworks-update-list a {
      display: grid;
      grid-template-columns: 142px minmax(0, 1fr) auto;
      align-items: center;
      gap: 18px;
      padding: 16px 20px;
      border-bottom: 1px solid var(--border-card);
      text-decoration: none;
      transition: background 0.25s ease;
    }
    #theme-yscworks .yscworks-update-list a:last-child { border-bottom: none; }
    #theme-yscworks .yscworks-update-list a:hover { background: var(--bg-card); }
    #theme-yscworks .yscworks-update-list span {
      font-size: 11.5px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--accent);
      text-transform: uppercase;
      white-space: nowrap;
      min-width: 150px;
    }
    #theme-yscworks .yscworks-update-list strong {
      flex: 1;
      font-size: 15.5px;
      font-weight: 600;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-update-list em {
      font-style: normal;
      font-size: 13.5px;
      color: var(--text-secondary);
      white-space: nowrap;
    }

    /* ===== 9. FREE COMMUNITY ===== */
    #theme-yscworks .yscworks-lab-resource {
      padding: 100px 0;
      border-top: 1px solid var(--border-card);
    }
    #theme-yscworks .yscworks-lab-resource-grid {
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
      gap: 56px;
      align-items: start;
    }
    @media (max-width: 860px) { #theme-yscworks .yscworks-lab-resource-grid { grid-template-columns: 1fr; gap: 32px; } }
    #theme-yscworks .yscworks-resource-links {
      display: flex;
      flex-direction: column;
      gap: 0;
      border: 1px solid var(--border-card);
      border-radius: 0;
      overflow: hidden;
    }
    #theme-yscworks .yscworks-resource-links a {
      display: grid;
      grid-template-columns: 120px minmax(0, 1fr) auto;
      align-items: center;
      gap: 14px;
      padding: 20px 24px;
      border-bottom: 1px solid var(--border-card);
      background: transparent;
      text-decoration: none;
      transition: background 0.25s ease;
    }
    #theme-yscworks .yscworks-resource-links a:last-child { border-bottom: none; }
    #theme-yscworks .yscworks-resource-links a:hover { background: var(--bg-card); }
    #theme-yscworks .yscworks-resource-links span {
      font-size: 11.5px;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--accent);
      text-transform: uppercase;
    }
    #theme-yscworks .yscworks-resource-links strong {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-primary);
    }
    #theme-yscworks .yscworks-resource-links em {
      font-style: normal;
      font-size: 13px;
      color: var(--text-secondary);
    }

    /* ===== 10. 写作区块 ===== */
    #theme-yscworks .yscworks-lab-writing {
      padding: 100px 0;
      border-top: 1px solid var(--border-card);
    }
    #theme-yscworks .yscworks-lab-writing-grid {
      display: grid;
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
      gap: 56px;
      align-items: start;
    }
    @media (max-width: 860px) { #theme-yscworks .yscworks-lab-writing-grid { grid-template-columns: 1fr; gap: 32px; } }
    #theme-yscworks .yscworks-lab-note-list {
      display: grid;
      gap: 12px;
    }
    #theme-yscworks .yscworks-lab-note-list a {
      display: grid;
      grid-template-columns: 46px minmax(0, 1fr) auto;
      align-items: center;
      gap: 18px;
      padding: 16px 20px;
      border: 1px solid var(--border-card);
      border-radius: 22px;
      background: var(--bg-card);
      text-decoration: none;
      transition: background 0.25s ease, box-shadow 0.25s ease;
    }
    #theme-yscworks .yscworks-lab-note-list a:hover {
      background: var(--bg-card-hover);
      box-shadow: var(--shadow-card);
    }
    #theme-yscworks .yscworks-lab-note-list span {
      font-size: 0.76rem;
      font-weight: 800;
      color: var(--accent);
      font-family: var(--font-mono);
    }
    #theme-yscworks .yscworks-lab-note-list strong {
      font-family: var(--font-serif);
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--text-primary);
      line-height: 1.3;
    }
    #theme-yscworks .yscworks-lab-note-list em {
      font-style: normal;
      font-size: 13px;
      color: var(--text-secondary);
      white-space: nowrap;
    }
    @media (max-width: 700px) {
      #theme-yscworks .yscworks-lab-note-list a {
        grid-template-columns: 1fr;
        gap: 6px;
      }
    }

    /* ================================================================
       客户端交互效果 CSS（Effects.js 配套）
       ================================================================ */
    #theme-yscworks .yscworks-cursor-glow {
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(184, 77, 51, 0.08), transparent 70%);
      pointer-events: none;
      z-index: 0;
      transform: translate(-50%, -50%);
      transition: left 0.3s ease, top 0.3s ease;
    }
    #theme-yscworks .yscworks-lab-hero {
      position: relative;
      overflow: hidden;
    }
    #theme-yscworks #yscworksConsoleSignal {
      display: inline-block;
      transition: opacity 0.22s ease, transform 0.22s ease;
    }
    #theme-yscworks #yscworksConsoleSignal.switching {
      opacity: 0;
      transform: translateY(4px);
    }
    #theme-yscworks .fade-in,
    #theme-yscworks .yscworks-fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    #theme-yscworks .fade-in-left,
    #theme-yscworks .yscworks-fade-in-left {
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    #theme-yscworks .fade-in-right,
    #theme-yscworks .yscworks-fade-in-right {
      opacity: 0;
      transform: translateX(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    #theme-yscworks .fade-in.visible,
    #theme-yscworks .yscworks-fade-in.visible,
    #theme-yscworks .fade-in.yscworks-visible,
    #theme-yscworks .yscworks-fade-in.yscworks-visible,
    #theme-yscworks .fade-in-left.visible,
    #theme-yscworks .yscworks-fade-in-left.visible,
    #theme-yscworks .fade-in-right.visible,
    #theme-yscworks .yscworks-fade-in-right.visible {
      opacity: 1;
      transform: translate(0, 0);
    }
    #theme-yscworks .yscworks-nav.scrolled {
      background: rgba(244, 237, 226, 0.92);
      backdrop-filter: saturate(160%) blur(14px);
      box-shadow: 0 1px 0 var(--border-card);
    }
    #theme-yscworks .yscworks-back-to-top,
    #theme-yscworks .back-to-top {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 50;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--panel);
      border: 1px solid var(--border-card);
      color: var(--text-primary);
      font-size: 22px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    }
    #theme-yscworks .yscworks-back-to-top.visible,
    #theme-yscworks .back-to-top.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    #theme-yscworks .yscworks-stat-number {
      font-variant-numeric: tabular-nums;
    }

    /* ================================================================
       yscai101.com 完整 CSS 移植（150KB 原版 → yscworks- 前缀作用域化）
       ================================================================ */
    ${PORT_STYLES}


    /* ===== 杂志风文章列表 (编辑风排版) ===== */
    #theme-yscworks .mag-article {
      display: grid;
      grid-template-columns: 140px minmax(0, 1fr);
      gap: 32px;
      padding: 28px 0;
      border-bottom: 1px solid var(--border-card);
      align-items: start;
    }
    #theme-yscworks .mag-article:first-child { border-top: 1px solid var(--border-card); }
    #theme-yscworks .mag-article-meta {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding-top: 4px;
    }
    #theme-yscworks .mag-article-num {
      font-size: var(--fs-num);
      font-weight: 700;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: .14em;
      font-family: ui-monospace, Consolas, monospace;
    }
    #theme-yscworks .mag-article-date {
      font-size: 12px;
      color: var(--text-secondary);
      font-family: ui-monospace, Consolas, monospace;
    }
    #theme-yscworks .mag-article-category {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .1em;
      color: var(--accent);
      text-transform: uppercase;
    }
    #theme-yscworks .mag-article-content {
      min-width: 0;
    }
    #theme-yscworks .mag-article-title {
      font-family: var(--font-serif);
      font-size: clamp(1.25rem, 2.5vw, 1.75rem);
      font-weight: 500;
      line-height: 1.3;
      margin: 0 0 10px;
      color: var(--text-primary);
    }
    #theme-yscworks .mag-article-title a { color: inherit; text-decoration: none; transition: color .18s ease; }
    #theme-yscworks .mag-article-title a:hover { color: var(--accent); }
    #theme-yscworks .mag-article-summary {
      font-size: 14px;
      line-height: 1.7;
      color: var(--text-secondary);
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media (max-width: 720px) {
      #theme-yscworks .mag-article {
        grid-template-columns: 1fr;
        gap: 12px;
        padding: 20px 0;
      }
      #theme-yscworks .mag-article-meta {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 12px;
        align-items: baseline;
      }
    }

    /* ===== 杂志风分类网格 ===== */
    #theme-yscworks .mag-category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      padding: 24px 0 60px;
    }
    #theme-yscworks .mag-category-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 24px 28px;
      border: 1px solid var(--border-card);
      border-radius: var(--radius-card);
      background: var(--panel);
      transition: all .18s ease;
      text-decoration: none;
      color: var(--text-primary);
    }
    #theme-yscworks .mag-category-card:hover {
      border-color: var(--accent);
      background: var(--panel-strong);
      transform: translateY(-2px);
    }
    #theme-yscworks .mag-category-icon {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: rgba(184, 77, 51, 0.08);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }
    #theme-yscworks .mag-category-info {
      flex: 1;
    }
    #theme-yscworks .mag-category-info h3 {
      font-family: var(--font-serif);
      font-size: 18px;
      font-weight: 500;
      margin: 0 0 4px;
      color: var(--text-primary);
    }
    #theme-yscworks .mag-category-info p {
      font-size: 13px;
      color: var(--text-secondary);
      margin: 0;
    }
    #theme-yscworks .mag-category-arrow {
      color: var(--text-secondary);
      font-size: 14px;
      transition: transform .18s ease, color .18s ease;
    }
    #theme-yscworks .mag-category-card:hover .mag-category-arrow {
      color: var(--accent);
      transform: translateX(4px);
    }

    ${themeConsoleStyle('yscworks', CONFIG)}
  `}</style>
  )
}

export { Style }
