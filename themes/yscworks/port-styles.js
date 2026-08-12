// Auto-generated from yscai101.com CSS - port for yscworks theme
// Source: https://yscai101.com/css/style.css + pages.css
// Total original CSS: 170425 bytes
export const PORT_STYLES = `/* ============================================
   成云杉YSC 个人作品网站 - 全局样式
   yscai101.com
   ============================================ */

/* ---------- CSS 变量 ---------- */
#theme-yscworks {
  /* 背景色 */
  --bg-primary: #0a0a0f;
  --bg-secondary: #111827;
  --bg-card: rgba(255, 255, 255, 0.05);
  --bg-card-hover: rgba(255, 255, 255, 0.08);

  /* 文字色 */
  --text-primary: #e5e7eb;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;

  /* 强调色 */
  --accent: #6366f1;
  --accent-light: #818cf8;
  --accent-purple: #8b5cf6;
  --accent-pink: #a855f7;
  --gradient-accent: linear-gradient(135deg, #6366f1, #a855f7);

  /* 边框 */
  --border-color: rgba(255, 255, 255, 0.1);
  --border-color-hover: rgba(255, 255, 255, 0.2);
  --glow-color: rgba(99, 102, 241, 0.4);

  /* 圆角 */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* 字体 */
  --font-sans: system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;

  /* 间距 */
  --section-padding: 100px 0;
  --container-width: 1200px;
  --nav-height: 72px;

  /* 动画 */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* ---------- Reset & Base ---------- */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#theme-yscworks {
  font-family: var(--font-sans);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

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
  --accent-pink: #cf7b56;
  --gradient-accent: linear-gradient(135deg, #b85b35, #e7c37f);
  --border-color: rgba(91, 63, 41, 0.1);
  --border-color-hover: rgba(91, 63, 41, 0.2);
  --glow-color: rgba(231, 189, 96, 0.16);
  background:
    radial-gradient(circle at top right, rgba(242, 199, 122, 0.18), transparent 20%),
    radial-gradient(circle at 10% 70%, rgba(86, 122, 160, 0.08), transparent 18%),
    linear-gradient(180deg, #f7f1e7, #f0e7d9 52%, #f6f0e8 100%);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--accent-light);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

ul, ol {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
  color: inherit;
}

/* ---------- 页面加载动画 ---------- */
.yscworks-page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}

.yscworks-page-loader.yscworks-loaded {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.yscworks-loader-content {
  text-align: center;
}

.yscworks-loader-logo {
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: loaderPulse 1.5s ease-in-out infinite;
}

.yscworks-loader-bar {
  width: 120px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin: 20px auto 0;
  overflow: hidden;
}

.yscworks-loader-bar::after {
  content: '';
  display: block;
  width: 40%;
  height: 100%;
  background: var(--gradient-accent);
  border-radius: 2px;
  animation: loaderSlide 1s ease-in-out infinite;
}

@keyframes loaderPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes loaderSlide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}

/* ---------- 容器 ---------- */
.yscworks-container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
}

/* ---------- 导航栏 ---------- */
.yscworks-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 1000;
  transition: background var(--transition-normal), box-shadow var(--transition-normal);
}

.yscworks-navbar.yscworks-scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 var(--border-color);
}

.yscworks-navbar .yscworks-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.yscworks-nav-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex-shrink: 0;
}

.yscworks-nav-logo::before {
  content: '';
  display: block;
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  border: 2px solid rgba(255, 252, 246, 0.96);
  border-radius: 50%;
  background: #f8f3ea url('../favicon.png') center / cover no-repeat;
  box-shadow: 0 0 0 1px rgba(58, 105, 82, 0.28), 0 5px 14px rgba(75, 53, 37, 0.1);
}

.yscworks-nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.yscworks-nav-links a {
  font-size: 0.9rem;
  color: var(--text-secondary);
  position: relative;
  padding: 4px 0;
  transition: color var(--transition-fast);
}

.yscworks-nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-accent);
  border-radius: 1px;
  transition: width var(--transition-normal);
}

.yscworks-nav-links a:hover, .yscworks-nav-links a.yscworks-active {
  color: var(--text-primary);
}

.yscworks-nav-links a:hover::after, .yscworks-nav-links a.yscworks-active::after {
  width: 100%;
}

/* 汉堡菜单按钮 */
.yscworks-nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 6px;
}

.yscworks-nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform var(--transition-normal), opacity var(--transition-fast);
}

.yscworks-nav-toggle.yscworks-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.yscworks-nav-toggle.yscworks-active span:nth-child(2) {
  opacity: 0;
}

.yscworks-nav-toggle.yscworks-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ---------- 移动端导航菜单 ---------- */
.yscworks-mobile-menu {
  display: none;
  position: fixed;
  top: var(--nav-height);
  left: 0;
  width: 100%;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 24px;
  border-bottom: 1px solid var(--border-color);
  z-index: 999;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  transition: transform var(--transition-normal), opacity var(--transition-normal), visibility var(--transition-normal);
}

.yscworks-mobile-menu.yscworks-open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.yscworks-mobile-menu a {
  display: block;
  padding: 14px 0;
  font-size: 1.1rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
  transition: color var(--transition-fast), padding-left var(--transition-normal);
}

.yscworks-mobile-menu a:last-child {
  border-bottom: none;
}

.yscworks-mobile-menu a:hover {
  color: var(--text-primary);
  padding-left: 8px;
}

/* ---------- Hero 区域 ---------- */
.yscworks-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  overflow: hidden;
}

/* 背景渐变效果 */
.yscworks-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background:
    radial-gradient(ellipse 600px 600px at 30% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 70%),
    radial-gradient(ellipse 500px 500px at 70% 60%, rgba(168, 85, 247, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 400px 400px at 50% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
  animation: heroBgFloat 20s ease-in-out infinite;
  z-index: 0;
}

@keyframes heroBgFloat {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(2deg); }
  66% { transform: translate(-20px, 20px) rotate(-1deg); }
}

/* 网格背景 */
.yscworks-hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 0;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 70%);
}

.yscworks-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.yscworks-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 32px;
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

.yscworks-hero-badge .yscworks-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
}

.yscworks-hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
  animation: fadeInUp 0.8s ease 0.1s forwards;
  opacity: 0;
}

.yscworks-hero-title .yscworks-gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.yscworks-hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  margin-bottom: 12px;
  letter-spacing: 0.1em;
  animation: fadeInUp 0.8s ease 0.2s forwards;
  opacity: 0;
}

.yscworks-hero-subtitle span {
  color: var(--accent-light);
}

.yscworks-hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 40px;
  line-height: 1.8;
  animation: fadeInUp 0.8s ease 0.3s forwards;
  opacity: 0;
}

.yscworks-hero-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.4s forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---------- 按钮 ---------- */
.yscworks-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.yscworks-btn-primary {
  background: var(--gradient-accent);
  color: #fff;
  box-shadow: 0 8px 22px rgba(184, 91, 53, 0.16);
}

.yscworks-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(184, 91, 53, 0.18);
  color: #fff;
}

.yscworks-btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.yscworks-btn-secondary:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-color-hover);
  transform: translateY(-2px);
  color: var(--text-primary);
}

.yscworks-btn-icon {
  font-size: 1.1em;
  transition: transform var(--transition-fast);
}

.yscworks-btn:hover .yscworks-btn-icon {
  transform: translateX(4px);
}

/* ---------- Section 通用 ---------- */
.yscworks-section {
  padding: var(--section-padding);
  position: relative;
}

.yscworks-section-header {
  text-align: center;
  margin-bottom: 60px;
}

.yscworks-section-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-light);
  margin-bottom: 16px;
  font-family: var(--font-mono);
}

.yscworks-section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.yscworks-section-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ---------- 分割线装饰 ---------- */
.yscworks-section-divider {
  width: 60px;
  height: 3px;
  background: var(--gradient-accent);
  border-radius: 2px;
  margin: 0 auto 16px;
}

/* ---------- 作品筛选标签 ---------- */
.yscworks-filter-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.yscworks-filter-tag {
  padding: 8px 20px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.yscworks-filter-tag:hover, .yscworks-filter-tag.yscworks-active {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

/* ---------- 作品卡片网格 ---------- */
.yscworks-works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.yscworks-work-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
}

.yscworks-work-card.yscworks-visible {
  opacity: 1;
  transform: translateY(0);
}

.yscworks-work-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px var(--glow-color);
}

.yscworks-work-card-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  overflow: hidden;
  position: relative;
}

.yscworks-work-card-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(10, 10, 15, 0.8));
}

.yscworks-work-card-#theme-yscworks {
  padding: 20px;
}

.yscworks-work-card-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.yscworks-work-card-tag {
  font-size: 0.7rem;
  padding: 3px 10px;
  background: rgba(99, 102, 241, 0.15);
  color: var(--accent-light);
  border-radius: 100px;
  font-weight: 500;
}

.yscworks-work-card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.4;
}

.yscworks-work-card-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.yscworks-work-card-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.yscworks-work-card-link {
  color: var(--accent-light);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap var(--transition-fast);
}

.yscworks-work-card:hover .yscworks-work-card-link {
  gap: 8px;
}

/* ---------- 查看更多按钮区 ---------- */
.yscworks-section-more {
  text-align: center;
  margin-top: 48px;
}

/* ---------- 首页改版模块 ---------- */
.yscworks-hero-layout {
  min-height: auto;
  padding-top: 150px;
  padding-bottom: 90px;
  text-align: left;
}

.yscworks-hero-shell {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: center;
}

.yscworks-hero-content-left {
  max-width: 100%;
}

.yscworks-hero-cta-left {
  justify-content: flex-start;
}

.yscworks-hero-profile-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
}

.yscworks-hero-avatar {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: 2px solid var(--border-color-hover);
  margin-bottom: 16px;
  object-fit: cover;
}

.yscworks-hero-profile-card h3 {
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.yscworks-hero-profile-card > p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 16px;
}

.yscworks-hero-profile-card ul {
  display: grid;
  gap: 10px;
}

.yscworks-hero-profile-card li {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  position: relative;
  padding-left: 16px;
}

.yscworks-hero-profile-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-light);
}

.yscworks-quick-stats {
  padding-top: 0;
}

.yscworks-quick-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.yscworks-quick-stat {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 26px 20px;
  text-align: center;
}

.yscworks-quick-stat h3 {
  font-size: 2rem;
  line-height: 1.1;
  margin-bottom: 8px;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.yscworks-quick-stat p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.yscworks-focus-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.yscworks-focus-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 24px;
  transition: all var(--transition-normal);
}

.yscworks-focus-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.yscworks-focus-index {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: var(--accent-light);
}

.yscworks-focus-card h3 {
  margin: 8px 0 10px;
  font-size: 1.1rem;
}

.yscworks-focus-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}

.yscworks-works-grid-compact .yscworks-work-card-image {
  aspect-ratio: 16 / 9;
}

.yscworks-writing-section {
  padding-top: 80px;
}

.yscworks-writing-list {
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  gap: 18px;
}

.yscworks-writing-item {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 22px;
}

.yscworks-writing-meta {
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.yscworks-writing-item h3 {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.yscworks-writing-item p {
  color: var(--text-secondary);
  font-size: 0.92rem;
  margin-bottom: 8px;
}

.yscworks-free-pack-section {
  padding-top: 60px;
}

.yscworks-free-pack-card {
  max-width: 780px;
  margin: 0 auto;
  padding: 36px;
  text-align: center;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.18),
    rgba(168, 85, 247, 0.12)
  );
}

.yscworks-free-pack-card h2 {
  font-size: clamp(1.7rem, 4vw, 2.2rem);
  margin-bottom: 12px;
}

.yscworks-free-pack-card p {
  color: var(--text-secondary);
  max-width: 620px;
  margin: 0 auto 22px;
}

/* ---------- 关于我页面 ---------- */
.yscworks-about-hero {
  padding: 160px 0 80px;
  text-align: center;
}

.yscworks-about-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--gradient-accent);
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  position: relative;
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
}

.yscworks-about-avatar::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
}

.yscworks-about-name {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.yscworks-about-tagline {
  color: var(--accent-light);
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.yscworks-about-bio {
  max-width: 680px;
  margin: 0 auto;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

/* 统计数据 */
.yscworks-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 60px 0;
}

.yscworks-stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 32px 20px;
  text-align: center;
  transition: all var(--transition-normal);
}

.yscworks-stat-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.yscworks-stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin-bottom: 8px;
}

.yscworks-stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* 技能标签云 */
.yscworks-skills-section {
  padding: 80px 0;
}

.yscworks-skills-cloud {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  max-width: 700px;
  margin: 0 auto;
}

.yscworks-skill-tag {
  padding: 10px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
  cursor: default;
}

.yscworks-skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent-light);
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

.yscworks-skill-tag.yscworks-highlight {
  border-color: var(--accent);
  color: var(--accent-light);
  background: rgba(99, 102, 241, 0.1);
}

/* 时间线 */
.yscworks-timeline-section {
  padding: 80px 0;
}

.yscworks-timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 40px;
}

.yscworks-timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), var(--accent-purple), transparent);
}

.yscworks-timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.yscworks-timeline-item:hover {
  border-color: var(--border-color-hover);
  transform: translateX(4px);
}

.yscworks-timeline-item::before {
  content: '';
  position: absolute;
  left: -33px;
  top: 30px;
  width: 12px;
  height: 12px;
  background: var(--accent);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 10px var(--glow-color);
}

.yscworks-timeline-date {
  font-size: 0.8rem;
  color: var(--accent-light);
  font-family: var(--font-mono);
  margin-bottom: 8px;
}

.yscworks-timeline-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.yscworks-timeline-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ---------- Footer ---------- */
.yscworks-footer {
  border-top: 1px solid var(--border-color);
  padding: 60px 0 40px;
  background: linear-gradient(to bottom, var(--bg-primary), rgba(17, 24, 39, 0.5));
}

.yscworks-footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.yscworks-footer-grid-home {
  grid-template-columns: minmax(260px, 300px) 96px 116px 112px 250px;
  justify-content: start;
  column-gap: clamp(36px, 4vw, 56px);
  row-gap: 28px;
  align-items: start;
  padding-left: clamp(0px, 3vw, 56px);
}

.yscworks-footer-brand {
  max-width: 320px;
}

.yscworks-footer-logo {
  font-size: 1.3rem;
  font-weight: 700;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.yscworks-footer-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 20px;
}

.yscworks-footer-social {
  display: flex;
  gap: 12px;
}

.yscworks-social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  font-size: 1.1rem;
  transition: all var(--transition-normal);
}

.yscworks-social-link:hover {
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
  color: var(--accent-light);
}

.yscworks-footer-nav h4 {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.yscworks-footer-contact-details {
  position: relative;
}

.yscworks-footer-contact-details summary {
  display: inline-block;
  list-style: none;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.yscworks-footer-contact-details summary::-webkit-details-marker {
  display: none;
}

.yscworks-footer-nav a {
  display: block;
  padding: 6px 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: color var(--transition-fast), padding-left var(--transition-normal);
}

.yscworks-footer-nav a:hover {
  color: var(--text-primary);
  padding-left: 4px;
}

.yscworks-footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* ---------- 返回顶部按钮 ---------- */
.yscworks-back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1.2rem;
  color: var(--text-secondary);
  z-index: 900;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.yscworks-back-to-top.yscworks-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.yscworks-back-to-top:hover {
  border-color: var(--accent);
  color: var(--accent-light);
  transform: translateY(-2px);
}

/* ---------- Homepage Refresh ---------- */
#theme-yscworks .yscworks-page-loader {
  background:
    radial-gradient(circle at top, rgba(239, 191, 102, 0.24), transparent 28%),
    var(--bg-primary);
}

#theme-yscworks .yscworks-loader-bar {
  background: rgba(31, 24, 18, 0.08);
}

#theme-yscworks .yscworks-navbar.yscworks-scrolled {
  background: rgba(244, 237, 226, 0.72);
  box-shadow: 0 1px 0 rgba(91, 63, 41, 0.1);
}

#theme-yscworks .yscworks-mobile-menu {
  background: rgba(244, 237, 226, 0.96);
}

#theme-yscworks .yscworks-mobile-menu a {
  color: var(--text-secondary);
}

#theme-yscworks .yscworks-hero-avatar {
  margin-bottom: 0;
}

.yscworks-home-hero {
  position: relative;
  overflow: hidden;
  padding: 148px 0 112px;
}

.yscworks-home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 76% 13%, rgba(215, 89, 44, 0.12), transparent 8%),
    radial-gradient(circle at 82% 11%, rgba(238, 194, 121, 0.22), transparent 18%),
    radial-gradient(circle at 16% 32%, rgba(74, 111, 152, 0.06), transparent 18%),
    linear-gradient(180deg, rgba(255, 249, 239, 0.88), rgba(244, 237, 226, 0.08) 68%, transparent);
  pointer-events: none;
}

.yscworks-home-hero::after {
  content: '';
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(91, 63, 41, 0.28), transparent);
}

.yscworks-home-hero-backdrop {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 84% 12%, rgba(209, 78, 46, 0.16), transparent 6%),
    radial-gradient(circle at 83% 12%, rgba(240, 181, 94, 0.26), transparent 12%),
    linear-gradient(180deg, rgba(255, 247, 231, 0.54), rgba(244, 237, 226, 0.04));
  pointer-events: none;
}

.yscworks-home-hero-shell {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(380px, 0.95fr);
  gap: 68px;
  align-items: end;
}

.yscworks-home-hero-copy {
  max-width: 760px;
}

.yscworks-home-kicker {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.yscworks-home-kicker-line {
  width: 44px;
  height: 1px;
  background: currentColor;
  opacity: 0.55;
}

.yscworks-home-headline {
  max-width: 10ch;
  font-size: clamp(3.2rem, 6.6vw, 5.8rem);
  line-height: 0.96;
  letter-spacing: -0.055em;
  font-weight: 650;
  margin-bottom: 28px;
  text-wrap: balance;
}

.yscworks-home-headline span {
  display: block;
  background: linear-gradient(135deg, #b95e38, #d9a766 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.yscworks-home-intro {
  max-width: 560px;
  font-size: 1.02rem;
  line-height: 2;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.yscworks-home-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.yscworks-home-hero-visual {
  position: relative;
  min-height: 680px;
  border-radius: 40px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 250, 241, 0.74), rgba(243, 235, 225, 0.94)),
    radial-gradient(circle at top right, rgba(240, 188, 106, 0.18), transparent 18%),
    radial-gradient(circle at bottom left, rgba(58, 101, 150, 0.1), transparent 22%);
  box-shadow: 0 24px 60px rgba(46, 30, 18, 0.1);
}

.yscworks-zen-orb {
  position: relative;
  position: absolute;
  top: 62px;
  right: 64px;
  width: 156px;
  height: 156px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 34% 34%, rgba(255, 220, 168, 0.22), transparent 24%),
    linear-gradient(180deg, #cf5d39, #b94b2e);
  box-shadow:
    0 0 0 18px rgba(248, 219, 168, 0.05),
    0 18px 44px rgba(178, 63, 33, 0.12);
}

.yscworks-mist-layer {
  position: absolute;
  border-radius: 999px;
  filter: blur(10px);
  opacity: 0.92;
}

.yscworks-mist-layer-a {
  left: -8%;
  right: 12%;
  bottom: 170px;
  height: 132px;
  background: linear-gradient(90deg, rgba(255, 251, 246, 0.16), rgba(255, 250, 244, 0.9), rgba(255, 250, 246, 0.12));
}

.yscworks-mist-layer-b {
  left: 18%;
  right: -10%;
  bottom: 84px;
  height: 154px;
  background: linear-gradient(90deg, rgba(255, 248, 240, 0.08), rgba(255, 252, 247, 0.84), rgba(255, 248, 240, 0.12));
}

.yscworks-mountain-ridge {
  position: absolute;
  bottom: 0;
  border-radius: 44% 56% 0 0 / 36% 44% 0 0;
}

.yscworks-ridge-back {
  left: 14%;
  width: 60%;
  height: 45%;
  background: linear-gradient(180deg, rgba(174, 129, 108, 0.24), rgba(132, 111, 116, 0.28));
  clip-path: polygon(0% 100%, 18% 62%, 34% 70%, 54% 38%, 72% 54%, 100% 20%, 100% 100%);
  opacity: 0.38;
}

.yscworks-ridge-mid {
  left: -6%;
  width: 58%;
  height: 56%;
  background: linear-gradient(180deg, rgba(102, 136, 174, 0.42), rgba(49, 54, 70, 0.9));
  clip-path: polygon(0% 100%, 0% 46%, 16% 50%, 31% 26%, 46% 44%, 66% 20%, 100% 0%, 100% 100%);
}

.yscworks-ridge-front {
  right: -8%;
  width: 48%;
  height: 52%;
  background: linear-gradient(180deg, rgba(72, 96, 152, 0.52), rgba(29, 32, 45, 0.96));
  clip-path: polygon(0% 100%, 0% 34%, 22% 48%, 48% 22%, 70% 40%, 100% 18%, 100% 100%);
}

.yscworks-gold-stream {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 209, 108, 0), rgba(235, 196, 106, 0.72), rgba(255, 209, 108, 0));
  transform-origin: left center;
  box-shadow: 0 0 8px rgba(241, 193, 85, 0.16);
}

.yscworks-gold-stream-a {
  left: 6%;
  bottom: 240px;
  width: 46%;
  transform: rotate(-21deg);
}

.yscworks-gold-stream-b {
  right: 2%;
  bottom: 222px;
  width: 38%;
  transform: rotate(-36deg);
}

.yscworks-zen-grain {
  position: absolute;
  border-radius: 999px;
  background:
    radial-gradient(circle at 20% 30%, rgba(246, 200, 105, 0.9) 0 2px, transparent 3px),
    radial-gradient(circle at 60% 70%, rgba(246, 200, 105, 0.75) 0 1px, transparent 3px),
    radial-gradient(circle at 80% 40%, rgba(246, 200, 105, 0.85) 0 1.5px, transparent 3px);
  opacity: 0.42;
}

.yscworks-zen-grain-a {
  top: 48px;
  left: 34%;
  width: 180px;
  height: 90px;
}

.yscworks-zen-grain-b {
  right: 16%;
  bottom: 198px;
  width: 140px;
  height: 84px;
}

.yscworks-hero-seal {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(184, 83, 54, 0.82);
  color: #fff7ea;
  font-weight: 650;
  letter-spacing: 0.14em;
  box-shadow: 0 10px 24px rgba(145, 33, 20, 0.16);
}

.yscworks-home-hero-panel {
  position: absolute;
  left: 18px;
  bottom: 30px;
  width: min(332px, calc(100% - 42px));
  padding: 24px;
  border-radius: 30px;
  background: rgba(251, 247, 241, 0.62);
  border: 1px solid rgba(255, 249, 239, 0.8);
  box-shadow: 0 20px 42px rgba(39, 26, 18, 0.1);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}

.yscworks-hero-quote {
  position: absolute;
  right: 22px;
  bottom: 18px;
  max-width: 220px;
  padding: 14px 16px;
  border-radius: 20px;
  background: rgba(43, 56, 81, 0.64);
  color: rgba(248, 242, 232, 0.94);
  line-height: 1.8;
  box-shadow: 0 12px 28px rgba(22, 16, 12, 0.1);
}

.yscworks-hero-panel-top {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 18px;
  align-items: center;
  margin-bottom: 24px;
}

.yscworks-hero-panel-label {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.yscworks-home-hero-panel h2 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.yscworks-hero-panel-role {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.yscworks-hero-panel-note {
  padding: 18px 0 22px;
  border-top: 1px solid rgba(91, 63, 41, 0.1);
  border-bottom: 1px solid rgba(91, 63, 41, 0.1);
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-hero-panel-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  padding-top: 22px;
}

.yscworks-hero-panel-stats article {
  display: grid;
  gap: 6px;
}

.yscworks-hero-panel-stats strong {
  font-size: 1.4rem;
  line-height: 1;
  color: #b8432b;
}

.yscworks-hero-panel-stats span {
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.yscworks-home-proof {
  padding: 0 0 28px;
}

.yscworks-home-proof-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.yscworks-proof-card {
  padding: 26px 24px 30px;
  border-radius: 24px;
  border: 1px solid rgba(91, 63, 41, 0.06);
  background: linear-gradient(180deg, rgba(255, 251, 245, 0.44), rgba(248, 241, 232, 0.72));
  box-shadow: 0 10px 24px rgba(78, 52, 33, 0.03);
}

.yscworks-proof-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.yscworks-proof-card h3 {
  font-size: 1.28rem;
  margin-bottom: 8px;
}

.yscworks-proof-card p:last-child {
  color: var(--text-secondary);
  line-height: 1.75;
}

.yscworks-home-section-head {
  max-width: 680px;
  margin-bottom: 54px;
}

.yscworks-home-section-head .yscworks-section-title, .yscworks-home-section-head .yscworks-section-desc, .yscworks-home-section-head .yscworks-section-label {
  text-align: left;
}

.yscworks-home-section-head .yscworks-section-desc {
  margin: 0;
}

.yscworks-reading-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.yscworks-reading-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 249, 240, 0.78), rgba(247, 239, 229, 0.9));
  border: 1px solid rgba(91, 63, 41, 0.1);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.yscworks-reading-card:hover, .yscworks-service-card:hover, .yscworks-metric-card:hover {
  transform: translateY(-2px);
  border-color: rgba(181, 83, 45, 0.18);
  box-shadow: 0 12px 28px rgba(83, 53, 37, 0.05);
}

.yscworks-reading-meta {
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 18px;
}

.yscworks-reading-card h3 {
  font-size: 1.3rem;
  line-height: 1.35;
  margin-bottom: 12px;
}

.yscworks-reading-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-reading-link {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  padding-top: 24px;
  color: var(--accent);
  font-weight: 600;
}

.yscworks-about-split {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 32px;
  align-items: start;
}

.yscworks-about-story {
  padding-right: 18px;
}

.yscworks-about-story .yscworks-section-title {
  max-width: 10ch;
  text-align: left;
  margin-bottom: 20px;
}

.yscworks-about-story .yscworks-section-label {
  margin-bottom: 20px;
}

.yscworks-about-story-text {
  max-width: 560px;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 14px;
  font-size: 1rem;
}

.yscworks-about-metrics {
  display: grid;
  gap: 18px;
}

.yscworks-metric-card {
  display: grid;
  gap: 8px;
  padding: 24px 26px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(253, 249, 243, 0.74), rgba(246, 239, 230, 0.92));
  border: 1px solid rgba(91, 63, 41, 0.1);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.yscworks-metric-number {
  font-size: 1.7rem;
  line-height: 1.1;
  color: var(--accent);
  font-weight: 700;
}

.yscworks-metric-label {
  color: var(--text-secondary);
  line-height: 1.7;
}

.yscworks-service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.yscworks-service-card {
  min-height: 248px;
  padding: 28px;
  border-radius: 26px;
  background:
    linear-gradient(180deg, rgba(255, 251, 244, 0.78), rgba(245, 237, 227, 0.82)),
    radial-gradient(circle at top right, rgba(232, 194, 112, 0.08), transparent 34%);
  border: 1px solid rgba(91, 63, 41, 0.1);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.yscworks-service-index {
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.16em;
  margin-bottom: 40px;
}

.yscworks-service-card h3 {
  font-size: 1.36rem;
  margin-bottom: 12px;
}

.yscworks-service-card p:last-child {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-home-cta {
  padding-top: 26px;
}

.yscworks-home-cta-card {
  padding: 44px;
  border-radius: 32px;
  background:
    radial-gradient(circle at top right, rgba(239, 191, 102, 0.24), transparent 24%),
    radial-gradient(circle at left bottom, rgba(54, 106, 161, 0.08), transparent 22%),
    linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(246, 238, 229, 0.92));
  border: 1px solid rgba(91, 63, 41, 0.1);
  box-shadow: 0 16px 36px rgba(83, 53, 37, 0.06);
}

.yscworks-home-cta-card h2 {
  max-width: 16ch;
  font-size: clamp(2rem, 4.8vw, 3.3rem);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 14px;
}

.yscworks-home-cta-card p {
  max-width: 620px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
}

/* ---------- 滚动动画 ---------- */
.yscworks-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.yscworks-fade-in.yscworks-visible {
  opacity: 1;
  transform: translateY(0);
}

.yscworks-fade-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.yscworks-fade-in-left.yscworks-visible {
  opacity: 1;
  transform: translateX(0);
}

.yscworks-fade-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.yscworks-fade-in-right.yscworks-visible {
  opacity: 1;
  transform: translateX(0);
}

/* 延迟动画 */
.yscworks-delay-1 { transition-delay: 0.1s; }
.yscworks-delay-2 { transition-delay: 0.2s; }
.yscworks-delay-3 { transition-delay: 0.3s; }
.yscworks-delay-4 { transition-delay: 0.4s; }
.yscworks-delay-5 { transition-delay: 0.5s; }

/* ---------- 页面专用：作品页 ---------- */
.yscworks-page-header {
  padding: 140px 0 60px;
  text-align: center;
  background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
}

.yscworks-works-page-grid {
  padding: 0 0 80px;
}

/* ---------- 响应式设计 ---------- */
@media (max-width: 1024px) {
  .yscworks-home-hero-shell, .yscworks-about-split {
    grid-template-columns: 1fr;
  }

  .yscworks-home-proof-grid, .yscworks-reading-grid, .yscworks-service-grid {
    grid-template-columns: 1fr 1fr;
  }

  .yscworks-home-headline {
    max-width: 12ch;
  }

  .yscworks-home-hero-visual {
    min-height: auto;
  }

  .yscworks-home-hero-visual {
    min-height: 620px;
  }

  .yscworks-home-hero-panel {
    left: 24px;
  }

  .yscworks-hero-shell {
    grid-template-columns: 1fr;
  }

  .yscworks-hero-profile-card {
    max-width: 600px;
  }

  .yscworks-quick-stats-grid, .yscworks-focus-grid {
    grid-template-columns: 1fr 1fr;
  }

  .yscworks-footer-grid-home {
    grid-template-columns: minmax(0, 1.2fr) repeat(2, minmax(120px, 0.6fr));
    justify-content: stretch;
    column-gap: 40px;
    padding-left: 0;
  }

  .yscworks-works-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .yscworks-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .yscworks-footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .yscworks-footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  #theme-yscworks {
    --section-padding: 60px 0;
    --nav-height: 64px;
  }

  /* 导航 */
  .yscworks-nav-links {
    display: none;
  }

  .yscworks-nav-toggle {
    display: flex;
  }

  .yscworks-mobile-menu {
    display: block;
  }

  .yscworks-nav-logo {
    gap: 9px;
  }

  .yscworks-nav-logo::before {
    width: 30px;
    height: 30px;
    flex-basis: 30px;
  }

  /* Hero */
  .yscworks-hero {
    padding: 100px 20px 60px;
    min-height: auto;
    min-height: 100svh;
  }

  .yscworks-home-hero {
    padding: 120px 0 64px;
  }

  .yscworks-home-proof-grid, .yscworks-reading-grid, .yscworks-service-grid, .yscworks-hero-panel-stats {
    grid-template-columns: 1fr;
  }

  .yscworks-home-cta-card {
    padding: 32px 24px;
  }

  .yscworks-hero-panel-top {
    grid-template-columns: 80px 1fr;
  }

  .yscworks-home-hero-visual {
    min-height: 540px;
  }

  .yscworks-home-hero-panel {
    position: static;
    width: 100%;
    margin-top: 18px;
  }

  .yscworks-hero-quote {
    position: static;
    max-width: none;
    margin-top: 14px;
  }

  .yscworks-home-headline {
    max-width: none;
    font-size: clamp(2.6rem, 12vw, 4rem);
  }

  .yscworks-home-intro, .yscworks-about-story-text {
    max-width: none;
  }

  .yscworks-hero-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .yscworks-hero-layout {
    padding-top: 110px;
  }

  .yscworks-btn {
    justify-content: center;
  }

  .yscworks-quick-stats-grid, .yscworks-focus-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-free-pack-card {
    padding: 28px 20px;
  }

  /* 作品网格 */
  .yscworks-works-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* 统计 */
  .yscworks-stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .yscworks-stat-number {
    font-size: 2rem;
  }

  /* 时间线 */
  .yscworks-timeline {
    padding-left: 32px;
  }

  .yscworks-timeline::before {
    left: 11px;
  }

  .yscworks-timeline-item::before {
    left: -29px;
    width: 10px;
    height: 10px;
  }

  /* Footer */
  .yscworks-footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .yscworks-footer-grid-home {
    grid-template-columns: 1fr;
    padding-left: 0;
  }

  .yscworks-footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  /* 返回顶部 */
  .yscworks-back-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .yscworks-home-kicker {
    letter-spacing: 0.1em;
  }

  .yscworks-home-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .yscworks-hero-title {
    font-size: 2rem;
  }

  .yscworks-hero-subtitle {
    font-size: 0.9rem;
  }

  .yscworks-filter-tags {
    gap: 8px;
  }

  .yscworks-filter-tag {
    padding: 6px 14px;
    font-size: 0.8rem;
  }

  .yscworks-about-avatar {
    width: 110px;
    height: 110px;
    font-size: 2.5rem;
  }

  .yscworks-stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .yscworks-hero-avatar {
    width: 74px;
    height: 74px;
  }
}

/* ---------- 选择文字高亮 ---------- */
::selection {
  background: rgba(99, 102, 241, 0.3);
  color: #fff;
}

/* ---------- 滚动条美化 ---------- */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* ============================================
   Homepage Refinement: Eastern Zen UI
   ============================================ */
#theme-yscworks {
  --bg-primary: #f7f1e8;
  --bg-secondary: #efe5d6;
  --bg-card: rgba(255, 251, 245, 0.7);
  --bg-card-hover: rgba(255, 252, 247, 0.92);
  --text-primary: #1f1915;
  --text-secondary: #685b50;
  --text-muted: #988a7f;
  --accent: #b84d33;
  --accent-light: #d39a60;
  --accent-purple: #51687a;
  --accent-pink: #cd7858;
  --gradient-accent: linear-gradient(135deg, #b34b31, #ddbb82);
  --border-color: rgba(82, 57, 38, 0.12);
  --border-color-hover: rgba(82, 57, 38, 0.2);
  --glow-color: rgba(223, 189, 130, 0.18);
  background:
    radial-gradient(circle at 85% 14%, rgba(214, 168, 102, 0.18), transparent 18%),
    radial-gradient(circle at 12% 78%, rgba(95, 131, 153, 0.09), transparent 17%),
    linear-gradient(180deg, #fbf6ef 0%, #f3eadc 48%, #f8f2ea 100%);
  color: var(--text-primary);
}

#theme-yscworks::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 12%, rgba(255, 255, 255, 0.55), transparent 22%),
    radial-gradient(circle at 78% 88%, rgba(255, 255, 255, 0.38), transparent 20%);
  opacity: 0.75;
  z-index: -2;
}

#theme-yscworks::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(110, 87, 62, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(110, 87, 62, 0.025) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(circle at 50% 20%, black 22%, transparent 82%);
  -webkit-mask-image: radial-gradient(circle at 50% 20%, black 22%, transparent 82%);
  opacity: 0.28;
  z-index: -1;
}

.yscworks-homepage .yscworks-navbar {
  background: transparent;
}

.yscworks-homepage .yscworks-navbar.yscworks-scrolled {
  background: rgba(249, 243, 233, 0.82);
  box-shadow: 0 1px 0 rgba(88, 66, 47, 0.08);
}

.yscworks-homepage .yscworks-mobile-menu {
  background: rgba(249, 243, 233, 0.96);
  border-bottom: 1px solid rgba(88, 66, 47, 0.08);
}

.yscworks-homepage .yscworks-mobile-menu a {
  color: var(--text-secondary);
}

.yscworks-homepage .yscworks-mobile-menu a:hover {
  color: var(--text-primary);
}

.yscworks-homepage .yscworks-nav-logo, .yscworks-homepage .yscworks-loader-logo {
  background: none;
  -webkit-text-fill-color: initial;
  color: var(--text-primary);
}

.yscworks-homepage .yscworks-nav-links a::after {
  height: 1px;
  background: var(--accent);
}

.yscworks-homepage .yscworks-btn {
  border-radius: 999px;
  padding: 15px 26px;
  letter-spacing: 0.02em;
}

.yscworks-homepage .yscworks-btn-primary {
  background: linear-gradient(135deg, #b94f35, #d58357);
  border: 1px solid rgba(184, 77, 51, 0.16);
  box-shadow: 0 14px 28px rgba(184, 77, 51, 0.14);
}

.yscworks-homepage .yscworks-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 32px rgba(184, 77, 51, 0.18);
}

.yscworks-homepage .yscworks-btn-secondary {
  background: rgba(255, 251, 246, 0.66);
  border: 1px solid rgba(82, 57, 38, 0.12);
  color: var(--text-primary);
}

.yscworks-homepage .yscworks-btn-secondary:hover {
  background: rgba(255, 251, 246, 0.9);
  border-color: rgba(82, 57, 38, 0.2);
}

.yscworks-homepage .yscworks-section {
  padding: 112px 0;
}

.yscworks-homepage .yscworks-section-label {
  color: var(--accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.yscworks-homepage .yscworks-section-title, .yscworks-home-headline, .yscworks-philosophy-copy .yscworks-section-title, .yscworks-lab-about .yscworks-section-title {
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.yscworks-home-hero {
  position: relative;
  padding: calc(var(--nav-height) + 56px) 0 72px;
  overflow: hidden;
}

.yscworks-home-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: 56px;
  align-items: center;
}

.yscworks-home-hero-copy {
  position: relative;
  z-index: 2;
}

.yscworks-home-kicker {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.yscworks-home-kicker-line {
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, rgba(184, 77, 51, 0.2), rgba(184, 77, 51, 0.9));
}

.yscworks-home-headline {
  max-width: 9.5em;
  font-size: clamp(3.4rem, 8vw, 5.8rem);
  line-height: 1.08;
  margin-bottom: 24px;
  color: #201914;
}

.yscworks-home-intro {
  max-width: 36rem;
  color: var(--text-secondary);
  font-size: 1.08rem;
  line-height: 1.9;
  margin-bottom: 34px;
}

.yscworks-home-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.yscworks-home-intent-strip {
  margin-top: 42px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding-top: 28px;
  border-top: 1px solid rgba(82, 57, 38, 0.12);
}

.yscworks-home-intent-strip strong {
  display: block;
  font-size: 0.98rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.yscworks-home-intent-strip span {
  display: block;
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.7;
}

.yscworks-home-hero-visual {
  position: relative;
  min-height: 660px;
  border-radius: 40px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 251, 245, 0.75), rgba(248, 240, 228, 0.4));
  border: 1px solid rgba(84, 57, 36, 0.08);
  box-shadow: 0 28px 60px rgba(84, 57, 36, 0.1);
}

.yscworks-visual-paper, .yscworks-visual-mist, .yscworks-visual-ridge, .yscworks-visual-stream, .yscworks-visual-dust, .yscworks-visual-sun, .yscworks-hero-seal, .yscworks-home-hero-panel {
  position: absolute;
}

.yscworks-visual-paper {
  inset: 0;
  background:
    radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.75), transparent 28%),
    linear-gradient(180deg, rgba(255, 248, 240, 0.4), rgba(244, 234, 220, 0.2));
}

.yscworks-visual-sun {
  top: 80px;
  right: 82px;
  width: 154px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 44% 38%, rgba(241, 187, 162, 0.18), transparent 58%),
    radial-gradient(circle at 50% 50%, rgba(184, 77, 51, 0.95), rgba(198, 104, 66, 0.92));
  opacity: 0.9;
  filter: saturate(0.9);
}

.yscworks-visual-sun::after {
  content: '';
  position: absolute;
  inset: 28% -5% auto;
  height: 26px;
  background: linear-gradient(90deg, transparent, rgba(255, 244, 232, 0.66), transparent);
  filter: blur(5px);
}

.yscworks-visual-mist-a {
  inset: 110px 0 auto 0;
  height: 320px;
  background: radial-gradient(circle at 55% 50%, rgba(255, 253, 249, 0.84), transparent 62%);
}

.yscworks-visual-mist-b {
  inset: auto 0 74px 0;
  height: 260px;
  background: radial-gradient(circle at 45% 45%, rgba(252, 248, 243, 0.92), transparent 68%);
}

.yscworks-visual-ridge {
  inset: auto 0 0 auto;
  background-repeat: no-repeat;
}

.yscworks-visual-ridge-back {
  left: 68px;
  right: 120px;
  bottom: 170px;
  height: 188px;
  background:
    radial-gradient(120% 100% at 50% 100%, rgba(76, 92, 98, 0.34), transparent 64%),
    linear-gradient(180deg, rgba(117, 125, 126, 0.34), rgba(76, 81, 79, 0));
  clip-path: polygon(0 100%, 18% 56%, 34% 38%, 52% 48%, 70% 27%, 88% 44%, 100% 100%);
  filter: blur(0.4px);
}

.yscworks-visual-ridge-mid {
  left: 28px;
  right: 42px;
  bottom: 82px;
  height: 250px;
  background:
    linear-gradient(180deg, rgba(62, 69, 73, 0.9), rgba(33, 37, 39, 0.82));
  clip-path: polygon(0 100%, 12% 68%, 27% 56%, 42% 40%, 60% 26%, 76% 37%, 88% 21%, 100% 100%);
  opacity: 0.88;
}

.yscworks-visual-ridge-front {
  left: -14px;
  right: 154px;
  bottom: 0;
  height: 178px;
  background:
    linear-gradient(180deg, rgba(80, 109, 122, 0.92), rgba(50, 73, 84, 0.98));
  clip-path: polygon(0 100%, 0 78%, 18% 66%, 29% 48%, 44% 54%, 60% 30%, 76% 39%, 100% 0, 100% 100%);
  opacity: 0.9;
}

.yscworks-visual-stream {
  border-radius: 999px;
  border: 1px solid rgba(217, 173, 102, 0.46);
  opacity: 0.78;
}

.yscworks-visual-stream-a {
  width: 420px;
  height: 180px;
  left: 84px;
  bottom: 118px;
  border-color: rgba(214, 174, 108, 0.56);
  clip-path: inset(48% 0 0 0);
  transform: rotate(-11deg);
}

.yscworks-visual-stream-b {
  width: 350px;
  height: 160px;
  left: 116px;
  bottom: 152px;
  border-color: rgba(214, 174, 108, 0.36);
  clip-path: inset(52% 0 0 0);
  transform: rotate(8deg);
}

.yscworks-visual-dust {
  border-radius: 999px;
  background: radial-gradient(circle, rgba(214, 173, 102, 0.9) 0%, rgba(214, 173, 102, 0) 70%);
}

.yscworks-visual-dust-a {
  width: 180px;
  height: 180px;
  right: 162px;
  bottom: 204px;
  filter: blur(22px);
  opacity: 0.2;
}

.yscworks-visual-dust-b {
  width: 220px;
  height: 220px;
  left: 118px;
  bottom: 30px;
  filter: blur(30px);
  opacity: 0.12;
}

.yscworks-home-hero-panel {
  left: 34px;
  right: 34px;
  bottom: 32px;
  padding: 26px 28px;
  border-radius: 26px;
  background: rgba(255, 251, 246, 0.72);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(88, 66, 47, 0.1);
  box-shadow: 0 18px 40px rgba(81, 56, 38, 0.1);
}

.yscworks-hero-panel-label {
  margin-bottom: 12px;
  font-size: 0.76rem;
  letter-spacing: 0.22em;
  color: var(--accent);
  text-transform: uppercase;
}

.yscworks-home-hero-panel h2 {
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 12px;
}

.yscworks-hero-panel-text {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-hero-panel-foot {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(88, 66, 47, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--text-muted);
  font-size: 0.88rem;
}

.yscworks-hero-seal {
  top: 28px;
  left: 28px;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(184, 77, 51, 0.9);
  color: #fffaf4;
  font-size: 0.98rem;
  letter-spacing: 0.16em;
  box-shadow: 0 10px 22px rgba(184, 77, 51, 0.18);
}

.yscworks-home-section-head {
  max-width: 720px;
  margin-bottom: 42px;
}

.yscworks-pillar-grid, .yscworks-reading-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.yscworks-pillar-card, .yscworks-reading-card, .yscworks-home-cta-card, .yscworks-lab-projects, .yscworks-lab-about {
  position: relative;
  background: rgba(255, 252, 248, 0.7);
  border: 1px solid rgba(88, 66, 47, 0.1);
  box-shadow: 0 16px 38px rgba(81, 56, 38, 0.07);
}

.yscworks-pillar-card {
  border-radius: 28px;
  padding: 28px;
}

.yscworks-pillar-index {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--accent);
  font-size: 0.88rem;
  letter-spacing: 0.18em;
}

.yscworks-pillar-card h3, .yscworks-reading-card h3, .yscworks-lab-projects h2, .yscworks-lab-about h2, .yscworks-home-cta-card h2 {
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
  font-weight: 500;
}

.yscworks-pillar-card h3 {
  font-size: 1.56rem;
  margin-bottom: 12px;
}

.yscworks-pillar-card p {
  color: var(--text-secondary);
  line-height: 1.82;
  margin-bottom: 22px;
}

.yscworks-pillar-card a, .yscworks-lab-link {
  color: var(--accent);
  font-size: 0.95rem;
}

.yscworks-reading-card {
  border-radius: 26px;
  padding: 28px;
  min-height: 300px;
  background:
    linear-gradient(180deg, rgba(255, 252, 248, 0.92), rgba(252, 245, 235, 0.76));
}

.yscworks-reading-card::after {
  content: '';
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 120px;
  height: 88px;
  background:
    radial-gradient(circle at 80% 20%, rgba(184, 77, 51, 0.14), transparent 40%),
    linear-gradient(180deg, rgba(108, 123, 132, 0.18), rgba(108, 123, 132, 0));
  clip-path: polygon(0 100%, 32% 62%, 58% 36%, 82% 42%, 100% 12%, 100% 100%);
  opacity: 0.6;
}

.yscworks-reading-meta {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 18px;
}

.yscworks-reading-card h3 {
  position: relative;
  z-index: 1;
  font-size: 1.84rem;
  line-height: 1.32;
  margin-bottom: 14px;
}

.yscworks-reading-card p {
  position: relative;
  z-index: 1;
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-reading-link {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  color: var(--accent);
  font-size: 0.95rem;
}

.yscworks-philosophy-grid, .yscworks-lab-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
  gap: 40px;
  align-items: start;
}

.yscworks-philosophy-copy p {
  max-width: 31rem;
  color: var(--text-secondary);
  line-height: 1.9;
}

.yscworks-philosophy-list {
  padding-top: 64px;
}

.yscworks-philosophy-list article {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 18px;
  padding: 20px 0;
  border-top: 1px solid rgba(88, 66, 47, 0.1);
}

.yscworks-philosophy-list article:last-child {
  border-bottom: 1px solid rgba(88, 66, 47, 0.1);
}

.yscworks-philosophy-list span {
  color: var(--accent-light);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.7rem;
}

.yscworks-philosophy-list h3 {
  font-size: 1.16rem;
  margin-bottom: 6px;
}

.yscworks-philosophy-list p {
  color: var(--text-secondary);
}

.yscworks-lab-projects, .yscworks-lab-about {
  border-radius: 32px;
  padding: 34px;
}

.yscworks-lab-project-list {
  margin: 26px 0 24px;
}

.yscworks-lab-project-list article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0;
  border-top: 1px solid rgba(88, 66, 47, 0.1);
}

.yscworks-lab-project-list article:last-child {
  border-bottom: 1px solid rgba(88, 66, 47, 0.1);
}

.yscworks-lab-project-list h3 {
  font-size: 1.12rem;
  margin-bottom: 4px;
}

.yscworks-lab-project-list p, .yscworks-lab-about p {
  color: var(--text-secondary);
  line-height: 1.84;
}

.yscworks-lab-project-list span {
  color: var(--accent);
  white-space: nowrap;
  font-size: 0.92rem;
}

.yscworks-home-cta {
  padding-top: 84px;
  padding-bottom: 128px;
}

.yscworks-home-cta-card {
  border-radius: 34px;
  padding: 52px;
  text-align: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 18%, rgba(214, 173, 102, 0.08), transparent 18%),
    radial-gradient(circle at 82% 74%, rgba(81, 104, 122, 0.08), transparent 20%),
    rgba(255, 251, 246, 0.78);
}

.yscworks-home-cta-card::before, .yscworks-home-cta-card::after {
  content: '';
  position: absolute;
  width: 180px;
  height: 180px;
  border: 1px solid rgba(214, 173, 102, 0.28);
  border-radius: 50%;
}

.yscworks-home-cta-card::before {
  left: -52px;
  bottom: -72px;
}

.yscworks-home-cta-card::after {
  right: -64px;
  top: -76px;
}

.yscworks-home-cta-card h2 {
  max-width: 16em;
  margin: 0 auto 18px;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.22;
}

.yscworks-home-cta-card p {
  max-width: 44rem;
  margin: 0 auto 30px;
  color: var(--text-secondary);
  line-height: 1.9;
}

.yscworks-homepage .yscworks-footer {
  background: transparent;
  border-top: 1px solid rgba(88, 66, 47, 0.08);
}

.yscworks-homepage .yscworks-footer-grid-home {
  padding-top: 24px;
}

.yscworks-homepage .yscworks-footer-logo {
  background: none;
  -webkit-text-fill-color: initial;
  color: var(--text-primary);
}

.yscworks-homepage .yscworks-footer-desc, .yscworks-homepage .yscworks-footer-nav a, .yscworks-homepage .yscworks-footer-bottom {
  color: var(--text-secondary);
}

.yscworks-homepage .yscworks-footer-nav h4 {
  color: var(--text-primary);
}

.yscworks-homepage .yscworks-back-to-top {
  background: rgba(255, 250, 245, 0.84);
  border: 1px solid rgba(88, 66, 47, 0.12);
  color: var(--accent);
  box-shadow: 0 14px 30px rgba(81, 56, 38, 0.12);
}

@media (max-width: 1100px) {
  .yscworks-home-hero-shell, .yscworks-philosophy-grid, .yscworks-lab-grid, .yscworks-pillar-grid, .yscworks-reading-grid, .yscworks-home-intent-strip {
    grid-template-columns: 1fr;
  }

  .yscworks-home-hero-shell {
    gap: 36px;
  }

  .yscworks-home-headline, .yscworks-home-intro {
    max-width: none;
  }

  .yscworks-home-hero-visual {
    min-height: 560px;
  }

  .yscworks-philosophy-list {
    padding-top: 0;
  }
}

@media (max-width: 768px) {
  .yscworks-home-hero {
    padding-top: calc(var(--nav-height) + 32px);
  }

  .yscworks-home-headline {
    font-size: clamp(2.6rem, 13vw, 4rem);
    line-height: 1.12;
  }

  .yscworks-home-intro {
    font-size: 1rem;
    line-height: 1.84;
  }

  .yscworks-home-hero-visual {
    min-height: 480px;
    border-radius: 28px;
  }

  .yscworks-visual-sun {
    width: 110px;
    right: 38px;
    top: 52px;
  }

  .yscworks-home-hero-panel, .yscworks-lab-projects, .yscworks-lab-about, .yscworks-home-cta-card, .yscworks-pillar-card, .yscworks-reading-card {
    padding: 24px;
  }

  .yscworks-home-cta-card h2, .yscworks-reading-card h3, .yscworks-pillar-card h3 {
    font-size: 1.7rem;
  }

  .yscworks-hero-panel-foot {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .yscworks-container {
    padding: 0 18px;
  }

  .yscworks-home-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .yscworks-home-hero-visual {
    min-height: 430px;
  }

  .yscworks-visual-ridge-back {
    left: 18px;
    right: 48px;
    bottom: 148px;
  }

  .yscworks-visual-ridge-mid {
    left: 0;
    right: 12px;
  }

  .yscworks-visual-ridge-front {
    right: 92px;
  }

  .yscworks-home-hero-panel {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }

  .yscworks-hero-seal {
    width: 56px;
    height: 56px;
    font-size: 0.88rem;
  }

  .yscworks-philosophy-list article {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}

/* ============================================
   Homepage Layout Refresh: modern minimal zen
   ============================================ */
.yscworks-homepage .yscworks-btn-ghost {
  background: transparent;
  border: 1px solid rgba(184, 77, 51, 0.18);
  color: var(--accent);
}

.yscworks-homepage .yscworks-btn-ghost:hover {
  background: rgba(184, 77, 51, 0.06);
  border-color: rgba(184, 77, 51, 0.28);
}

.yscworks-home-hero {
  padding: calc(var(--nav-height) + 34px) 0 40px;
}

.yscworks-home-hero-card, .yscworks-section-card, .yscworks-home-cta-card {
  position: relative;
  border-radius: 34px;
  background: rgba(255, 251, 246, 0.72);
  border: 1px solid rgba(88, 66, 47, 0.1);
  box-shadow: 0 20px 46px rgba(81, 56, 38, 0.07);
  overflow: hidden;
}

.yscworks-home-hero-card {
  padding: 28px;
}

.yscworks-hero-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.yscworks-hero-orb, .yscworks-hero-ridge, .yscworks-hero-gold-line {
  position: absolute;
}

.yscworks-hero-orb {
  width: 180px;
  height: 180px;
  top: 90px;
  right: 170px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 36%, rgba(252, 230, 216, 0.12), transparent 44%), linear-gradient(135deg, rgba(200, 95, 63, 0.94), rgba(178, 71, 46, 0.88));
  opacity: 0.92;
}

.yscworks-hero-orb-small {
  width: 68px;
  height: 68px;
  right: 70px;
  top: 120px;
  background: linear-gradient(135deg, rgba(214, 173, 102, 0.22), rgba(214, 173, 102, 0.08));
  border: 1px solid rgba(214, 173, 102, 0.2);
}

.yscworks-hero-ridge {
  background-repeat: no-repeat;
}

.yscworks-hero-ridge-back {
  right: 140px;
  bottom: 168px;
  width: 320px;
  height: 150px;
  background: linear-gradient(180deg, rgba(118, 127, 129, 0.28), rgba(118, 127, 129, 0));
  clip-path: polygon(0 100%, 18% 58%, 36% 34%, 56% 50%, 76% 28%, 100% 100%);
}

.yscworks-hero-ridge-mid {
  right: 24px;
  bottom: 124px;
  width: 420px;
  height: 210px;
  background: linear-gradient(180deg, rgba(56, 65, 70, 0.92), rgba(30, 36, 39, 0.86));
  clip-path: polygon(0 100%, 10% 70%, 28% 56%, 46% 36%, 66% 24%, 82% 38%, 100% 100%);
}

.yscworks-hero-ridge-front {
  left: 44%;
  right: -40px;
  bottom: 0;
  height: 210px;
  background: linear-gradient(180deg, rgba(64, 89, 102, 0.9), rgba(41, 63, 74, 0.98));
  clip-path: polygon(0 100%, 0 74%, 18% 60%, 34% 44%, 52% 52%, 74% 24%, 100% 0, 100% 100%);
}

.yscworks-hero-gold-line {
  border: 1px solid rgba(217, 173, 102, 0.42);
  border-radius: 999px;
  opacity: 0.72;
}

.yscworks-hero-gold-line-a {
  left: 48%;
  bottom: 140px;
  width: 330px;
  height: 120px;
  transform: rotate(-9deg);
  clip-path: inset(56% 0 0 0);
}

.yscworks-hero-gold-line-b {
  left: 52%;
  bottom: 104px;
  width: 290px;
  height: 104px;
  transform: rotate(7deg);
  clip-path: inset(58% 0 0 0);
}

.yscworks-hero-main-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.75fr);
  gap: 28px;
  align-items: start;
}

.yscworks-home-hero-copy {
  padding: 22px 18px 12px 18px;
}

.yscworks-home-headline {
  max-width: 8.8em;
  font-size: clamp(3.4rem, 7vw, 5rem);
  line-height: 1.02;
  margin-bottom: 22px;
}

.yscworks-home-intro {
  max-width: 42rem;
  margin-bottom: 30px;
  font-size: 1.04rem;
}

.yscworks-hero-side-stack {
  display: grid;
  gap: 16px;
}

.yscworks-hero-info-card {
  position: relative;
  z-index: 1;
  border-radius: 26px;
  padding: 22px 22px 20px;
  background: rgba(255, 251, 246, 0.74);
  border: 1px solid rgba(88, 66, 47, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.yscworks-hero-card-label, .yscworks-topic-label {
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.yscworks-profile-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 12px 0 18px;
}

.yscworks-profile-avatar {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  object-position: center;
  background: linear-gradient(135deg, rgba(191, 93, 64, 0.12), rgba(214, 173, 102, 0.1));
  border: 1px solid rgba(191, 93, 64, 0.16);
}

.yscworks-profile-row h2, .yscworks-focus-card h3, .yscworks-topic-card h3, .yscworks-portfolio-card h3, .yscworks-featured-post h3, .yscworks-post-card h3 {
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
  font-weight: 500;
}

.yscworks-profile-row h2 {
  font-size: 1.45rem;
  margin-bottom: 4px;
}

.yscworks-profile-row p, .yscworks-focus-card p, .yscworks-profile-copy p {
  color: var(--text-secondary);
}

.yscworks-profile-copy {
  display: grid;
  gap: 8px;
  line-height: 1.65;
}

.yscworks-profile-copy p {
  margin: 0;
  text-align: left;
}

.yscworks-focus-card h3 {
  margin: 12px 0 10px;
  font-size: 1.55rem;
  line-height: 1.38;
}

.yscworks-hero-stats-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.yscworks-hero-stat-card, .yscworks-topic-card, .yscworks-portfolio-card, .yscworks-post-card {
  border-radius: 22px;
  border: 1px solid rgba(88, 66, 47, 0.1);
  background: rgba(255, 253, 249, 0.82);
}

.yscworks-hero-stat-card {
  padding: 22px 20px;
}

.yscworks-hero-stat-card strong {
  display: block;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 8px;
}

.yscworks-hero-stat-card span {
  color: var(--text-secondary);
}

.yscworks-home-topics {
  padding-top: 22px;
}

.yscworks-topic-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.yscworks-topic-card {
  padding: 24px;
}

.yscworks-topic-card h3 {
  font-size: 2rem;
  margin: 14px 0 10px;
}

.yscworks-topic-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-section-card {
  padding: 28px;
}

.yscworks-section-card-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 26px;
}

.yscworks-portfolio-grid, .yscworks-post-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.yscworks-portfolio-card, .yscworks-post-card {
  padding: 22px;
}

.yscworks-portfolio-meta, .yscworks-post-meta, .yscworks-featured-post-meta {
  color: var(--text-muted);
  font-size: 0.82rem;
  letter-spacing: 0.02em;
}

.yscworks-portfolio-meta {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.yscworks-portfolio-card h3 {
  font-size: 2rem;
  margin: 16px 0 12px;
}

.yscworks-portfolio-card p, .yscworks-post-card p, .yscworks-featured-post p {
  color: var(--text-secondary);
  line-height: 1.84;
}

.yscworks-portfolio-tags {
  margin-top: 18px;
  color: var(--text-muted);
  font-size: 0.88rem;
}

.yscworks-featured-post {
  padding: 28px;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(34, 31, 30, 0.97), rgba(29, 26, 25, 0.98));
  color: #f6efe7;
  margin-bottom: 18px;
}

.yscworks-featured-post .yscworks-featured-post-meta, .yscworks-featured-post p {
  color: rgba(246, 239, 231, 0.72);
}

.yscworks-featured-post h3 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.18;
  margin: 18px 0 14px;
}

.yscworks-featured-post-tags {
  display: inline-block;
  margin: 18px 0 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(246, 239, 231, 0.88);
  font-size: 0.85rem;
}

.yscworks-featured-post .yscworks-reading-link {
  color: #fff6ee;
}

.yscworks-post-card h3 {
  font-size: 1.72rem;
  line-height: 1.3;
  margin: 14px 0 10px;
}

.yscworks-home-cta-card {
  padding: 34px 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  text-align: left;
}

.yscworks-home-cta-card h2 {
  margin: 8px 0 10px;
  font-size: clamp(2rem, 4vw, 2.6rem);
  line-height: 1.16;
}

.yscworks-home-cta-card p {
  max-width: 50rem;
  margin: 0;
}

.yscworks-home-cta-card .yscworks-home-actions {
  flex-shrink: 0;
}

@media (max-width: 1100px) {
  .yscworks-hero-main-grid, .yscworks-topic-grid, .yscworks-portfolio-grid, .yscworks-post-grid, .yscworks-hero-stats-grid, .yscworks-home-cta-card {
    grid-template-columns: 1fr;
  }

  .yscworks-home-cta-card {
    display: grid;
  }

  .yscworks-hero-orb {
    right: 60px;
  }

  .yscworks-hero-ridge-front {
    left: 35%;
  }
}

@media (max-width: 768px) {
  .yscworks-home-hero-card, .yscworks-section-card {
    padding: 20px;
    border-radius: 26px;
  }

  .yscworks-section-card-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .yscworks-home-headline {
    font-size: clamp(2.5rem, 12vw, 3.8rem);
  }

  .yscworks-topic-card h3, .yscworks-portfolio-card h3 {
    font-size: 1.8rem;
  }

  .yscworks-featured-post, .yscworks-post-card, .yscworks-portfolio-card, .yscworks-topic-card, .yscworks-hero-info-card {
    padding: 20px;
  }

  .yscworks-hero-ridge-mid {
    width: 320px;
    height: 180px;
  }

  .yscworks-hero-ridge-front {
    right: -70px;
    height: 170px;
  }
}

/* ============================================
   Homepage 2026: AI product lab
   ============================================ */
.yscworks-ysc-lab {
  position: relative;
  overflow: hidden;
}

.yscworks-ysc-lab::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(rgba(72, 55, 38, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(72, 55, 38, 0.04) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.76), transparent 78%);
  pointer-events: none;
}

.yscworks-ysc-lab::after {
  content: 'AI MEDIA / PRODUCT / BUILD IN PUBLIC / LONG TERM / ';
  position: fixed;
  left: -6vw;
  right: -6vw;
  bottom: 24px;
  z-index: -1;
  color: rgba(66, 50, 36, 0.035);
  font-size: clamp(3.4rem, 8vw, 7rem);
  font-weight: 800;
  letter-spacing: 0.12em;
  white-space: nowrap;
  pointer-events: none;
}

.yscworks-lab-hero {
  position: relative;
  padding: calc(var(--nav-height) + 46px) 0 52px;
}

.yscworks-lab-hero::before, .yscworks-lab-hero::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}

.yscworks-lab-hero::before {
  width: 520px;
  height: 520px;
  right: -160px;
  top: -160px;
  background: radial-gradient(circle, rgba(185, 74, 64, 0.16), transparent 64%);
  animation: labFloat 9s ease-in-out infinite;
}

.yscworks-lab-hero::after {
  width: 420px;
  height: 420px;
  left: -130px;
  bottom: -180px;
  background: radial-gradient(circle, rgba(45, 95, 86, 0.12), transparent 64%);
  animation: labFloat 11s ease-in-out infinite reverse;
}

.yscworks-lab-hero-grid, .yscworks-lab-writing-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: 28px;
  align-items: stretch;
}

.yscworks-lab-hero-copy, .yscworks-lab-console, .yscworks-lab-map-card, .yscworks-lab-project-card, .yscworks-lab-cta-card {
  border: 1px solid rgba(77, 58, 42, 0.12);
  background: rgba(255, 251, 246, 0.78);
  box-shadow: 0 24px 70px rgba(68, 48, 34, 0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.yscworks-lab-hero-copy {
  position: relative;
  min-height: 620px;
  padding: clamp(32px, 5vw, 58px);
  border-radius: 36px;
  overflow: hidden;
}

.yscworks-lab-hero-copy::after {
  content: '';
  position: absolute;
  right: -80px;
  bottom: -120px;
  width: 430px;
  height: 300px;
  background: linear-gradient(180deg, rgba(44, 70, 79, 0.88), rgba(29, 47, 56, 0.96));
  clip-path: polygon(0 100%, 14% 68%, 32% 42%, 50% 54%, 72% 22%, 100% 0, 100% 100%);
  opacity: 0.9;
}

.yscworks-lab-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.yscworks-live-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #2d5f56;
  box-shadow: 0 0 0 0 rgba(45, 95, 86, 0.35);
  animation: labPulse 1.7s ease-out infinite;
}

.yscworks-lab-hero h1 {
  position: relative;
  z-index: 1;
  max-width: 8.8em;
  margin: 22px 0 22px;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(3.5rem, 7vw, 6.7rem);
  font-weight: 500;
  line-height: 0.96;
  letter-spacing: 0;
}

.yscworks-lab-lead {
  position: relative;
  z-index: 1;
  max-width: 680px;
  color: var(--text-secondary);
  font-size: 1.08rem;
  line-height: 1.95;
  margin-bottom: 24px;
}

.yscworks-lab-tags, .yscworks-project-status, .yscworks-cta-contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.yscworks-lab-tags {
  position: relative;
  z-index: 1;
  margin-bottom: 28px;
}

.yscworks-lab-tags span, .yscworks-project-status span {
  border: 1px solid rgba(83, 63, 45, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.48);
  color: var(--text-secondary);
  font-size: 0.86rem;
  padding: 7px 11px;
}

.yscworks-lab-hero-copy .yscworks-home-actions {
  position: relative;
  z-index: 1;
}

.yscworks-lab-console {
  position: relative;
  min-height: 620px;
  border-radius: 36px;
  padding: 22px;
  overflow: hidden;
  background:
    radial-gradient(circle at 80% 10%, rgba(185, 74, 64, 0.18), transparent 22%),
    linear-gradient(180deg, rgba(33, 30, 28, 0.97), rgba(27, 26, 25, 0.98));
  color: #f7efe7;
}

.yscworks-lab-console::before {
  content: '';
  position: absolute;
  inset: 64px 20px 20px;
  border-radius: 28px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 30px 30px;
}

.yscworks-console-topbar, .yscworks-console-profile, .yscworks-console-lines {
  position: relative;
  z-index: 1;
}

.yscworks-console-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(247, 239, 231, 0.62);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

.yscworks-console-topbar span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(247, 239, 231, 0.32);
}

.yscworks-console-topbar span:first-child {
  background: #b94a40;
}

.yscworks-console-topbar strong {
  margin-left: 8px;
  font-weight: 500;
}

.yscworks-console-profile {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 58px 0 34px;
}

.yscworks-console-profile img {
  width: 86px;
  height: 86px;
  border-radius: 24px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.yscworks-console-profile p {
  margin: 0 0 6px;
  color: rgba(247, 239, 231, 0.66);
}

.yscworks-console-profile strong {
  display: block;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.55rem;
  font-weight: 500;
}

.yscworks-console-lines {
  display: grid;
  gap: 14px;
  margin-top: 30px;
}

.yscworks-console-lines p {
  margin: 0;
  padding: 14px 15px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(247, 239, 231, 0.8);
  line-height: 1.65;
}

.yscworks-console-lines span {
  display: inline-block;
  min-width: 78px;
  color: #e7c37f;
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.82rem;
}

.yscworks-lab-stats {
  padding: 22px 0 44px;
}

.yscworks-lab-stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.yscworks-lab-stat-grid article {
  min-height: 132px;
  padding: 22px;
  border-radius: 24px;
  background: rgba(255, 253, 249, 0.8);
  border: 1px solid rgba(88, 66, 47, 0.1);
}

.yscworks-lab-stat-grid strong {
  display: block;
  margin-bottom: 10px;
  color: var(--text-primary);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
}

.yscworks-lab-stat-grid span {
  color: var(--text-secondary);
}

.yscworks-lab-section-head {
  max-width: 760px;
  margin-bottom: 24px;
}

.yscworks-lab-section-head h2, .yscworks-lab-cta-card h2 {
  margin: 8px 0 12px;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0;
}

.yscworks-lab-section-head p, .yscworks-lab-cta-card p {
  color: var(--text-secondary);
  line-height: 1.9;
}

.yscworks-lab-map-grid, .yscworks-lab-project-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.yscworks-lab-project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.yscworks-lab-map-card, .yscworks-lab-project-card {
  position: relative;
  min-height: 300px;
  border-radius: 28px;
  padding: 24px;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.yscworks-lab-map-card:hover, .yscworks-lab-project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 28px 78px rgba(68, 48, 34, 0.12);
}

.yscworks-lab-map-card span {
  color: var(--text-muted);
  font-size: 0.76rem;
  letter-spacing: 0.14em;
}

.yscworks-lab-map-card h3, .yscworks-lab-project-card h3 {
  margin: 18px 0 12px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.18;
}

.yscworks-lab-map-card p, .yscworks-lab-project-card p {
  color: var(--text-secondary);
  line-height: 1.82;
}

.yscworks-lab-project-card .yscworks-project-slogan {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  margin: -2px 0 12px;
  padding: 7px 11px;
  border: 1px solid rgba(63, 115, 91, 0.18);
  border-radius: 999px;
  background: rgba(237, 244, 238, 0.7);
  color: #2f6a54;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.35;
}

.yscworks-lab-map-card a {
  position: absolute;
  left: 24px;
  bottom: 22px;
  color: var(--accent);
  font-weight: 700;
}

.yscworks-project-code {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  margin-bottom: 18px;
  border-radius: 18px;
  background: #263f44;
  color: #f8efe4;
  font-weight: 800;
  letter-spacing: 0.06em;
}

.yscworks-lab-project-card:nth-child(2) .yscworks-project-code {
  background: #b94a40;
}

.yscworks-lab-project-card:nth-child(3) .yscworks-project-code {
  background: #80623d;
}

.yscworks-lab-writing-grid {
  align-items: start;
}

.yscworks-lab-note-list {
  display: grid;
  gap: 12px;
}

.yscworks-lab-note-list a {
  display: grid;
  grid-template-columns: 46px 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 253, 249, 0.78);
  border: 1px solid rgba(88, 66, 47, 0.1);
}

.yscworks-lab-note-list span {
  color: var(--accent);
  font-weight: 800;
}

.yscworks-lab-note-list strong {
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.2rem;
  font-weight: 500;
}

.yscworks-lab-note-list em {
  color: var(--text-muted);
  font-style: normal;
  font-size: 0.86rem;
}

.yscworks-lab-cta-card {
  position: relative;
  border-radius: 34px;
  padding: clamp(28px, 5vw, 48px);
  overflow: hidden;
}

.yscworks-lab-cta-card::after {
  content: 'AVAILABLE';
  position: absolute;
  right: -24px;
  top: 22px;
  color: rgba(185, 74, 64, 0.08);
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 900;
  letter-spacing: 0.08em;
}

.yscworks-lab-cta-card h2, .yscworks-lab-cta-card p, .yscworks-lab-cta-card .yscworks-section-label, .yscworks-cta-contact-row {
  position: relative;
  z-index: 1;
}

.yscworks-cta-contact-row {
  margin-top: 22px;
}

.yscworks-cta-contact-row a {
  border-radius: 999px;
  border: 1px solid rgba(88, 66, 47, 0.14);
  background: rgba(255, 255, 255, 0.52);
  padding: 10px 14px;
  color: var(--accent);
  font-weight: 700;
  max-width: 100%;
  overflow-wrap: anywhere;
}

@keyframes labPulse {
  0% { box-shadow: 0 0 0 0 rgba(45, 95, 86, 0.34); }
  80% { box-shadow: 0 0 0 12px rgba(45, 95, 86, 0); }
  100% { box-shadow: 0 0 0 0 rgba(45, 95, 86, 0); }
}

@keyframes labFloat {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, 22px, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .yscworks-live-dot, .yscworks-lab-hero::before, .yscworks-lab-hero::after {
    animation: none;
  }
}

@media (max-width: 1100px) {
  .yscworks-lab-hero-grid, .yscworks-lab-writing-grid, .yscworks-lab-project-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-lab-map-grid, .yscworks-lab-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .yscworks-lab-hero-copy, .yscworks-lab-console {
    min-height: auto;
  }
}

@media (max-width: 700px) {
  .yscworks-lab-hero {
    padding-top: calc(var(--nav-height) + 26px);
  }

  .yscworks-lab-hero-copy, .yscworks-lab-console, .yscworks-lab-cta-card {
    border-radius: 26px;
    padding: 22px;
  }

  .yscworks-lab-hero h1 {
    font-size: clamp(2.6rem, 13vw, 4rem);
  }

  .yscworks-lab-map-grid, .yscworks-lab-stat-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-lab-note-list a {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .yscworks-console-profile {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 34px;
  }
}

/* Outcome-first service summary, placed directly after the homepage hero. */
.yscworks-help-section {
  position: relative;
  padding: 82px 0 54px;
  overflow: hidden;
  border-top: 1px solid rgba(58, 105, 82, 0.14);
  border-bottom: 1px solid rgba(58, 105, 82, 0.14);
  background:
    linear-gradient(135deg, rgba(45, 95, 86, 0.065), transparent 48%),
    rgba(250, 246, 239, 0.72);
}

.yscworks-help-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 34%;
  height: 100%;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(58, 105, 82, 0.16) 1px, transparent 1.2px);
  background-size: 20px 20px;
  mask-image: linear-gradient(90deg, transparent, #000);
  opacity: 0.55;
}

.yscworks-help-section .yscworks-container {
  position: relative;
  z-index: 1;
}

.yscworks-help-head {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
  gap: clamp(36px, 7vw, 96px);
  align-items: end;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(78, 46, 29, 0.16);
}

.yscworks-help-head h2 {
  max-width: 18ch;
  margin-top: 10px;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(2.7rem, 3.8vw, 3.35rem);
  font-weight: 500;
  line-height: 1.08;
}

.yscworks-help-head > p {
  max-width: 500px;
  color: var(--text-secondary);
  line-height: 1.9;
}

.yscworks-help-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-left: 1px solid rgba(78, 46, 29, 0.14);
}

.yscworks-help-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 500px;
  padding: 30px;
  border-right: 1px solid rgba(78, 46, 29, 0.14);
  border-bottom: 1px solid rgba(78, 46, 29, 0.14);
  background: rgba(255, 252, 247, 0.72);
  transition: background 0.25s ease, transform 0.25s ease;
}

.yscworks-help-card:hover {
  background: rgba(255, 253, 249, 0.96);
  transform: translateY(-3px);
}

.yscworks-help-index {
  color: #3b7057;
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.75rem;
  font-weight: 800;
}

.yscworks-help-card h3 {
  min-height: 2.7em;
  margin: 30px 0 18px;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.35;
}

.yscworks-help-situation {
  min-height: 106px;
  color: var(--text-secondary);
  line-height: 1.85;
}

.yscworks-help-situation b {
  display: block;
  margin-bottom: 5px;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.yscworks-help-delivery {
  min-height: 150px;
  margin: 24px 0;
  padding: 18px 0 18px 18px;
  border-left: 3px solid #3b7057;
}

.yscworks-help-delivery span, .yscworks-help-proof span, .yscworks-help-next span {
  display: block;
  margin-bottom: 7px;
  color: #3b7057;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.yscworks-help-delivery p {
  color: var(--text-primary);
  line-height: 1.8;
}

.yscworks-help-proof {
  margin-bottom: 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(78, 46, 29, 0.12);
}

.yscworks-help-proof strong {
  font-size: 0.9rem;
  line-height: 1.6;
}

.yscworks-help-card > a {
  margin-top: auto;
  color: var(--accent);
  font-weight: 800;
}

.yscworks-help-card > a:hover, .yscworks-help-card > a:focus-visible {
  color: #315f49;
}

.yscworks-help-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 24px 0 0;
}

.yscworks-help-next p {
  color: var(--text-secondary);
  line-height: 1.75;
}

.yscworks-help-next span {
  display: inline;
  margin: 0 12px 0 0;
}

.yscworks-help-next > a {
  flex: 0 0 auto;
  padding: 12px 18px;
  border: 1px solid rgba(58, 105, 82, 0.34);
  color: #315f49;
  font-weight: 800;
  background: rgba(255, 252, 247, 0.74);
}

.yscworks-help-next > a:hover, .yscworks-help-next > a:focus-visible {
  border-color: #3b7057;
  background: #3b7057;
  color: #fffdf7;
}

@media (max-width: 900px) {
  .yscworks-help-head {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .yscworks-help-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-help-card {
    min-height: auto;
  }

  .yscworks-help-card h3, .yscworks-help-situation, .yscworks-help-delivery {
    min-height: 0;
  }
}

@media (max-width: 700px) {
  .yscworks-help-section {
    padding: 62px 0 42px;
  }

  .yscworks-help-head h2 {
    font-size: clamp(2.35rem, 11vw, 3.25rem);
  }

  .yscworks-help-card {
    padding: 24px 20px;
  }

  .yscworks-help-next {
    align-items: stretch;
    flex-direction: column;
    gap: 18px;
  }

  .yscworks-help-next > a {
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .yscworks-help-card {
    transition: none;
  }
}


/* ===== pages.css ===== */

/* ============================================
   YSC Page Styles
   Inner pages aligned with the homepage editorial system
   ============================================ */

.yscworks-page-intro {
  position: relative;
  padding: 148px 0 52px;
  overflow: hidden;
}

.yscworks-page-intro::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 82% 14%, rgba(206, 66, 39, 0.18), transparent 10%),
    radial-gradient(circle at 78% 12%, rgba(239, 186, 98, 0.24), transparent 18%),
    radial-gradient(circle at 14% 64%, rgba(55, 101, 146, 0.08), transparent 18%),
    linear-gradient(180deg, rgba(255, 250, 239, 0.8), rgba(244, 237, 226, 0));
  pointer-events: none;
}

.yscworks-page-intro-grid, .yscworks-page-intro-single {
  position: relative;
  z-index: 1;
}

.yscworks-page-intro-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(310px, 0.85fr);
  gap: 36px;
  align-items: end;
}

.yscworks-page-intro-single {
  max-width: 820px;
}

.yscworks-page-kicker {
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 18px;
}

.yscworks-page-intro h1 {
  max-width: 11ch;
  font-size: clamp(2.8rem, 6vw, 5.1rem);
  line-height: 0.96;
  letter-spacing: -0.055em;
  margin-bottom: 22px;
}

.yscworks-page-intro-single h1 {
  max-width: 12ch;
}

.yscworks-page-summary {
  max-width: 590px;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.9;
}

.yscworks-page-intro-card {
  padding: 28px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.86), rgba(246, 239, 230, 0.9)),
    radial-gradient(circle at top right, rgba(239, 193, 109, 0.12), transparent 32%);
  border: 1px solid rgba(91, 63, 41, 0.12);
  box-shadow: 0 22px 60px rgba(83, 53, 37, 0.1);
}

.yscworks-page-profile-avatar {
  width: 94px;
  height: 94px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
}

.yscworks-page-intro-card h2 {
  font-size: 1.5rem;
  margin-bottom: 6px;
}

.yscworks-page-intro-card > p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-page-profile-points {
  display: grid;
  gap: 10px;
  margin-top: 18px;
}

.yscworks-page-profile-points li {
  position: relative;
  padding-left: 16px;
  color: var(--text-secondary);
}

.yscworks-page-profile-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.yscworks-editor-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.yscworks-editor-stat {
  padding: 24px 20px;
  border-top: 1px solid rgba(78, 46, 29, 0.14);
}

.yscworks-editor-stat strong {
  display: block;
  font-size: 2rem;
  line-height: 1;
  color: var(--accent);
  margin-bottom: 10px;
}

.yscworks-editor-stat span {
  color: var(--text-secondary);
  line-height: 1.7;
}

.yscworks-narrative-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 34px;
}

.yscworks-narrative-block .yscworks-section-title, .yscworks-narrative-block .yscworks-section-label {
  text-align: left;
}

.yscworks-narrative-block .yscworks-section-title {
  max-width: 11ch;
  margin-bottom: 18px;
}

.yscworks-narrative-text {
  max-width: 580px;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 14px;
}

.yscworks-focus-list {
  display: grid;
  gap: 18px;
}

.yscworks-focus-sheet {
  padding: 24px 26px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 250, 242, 0.72), rgba(246, 239, 230, 0.86));
  border: 1px solid rgba(91, 63, 41, 0.1);
}

.yscworks-focus-sheet-label {
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.yscworks-focus-sheet h3 {
  font-size: 1.22rem;
  margin: 10px 0 8px;
}

.yscworks-focus-sheet p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-editor-timeline {
  display: grid;
  gap: 18px;
}

.yscworks-editor-timeline-item {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 24px;
  padding: 24px 26px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 250, 242, 0.72), rgba(246, 239, 230, 0.88));
  border: 1px solid rgba(91, 63, 41, 0.1);
}

.yscworks-editor-timeline-year {
  font-size: 0.86rem;
  letter-spacing: 0.12em;
  color: var(--accent);
  font-weight: 700;
}

.yscworks-editor-timeline-item h3 {
  font-size: 1.22rem;
  margin-bottom: 8px;
}

.yscworks-editor-timeline-item p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-editor-filter-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.yscworks-filter-btn {
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid rgba(78, 46, 29, 0.12);
  background: rgba(255, 252, 247, 0.72);
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: all var(--transition-normal);
}

.yscworks-filter-btn:hover, .yscworks-filter-btn.yscworks-active, .yscworks-filter-tag:hover, .yscworks-filter-tag.yscworks-active {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 10px 26px rgba(181, 83, 45, 0.18);
}

.yscworks-editor-article-list {
  display: grid;
  gap: 18px;
}

.yscworks-editor-article {
  position: relative;
  padding: 28px;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255, 251, 243, 0.8), rgba(246, 239, 230, 0.92)),
    radial-gradient(circle at top right, rgba(239, 191, 102, 0.1), transparent 28%);
  border: 1px solid rgba(91, 63, 41, 0.1);
  overflow: hidden;
}

.yscworks-editor-article-featured {
  background:
    linear-gradient(180deg, rgba(255, 251, 243, 0.86), rgba(248, 237, 224, 0.96)),
    radial-gradient(circle at 88% 16%, rgba(185, 93, 55, 0.14), transparent 26%);
}

.yscworks-editor-article-number {
  position: absolute;
  right: 24px;
  top: 22px;
  color: rgba(181, 83, 45, 0.16);
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: 1;
  pointer-events: none;
}

.yscworks-editor-article-meta {
  font-size: 0.82rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  margin-bottom: 14px;
}

.yscworks-editor-article h2 {
  position: relative;
  z-index: 1;
  font-size: 1.48rem;
  line-height: 1.3;
  margin-bottom: 10px;
}

.yscworks-editor-article p {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: var(--text-secondary);
  line-height: 1.85;
}

.yscworks-editor-article .yscworks-reading-link {
  margin-top: 18px;
}

.yscworks-editor-works-grid .yscworks-work-card {
  opacity: 1;
  transform: none;
}

.yscworks-editor-works-grid .yscworks-work-card-image {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(31, 24, 18, 0.68);
}

.yscworks-blog-empty {
  margin-top: 10px;
  padding: 24px 0;
  color: var(--text-secondary);
}

.yscworks-contact-editor-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 28px;
}

.yscworks-contact-sheet, .yscworks-contact-card, .yscworks-resume-block {
  padding: 28px;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.8), rgba(246, 239, 230, 0.92)),
    radial-gradient(circle at top right, rgba(239, 191, 102, 0.08), transparent 30%);
  border: 1px solid rgba(91, 63, 41, 0.1);
}

.yscworks-contact-sheet h2 {
  font-size: 1.55rem;
  margin-bottom: 10px;
}

.yscworks-contact-sheet-intro {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 22px;
}

.yscworks-contact-form {
  display: grid;
  gap: 18px;
}

.yscworks-form-group {
  display: grid;
  gap: 8px;
}

.yscworks-form-group label {
  font-size: 0.92rem;
  color: var(--text-secondary);
}

.yscworks-form-group input, .yscworks-form-group textarea, .yscworks-form-group select {
  width: 100%;
  padding: 13px 16px;
  border-radius: 16px;
  border: 1px solid rgba(78, 46, 29, 0.12);
  background: rgba(255, 252, 247, 0.86);
  color: var(--text-primary);
  font: inherit;
}

.yscworks-form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.yscworks-contact-side-stack {
  display: grid;
  gap: 18px;
}

.yscworks-contact-card-label {
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--text-muted);
}

.yscworks-contact-card h3 {
  font-size: 1.25rem;
  margin: 10px 0 14px;
}

.yscworks-contact-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-contact-detail {
  display: grid;
  gap: 4px;
  padding: 12px 0;
  border-top: 1px solid rgba(78, 46, 29, 0.08);
}

.yscworks-contact-detail strong {
  font-size: 0.9rem;
}

.yscworks-contact-detail span {
  color: var(--text-secondary);
}

.yscworks-form-success {
  display: none;
  margin-top: 18px;
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(181, 83, 45, 0.08);
  color: var(--accent);
  line-height: 1.8;
}

.yscworks-form-success.yscworks-show {
  display: block;
}

.yscworks-resume-layout {
  display: grid;
  gap: 20px;
}

.yscworks-resume-block .yscworks-section-title, .yscworks-resume-block .yscworks-section-label {
  text-align: left;
}

.yscworks-resume-block .yscworks-section-title {
  margin-bottom: 18px;
}

.yscworks-resume-list, .yscworks-resume-projects {
  display: grid;
  gap: 16px;
}

.yscworks-resume-item, .yscworks-resume-project-card {
  padding-top: 14px;
  border-top: 1px solid rgba(78, 46, 29, 0.1);
}

.yscworks-resume-item-top {
  display: grid;
  gap: 6px;
  margin-bottom: 10px;
}

.yscworks-resume-period {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  font-weight: 700;
}

.yscworks-resume-item h3, .yscworks-resume-project-card h3 {
  font-size: 1.18rem;
}

.yscworks-resume-item p, .yscworks-resume-project-card p, .yscworks-resume-note {
  color: var(--text-secondary);
  line-height: 1.85;
}

.yscworks-capability-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.yscworks-capability-card {
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 251, 243, 0.7), rgba(246, 239, 230, 0.9));
  border: 1px solid rgba(91, 63, 41, 0.08);
}

.yscworks-capability-card h3 {
  font-size: 1.06rem;
  margin-bottom: 8px;
}

.yscworks-capability-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-post-header, .yscworks-post-cover, .yscworks-post-content, .yscworks-post-nav {
  max-width: 820px;
}

.yscworks-post-header {
  padding: calc(var(--nav-height) + 54px) 0 30px;
}

.yscworks-post-kicker {
  margin-bottom: 12px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.yscworks-post-back {
  display: inline-flex;
  gap: 6px;
  color: var(--text-secondary);
  margin-bottom: 22px;
}

.yscworks-post-header h1 {
  font-size: clamp(2rem, 5vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 14px;
}

.yscworks-post-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.yscworks-post-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.yscworks-tag {
  background: rgba(181, 83, 45, 0.1);
  color: var(--accent);
}

.yscworks-tag.yscworks-tag-purple, .yscworks-tag.yscworks-tag-pink {
  background: rgba(181, 83, 45, 0.1);
  color: var(--accent);
}

.yscworks-post-cover, .yscworks-post-content .yscworks-img-placeholder {
  border: 1px solid rgba(91, 63, 41, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.7), rgba(246, 239, 230, 0.9)),
    radial-gradient(circle at top right, rgba(208, 68, 39, 0.12), transparent 16%);
  color: var(--text-secondary);
}

.yscworks-post-cover {
  position: relative;
  display: grid;
  gap: 14px;
  min-height: 250px;
  margin-bottom: 36px;
  padding: clamp(28px, 5vw, 46px);
  border-radius: 28px;
  overflow: hidden;
}

.yscworks-post-cover::after {
  content: '';
  position: absolute;
  right: -70px;
  bottom: -94px;
  width: 280px;
  height: 220px;
  border-radius: 48%;
  background: rgba(185, 93, 55, 0.12);
  pointer-events: none;
}

.yscworks-post-cover span, .yscworks-post-cover strong, .yscworks-post-cover em {
  display: block;
  position: relative;
  z-index: 1;
}

.yscworks-post-cover span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.yscworks-post-cover strong {
  max-width: 12em;
  color: var(--text-primary);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(2.05rem, 5vw, 3.6rem);
  font-weight: 500;
  line-height: 1.08;
  overflow-wrap: anywhere;
}

.yscworks-post-cover em {
  color: var(--text-muted);
  font-style: normal;
  line-height: 1.7;
}

.yscworks-post-cover-workflow {
  background:
    linear-gradient(135deg, rgba(255, 251, 243, 0.82), rgba(241, 229, 214, 0.94)),
    radial-gradient(circle at 86% 24%, rgba(45, 95, 86, 0.12), transparent 25%);
}

.yscworks-post-cover-media {
  background:
    linear-gradient(135deg, rgba(36, 31, 28, 0.97), rgba(58, 42, 32, 0.96)),
    radial-gradient(circle at 84% 18%, rgba(231, 195, 127, 0.2), transparent 28%);
}

.yscworks-post-cover-media strong, .yscworks-post-cover-media em {
  color: #f7efe7;
}

.yscworks-post-cover-media span {
  color: #e7c37f;
}

.yscworks-post-cover-fde {
  background:
    linear-gradient(135deg, rgba(34, 31, 30, 0.96), rgba(39, 55, 52, 0.96)),
    radial-gradient(circle at 84% 18%, rgba(49, 95, 73, 0.24), transparent 30%);
}

.yscworks-post-cover-fde::after {
  background: rgba(187, 93, 55, 0.16);
}

.yscworks-post-cover-fde strong, .yscworks-post-cover-fde em {
  color: #f7efe7;
}

.yscworks-post-cover-fde span {
  color: #e7c37f;
}

.yscworks-post-content {
  --writing-accent: #bb5d37;
  --writing-accent-dark: #8f3f23;
  --writing-green: #315f49;
  --writing-ink: #241b15;
  --writing-muted: #7b6d62;
  --writing-line: rgba(78, 46, 29, 0.13);
  --writing-paper: rgba(255, 253, 249, 0.76);
  padding-bottom: 54px;
}

.yscworks-post-lead {
  color: var(--text-primary);
  font-size: 1.18rem;
  line-height: 2;
}

.yscworks-post-content h2 {
  color: var(--writing-ink);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.72rem;
  font-weight: 600;
  line-height: 1.34;
  margin: 54px 0 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--writing-line);
}

.yscworks-post-content h3 {
  padding-left: 12px;
  border-left: 3px solid var(--writing-accent);
  font-size: 1.28rem;
  line-height: 1.42;
  margin: 32px 0 12px;
}

.yscworks-post-content p, .yscworks-post-content li {
  color: var(--writing-ink);
  line-height: 1.9;
}

.yscworks-post-content p {
  margin: 14px 0;
}

.yscworks-post-content blockquote {
  margin: 28px 0;
  padding: 18px 22px;
  border-left: 4px solid var(--writing-accent);
  border-radius: 0 16px 16px 0;
  background: rgba(181, 83, 45, 0.08);
  color: var(--writing-muted);
}

.yscworks-post-content blockquote p {
  margin: 0;
}

.yscworks-post-content strong {
  color: var(--writing-ink);
  font-weight: 800;
}

.yscworks-post-mark {
  border-bottom: 2px solid rgba(187, 93, 55, 0.34);
  font-weight: 700;
}

.yscworks-post-anchor {
  color: var(--writing-accent-dark);
  font-weight: 800;
}

.yscworks-post-keyline {
  margin: 34px 0;
  border: 0;
  border-top: 1px solid var(--writing-line);
}

.yscworks-post-pullquote {
  margin: 34px 0;
  padding: 24px 0;
  border-top: 1px solid var(--writing-line);
  border-bottom: 1px solid var(--writing-line);
  color: var(--writing-ink);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(1.32rem, 3vw, 1.8rem);
  line-height: 1.65;
  text-align: center;
}

.yscworks-post-note {
  margin: 28px 0;
  padding: 18px 20px;
  border-left: 4px solid var(--writing-green);
  border-radius: 0 16px 16px 0;
  background: rgba(49, 95, 73, 0.08);
}

.yscworks-post-summary-card, .yscworks-post-callout, .yscworks-post-compare, .yscworks-post-step-grid, .yscworks-post-assets {
  margin: 28px 0;
}

.yscworks-post-summary-card, .yscworks-post-callout {
  padding: 24px;
  border: 1px solid rgba(91, 63, 41, 0.12);
  border-radius: 22px;
  background:
    linear-gradient(180deg, rgba(255, 253, 248, 0.86), rgba(247, 238, 226, 0.92));
}

.yscworks-post-summary-card span, .yscworks-post-callout span, .yscworks-post-step-grid span, .yscworks-post-compare span, .yscworks-post-assets span {
  display: block;
  margin-bottom: 8px;
  color: var(--writing-accent);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.yscworks-post-summary-card p, .yscworks-post-callout p {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.05rem;
}

.yscworks-article-index {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0 10px;
  padding: 18px 0;
  border-top: 1px solid var(--writing-line);
  border-bottom: 1px solid var(--writing-line);
}

.yscworks-article-index a {
  padding: 8px 12px;
  border: 1px solid rgba(91, 63, 41, 0.12);
  border-radius: 999px;
  background: rgba(255, 253, 249, 0.7);
  color: var(--text-secondary);
  font-size: 0.88rem;
}

.yscworks-article-index a:hover {
  border-color: rgba(181, 83, 45, 0.32);
  color: var(--writing-accent);
}

.yscworks-post-step-grid, .yscworks-post-compare, .yscworks-post-assets {
  display: grid;
  gap: 14px;
}

.yscworks-post-step-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.yscworks-post-step-grid div, .yscworks-post-compare div, .yscworks-post-assets div {
  padding: 20px;
  border: 1px solid rgba(91, 63, 41, 0.1);
  border-radius: 18px;
  background: var(--writing-paper);
}

.yscworks-post-step-grid strong {
  display: block;
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.65;
}

.yscworks-post-checklist, .yscworks-post-number-list {
  display: grid;
  gap: 10px;
  margin: 24px 0;
}

.yscworks-post-checklist li, .yscworks-post-number-list li {
  position: relative;
  padding: 14px 16px 14px 42px;
  border: 1px solid rgba(91, 63, 41, 0.1);
  border-radius: 16px;
  background: var(--writing-paper);
}

.yscworks-post-checklist li::before {
  content: '✓';
  position: absolute;
  left: 16px;
  top: 14px;
  color: #315f49;
  font-weight: 900;
}

.yscworks-post-number-list {
  counter-reset: post-counter;
}

.yscworks-post-number-list li {
  counter-increment: post-counter;
}

.yscworks-post-number-list li::before {
  content: counter(post-counter, decimal-leading-zero);
  position: absolute;
  left: 14px;
  top: 15px;
  color: var(--writing-accent);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
}

.yscworks-post-compare {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.yscworks-post-compare div:first-child {
  background: rgba(246, 239, 230, 0.72);
}

.yscworks-post-compare p, .yscworks-post-assets p {
  margin: 0;
  color: var(--text-secondary);
}

.yscworks-post-pill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0;
}

.yscworks-post-pill-grid span {
  padding: 10px 13px;
  border: 1px solid rgba(91, 63, 41, 0.12);
  border-radius: 999px;
  background: rgba(255, 253, 249, 0.7);
  color: var(--text-primary);
  font-weight: 700;
}

.yscworks-post-assets {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.yscworks-post-content pre {
  margin: 24px 0;
  padding: 20px 22px;
  border-radius: 18px;
  background: #231913;
  color: #f4ede6;
  overflow-x: auto;
}

.yscworks-post-content code {
  padding: 2px 6px;
  border-radius: 6px;
  background: rgba(181, 83, 45, 0.1);
  color: var(--accent);
}

.yscworks-post-content pre code {
  padding: 0;
  background: none;
  color: inherit;
}

.yscworks-post-nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 0 40px;
  border-top: 1px solid rgba(78, 46, 29, 0.12);
}

.yscworks-post-nav a {
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 18px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255, 251, 243, 0.82), rgba(246, 239, 230, 0.92));
  border: 1px solid rgba(91, 63, 41, 0.1);
}

.yscworks-post-nav .yscworks-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.yscworks-post-nav .yscworks-title {
  font-weight: 600;
}

@media (max-width: 1024px) {
  .yscworks-page-intro-grid, .yscworks-narrative-grid, .yscworks-editor-stats {
    grid-template-columns: 1fr 1fr;
  }

  .yscworks-contact-editor-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-page-intro-grid > :first-child, .yscworks-narrative-grid > :first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .yscworks-page-intro {
    padding: 120px 0 40px;
  }

  .yscworks-page-intro-grid, .yscworks-editor-stats, .yscworks-narrative-grid, .yscworks-capability-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-page-intro h1, .yscworks-page-intro-single h1, .yscworks-narrative-block .yscworks-section-title {
    max-width: none;
  }

  .yscworks-editor-timeline-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .yscworks-post-nav {
    flex-direction: column;
  }

  .yscworks-post-nav a {
    max-width: 100%;
  }

  .yscworks-post-cover {
    min-height: 220px;
    border-radius: 22px;
  }

  .yscworks-post-header.yscworks-container {
    padding-left: 24px;
    padding-right: 24px;
  }

  .yscworks-post-header h1 {
    font-size: clamp(1.85rem, 8.4vw, 2.4rem);
    line-height: 1.12;
    overflow-wrap: anywhere;
    word-break: break-all;
  }

  .yscworks-post-cover strong {
    max-width: 100%;
    font-size: clamp(1.75rem, 7.8vw, 2.25rem);
    word-break: break-all;
  }

  .yscworks-article-index, .yscworks-post-pill-grid {
    gap: 8px;
  }

  .yscworks-article-index a, .yscworks-post-pill-grid span {
    font-size: 0.82rem;
  }

  .yscworks-post-step-grid, .yscworks-post-compare, .yscworks-post-assets {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .yscworks-editor-filter-bar {
    gap: 8px;
  }

  .yscworks-filter-btn, .yscworks-filter-tag {
    font-size: 0.82rem;
    padding: 8px 14px;
  }

  .yscworks-editor-article, .yscworks-focus-sheet, .yscworks-editor-timeline-item, .yscworks-page-intro-card {
    padding: 22px 20px;
  }
}

/* 2026 interaction layer: signal, routing and live updates */
.yscworks-signal-strip {
  position: absolute;
  top: var(--nav-height);
  left: 0;
  z-index: 80;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid rgba(78, 46, 29, 0.08);
  border-bottom: 1px solid rgba(78, 46, 29, 0.1);
  background: rgba(255, 251, 246, 0.86);
  backdrop-filter: blur(14px);
}

.yscworks-signal-track {
  display: flex;
  width: max-content;
  animation: signalMarquee 34s linear infinite;
}

.yscworks-signal-track > span {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 30px;
  border-right: 1px solid rgba(78, 46, 29, 0.1);
  color: var(--text-secondary);
  font-size: 0.75rem;
  white-space: nowrap;
}

.yscworks-signal-track b {
  margin-right: 9px;
  color: var(--accent);
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
}

@keyframes signalMarquee {
  to { transform: translateX(-50%); }
}

.yscworks-console-build {
  position: relative;
  z-index: 1;
  margin-top: 18px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.16);
}

.yscworks-console-build > div:first-child {
  display: grid;
  grid-template-columns: 82px 1fr;
  gap: 10px;
  align-items: center;
}

.yscworks-console-build span, .yscworks-console-build small {
  color: rgba(247, 239, 231, 0.46);
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.72rem;
}

.yscworks-console-build strong {
  color: #f7efe7;
  font-size: 0.88rem;
  font-weight: 500;
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.yscworks-console-build strong.yscworks-switching {
  opacity: 0;
  transform: translateY(5px);
}

.yscworks-console-progress {
  height: 3px;
  margin: 13px 0 9px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
}

.yscworks-console-progress i {
  display: block;
  width: 42%;
  height: 100%;
  background: #e7c37f;
  animation: consoleProgress 4.8s ease-in-out infinite;
}

@keyframes consoleProgress {
  0% { transform: translateX(-100%); }
  55% { transform: translateX(140%); }
  100% { transform: translateX(340%); }
}

.yscworks-route-section {
  padding: 34px 0 72px;
}

.yscworks-route-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 18px;
}

.yscworks-route-heading h2 {
  margin: 0;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 500;
}

.yscworks-route-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid rgba(78, 46, 29, 0.14);
  border-left: 1px solid rgba(78, 46, 29, 0.14);
}

.yscworks-route-grid a {
  display: grid;
  grid-template-columns: 34px 1fr 24px;
  gap: 14px;
  align-items: center;
  min-height: 104px;
  padding: 20px;
  border-right: 1px solid rgba(78, 46, 29, 0.14);
  border-bottom: 1px solid rgba(78, 46, 29, 0.14);
  background: rgba(255, 252, 247, 0.58);
  transition: background 0.25s ease, color 0.25s ease;
}

.yscworks-route-grid a:hover {
  background: #252827;
  color: #f7efe7;
}

.yscworks-route-grid > a > span {
  color: var(--accent);
  font-family: Georgia, serif;
}

.yscworks-route-grid strong, .yscworks-route-grid small {
  display: block;
}

.yscworks-route-grid strong {
  margin-bottom: 5px;
  font-size: 1rem;
}

.yscworks-route-grid small {
  color: var(--text-muted);
  line-height: 1.5;
}

.yscworks-route-grid a:hover small {
  color: rgba(247, 239, 231, 0.58);
}

.yscworks-route-grid i {
  color: var(--accent);
  font-style: normal;
  font-weight: 800;
}

.yscworks-lab-updates-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(460px, 1.2fr);
  gap: 54px;
  align-items: start;
}

.yscworks-update-list {
  display: grid;
  border-top: 1px solid rgba(78, 46, 29, 0.15);
}

.yscworks-update-list a {
  display: grid;
  grid-template-columns: 142px 1fr auto;
  gap: 20px;
  align-items: center;
  min-height: 82px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(78, 46, 29, 0.15);
}

.yscworks-update-list span {
  color: var(--accent);
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
}

.yscworks-update-list strong {
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.08rem;
  font-weight: 500;
  line-height: 1.55;
}

.yscworks-update-list em {
  color: var(--text-muted);
  font-size: 0.82rem;
  font-style: normal;
  white-space: nowrap;
}

.yscworks-quick-access-trigger {
  position: fixed;
  left: 22px;
  bottom: 22px;
  z-index: 960;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 44px;
  padding: 0 14px 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 6px;
  background: #252827;
  color: #f7efe7;
  box-shadow: 0 14px 38px rgba(31, 27, 24, 0.22);
}

.yscworks-quick-access-trigger > span {
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.82rem;
}

.yscworks-quick-access-trigger strong {
  font-size: 0.84rem;
}

.yscworks-quick-access-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  visibility: hidden;
  opacity: 0;
  background: rgba(31, 27, 24, 0.56);
  backdrop-filter: blur(10px);
  transition: opacity 0.25s ease, visibility 0.25s ease;
}

.yscworks-quick-access-overlay.yscworks-open {
  visibility: visible;
  opacity: 1;
}

.yscworks-quick-access-panel {
  width: min(720px, 100%);
  max-height: min(760px, calc(100vh - 40px));
  overflow: auto;
  border: 1px solid rgba(78, 46, 29, 0.14);
  border-radius: 8px;
  background: #fbf7f0;
  box-shadow: 0 28px 90px rgba(31, 27, 24, 0.28);
  transform: translateY(12px) scale(0.985);
  transition: transform 0.25s ease;
}

.yscworks-quick-access-overlay.yscworks-open .yscworks-quick-access-panel {
  transform: translateY(0) scale(1);
}

.yscworks-quick-access-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
  border-bottom: 1px solid rgba(78, 46, 29, 0.12);
}

.yscworks-quick-access-head span {
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.yscworks-quick-access-head h2 {
  margin: 8px 0 0;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 2rem;
  font-weight: 500;
}

.yscworks-quick-access-close {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(78, 46, 29, 0.14);
  background: transparent;
  color: var(--text-primary);
  font-size: 1.6rem;
  line-height: 1;
}

.yscworks-quick-access-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.yscworks-quick-access-links a {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 12px;
  min-height: 126px;
  padding: 22px;
  border-right: 1px solid rgba(78, 46, 29, 0.12);
  border-bottom: 1px solid rgba(78, 46, 29, 0.12);
}

.yscworks-quick-access-links a:nth-child(even) {
  border-right: 0;
}

.yscworks-quick-access-links span {
  color: var(--accent);
  font-family: Georgia, serif;
}

.yscworks-quick-access-links strong, .yscworks-quick-access-links em {
  grid-column: 2;
}

.yscworks-quick-access-links strong {
  font-size: 1.04rem;
}

.yscworks-quick-access-links em {
  align-self: end;
  color: var(--text-muted);
  font-size: 0.82rem;
  font-style: normal;
}

.yscworks-quick-access-links a:hover {
  background: rgba(185, 74, 64, 0.06);
}

body.yscworks-quick-access-open {
  overflow: hidden;
}

@media (max-width: 900px) {
  .yscworks-lab-updates-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

@media (max-width: 700px) {
  .yscworks-lab-hero {
    padding-top: calc(var(--nav-height) + 52px);
  }

  .yscworks-route-heading {
    display: block;
  }

  .yscworks-route-heading .yscworks-section-label {
    margin-bottom: 8px;
  }

  .yscworks-route-grid, .yscworks-quick-access-links {
    grid-template-columns: 1fr;
  }

  .yscworks-quick-access-links a, .yscworks-quick-access-links a:nth-child(even) {
    min-height: 98px;
    border-right: 0;
  }

  .yscworks-update-list a {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 18px 0;
  }

  .yscworks-quick-access-trigger {
    left: 14px;
    bottom: 14px;
  }

  .yscworks-quick-access-overlay {
    align-items: end;
    padding: 10px;
  }

  .yscworks-quick-access-panel {
    max-height: calc(100vh - 20px);
  }

  .yscworks-console-build > div:first-child {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}

/* Prevent short Chinese headings from leaving an orphan character. */
.yscworks-lab-updates-grid {
  grid-template-columns: minmax(440px, 0.95fr) minmax(460px, 1.05fr);
}

.yscworks-lab-updates .yscworks-lab-section-head, .yscworks-lab-writing .yscworks-lab-section-head {
  max-width: none;
}

.yscworks-lab-updates .yscworks-lab-section-head h2, .yscworks-lab-writing .yscworks-lab-section-head h2 {
  max-width: none;
  font-size: clamp(2.5rem, 4vw, 3.55rem);
  line-height: 1.12;
  text-wrap: balance;
}

.yscworks-quick-access-trigger {
  border: 2px solid #3f735b;
  background: rgba(250, 247, 239, 0.96);
  color: #294b3b;
  box-shadow: 0 12px 34px rgba(47, 91, 70, 0.18);
  animation: quickAccessGuide 2.4s ease-out infinite;
}

.yscworks-quick-access-trigger > span {
  border-color: #3f735b;
  background: #3f735b;
  color: #fffdf7;
}

@keyframes quickAccessGuide {
  0% { box-shadow: 0 0 0 0 rgba(63, 115, 91, 0.38), 0 12px 34px rgba(47, 91, 70, 0.18); }
  68% { box-shadow: 0 0 0 9px rgba(63, 115, 91, 0), 0 12px 34px rgba(47, 91, 70, 0.18); }
  100% { box-shadow: 0 0 0 0 rgba(63, 115, 91, 0), 0 12px 34px rgba(47, 91, 70, 0.18); }
}

@media (max-width: 900px) {
  .yscworks-lab-updates-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .yscworks-lab-updates .yscworks-lab-section-head h2, .yscworks-lab-writing .yscworks-lab-section-head h2 {
    font-size: clamp(2.35rem, 11vw, 3.2rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .yscworks-quick-access-trigger {
    animation: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .yscworks-signal-track, .yscworks-console-progress i {
    animation: none;
  }
}

/* Hero console refinement */
.yscworks-lab-console {
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(48, 42, 38, 0.98), rgba(31, 30, 29, 0.99));
}

.yscworks-console-profile {
  margin: 42px 0 22px;
}

.yscworks-console-profile img {
  width: 78px;
  height: 78px;
  border-radius: 8px;
}

.yscworks-console-lines {
  gap: 0;
  margin-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.yscworks-console-lines p {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 14px;
  align-items: baseline;
  padding: 15px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  background: transparent;
}

.yscworks-console-lines span {
  min-width: 0;
}

.yscworks-console-build {
  margin-top: 16px;
  padding: 14px 4px 15px;
  border-width: 1px 0;
  background: transparent;
}

.yscworks-console-manifesto {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 150px;
  padding: 28px 4px 6px;
}

.yscworks-console-manifesto > span, .yscworks-console-manifesto > small {
  color: rgba(247, 239, 231, 0.42);
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
}

.yscworks-console-manifesto strong {
  max-width: 12ch;
  margin: 10px 0 14px;
  color: #f7efe7;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(1.65rem, 3vw, 2.35rem);
  font-weight: 500;
  line-height: 1.28;
}

@media (max-width: 700px) {
  .yscworks-lab-console {
    border-radius: 18px;
  }

  .yscworks-console-lines p {
    grid-template-columns: 76px minmax(0, 1fr);
    gap: 10px;
  }

  .yscworks-console-manifesto {
    min-height: 180px;
  }
}

/* 2026 content architecture upgrade */
.yscworks-fade-in, .yscworks-fade-in-left, .yscworks-fade-in-right {
  opacity: 1;
}

.yscworks-page-intro h1 {
  letter-spacing: 0;
}

.yscworks-profile-inline {
  display: flex;
  align-items: center;
  gap: 16px;
}

.yscworks-profile-inline .yscworks-page-profile-avatar {
  margin: 0;
}

.yscworks-profile-inline h2, .yscworks-profile-inline p {
  margin: 0;
}

.yscworks-about-document-section {
  padding-top: 28px;
}

.yscworks-about-document-grid {
  display: grid;
  grid-template-columns: 210px minmax(0, 760px);
  justify-content: center;
  gap: 64px;
  align-items: start;
}

.yscworks-about-toc {
  position: sticky;
  top: 112px;
  display: grid;
  gap: 13px;
  padding: 18px 0;
  border-top: 1px solid rgba(78, 46, 29, 0.16);
}

.yscworks-about-toc span {
  color: var(--text-muted);
  font-size: 0.76rem;
  letter-spacing: 0.12em;
}

.yscworks-about-toc a {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.yscworks-about-toc a:hover {
  color: var(--accent);
}

.yscworks-about-document {
  min-width: 0;
}

.yscworks-about-lead-block, .yscworks-about-chapter {
  scroll-margin-top: 104px;
}

.yscworks-about-lead-block {
  padding-bottom: 54px;
}

.yscworks-about-dropcap {
  color: var(--text-primary);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.35rem;
  line-height: 2;
}

.yscworks-about-dropcap::first-letter {
  float: left;
  margin: 10px 10px 0 0;
  color: var(--accent);
  font-size: 4.4rem;
  line-height: 0.72;
}

.yscworks-about-document blockquote {
  margin: 28px 0 0;
  padding: 20px 24px;
  border-left: 4px solid var(--accent);
  background: rgba(255, 250, 242, 0.72);
  color: var(--text-primary);
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.2rem;
}

.yscworks-about-chapter {
  padding: 56px 0;
  border-top: 1px solid rgba(78, 46, 29, 0.13);
}

.yscworks-about-chapter h2 {
  margin: 8px 0 22px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 500;
  line-height: 1.16;
}

.yscworks-about-chapter > p {
  color: var(--text-secondary);
  font-size: 1.02rem;
  line-height: 1.95;
}

.yscworks-identity-list, .yscworks-about-numbered {
  display: grid;
  gap: 12px;
}

.yscworks-identity-list > div, .yscworks-about-numbered > div {
  padding: 20px 0;
  border-bottom: 1px solid rgba(78, 46, 29, 0.1);
}

.yscworks-identity-list strong, .yscworks-about-numbered h3 {
  display: block;
  margin-bottom: 8px;
  font-size: 1.15rem;
}

.yscworks-identity-list p, .yscworks-about-numbered p {
  color: var(--text-secondary);
  line-height: 1.85;
}

.yscworks-about-proof-row, .yscworks-product-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 28px 0;
}

.yscworks-about-proof-row > div, .yscworks-product-facts > div {
  padding: 18px;
  border: 1px solid rgba(78, 46, 29, 0.1);
  background: rgba(255, 252, 247, 0.72);
}

.yscworks-about-proof-row strong, .yscworks-product-facts strong {
  display: block;
  margin-bottom: 8px;
  color: var(--accent);
  font-size: 1.45rem;
}

.yscworks-about-proof-row span, .yscworks-product-facts span {
  color: var(--text-secondary);
  font-size: 0.88rem;
}

.yscworks-about-numbered > div {
  display: grid;
  grid-template-columns: 48px 1fr;
  column-gap: 18px;
}

.yscworks-about-numbered > div > span {
  grid-row: 1 / 3;
  color: var(--accent);
  font-family: Georgia, serif;
  font-size: 1.4rem;
}

.yscworks-about-checklist {
  display: grid;
  gap: 10px;
  margin: 24px 0 28px;
}

.yscworks-about-checklist li {
  position: relative;
  padding: 13px 14px 13px 42px;
  background: rgba(255, 252, 247, 0.66);
  border: 1px solid rgba(78, 46, 29, 0.1);
}

.yscworks-about-checklist li::before {
  content: '✓';
  position: absolute;
  left: 15px;
  color: #2d5f56;
  font-weight: 800;
}

.yscworks-belief-list {
  display: grid;
  gap: 0;
}

.yscworks-belief-list li {
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 12px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(78, 46, 29, 0.1);
}

.yscworks-belief-list span {
  color: var(--accent);
  font-family: Georgia, serif;
}

.yscworks-belief-list p {
  color: var(--text-secondary);
  line-height: 1.75;
}

.yscworks-footer-bottom-stack {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
}

.yscworks-footer-bottom-stack a {
  color: #3f735b;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: rgba(63, 115, 91, 0.34);
  text-underline-offset: 3px;
}

.yscworks-official-account-hover {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: inherit;
  cursor: pointer;
  border-bottom: 1px dashed rgba(63, 115, 91, 0.34);
  outline: none;
}

.yscworks-official-account-hover::after {
  content: '';
  width: 4px;
  height: 4px;
  margin-left: 4px;
  border-radius: 50%;
  background: #3f735b;
  opacity: 0.72;
}

.yscworks-official-account-hover:focus-visible {
  border-radius: 3px;
  outline: 2px solid rgba(63, 115, 91, 0.3);
  outline-offset: 3px;
}

.yscworks-official-account-popover {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 12px);
  z-index: 1200;
  display: grid;
  gap: 8px;
  width: min(250px, 72vw);
  padding: 10px;
  visibility: hidden;
  opacity: 0;
  border: 1px solid rgba(63, 115, 91, 0.22);
  border-radius: 8px;
  background: rgba(255, 252, 246, 0.98);
  box-shadow: 0 18px 56px rgba(48, 41, 34, 0.18);
  transform: translate(-50%, 8px) scale(0.98);
  transform-origin: center bottom;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
}

.yscworks-official-account-caption {
  color: #2f684f;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
}

.yscworks-official-account-popover img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
}

.yscworks-official-account-hover:hover > .yscworks-official-account-popover, .yscworks-official-account-hover:focus > .yscworks-official-account-popover, .yscworks-official-account-hover.yscworks-active > .yscworks-official-account-popover {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
}

.yscworks-product-case-list {
  display: grid;
  gap: 22px;
}

.yscworks-product-case {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 28px;
  padding: clamp(24px, 5vw, 46px);
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: rgba(255, 252, 247, 0.78);
  box-shadow: 0 22px 60px rgba(83, 53, 37, 0.07);
  scroll-margin-top: 100px;
}

.yscworks-product-case-featured {
  background: linear-gradient(135deg, rgba(235, 248, 241, 0.94), rgba(255, 252, 247, 0.9));
}

.yscworks-product-case-geo {
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  align-items: stretch;
  background: linear-gradient(135deg, rgba(237, 243, 222, 0.92), rgba(252, 249, 238, 0.94));
}

.yscworks-product-case-geo .yscworks-product-case-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.yscworks-product-case-geo .yscworks-product-case-lead {
  max-width: 610px;
}

.yscworks-product-mark {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  background: #243f47;
  color: #e3f080;
  font-weight: 800;
  letter-spacing: .06em;
}

.yscworks-product-case-meta, .yscworks-product-status-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 24px;
  color: var(--text-muted);
  font-size: 0.84rem;
}

.yscworks-status-live, .yscworks-status-building {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #2d5f56;
  font-weight: 700;
}

.yscworks-status-building {
  color: #9a642d;
}

.yscworks-status-live i, .yscworks-status-building i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}

.yscworks-product-case h2 {
  margin: 8px 0 16px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(2.5rem, 5vw, 4.3rem);
  font-weight: 500;
}

.yscworks-product-case-lead {
  max-width: 650px;
  color: var(--text-secondary);
  font-size: 1.02rem;
  line-height: 1.9;
}

.yscworks-product-slogan {
  width: fit-content;
  max-width: 100%;
  margin: -6px 0 14px;
  padding: 9px 13px;
  border: 1px solid rgba(63, 115, 91, 0.18);
  border-radius: 999px;
  background: rgba(237, 244, 238, 0.74);
  color: #2f6a54;
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1.45;
}

.yscworks-product-qr {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 14px;
  min-height: 340px;
  background: #fff;
  border: 1px solid rgba(40, 107, 76, 0.12);
}

.yscworks-product-qr img {
  width: min(260px, 78%);
  aspect-ratio: 1;
  object-fit: contain;
}

.yscworks-product-qr figcaption {
  color: var(--text-muted);
  font-size: 0.86rem;
}

.yscworks-product-status-strip {
  margin: 24px 0;
}

.yscworks-product-status-strip span {
  padding: 8px 11px;
  border: 1px solid rgba(78, 46, 29, 0.12);
  background: rgba(255, 255, 255, 0.58);
}

.yscworks-product-next {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-product-visual {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 340px;
  padding: 28px;
  color: #f7efe7;
  background: #2b3436;
}

.yscworks-product-visual-mx {
  background: #873f3a;
}

.yscworks-product-visual-st {
  background: #4f5e4b;
}

.yscworks-product-visual-geo {
  position: relative;
  justify-content: center;
  gap: 34px;
  padding: clamp(28px, 4vw, 46px);
  background: linear-gradient(145deg, #1d3841, #34564d);
  overflow: hidden;
}

.yscworks-product-visual-geo::before {
  content: '';
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(226, 241, 130, 0.18);
}

.yscworks-product-visual-geo > * {
  position: relative;
  z-index: 1;
}

.yscworks-product-visual-geo span {
  color: #e2f182;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(3.8rem, 6.4vw, 5.6rem);
  line-height: 0.9;
  letter-spacing: .08em;
}

.yscworks-product-visual-geo strong {
  max-width: 8.5em;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(1.7rem, 2.4vw, 2.55rem);
  font-weight: 600;
  line-height: 1.24;
}

.yscworks-product-visual-geo small {
  color: rgba(255,255,255,.62);
  letter-spacing: .12em;
}

.yscworks-product-cooperation-card {
  padding-left: clamp(32px, 6vw, 70px);
}

.yscworks-product-cooperation-card h2 {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  max-width: 980px;
  font-size: clamp(3.5rem, 6.2vw, 6.2rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.yscworks-product-cooperation-card h2 > span:last-child {
  display: block;
}

.yscworks-coop-symbol {
  flex: 0 0 auto;
  transform: translateY(0.03em);
}

.yscworks-product-cooperation-card p {
  max-width: 940px;
}

/* GEO service landing page */
.yscworks-geo-hero {
  padding: 132px 0 92px;
  background:
    radial-gradient(circle at 87% 13%, rgba(214, 239, 109, .28), transparent 24%),
    linear-gradient(135deg, #f8f4ea 0%, #eef2e6 100%);
}

.yscworks-geo-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, .72fr);
  gap: clamp(38px, 7vw, 104px);
  align-items: center;
}

.yscworks-geo-hero-copy h1 {
  max-width: 780px;
  margin: 16px 0 24px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(3.4rem, 6.2vw, 6.7rem);
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: -.055em;
}

.yscworks-geo-lead {
  max-width: 650px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.9;
}

.yscworks-geo-note {
  max-width: 570px;
  margin: 28px 0 0;
  color: var(--text-muted);
  font-size: .83rem;
  line-height: 1.7;
}

.yscworks-geo-console {
  padding: 20px;
  border: 1px solid rgba(31, 56, 63, .18);
  border-radius: 26px;
  background: #203d44;
  color: #f7f2e7;
  box-shadow: 0 28px 76px rgba(32, 61, 68, .2);
}

.yscworks-geo-console-top {
  display: flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 17px;
  border-bottom: 1px solid rgba(255,255,255,.14);
  color: rgba(255,255,255,.6);
  font-size: .72rem;
  letter-spacing: .1em;
}

.yscworks-geo-console-top span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.32); }
.yscworks-geo-console-top span:first-child { background: #d8ed7a; }
.yscworks-geo-console-top strong { margin-left: auto; font-weight: 600; }

.yscworks-geo-console ol { display: grid; gap: 0; padding: 10px 0; margin: 0; list-style: none; }
.yscworks-geo-console li { display: grid; grid-template-columns: 44px 1fr; gap: 13px; align-items: center; padding: 19px 2px; border-bottom: 1px solid rgba(255,255,255,.1); }
.yscworks-geo-console li b { color: #d8ed7a; font-size: .78rem; }
.yscworks-geo-console li strong, .yscworks-geo-console li small { display: block; }
.yscworks-geo-console li strong { font-family: Georgia, 'Noto Serif SC', serif; font-size: 1.3rem; font-weight: 500; }
.yscworks-geo-console li small { margin-top: 3px; color: rgba(255,255,255,.62); font-size: .78rem; }
.yscworks-geo-console > a { display: inline-block; margin-top: 16px; color: #d8ed7a; font-size: .9rem; font-weight: 700; }

.yscworks-geo-service-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 45px; border-top: 1px solid rgba(78, 46, 29, .14); border-left: 1px solid rgba(78, 46, 29, .14); }
.yscworks-geo-service-grid article { min-height: 260px; padding: 29px; border-right: 1px solid rgba(78, 46, 29, .14); border-bottom: 1px solid rgba(78, 46, 29, .14); background: rgba(255,255,255,.35); }
.yscworks-geo-service-grid span { color: #527660; font-size: .75rem; font-weight: 800; letter-spacing: .1em; }
.yscworks-geo-service-grid h3 { margin: 23px 0 13px; font-family: Georgia, 'Noto Serif SC', serif; font-size: 2rem; font-weight: 500; }
.yscworks-geo-service-grid p { max-width: 520px; color: var(--text-secondary); line-height: 1.8; }
.yscworks-geo-service-grid strong { color: #314f4a; font-size: .85rem; }

.yscworks-geo-delivery { padding: 90px 0; background: #203d44; color: #f7f2e7; }
.yscworks-geo-delivery-grid { display: grid; grid-template-columns: .74fr 1.26fr; gap: 80px; align-items: start; }
.yscworks-geo-delivery .yscworks-section-label { color: #d8ed7a; }
.yscworks-geo-delivery h2 { margin: 14px 0 0; font-family: Georgia, 'Noto Serif SC', serif; font-size: clamp(2.8rem, 4.6vw, 5rem); font-weight: 500; line-height: 1.08; letter-spacing: -.045em; }
.yscworks-geo-delivery ul { margin: 0; padding: 0; list-style: none; border-top: 1px solid rgba(255,255,255,.18); }
.yscworks-geo-delivery li { display: grid; grid-template-columns: 190px 1fr; gap: 30px; padding: 25px 0; border-bottom: 1px solid rgba(255,255,255,.18); }
.yscworks-geo-delivery li b { font-family: Georgia, 'Noto Serif SC', serif; font-size: 1.25rem; font-weight: 500; }.yscworks-geo-delivery li span { color: rgba(255,255,255,.68); line-height: 1.75; }
.yscworks-geo-cta { background: linear-gradient(135deg, rgba(237,243,222,.92), rgba(255,252,246,.96)); }

.yscworks-product-visual > span {
  font-size: 4rem;
  font-weight: 800;
}

.yscworks-product-visual strong {
  max-width: 12ch;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.75rem;
  line-height: 1.45;
}

.yscworks-contact-direct {
  padding: 28px;
  background: #252827;
  color: #f7efe7;
}

.yscworks-contact-direct img {
  width: 82px;
  height: 82px;
  margin: 22px 0 16px;
  object-fit: cover;
  border-radius: 50%;
}

.yscworks-contact-direct h2 {
  margin-bottom: 8px;
  font-size: 1.65rem;
}

.yscworks-contact-direct > p {
  color: rgba(247, 239, 231, 0.68);
  line-height: 1.75;
  margin-bottom: 22px;
}

.yscworks-direct-line {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 12px;
  padding: 13px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.yscworks-direct-line span {
  color: rgba(247, 239, 231, 0.52);
}

.yscworks-direct-line a, .yscworks-direct-line strong {
  color: #f7efe7;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.yscworks-service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.yscworks-service-card {
  display: flex;
  flex-direction: column;
  min-height: 280px;
  padding: 24px;
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: rgba(255, 252, 247, 0.76);
}

.yscworks-service-card > span, .yscworks-free-entry-card > span, .yscworks-community-card div > span {
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.yscworks-service-card h3, .yscworks-free-entry-card h3, .yscworks-community-card h3 {
  margin: 34px 0 12px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.5rem;
}

.yscworks-service-card p, .yscworks-free-entry-card p, .yscworks-community-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-service-card > strong {
  display: block;
  margin-top: auto;
  padding-top: 24px;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.yscworks-service-card > strong a {
  color: inherit;
  text-decoration: none;
}

.yscworks-service-card > strong a:hover, .yscworks-service-card > strong a:focus-visible {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.yscworks-community-free-section {
  background: rgba(45, 95, 86, 0.055);
}

.yscworks-free-entry-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.yscworks-free-entry-card {
  min-height: 260px;
  padding: 24px;
  border: 1px solid rgba(45, 95, 86, 0.14);
  background: rgba(255, 255, 255, 0.64);
}

.yscworks-free-entry-card h3 {
  margin-top: 28px;
}

.yscworks-free-entry-card strong, .yscworks-community-card strong {
  display: block;
  margin-top: 22px;
  color: var(--accent);
}

.yscworks-community-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.yscworks-community-card {
  display: grid;
  grid-template-columns: 152px 1fr;
  gap: 20px;
  align-items: center;
  padding: 18px;
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: rgba(255, 252, 247, 0.76);
}

.yscworks-community-card img {
  width: 152px;
  height: 202px;
  object-fit: cover;
  object-position: center;
}

.yscworks-community-card h3 {
  margin: 10px 0 8px;
}

.yscworks-community-card p {
  font-size: 0.92rem;
}

.yscworks-community-card strong {
  margin-top: 14px;
}

.yscworks-community-card-owned {
  border-color: rgba(45, 95, 86, 0.28);
  background: rgba(235, 248, 241, 0.68);
}

.yscworks-community-recommend-section .yscworks-lab-section-head {
  max-width: 1100px;
}

.yscworks-community-recommend-section .yscworks-lab-section-head h2 {
  max-width: none;
  font-size: clamp(2.5rem, 4vw, 3.55rem);
  line-height: 1.12;
  text-wrap: balance;
}

.yscworks-community-recommend-section .yscworks-lab-section-head > p:last-child {
  max-width: 920px;
}

.yscworks-footer-nav span {
  display: block;
  color: var(--text-secondary);
  line-height: 1.8;
}

.yscworks-footer-contact-line {
  display: flex;
  align-items: center;
  gap: 7px;
  width: auto;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.yscworks-footer-contact-card {
  display: grid;
  gap: 10px;
  width: min(250px, calc(100vw - 48px));
  margin-top: 8px;
  padding: 14px;
  border: 1px solid rgba(78, 46, 29, 0.12);
  border-radius: 10px;
  background: rgba(255, 252, 247, 0.96);
  box-shadow: 0 16px 34px rgba(75, 53, 37, 0.12);
}

.yscworks-footer-contact {
  scroll-margin-top: 96px;
}

.yscworks-footer-contact-line::before {
  content: '';
  display: inline-block;
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(45, 95, 86, 0.13);
  border-radius: 7px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 6px 16px rgba(45, 95, 86, 0.06);
}

.yscworks-footer-contact-email::before {
  content: '📮';
  display: inline-grid;
  place-items: center;
  background-color: #fff5d8;
  background-image: none;
  font-size: 15px;
  line-height: 1;
}

.yscworks-footer-contact-wechat::before {
  background-color: #eaf7ec;
  background-image: url('../assets/contact-wechat.svg');
  background-size: 21px 21px;
}

@media (max-width: 768px) {
  .yscworks-footer-contact-card {
    width: 100%;
  }
}

.yscworks-lab-map-grid-three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.yscworks-lab-resource-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1.1fr);
  gap: 44px;
  align-items: start;
}

.yscworks-writing-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  gap: 28px;
  align-items: start;
}

.yscworks-legal-hero {
  padding-bottom: 44px;
}

.yscworks-legal-document {
  max-width: 920px;
}

.yscworks-legal-document article {
  padding: 28px 0;
  border-top: 1px solid rgba(78, 46, 29, 0.12);
}

.yscworks-legal-document article:first-child {
  border-top: 0;
}

.yscworks-legal-document h2 {
  margin: 0 0 12px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  font-weight: 500;
  color: var(--text-primary);
}

.yscworks-legal-document p {
  max-width: 820px;
  margin: 0 0 12px;
  color: var(--text-secondary);
  line-height: 1.9;
}

.yscworks-legal-document a {
  color: var(--accent);
  font-weight: 700;
}

.yscworks-writing-side {
  position: sticky;
  top: 108px;
  padding: 28px;
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: #252827;
  color: #f7efe7;
}

.yscworks-writing-side h2 {
  margin: 10px 0 14px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 2rem;
}

.yscworks-writing-side p {
  margin-bottom: 24px;
  color: rgba(247, 239, 231, 0.68);
  line-height: 1.85;
}

.yscworks-resource-links {
  display: grid;
  gap: 12px;
}

.yscworks-resource-links a {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 20px;
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: rgba(255, 252, 247, 0.76);
}

.yscworks-resource-links span {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
}

.yscworks-resource-links strong {
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.05rem;
}

.yscworks-resource-links em {
  color: var(--text-muted);
  font-size: 0.84rem;
  font-style: normal;
}

.yscworks-cta-contact-row > span {
  border: 1px solid rgba(88, 66, 47, 0.14);
  background: rgba(255, 255, 255, 0.52);
  padding: 10px 14px;
  color: var(--text-secondary);
  font-weight: 700;
  overflow-wrap: anywhere;
}

@media (max-width: 1024px) {
  .yscworks-about-document-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .yscworks-about-toc {
    position: static;
    grid-template-columns: repeat(3, 1fr);
  }

  .yscworks-about-toc span {
    grid-column: 1 / -1;
  }

  .yscworks-product-case, .yscworks-service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .yscworks-geo-hero-grid, .yscworks-geo-delivery-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-geo-hero-grid { gap: 40px; }

  .yscworks-geo-delivery-grid { gap: 42px; }

  .yscworks-product-case-copy {
    grid-column: 1 / -1;
  }

  .yscworks-product-case > :last-child {
    grid-column: 1 / -1;
  }

  .yscworks-free-entry-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-lab-resource-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-writing-layout {
    grid-template-columns: 1fr;
  }

  .yscworks-writing-side {
    position: static;
  }
}

@media (max-width: 760px) {
  .yscworks-about-toc, .yscworks-about-proof-row, .yscworks-product-facts, .yscworks-service-grid, .yscworks-community-card-grid {
    grid-template-columns: 1fr;
  }

  .yscworks-lab-map-grid-three {
    grid-template-columns: 1fr;
  }

  .yscworks-resource-links a {
    grid-template-columns: 1fr;
    gap: 7px;
  }

  .yscworks-about-toc span {
    grid-column: auto;
  }

  .yscworks-about-numbered > div {
    grid-template-columns: 38px 1fr;
  }

  .yscworks-product-case {
    grid-template-columns: 1fr;
    padding: 22px;
  }

  .yscworks-geo-hero { padding: 105px 0 68px; }

  .yscworks-geo-service-grid { grid-template-columns: 1fr; }

  .yscworks-geo-delivery { padding: 68px 0; }

  .yscworks-geo-delivery li { grid-template-columns: 1fr; gap: 8px; }

  .yscworks-product-case-copy, .yscworks-product-case > :last-child {
    grid-column: auto;
  }

  .yscworks-product-qr, .yscworks-product-visual {
    min-height: 280px;
  }

  .yscworks-community-card {
    grid-template-columns: 96px 1fr;
    gap: 14px;
  }

  .yscworks-community-card img {
    width: 96px;
    height: 128px;
  }

  .yscworks-community-recommend-section .yscworks-lab-section-head h2 {
    font-size: clamp(2.35rem, 11vw, 3.2rem);
  }
}

@media (max-width: 480px) {
  .yscworks-community-card {
    grid-template-columns: 1fr;
  }

  .yscworks-community-card img {
    width: 100%;
    height: auto;
    max-height: 420px;
    object-fit: contain;
    background: #edf9f6;
  }
}

/* now.building palette must remain after all legacy page overrides. */
.yscworks-lab-console {
  color: var(--text-primary);
  border-color: rgba(78, 66, 52, 0.16);
  background:
    radial-gradient(circle at 92% 8%, rgba(63, 115, 91, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(251, 247, 239, 0.98), rgba(241, 233, 221, 0.98));
  box-shadow: 0 24px 70px rgba(68, 48, 34, 0.1);
}

.yscworks-lab-console::before {
  background:
    linear-gradient(rgba(78, 66, 52, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(78, 66, 52, 0.055) 1px, transparent 1px);
  background-size: 30px 30px;
}

.yscworks-console-topbar, .yscworks-console-profile p, .yscworks-console-build span, .yscworks-console-build small, .yscworks-console-manifesto > span, .yscworks-console-manifesto > small {
  color: var(--text-muted);
}

.yscworks-console-topbar span {
  background: rgba(78, 66, 52, 0.24);
}

.yscworks-console-topbar span:first-child {
  background: #3f735b;
}

.yscworks-console-profile img {
  border-color: rgba(78, 66, 52, 0.16);
}

.yscworks-console-profile strong, .yscworks-console-build strong {
  color: var(--text-primary);
}

.yscworks-console-lines {
  border-top-color: rgba(78, 66, 52, 0.14);
}

.yscworks-console-lines p {
  color: var(--text-secondary);
  border-bottom-color: rgba(78, 66, 52, 0.14);
}

.yscworks-console-lines span {
  color: #3f735b;
}

.yscworks-console-build {
  border-color: rgba(78, 66, 52, 0.14);
}

.yscworks-console-progress {
  background: rgba(78, 66, 52, 0.12);
}

.yscworks-console-progress i {
  background: #3f735b;
}

.yscworks-console-manifesto {
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 18px;
  border-top: 1px solid rgba(78, 66, 52, 0.14);
}

.yscworks-console-manifesto strong {
  max-width: 13ch;
  color: #2f493d;
}

/* Product identity and layered notes */
.yscworks-project-logo {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  margin-bottom: 18px;
  overflow: hidden;
  border: 1px solid rgba(45, 95, 86, 0.16);
  border-radius: 12px;
  background: #edf4ee;
}

.yscworks-project-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.yscworks-project-logo-filedev {
  padding: 7px;
  background: #e4f1eb;
}

.yscworks-project-logo-filedev img {
  border-radius: 9px;
  object-fit: contain;
}

.yscworks-project-logo-geo {
  background: #f4ede2;
}

.yscworks-project-logo-geo img, .yscworks-lab-project-card:nth-child(2) .yscworks-project-logo img, .yscworks-lab-project-card:nth-child(3) .yscworks-project-logo img {
  object-fit: contain;
}

.yscworks-lab-project-card:nth-child(2) .yscworks-project-logo {
  background: #e4f1eb;
}

.yscworks-lab-project-card:nth-child(3) .yscworks-project-logo {
  background: #eaf3ff;
}

.yscworks-product-title {
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 10px 0 18px;
}

.yscworks-product-title > img {
  flex: 0 0 auto;
  width: 72px;
  height: 72px;
  border: 1px solid rgba(45, 95, 86, 0.15);
  border-radius: 14px;
  background: #edf4ee;
  object-fit: contain;
}

.yscworks-product-title > img[src*="filedev-logo"] {
  object-fit: cover;
}

.yscworks-product-title .yscworks-section-label, .yscworks-product-title h2 {
  margin: 0;
}

.yscworks-product-title h2 {
  margin-top: 4px;
}

.yscworks-product-visual > img {
  width: 132px;
  height: 132px;
  object-fit: contain;
}

.yscworks-product-visual-mx {
  color: #174e36;
  background: linear-gradient(145deg, #edf5ef, #d8e8dd);
}

.yscworks-product-visual-st {
  color: #14509d;
  background: linear-gradient(145deg, #eef6ff, #dceaff);
}

.yscworks-product-visual-mx strong, .yscworks-product-visual-st strong {
  color: currentColor;
}

.yscworks-beliefs-prologue {
  max-width: 650px;
  margin: -8px 0 26px;
  padding-left: 18px;
  border-left: 3px solid #3f735b;
  color: var(--text-secondary);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.05rem;
  line-height: 1.9;
}

.yscworks-belief-list li {
  grid-template-columns: 46px minmax(170px, 0.62fr) minmax(0, 1.38fr);
  gap: 16px;
  align-items: baseline;
  padding: 22px 0;
}

.yscworks-belief-list strong {
  color: #2f5b47;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.08rem;
  font-weight: 500;
  line-height: 1.65;
}

.yscworks-belief-list p {
  font-size: 0.96rem;
  line-height: 1.85;
}

@media (max-width: 760px) {
  .yscworks-product-title > img {
    width: 60px;
    height: 60px;
  }

  .yscworks-product-visual > img {
    width: 110px;
    height: 110px;
  }

  .yscworks-belief-list li {
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 6px 12px;
  }

  .yscworks-belief-list strong, .yscworks-belief-list p {
    grid-column: 2;
  }

  .yscworks-belief-list span {
    grid-row: 1 / 3;
  }
}

/* WeChat contact card: hover on desktop, tap or focus everywhere. */
span.yscworks-wechat-hover {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: #2f684f;
  font-weight: 700;
  line-height: 1.7;
  cursor: pointer;
  border-bottom: 1px dashed rgba(47, 104, 79, 0.5);
  outline: none;
}

span.yscworks-wechat-hover::after {
  content: '';
  width: 6px;
  height: 6px;
  margin-left: 7px;
  border-radius: 50%;
  background: #3f735b;
  box-shadow: 0 0 0 0 rgba(63, 115, 91, 0.3);
  animation: wechatHint 2.2s ease-out infinite;
}

span.yscworks-wechat-hover:focus-visible {
  border-radius: 3px;
  outline: 2px solid rgba(63, 115, 91, 0.35);
  outline-offset: 3px;
}

span.yscworks-wechat-popover {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 14px);
  z-index: 1200;
  display: block;
  width: min(380px, 78vw);
  padding: 6px;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  border: 1px solid rgba(63, 115, 91, 0.3);
  border-radius: 8px;
  background: #fbf7ef;
  box-shadow: 0 24px 70px rgba(48, 41, 34, 0.22);
  transform: translate(-50%, 8px) scale(0.98);
  transform-origin: center bottom;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
}

span.yscworks-wechat-popover img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
}

span.yscworks-wechat-hover:hover > .yscworks-wechat-popover, span.yscworks-wechat-hover:focus > .yscworks-wechat-popover, span.yscworks-wechat-hover.yscworks-active > .yscworks-wechat-popover {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
}

@keyframes wechatHint {
  0% { box-shadow: 0 0 0 0 rgba(63, 115, 91, 0.32); }
  70% { box-shadow: 0 0 0 7px rgba(63, 115, 91, 0); }
  100% { box-shadow: 0 0 0 0 rgba(63, 115, 91, 0); }
}

@media (hover: none), (max-width: 600px) {
  span.yscworks-wechat-popover {
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: auto;
    width: min(440px, calc(100vw - 28px));
    transform: translate(-50%, calc(-50% + 8px)) scale(0.98);
    transform-origin: center;
  }

  span.yscworks-wechat-hover:hover > .yscworks-wechat-popover, span.yscworks-wechat-hover:focus > .yscworks-wechat-popover, span.yscworks-wechat-hover.yscworks-active > .yscworks-wechat-popover {
    transform: translate(-50%, -50%) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  span.yscworks-wechat-hover::after {
    animation: none;
  }

  span.yscworks-wechat-popover {
    transition: none;
  }
}

/* Full-resolution community card preview keeps embedded QR codes scannable. */
.yscworks-community-card > img {
  cursor: zoom-in;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.yscworks-community-card > img:hover, .yscworks-community-card > img:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(47, 91, 70, 0.2);
  outline: 2px solid rgba(63, 115, 91, 0.38);
  outline-offset: 3px;
}

.yscworks-community-preview-overlay {
  position: fixed;
  inset: 0;
  z-index: 1300;
  display: grid;
  place-items: center;
  padding: 24px;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  background: rgba(37, 33, 29, 0.18);
  backdrop-filter: blur(4px);
  transition: opacity 0.2s ease, visibility 0.2s ease, background 0.2s ease;
}

.yscworks-community-preview-overlay.yscworks-open {
  visibility: visible;
  opacity: 1;
}

.yscworks-community-preview-overlay.yscworks-pinned {
  pointer-events: auto;
  background: rgba(37, 33, 29, 0.62);
  backdrop-filter: blur(10px);
}

.yscworks-community-preview-panel {
  position: relative;
  display: grid;
  place-items: center;
  width: min(720px, calc(100vw - 48px));
  max-height: calc(100vh - 48px);
  padding: 8px;
  overflow: hidden;
  border: 1px solid rgba(63, 115, 91, 0.34);
  border-radius: 8px;
  background: #edf9f6;
  box-shadow: 0 28px 90px rgba(31, 27, 24, 0.32);
  transform: translateY(10px) scale(0.985);
  transition: transform 0.2s ease;
}

.yscworks-community-preview-overlay.yscworks-open .yscworks-community-preview-panel {
  transform: translateY(0) scale(1);
}

.yscworks-community-preview-panel img {
  display: block;
  width: 100%;
  max-height: calc(100vh - 64px);
  object-fit: contain;
}

.yscworks-community-preview-close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  display: none;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  background: rgba(35, 79, 59, 0.9);
  color: #fff;
  font-size: 1.6rem;
  line-height: 1;
}

.yscworks-community-preview-overlay.yscworks-pinned .yscworks-community-preview-close {
  display: grid;
}

body.yscworks-community-preview-open {
  overflow: hidden;
}

@media (max-width: 600px) {
  .yscworks-community-preview-overlay {
    padding: 14px;
  }

  .yscworks-community-preview-panel {
    width: calc(100vw - 28px);
    max-height: calc(100vh - 28px);
  }

  .yscworks-community-preview-panel img {
    max-height: calc(100vh - 44px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .yscworks-community-card > img, .yscworks-community-preview-overlay, .yscworks-community-preview-panel {
    transition: none;
  }
}

/* Keep inner-page introductions on one consistent editorial axis. */
.yscworks-page-intro-contact {
  padding-top: 132px;
  padding-bottom: 72px;
}

.yscworks-page-intro-contact .yscworks-page-intro-grid {
  grid-template-columns: minmax(0, 1.08fr) minmax(380px, 0.92fr);
  align-items: center;
  gap: clamp(40px, 6vw, 88px);
}

.yscworks-page-intro-contact .yscworks-page-intro-copy {
  align-self: center;
}

.yscworks-page-intro-contact h1 {
  width: 100%;
  max-width: none;
  font-size: clamp(3.2rem, 4.6vw, 4.4rem);
  line-height: 1.04;
  text-wrap: balance;
}

.yscworks-page-intro-contact .yscworks-page-summary {
  max-width: 650px;
  font-size: 1.16rem;
}

.yscworks-page-intro-contact .yscworks-contact-direct {
  width: 100%;
  max-width: 460px;
  justify-self: end;
}

.yscworks-page-intro-works, .yscworks-page-intro-blog {
  padding-top: 132px;
  padding-bottom: 72px;
}

.yscworks-page-intro-works .yscworks-page-intro-single, .yscworks-page-intro-blog .yscworks-page-intro-single {
  max-width: 980px;
}

.yscworks-page-intro-works h1, .yscworks-page-intro-blog h1 {
  width: 100%;
  max-width: none;
  font-size: clamp(3.35rem, 5vw, 4.75rem);
  line-height: 1.04;
  text-wrap: balance;
}

.yscworks-page-intro-contact .yscworks-page-kicker, .yscworks-page-intro-works .yscworks-page-kicker, .yscworks-page-intro-blog .yscworks-page-kicker {
  font-size: 0.84rem;
}

.yscworks-page-intro-works .yscworks-page-summary {
  max-width: 980px;
  font-size: 1.16rem;
}

.yscworks-page-intro-blog .yscworks-page-summary {
  max-width: 900px;
  font-size: 1.16rem;
}

@media (max-width: 1024px) {
  .yscworks-page-intro-contact .yscworks-page-intro-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .yscworks-page-intro-contact .yscworks-contact-direct {
    max-width: none;
    justify-self: stretch;
  }
}

@media (max-width: 700px) {
  .yscworks-page-intro-contact, .yscworks-page-intro-works, .yscworks-page-intro-blog {
    padding-top: 112px;
    padding-bottom: 48px;
  }

  .yscworks-page-intro-contact h1, .yscworks-page-intro-works h1, .yscworks-page-intro-blog h1 {
    font-size: clamp(2.55rem, 12vw, 3.5rem);
    line-height: 1.05;
  }

  .yscworks-page-intro-contact .yscworks-page-summary, .yscworks-page-intro-works .yscworks-page-summary, .yscworks-page-intro-blog .yscworks-page-summary {
    font-size: 1.05rem;
  }
}

/* Warm-paper panels replace the former black utility blocks. */
.yscworks-contact-direct {
  border: 1px solid rgba(58, 105, 82, 0.24);
  background:
    linear-gradient(145deg, rgba(255, 252, 246, 0.96), rgba(239, 231, 218, 0.94)),
    var(--bg-primary);
  color: var(--text-primary);
  box-shadow: 0 22px 55px rgba(75, 53, 37, 0.1);
}

.yscworks-contact-direct .yscworks-contact-card-label { color: #54745f; }

.yscworks-contact-direct img {
  border: 3px solid rgba(255, 252, 246, 0.95);
  box-shadow: 0 0 0 1px rgba(58, 105, 82, 0.28);
}

.yscworks-contact-direct > p { color: var(--text-secondary); }
.yscworks-contact-direct .yscworks-direct-line { border-top-color: rgba(78, 46, 29, 0.12); }
.yscworks-contact-direct .yscworks-direct-line span { color: var(--text-muted); }

.yscworks-contact-direct .yscworks-direct-line a, .yscworks-contact-direct .yscworks-direct-line strong { color: var(--text-primary); }

.yscworks-contact-direct .yscworks-direct-line:first-of-type strong { color: #356c51; }

.yscworks-writing-side {
  border-color: rgba(78, 46, 29, 0.16);
  background:
    linear-gradient(150deg, rgba(255, 252, 246, 0.97), rgba(241, 232, 218, 0.94)),
    var(--bg-primary);
  color: var(--text-primary);
  box-shadow: 0 20px 52px rgba(75, 53, 37, 0.09);
}

.yscworks-writing-side h2 { color: var(--text-primary); }
.yscworks-writing-side p { color: var(--text-secondary); }
`
