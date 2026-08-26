/* Auto-generated from yscai101.com CSS */
export const PORT_STYLES = `/* ============================================
   成云杉YSC 个人作品网站 - 全局样式
   yscai101.com
   ============================================ */

/* ---------- CSS 变量 ---------- */
:root {
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
*,
*::before,
*::after {
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

body {
  font-family: var(--font-sans);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

body.homepage {
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
.page-loader {
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

.page-loader.loaded {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.loader-content {
  text-align: center;
}

.loader-logo {
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: loaderPulse 1.5s ease-in-out infinite;
}

.loader-bar {
  width: 120px;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin: 20px auto 0;
  overflow: hidden;
}

.loader-bar::after {
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
.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
}

/* ---------- 导航栏 ---------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 1000;
  transition: background var(--transition-normal), box-shadow var(--transition-normal);
}

.navbar.scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 var(--border-color);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-logo {
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

.nav-logo::before {
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

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  font-size: 0.9rem;
  color: var(--text-secondary);
  position: relative;
  padding: 4px 0;
  transition: color var(--transition-fast);
}

.nav-links a::after {
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

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

/* 汉堡菜单按钮 */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 6px;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform var(--transition-normal), opacity var(--transition-fast);
}

.nav-toggle.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ---------- 移动端导航菜单 ---------- */
.mobile-menu {
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

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-menu a {
  display: block;
  padding: 14px 0;
  font-size: 1.1rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
  transition: color var(--transition-fast), padding-left var(--transition-normal);
}

.mobile-menu a:last-child {
  border-bottom: none;
}

.mobile-menu a:hover {
  color: var(--text-primary);
  padding-left: 8px;
}

/* ---------- Hero 区域 ---------- */
.hero {
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
.hero::before {
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
.hero::after {
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

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero-badge {
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

.hero-badge .dot {
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

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
  animation: fadeInUp 0.8s ease 0.1s forwards;
  opacity: 0;
}

.hero-title .gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  margin-bottom: 12px;
  letter-spacing: 0.1em;
  animation: fadeInUp 0.8s ease 0.2s forwards;
  opacity: 0;
}

.hero-subtitle span {
  color: var(--accent-light);
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 40px;
  line-height: 1.8;
  animation: fadeInUp 0.8s ease 0.3s forwards;
  opacity: 0;
}

.hero-cta {
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
.btn {
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

.btn-primary {
  background: var(--gradient-accent);
  color: #fff;
  box-shadow: 0 8px 22px rgba(184, 91, 53, 0.16);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(184, 91, 53, 0.18);
  color: #fff;
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-color-hover);
  transform: translateY(-2px);
  color: var(--text-primary);
}

.btn-icon {
  font-size: 1.1em;
  transition: transform var(--transition-fast);
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

/* ---------- Section 通用 ---------- */
.section {
  padding: var(--section-padding);
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-light);
  margin-bottom: 16px;
  font-family: var(--font-mono);
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.section-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ---------- 分割线装饰 ---------- */
.section-divider {
  width: 60px;
  height: 3px;
  background: var(--gradient-accent);
  border-radius: 2px;
  margin: 0 auto 16px;
}

/* ---------- 作品筛选标签 ---------- */
.filter-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.filter-tag {
  padding: 8px 20px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.filter-tag:hover,
.filter-tag.active {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

/* ---------- 作品卡片网格 ---------- */
.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.work-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
}

.work-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.work-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px var(--glow-color);
}

.work-card-image {
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

.work-card-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(10, 10, 15, 0.8));
}

.work-card-body {
  padding: 20px;
}

.work-card-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.work-card-tag {
  font-size: 0.7rem;
  padding: 3px 10px;
  background: rgba(99, 102, 241, 0.15);
  color: var(--accent-light);
  border-radius: 100px;
  font-weight: 500;
}

.work-card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.4;
}

.work-card-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.work-card-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.work-card-link {
  color: var(--accent-light);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap var(--transition-fast);
}

.work-card:hover .work-card-link {
  gap: 8px;
}

/* ---------- 查看更多按钮区 ---------- */
.section-more {
  text-align: center;
  margin-top: 48px;
}

/* ---------- 首页改版模块 ---------- */
.hero-layout {
  min-height: auto;
  padding-top: 150px;
  padding-bottom: 90px;
  text-align: left;
}

.hero-shell {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: center;
}

.hero-content-left {
  max-width: 100%;
}

.hero-cta-left {
  justify-content: flex-start;
}

.hero-profile-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
}

.hero-avatar {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: 2px solid var(--border-color-hover);
  margin-bottom: 16px;
  object-fit: cover;
}

.hero-profile-card h3 {
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.hero-profile-card > p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 16px;
}

.hero-profile-card ul {
  display: grid;
  gap: 10px;
}

.hero-profile-card li {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  position: relative;
  padding-left: 16px;
}

.hero-profile-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-light);
}

.quick-stats {
  padding-top: 0;
}

.quick-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.quick-stat {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 26px 20px;
  text-align: center;
}

.quick-stat h3 {
  font-size: 2rem;
  line-height: 1.1;
  margin-bottom: 8px;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.quick-stat p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.focus-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 24px;
  transition: all var(--transition-normal);
}

.focus-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.focus-index {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: var(--accent-light);
}

.focus-card h3 {
  margin: 8px 0 10px;
  font-size: 1.1rem;
}

.focus-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}

.works-grid-compact .work-card-image {
  aspect-ratio: 16 / 9;
}

.writing-section {
  padding-top: 80px;
}

.writing-list {
  max-width: 860px;
  margin: 0 auto;
  display: grid;
  gap: 18px;
}

.writing-item {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 22px;
}

.writing-meta {
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.writing-item h3 {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.writing-item p {
  color: var(--text-secondary);
  font-size: 0.92rem;
  margin-bottom: 8px;
}

.free-pack-section {
  padding-top: 60px;
}

.free-pack-card {
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

.free-pack-card h2 {
  font-size: clamp(1.7rem, 4vw, 2.2rem);
  margin-bottom: 12px;
}

.free-pack-card p {
  color: var(--text-secondary);
  max-width: 620px;
  margin: 0 auto 22px;
}

/* ---------- 关于我页面 ---------- */
.about-hero {
  padding: 160px 0 80px;
  text-align: center;
}

.about-avatar {
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

.about-avatar::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--border-color);
}

.about-name {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.about-tagline {
  color: var(--accent-light);
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.about-bio {
  max-width: 680px;
  margin: 0 auto;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

/* 统计数据 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 60px 0;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 32px 20px;
  text-align: center;
  transition: all var(--transition-normal);
}

.stat-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* 技能标签云 */
.skills-section {
  padding: 80px 0;
}

.skills-cloud {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  max-width: 700px;
  margin: 0 auto;
}

.skill-tag {
  padding: 10px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
  cursor: default;
}

.skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent-light);
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

.skill-tag.highlight {
  border-color: var(--accent);
  color: var(--accent-light);
  background: rgba(99, 102, 241, 0.1);
}

/* 时间线 */
.timeline-section {
  padding: 80px 0;
}

.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), var(--accent-purple), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.timeline-item:hover {
  border-color: var(--border-color-hover);
  transform: translateX(4px);
}

.timeline-item::before {
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

.timeline-date {
  font-size: 0.8rem;
  color: var(--accent-light);
  font-family: var(--font-mono);
  margin-bottom: 8px;
}

.timeline-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.timeline-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ---------- Footer ---------- */
.footer {
  border-top: 1px solid var(--border-color);
  padding: 60px 0 40px;
  background: linear-gradient(to bottom, var(--bg-primary), rgba(17, 24, 39, 0.5));
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-grid-home {
  grid-template-columns: minmax(260px, 300px) 96px 116px 112px 250px;
  justify-content: start;
  column-gap: clamp(36px, 4vw, 56px);
  row-gap: 28px;
  align-items: start;
  padding-left: clamp(0px, 3vw, 56px);
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  font-size: 1.3rem;
  font-weight: 700;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.footer-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 20px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
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

.social-link:hover {
  border-color: var(--accent);
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
  color: var(--accent-light);
}

.footer-nav h4 {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.footer-contact-details {
  position: relative;
}

.footer-contact-details summary {
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

.footer-contact-details summary::-webkit-details-marker {
  display: none;
}

.footer-nav a {
  display: block;
  padding: 6px 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: color var(--transition-fast), padding-left var(--transition-normal);
}

.footer-nav a:hover {
  color: var(--text-primary);
  padding-left: 4px;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  border-top: 1px solid var(--border-color);
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* ---------- 返回顶部按钮 ---------- */
.back-to-top {
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

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  border-color: var(--accent);
  color: var(--accent-light);
  transform: translateY(-2px);
}

/* ---------- Homepage Refresh ---------- */
body.homepage .page-loader {
  background:
    radial-gradient(circle at top, rgba(239, 191, 102, 0.24), transparent 28%),
    var(--bg-primary);
}

body.homepage .loader-bar {
  background: rgba(31, 24, 18, 0.08);
}

body.homepage .navbar.scrolled {
  background: rgba(244, 237, 226, 0.72);
  box-shadow: 0 1px 0 rgba(91, 63, 41, 0.1);
}

body.homepage .mobile-menu {
  background: rgba(244, 237, 226, 0.96);
}

body.homepage .mobile-menu a {
  color: var(--text-secondary);
}

body.homepage .hero-avatar {
  margin-bottom: 0;
}

.home-hero {
  position: relative;
  overflow: hidden;
  padding: 148px 0 112px;
}

.home-hero::before {
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

.home-hero::after {
  content: '';
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(91, 63, 41, 0.28), transparent);
}

.home-hero-backdrop {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 84% 12%, rgba(209, 78, 46, 0.16), transparent 6%),
    radial-gradient(circle at 83% 12%, rgba(240, 181, 94, 0.26), transparent 12%),
    linear-gradient(180deg, rgba(255, 247, 231, 0.54), rgba(244, 237, 226, 0.04));
  pointer-events: none;
}

.home-hero-shell {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(380px, 0.95fr);
  gap: 68px;
  align-items: end;
}

.home-hero-copy {
  max-width: 760px;
}

.home-kicker {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.home-kicker-line {
  width: 44px;
  height: 1px;
  background: currentColor;
  opacity: 0.55;
}

.home-headline {
  max-width: 10ch;
  font-size: clamp(3.2rem, 6.6vw, 5.8rem);
  line-height: 0.96;
  letter-spacing: -0.055em;
  font-weight: 650;
  margin-bottom: 28px;
  text-wrap: balance;
}

.home-headline span {
  display: block;
  background: linear-gradient(135deg, #b95e38, #d9a766 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-intro {
  max-width: 560px;
  font-size: 1.02rem;
  line-height: 2;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.home-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.home-hero-visual {
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

.zen-orb {
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

.mist-layer {
  position: absolute;
  border-radius: 999px;
  filter: blur(10px);
  opacity: 0.92;
}

.mist-layer-a {
  left: -8%;
  right: 12%;
  bottom: 170px;
  height: 132px;
  background: linear-gradient(90deg, rgba(255, 251, 246, 0.16), rgba(255, 250, 244, 0.9), rgba(255, 250, 246, 0.12));
}

.mist-layer-b {
  left: 18%;
  right: -10%;
  bottom: 84px;
  height: 154px;
  background: linear-gradient(90deg, rgba(255, 248, 240, 0.08), rgba(255, 252, 247, 0.84), rgba(255, 248, 240, 0.12));
}

.mountain-ridge {
  position: absolute;
  bottom: 0;
  border-radius: 44% 56% 0 0 / 36% 44% 0 0;
}

.ridge-back {
  left: 14%;
  width: 60%;
  height: 45%;
  background: linear-gradient(180deg, rgba(174, 129, 108, 0.24), rgba(132, 111, 116, 0.28));
  clip-path: polygon(0% 100%, 18% 62%, 34% 70%, 54% 38%, 72% 54%, 100% 20%, 100% 100%);
  opacity: 0.38;
}

.ridge-mid {
  left: -6%;
  width: 58%;
  height: 56%;
  background: linear-gradient(180deg, rgba(102, 136, 174, 0.42), rgba(49, 54, 70, 0.9));
  clip-path: polygon(0% 100%, 0% 46%, 16% 50%, 31% 26%, 46% 44%, 66% 20%, 100% 0%, 100% 100%);
}

.ridge-front {
  right: -8%;
  width: 48%;
  height: 52%;
  background: linear-gradient(180deg, rgba(72, 96, 152, 0.52), rgba(29, 32, 45, 0.96));
  clip-path: polygon(0% 100%, 0% 34%, 22% 48%, 48% 22%, 70% 40%, 100% 18%, 100% 100%);
}

.gold-stream {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 209, 108, 0), rgba(235, 196, 106, 0.72), rgba(255, 209, 108, 0));
  transform-origin: left center;
  box-shadow: 0 0 8px rgba(241, 193, 85, 0.16);
}

.gold-stream-a {
  left: 6%;
  bottom: 240px;
  width: 46%;
  transform: rotate(-21deg);
}

.gold-stream-b {
  right: 2%;
  bottom: 222px;
  width: 38%;
  transform: rotate(-36deg);
}

.zen-grain {
  position: absolute;
  border-radius: 999px;
  background:
    radial-gradient(circle at 20% 30%, rgba(246, 200, 105, 0.9) 0 2px, transparent 3px),
    radial-gradient(circle at 60% 70%, rgba(246, 200, 105, 0.75) 0 1px, transparent 3px),
    radial-gradient(circle at 80% 40%, rgba(246, 200, 105, 0.85) 0 1.5px, transparent 3px);
  opacity: 0.42;
}

.zen-grain-a {
  top: 48px;
  left: 34%;
  width: 180px;
  height: 90px;
}

.zen-grain-b {
  right: 16%;
  bottom: 198px;
  width: 140px;
  height: 84px;
}

.hero-seal {
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

.home-hero-panel {
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

.hero-quote {
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

.hero-panel-top {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 18px;
  align-items: center;
  margin-bottom: 24px;
}

.hero-panel-label {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.home-hero-panel h2 {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.hero-panel-role {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.hero-panel-note {
  padding: 18px 0 22px;
  border-top: 1px solid rgba(91, 63, 41, 0.1);
  border-bottom: 1px solid rgba(91, 63, 41, 0.1);
  color: var(--text-secondary);
  line-height: 1.8;
}

.hero-panel-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  padding-top: 22px;
}

.hero-panel-stats article {
  display: grid;
  gap: 6px;
}

.hero-panel-stats strong {
  font-size: 1.4rem;
  line-height: 1;
  color: #b8432b;
}

.hero-panel-stats span {
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.home-proof {
  padding: 0 0 28px;
}

.home-proof-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.proof-card {
  padding: 26px 24px 30px;
  border-radius: 24px;
  border: 1px solid rgba(91, 63, 41, 0.06);
  background: linear-gradient(180deg, rgba(255, 251, 245, 0.44), rgba(248, 241, 232, 0.72));
  box-shadow: 0 10px 24px rgba(78, 52, 33, 0.03);
}

.proof-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.proof-card h3 {
  font-size: 1.28rem;
  margin-bottom: 8px;
}

.proof-card p:last-child {
  color: var(--text-secondary);
  line-height: 1.75;
}

.home-section-head {
  max-width: 680px;
  margin-bottom: 54px;
}

.home-section-head .section-title,
.home-section-head .section-desc,
.home-section-head .section-label {
  text-align: left;
}

.home-section-head .section-desc {
  margin: 0;
}

.reading-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.reading-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 249, 240, 0.78), rgba(247, 239, 229, 0.9));
  border: 1px solid rgba(91, 63, 41, 0.1);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.reading-card:hover,
.service-card:hover,
.metric-card:hover {
  transform: translateY(-2px);
  border-color: rgba(181, 83, 45, 0.18);
  box-shadow: 0 12px 28px rgba(83, 53, 37, 0.05);
}

.reading-meta {
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 18px;
}

.reading-card h3 {
  font-size: 1.3rem;
  line-height: 1.35;
  margin-bottom: 12px;
}

.reading-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.reading-link {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  padding-top: 24px;
  color: var(--accent);
  font-weight: 600;
}

.about-split {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 32px;
  align-items: start;
}

.about-story {
  padding-right: 18px;
}

.about-story .section-title {
  max-width: 10ch;
  text-align: left;
  margin-bottom: 20px;
}

.about-story .section-label {
  margin-bottom: 20px;
}

.about-story-text {
  max-width: 560px;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 14px;
  font-size: 1rem;
}

.about-metrics {
  display: grid;
  gap: 18px;
}

.metric-card {
  display: grid;
  gap: 8px;
  padding: 24px 26px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(253, 249, 243, 0.74), rgba(246, 239, 230, 0.92));
  border: 1px solid rgba(91, 63, 41, 0.1);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.metric-number {
  font-size: 1.7rem;
  line-height: 1.1;
  color: var(--accent);
  font-weight: 700;
}

.metric-label {
  color: var(--text-secondary);
  line-height: 1.7;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.service-card {
  min-height: 248px;
  padding: 28px;
  border-radius: 26px;
  background:
    linear-gradient(180deg, rgba(255, 251, 244, 0.78), rgba(245, 237, 227, 0.82)),
    radial-gradient(circle at top right, rgba(232, 194, 112, 0.08), transparent 34%);
  border: 1px solid rgba(91, 63, 41, 0.1);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.service-index {
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.16em;
  margin-bottom: 40px;
}

.service-card h3 {
  font-size: 1.36rem;
  margin-bottom: 12px;
}

.service-card p:last-child {
  color: var(--text-secondary);
  line-height: 1.8;
}

.home-cta {
  padding-top: 26px;
}

.home-cta-card {
  padding: 44px;
  border-radius: 32px;
  background:
    radial-gradient(circle at top right, rgba(239, 191, 102, 0.24), transparent 24%),
    radial-gradient(circle at left bottom, rgba(54, 106, 161, 0.08), transparent 22%),
    linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(246, 238, 229, 0.92));
  border: 1px solid rgba(91, 63, 41, 0.1);
  box-shadow: 0 16px 36px rgba(83, 53, 37, 0.06);
}

.home-cta-card h2 {
  max-width: 16ch;
  font-size: clamp(2rem, 4.8vw, 3.3rem);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 14px;
}

.home-cta-card p {
  max-width: 620px;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 28px;
}

/* ---------- 滚动动画 ---------- */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

/* 延迟动画 */
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.4s; }
.delay-5 { transition-delay: 0.5s; }

/* ---------- 页面专用：作品页 ---------- */
.page-header {
  padding: 140px 0 60px;
  text-align: center;
  background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
}

.works-page-grid {
  padding: 0 0 80px;
}

/* ---------- 响应式设计 ---------- */
@media (max-width: 1024px) {
  .home-hero-shell,
  .about-split {
    grid-template-columns: 1fr;
  }

  .home-proof-grid,
  .reading-grid,
  .service-grid {
    grid-template-columns: 1fr 1fr;
  }

  .home-headline {
    max-width: 12ch;
  }

  .home-hero-visual {
    min-height: auto;
  }

  .home-hero-visual {
    min-height: 620px;
  }

  .home-hero-panel {
    left: 24px;
  }

  .hero-shell {
    grid-template-columns: 1fr;
  }

  .hero-profile-card {
    max-width: 600px;
  }

  .quick-stats-grid,
  .focus-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-grid-home {
    grid-template-columns: minmax(0, 1.2fr) repeat(2, minmax(120px, 0.6fr));
    justify-content: stretch;
    column-gap: 40px;
    padding-left: 0;
  }

  .works-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  :root {
    --section-padding: 60px 0;
    --nav-height: 64px;
  }

  /* 导航 */
  .nav-links {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .nav-logo {
    gap: 9px;
  }

  .nav-logo::before {
    width: 30px;
    height: 30px;
    flex-basis: 30px;
  }

  /* Hero */
  .hero {
    padding: 100px 20px 60px;
    min-height: auto;
    min-height: 100svh;
  }

  .home-hero {
    padding: 120px 0 64px;
  }

  .home-proof-grid,
  .reading-grid,
  .service-grid,
  .hero-panel-stats {
    grid-template-columns: 1fr;
  }

  .home-cta-card {
    padding: 32px 24px;
  }

  .hero-panel-top {
    grid-template-columns: 80px 1fr;
  }

  .home-hero-visual {
    min-height: 540px;
  }

  .home-hero-panel {
    position: static;
    width: 100%;
    margin-top: 18px;
  }

  .hero-quote {
    position: static;
    max-width: none;
    margin-top: 14px;
  }

  .home-headline {
    max-width: none;
    font-size: clamp(2.6rem, 12vw, 4rem);
  }

  .home-intro,
  .about-story-text {
    max-width: none;
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-layout {
    padding-top: 110px;
  }

  .btn {
    justify-content: center;
  }

  .quick-stats-grid,
  .focus-grid {
    grid-template-columns: 1fr;
  }

  .free-pack-card {
    padding: 28px 20px;
  }

  /* 作品网格 */
  .works-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* 统计 */
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .stat-number {
    font-size: 2rem;
  }

  /* 时间线 */
  .timeline {
    padding-left: 32px;
  }

  .timeline::before {
    left: 11px;
  }

  .timeline-item::before {
    left: -29px;
    width: 10px;
    height: 10px;
  }

  /* Footer */
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-grid-home {
    grid-template-columns: 1fr;
    padding-left: 0;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  /* 返回顶部 */
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .home-kicker {
    letter-spacing: 0.1em;
  }

  .home-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .filter-tags {
    gap: 8px;
  }

  .filter-tag {
    padding: 6px 14px;
    font-size: 0.8rem;
  }

  .about-avatar {
    width: 110px;
    height: 110px;
    font-size: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-avatar {
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
body.homepage {
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

body.homepage::before {
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

body.homepage::after {
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

.homepage .navbar {
  background: transparent;
}

.homepage .navbar.scrolled {
  background: rgba(249, 243, 233, 0.82);
  box-shadow: 0 1px 0 rgba(88, 66, 47, 0.08);
}

.homepage .mobile-menu {
  background: rgba(249, 243, 233, 0.96);
  border-bottom: 1px solid rgba(88, 66, 47, 0.08);
}

.homepage .mobile-menu a {
  color: var(--text-secondary);
}

.homepage .mobile-menu a:hover {
  color: var(--text-primary);
}

.homepage .nav-logo,
.homepage .loader-logo {
  background: none;
  -webkit-text-fill-color: initial;
  color: var(--text-primary);
}

.homepage .nav-links a::after {
  height: 1px;
  background: var(--accent);
}

.homepage .btn {
  border-radius: 999px;
  padding: 15px 26px;
  letter-spacing: 0.02em;
}

.homepage .btn-primary {
  background: linear-gradient(135deg, #b94f35, #d58357);
  border: 1px solid rgba(184, 77, 51, 0.16);
  box-shadow: 0 14px 28px rgba(184, 77, 51, 0.14);
}

.homepage .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 32px rgba(184, 77, 51, 0.18);
}

.homepage .btn-secondary {
  background: rgba(255, 251, 246, 0.66);
  border: 1px solid rgba(82, 57, 38, 0.12);
  color: var(--text-primary);
}

.homepage .btn-secondary:hover {
  background: rgba(255, 251, 246, 0.9);
  border-color: rgba(82, 57, 38, 0.2);
}

.homepage .section {
  padding: 112px 0;
}

.homepage .section-label {
  color: var(--accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.homepage .section-title,
.home-headline,
.philosophy-copy .section-title,
.lab-about .section-title {
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.home-hero {
  position: relative;
  padding: calc(var(--nav-height) + 56px) 0 72px;
  overflow: hidden;
}

.home-hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: 56px;
  align-items: center;
}

.home-hero-copy {
  position: relative;
  z-index: 2;
}

.home-kicker {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.home-kicker-line {
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, rgba(184, 77, 51, 0.2), rgba(184, 77, 51, 0.9));
}

.home-headline {
  max-width: 9.5em;
  font-size: clamp(3.4rem, 8vw, 5.8rem);
  line-height: 1.08;
  margin-bottom: 24px;
  color: #201914;
}

.home-intro {
  max-width: 36rem;
  color: var(--text-secondary);
  font-size: 1.08rem;
  line-height: 1.9;
  margin-bottom: 34px;
}

.home-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.home-intent-strip {
  margin-top: 42px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding-top: 28px;
  border-top: 1px solid rgba(82, 57, 38, 0.12);
}

.home-intent-strip strong {
  display: block;
  font-size: 0.98rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.home-intent-strip span {
  display: block;
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.7;
}

.home-hero-visual {
  position: relative;
  min-height: 660px;
  border-radius: 40px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 251, 245, 0.75), rgba(248, 240, 228, 0.4));
  border: 1px solid rgba(84, 57, 36, 0.08);
  box-shadow: 0 28px 60px rgba(84, 57, 36, 0.1);
}

.visual-paper,
.visual-mist,
.visual-ridge,
.visual-stream,
.visual-dust,
.visual-sun,
.hero-seal,
.home-hero-panel {
  position: absolute;
}

.visual-paper {
  inset: 0;
  background:
    radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.75), transparent 28%),
    linear-gradient(180deg, rgba(255, 248, 240, 0.4), rgba(244, 234, 220, 0.2));
}

.visual-sun {
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

.visual-sun::after {
  content: '';
  position: absolute;
  inset: 28% -5% auto;
  height: 26px;
  background: linear-gradient(90deg, transparent, rgba(255, 244, 232, 0.66), transparent);
  filter: blur(5px);
}

.visual-mist-a {
  inset: 110px 0 auto 0;
  height: 320px;
  background: radial-gradient(circle at 55% 50%, rgba(255, 253, 249, 0.84), transparent 62%);
}

.visual-mist-b {
  inset: auto 0 74px 0;
  height: 260px;
  background: radial-gradient(circle at 45% 45%, rgba(252, 248, 243, 0.92), transparent 68%);
}

.visual-ridge {
  inset: auto 0 0 auto;
  background-repeat: no-repeat;
}

.visual-ridge-back {
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

.visual-ridge-mid {
  left: 28px;
  right: 42px;
  bottom: 82px;
  height: 250px;
  background:
    linear-gradient(180deg, rgba(62, 69, 73, 0.9), rgba(33, 37, 39, 0.82));
  clip-path: polygon(0 100%, 12% 68%, 27% 56%, 42% 40%, 60% 26%, 76% 37%, 88% 21%, 100% 100%);
  opacity: 0.88;
}

.visual-ridge-front {
  left: -14px;
  right: 154px;
  bottom: 0;
  height: 178px;
  background:
    linear-gradient(180deg, rgba(80, 109, 122, 0.92), rgba(50, 73, 84, 0.98));
  clip-path: polygon(0 100%, 0 78%, 18% 66%, 29% 48%, 44% 54%, 60% 30%, 76% 39%, 100% 0, 100% 100%);
  opacity: 0.9;
}

.visual-stream {
  border-radius: 999px;
  border: 1px solid rgba(217, 173, 102, 0.46);
  opacity: 0.78;
}

.visual-stream-a {
  width: 420px;
  height: 180px;
  left: 84px;
  bottom: 118px;
  border-color: rgba(214, 174, 108, 0.56);
  clip-path: inset(48% 0 0 0);
  transform: rotate(-11deg);
}

.visual-stream-b {
  width: 350px;
  height: 160px;
  left: 116px;
  bottom: 152px;
  border-color: rgba(214, 174, 108, 0.36);
  clip-path: inset(52% 0 0 0);
  transform: rotate(8deg);
}

.visual-dust {
  border-radius: 999px;
  background: radial-gradient(circle, rgba(214, 173, 102, 0.9) 0%, rgba(214, 173, 102, 0) 70%);
}

.visual-dust-a {
  width: 180px;
  height: 180px;
  right: 162px;
  bottom: 204px;
  filter: blur(22px);
  opacity: 0.2;
}

.visual-dust-b {
  width: 220px;
  height: 220px;
  left: 118px;
  bottom: 30px;
  filter: blur(30px);
  opacity: 0.12;
}

.home-hero-panel {
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

.hero-panel-label {
  margin-bottom: 12px;
  font-size: 0.76rem;
  letter-spacing: 0.22em;
  color: var(--accent);
  text-transform: uppercase;
}

.home-hero-panel h2 {
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 12px;
}

.hero-panel-text {
  color: var(--text-secondary);
  line-height: 1.8;
}

.hero-panel-foot {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(88, 66, 47, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--text-muted);
  font-size: 0.88rem;
}

.hero-seal {
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

.home-section-head {
  max-width: 720px;
  margin-bottom: 42px;
}

.pillar-grid,
.reading-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.pillar-card,
.reading-card,
.home-cta-card,
.lab-projects,
.lab-about {
  position: relative;
  background: rgba(255, 252, 248, 0.7);
  border: 1px solid rgba(88, 66, 47, 0.1);
  box-shadow: 0 16px 38px rgba(81, 56, 38, 0.07);
}

.pillar-card {
  border-radius: 28px;
  padding: 28px;
}

.pillar-index {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--accent);
  font-size: 0.88rem;
  letter-spacing: 0.18em;
}

.pillar-card h3,
.reading-card h3,
.lab-projects h2,
.lab-about h2,
.home-cta-card h2 {
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
  font-weight: 500;
}

.pillar-card h3 {
  font-size: 1.56rem;
  margin-bottom: 12px;
}

.pillar-card p {
  color: var(--text-secondary);
  line-height: 1.82;
  margin-bottom: 22px;
}

.pillar-card a,
.lab-link {
  color: var(--accent);
  font-size: 0.95rem;
}

.reading-card {
  border-radius: 26px;
  padding: 28px;
  min-height: 300px;
  background:
    linear-gradient(180deg, rgba(255, 252, 248, 0.92), rgba(252, 245, 235, 0.76));
}

.reading-card::after {
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

.reading-meta {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 18px;
}

.reading-card h3 {
  position: relative;
  z-index: 1;
  font-size: 1.84rem;
  line-height: 1.32;
  margin-bottom: 14px;
}

.reading-card p {
  position: relative;
  z-index: 1;
  color: var(--text-secondary);
  line-height: 1.8;
}

.reading-link {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  color: var(--accent);
  font-size: 0.95rem;
}

.philosophy-grid,
.lab-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
  gap: 40px;
  align-items: start;
}

.philosophy-copy p {
  max-width: 31rem;
  color: var(--text-secondary);
  line-height: 1.9;
}

.philosophy-list {
  padding-top: 64px;
}

.philosophy-list article {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 18px;
  padding: 20px 0;
  border-top: 1px solid rgba(88, 66, 47, 0.1);
}

.philosophy-list article:last-child {
  border-bottom: 1px solid rgba(88, 66, 47, 0.1);
}

.philosophy-list span {
  color: var(--accent-light);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.7rem;
}

.philosophy-list h3 {
  font-size: 1.16rem;
  margin-bottom: 6px;
}

.philosophy-list p {
  color: var(--text-secondary);
}

.lab-projects,
.lab-about {
  border-radius: 32px;
  padding: 34px;
}

.lab-project-list {
  margin: 26px 0 24px;
}

.lab-project-list article {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0;
  border-top: 1px solid rgba(88, 66, 47, 0.1);
}

.lab-project-list article:last-child {
  border-bottom: 1px solid rgba(88, 66, 47, 0.1);
}

.lab-project-list h3 {
  font-size: 1.12rem;
  margin-bottom: 4px;
}

.lab-project-list p,
.lab-about p {
  color: var(--text-secondary);
  line-height: 1.84;
}

.lab-project-list span {
  color: var(--accent);
  white-space: nowrap;
  font-size: 0.92rem;
}

.home-cta {
  padding-top: 84px;
  padding-bottom: 128px;
}

.home-cta-card {
  border-radius: 34px;
  padding: 52px;
  text-align: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 18%, rgba(214, 173, 102, 0.08), transparent 18%),
    radial-gradient(circle at 82% 74%, rgba(81, 104, 122, 0.08), transparent 20%),
    rgba(255, 251, 246, 0.78);
}

.home-cta-card::before,
.home-cta-card::after {
  content: '';
  position: absolute;
  width: 180px;
  height: 180px;
  border: 1px solid rgba(214, 173, 102, 0.28);
  border-radius: 50%;
}

.home-cta-card::before {
  left: -52px;
  bottom: -72px;
}

.home-cta-card::after {
  right: -64px;
  top: -76px;
}

.home-cta-card h2 {
  max-width: 16em;
  margin: 0 auto 18px;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.22;
}

.home-cta-card p {
  max-width: 44rem;
  margin: 0 auto 30px;
  color: var(--text-secondary);
  line-height: 1.9;
}

.homepage .footer {
  background: transparent;
  border-top: 1px solid rgba(88, 66, 47, 0.08);
}

.homepage .footer-grid-home {
  padding-top: 24px;
}

.homepage .footer-logo {
  background: none;
  -webkit-text-fill-color: initial;
  color: var(--text-primary);
}

.homepage .footer-desc,
.homepage .footer-nav a,
.homepage .footer-bottom {
  color: var(--text-secondary);
}

.homepage .footer-nav h4 {
  color: var(--text-primary);
}

.homepage .back-to-top {
  background: rgba(255, 250, 245, 0.84);
  border: 1px solid rgba(88, 66, 47, 0.12);
  color: var(--accent);
  box-shadow: 0 14px 30px rgba(81, 56, 38, 0.12);
}

@media (max-width: 1100px) {
  .home-hero-shell,
  .philosophy-grid,
  .lab-grid,
  .pillar-grid,
  .reading-grid,
  .home-intent-strip {
    grid-template-columns: 1fr;
  }

  .home-hero-shell {
    gap: 36px;
  }

  .home-headline,
  .home-intro {
    max-width: none;
  }

  .home-hero-visual {
    min-height: 560px;
  }

  .philosophy-list {
    padding-top: 0;
  }
}

@media (max-width: 768px) {
  .home-hero {
    padding-top: calc(var(--nav-height) + 32px);
  }

  .home-headline {
    font-size: clamp(2.6rem, 13vw, 4rem);
    line-height: 1.12;
  }

  .home-intro {
    font-size: 1rem;
    line-height: 1.84;
  }

  .home-hero-visual {
    min-height: 480px;
    border-radius: 28px;
  }

  .visual-sun {
    width: 110px;
    right: 38px;
    top: 52px;
  }

  .home-hero-panel,
  .lab-projects,
  .lab-about,
  .home-cta-card,
  .pillar-card,
  .reading-card {
    padding: 24px;
  }

  .home-cta-card h2,
  .reading-card h3,
  .pillar-card h3 {
    font-size: 1.7rem;
  }

  .hero-panel-foot {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .container {
    padding: 0 18px;
  }

  .home-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .home-hero-visual {
    min-height: 430px;
  }

  .visual-ridge-back {
    left: 18px;
    right: 48px;
    bottom: 148px;
  }

  .visual-ridge-mid {
    left: 0;
    right: 12px;
  }

  .visual-ridge-front {
    right: 92px;
  }

  .home-hero-panel {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }

  .hero-seal {
    width: 56px;
    height: 56px;
    font-size: 0.88rem;
  }

  .philosophy-list article {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}

/* ============================================
   Homepage Layout Refresh: modern minimal zen
   ============================================ */
.homepage .btn-ghost {
  background: transparent;
  border: 1px solid rgba(184, 77, 51, 0.18);
  color: var(--accent);
}

.homepage .btn-ghost:hover {
  background: rgba(184, 77, 51, 0.06);
  border-color: rgba(184, 77, 51, 0.28);
}

.home-hero {
  padding: calc(var(--nav-height) + 34px) 0 40px;
}

.home-hero-card,
.section-card,
.home-cta-card {
  position: relative;
  border-radius: 34px;
  background: rgba(255, 251, 246, 0.72);
  border: 1px solid rgba(88, 66, 47, 0.1);
  box-shadow: 0 20px 46px rgba(81, 56, 38, 0.07);
  overflow: hidden;
}

.home-hero-card {
  padding: 28px;
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.hero-orb,
.hero-ridge,
.hero-gold-line {
  position: absolute;
}

.hero-orb {
  width: 180px;
  height: 180px;
  top: 90px;
  right: 170px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 36%, rgba(252, 230, 216, 0.12), transparent 44%), linear-gradient(135deg, rgba(200, 95, 63, 0.94), rgba(178, 71, 46, 0.88));
  opacity: 0.92;
}

.hero-orb-small {
  width: 68px;
  height: 68px;
  right: 70px;
  top: 120px;
  background: linear-gradient(135deg, rgba(214, 173, 102, 0.22), rgba(214, 173, 102, 0.08));
  border: 1px solid rgba(214, 173, 102, 0.2);
}

.hero-ridge {
  background-repeat: no-repeat;
}

.hero-ridge-back {
  right: 140px;
  bottom: 168px;
  width: 320px;
  height: 150px;
  background: linear-gradient(180deg, rgba(118, 127, 129, 0.28), rgba(118, 127, 129, 0));
  clip-path: polygon(0 100%, 18% 58%, 36% 34%, 56% 50%, 76% 28%, 100% 100%);
}

.hero-ridge-mid {
  right: 24px;
  bottom: 124px;
  width: 420px;
  height: 210px;
  background: linear-gradient(180deg, rgba(56, 65, 70, 0.92), rgba(30, 36, 39, 0.86));
  clip-path: polygon(0 100%, 10% 70%, 28% 56%, 46% 36%, 66% 24%, 82% 38%, 100% 100%);
}

.hero-ridge-front {
  left: 44%;
  right: -40px;
  bottom: 0;
  height: 210px;
  background: linear-gradient(180deg, rgba(64, 89, 102, 0.9), rgba(41, 63, 74, 0.98));
  clip-path: polygon(0 100%, 0 74%, 18% 60%, 34% 44%, 52% 52%, 74% 24%, 100% 0, 100% 100%);
}

.hero-gold-line {
  border: 1px solid rgba(217, 173, 102, 0.42);
  border-radius: 999px;
  opacity: 0.72;
}

.hero-gold-line-a {
  left: 48%;
  bottom: 140px;
  width: 330px;
  height: 120px;
  transform: rotate(-9deg);
  clip-path: inset(56% 0 0 0);
}

.hero-gold-line-b {
  left: 52%;
  bottom: 104px;
  width: 290px;
  height: 104px;
  transform: rotate(7deg);
  clip-path: inset(58% 0 0 0);
}

.hero-main-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.75fr);
  gap: 28px;
  align-items: start;
}

.home-hero-copy {
  padding: 22px 18px 12px 18px;
}

.home-headline {
  max-width: 8.8em;
  font-size: clamp(3.4rem, 7vw, 5rem);
  line-height: 1.02;
  margin-bottom: 22px;
}

.home-intro {
  max-width: 42rem;
  margin-bottom: 30px;
  font-size: 1.04rem;
}

.hero-side-stack {
  display: grid;
  gap: 16px;
}

.hero-info-card {
  position: relative;
  z-index: 1;
  border-radius: 26px;
  padding: 22px 22px 20px;
  background: rgba(255, 251, 246, 0.74);
  border: 1px solid rgba(88, 66, 47, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.hero-card-label,
.topic-label {
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.profile-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 12px 0 18px;
}

.profile-avatar {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  object-position: center;
  background: linear-gradient(135deg, rgba(191, 93, 64, 0.12), rgba(214, 173, 102, 0.1));
  border: 1px solid rgba(191, 93, 64, 0.16);
}

.profile-row h2,
.focus-card h3,
.topic-card h3,
.portfolio-card h3,
.featured-post h3,
.post-card h3 {
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', 'STSong', serif;
  font-weight: 500;
}

.profile-row h2 {
  font-size: 1.45rem;
  margin-bottom: 4px;
}

.profile-row p,
.focus-card p,
.profile-copy p {
  color: var(--text-secondary);
}

.profile-copy {
  display: grid;
  gap: 8px;
  line-height: 1.65;
}

.profile-copy p {
  margin: 0;
  text-align: left;
}

.focus-card h3 {
  margin: 12px 0 10px;
  font-size: 1.55rem;
  line-height: 1.38;
}

.hero-stats-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.hero-stat-card,
.topic-card,
.portfolio-card,
.post-card {
  border-radius: 22px;
  border: 1px solid rgba(88, 66, 47, 0.1);
  background: rgba(255, 253, 249, 0.82);
}

.hero-stat-card {
  padding: 22px 20px;
}

.hero-stat-card strong {
  display: block;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 8px;
}

.hero-stat-card span {
  color: var(--text-secondary);
}

.home-topics {
  padding-top: 22px;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.topic-card {
  padding: 24px;
}

.topic-card h3 {
  font-size: 2rem;
  margin: 14px 0 10px;
}

.topic-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.section-card {
  padding: 28px;
}

.section-card-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 26px;
}

.portfolio-grid,
.post-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.portfolio-card,
.post-card {
  padding: 22px;
}

.portfolio-meta,
.post-meta,
.featured-post-meta {
  color: var(--text-muted);
  font-size: 0.82rem;
  letter-spacing: 0.02em;
}

.portfolio-meta {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.portfolio-card h3 {
  font-size: 2rem;
  margin: 16px 0 12px;
}

.portfolio-card p,
.post-card p,
.featured-post p {
  color: var(--text-secondary);
  line-height: 1.84;
}

.portfolio-tags {
  margin-top: 18px;
  color: var(--text-muted);
  font-size: 0.88rem;
}

.featured-post {
  padding: 28px;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(34, 31, 30, 0.97), rgba(29, 26, 25, 0.98));
  color: #f6efe7;
  margin-bottom: 18px;
}

.featured-post .featured-post-meta,
.featured-post p {
  color: rgba(246, 239, 231, 0.72);
}

.featured-post h3 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.18;
  margin: 18px 0 14px;
}

.featured-post-tags {
  display: inline-block;
  margin: 18px 0 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(246, 239, 231, 0.88);
  font-size: 0.85rem;
}

.featured-post .reading-link {
  color: #fff6ee;
}

.post-card h3 {
  font-size: 1.72rem;
  line-height: 1.3;
  margin: 14px 0 10px;
}

.home-cta-card {
  padding: 34px 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  text-align: left;
}

.home-cta-card h2 {
  margin: 8px 0 10px;
  font-size: clamp(2rem, 4vw, 2.6rem);
  line-height: 1.16;
}

.home-cta-card p {
  max-width: 50rem;
  margin: 0;
}

.home-cta-card .home-actions {
  flex-shrink: 0;
}

@media (max-width: 1100px) {
  .hero-main-grid,
  .topic-grid,
  .portfolio-grid,
  .post-grid,
  .hero-stats-grid,
  .home-cta-card {
    grid-template-columns: 1fr;
  }

  .home-cta-card {
    display: grid;
  }

  .hero-orb {
    right: 60px;
  }

  .hero-ridge-front {
    left: 35%;
  }
}

@media (max-width: 768px) {
  .home-hero-card,
  .section-card {
    padding: 20px;
    border-radius: 26px;
  }

  .section-card-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .home-headline {
    font-size: clamp(2.5rem, 12vw, 3.8rem);
  }

  .topic-card h3,
  .portfolio-card h3 {
    font-size: 1.8rem;
  }

  .featured-post,
  .post-card,
  .portfolio-card,
  .topic-card,
  .hero-info-card {
    padding: 20px;
  }

  .hero-ridge-mid {
    width: 320px;
    height: 180px;
  }

  .hero-ridge-front {
    right: -70px;
    height: 170px;
  }
}

/* ============================================
   Homepage 2026: AI product lab
   ============================================ */
.ysc-lab {
  position: relative;
  overflow: hidden;
}

.ysc-lab::before {
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

.ysc-lab::after {
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

.lab-hero {
  position: relative;
  padding: calc(var(--nav-height) + 46px) 0 52px;
}

.lab-hero::before,
.lab-hero::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}

.lab-hero::before {
  width: 520px;
  height: 520px;
  right: -160px;
  top: -160px;
  background: radial-gradient(circle, rgba(185, 74, 64, 0.16), transparent 64%);
  animation: labFloat 9s ease-in-out infinite;
}

.lab-hero::after {
  width: 420px;
  height: 420px;
  left: -130px;
  bottom: -180px;
  background: radial-gradient(circle, rgba(45, 95, 86, 0.12), transparent 64%);
  animation: labFloat 11s ease-in-out infinite reverse;
}

.lab-hero-grid,
.lab-writing-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: 28px;
  align-items: stretch;
}

.lab-hero-copy,
.lab-console,
.lab-map-card,
.lab-project-card,
.lab-cta-card {
  border: 1px solid rgba(77, 58, 42, 0.12);
  background: rgba(255, 251, 246, 0.78);
  box-shadow: 0 24px 70px rgba(68, 48, 34, 0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.lab-hero-copy {
  position: relative;
  min-width: 0;
  min-height: 620px;
  padding: clamp(32px, 5vw, 58px);
  border-radius: 36px;
  overflow: hidden;
}

.lab-hero-copy::after {
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

.lab-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.live-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #2d5f56;
  box-shadow: 0 0 0 0 rgba(45, 95, 86, 0.35);
  animation: labPulse 1.7s ease-out infinite;
}

.lab-hero h1 {
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

.hero-mobile-break {
  display: none;
}

.lab-lead {
  position: relative;
  z-index: 1;
  max-width: 680px;
  color: var(--text-secondary);
  font-size: 1.08rem;
  line-height: 1.95;
  margin-bottom: 24px;
}

.lab-tags,
.project-status,
.cta-contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.lab-tags {
  position: relative;
  z-index: 1;
  margin-bottom: 28px;
}

.lab-tags span,
.project-status span {
  border: 1px solid rgba(83, 63, 45, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.48);
  color: var(--text-secondary);
  font-size: 0.86rem;
  padding: 7px 11px;
}

.lab-hero-copy .home-actions {
  position: relative;
  z-index: 1;
}

.lab-console {
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

.lab-console::before {
  content: '';
  position: absolute;
  inset: 64px 20px 20px;
  border-radius: 28px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 30px 30px;
}

.console-topbar,
.console-profile,
.console-lines {
  position: relative;
  z-index: 1;
}

.console-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(247, 239, 231, 0.62);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

.console-topbar span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(247, 239, 231, 0.32);
}

.console-topbar span:first-child {
  background: #b94a40;
}

.console-topbar strong {
  margin-left: 8px;
  font-weight: 500;
}

.console-profile {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 58px 0 34px;
}

.console-profile img {
  width: 86px;
  height: 86px;
  border-radius: 24px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.console-profile p {
  margin: 0 0 6px;
  color: rgba(247, 239, 231, 0.66);
}

.console-profile strong {
  display: block;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.55rem;
  font-weight: 500;
}

.console-lines {
  display: grid;
  gap: 14px;
  margin-top: 30px;
}

.console-lines p {
  margin: 0;
  padding: 14px 15px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(247, 239, 231, 0.8);
  line-height: 1.65;
}

.console-lines span {
  display: inline-block;
  min-width: 78px;
  color: #e7c37f;
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.82rem;
}

.lab-stats {
  padding: 22px 0 44px;
}

.lab-stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.lab-stat-grid article {
  min-height: 132px;
  padding: 22px;
  border-radius: 24px;
  background: rgba(255, 253, 249, 0.8);
  border: 1px solid rgba(88, 66, 47, 0.1);
}

.lab-stat-grid strong {
  display: block;
  margin-bottom: 10px;
  color: var(--text-primary);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
}

.lab-stat-grid span {
  color: var(--text-secondary);
}

.lab-section-head {
  max-width: 760px;
  margin-bottom: 24px;
}

.lab-section-head h2,
.lab-cta-card h2 {
  margin: 8px 0 12px;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0;
}

.lab-section-head p,
.lab-cta-card p {
  color: var(--text-secondary);
  line-height: 1.9;
}

.lab-map-grid,
.lab-project-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.lab-project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.lab-map-card,
.lab-project-card {
  position: relative;
  min-height: 300px;
  border-radius: 28px;
  padding: 24px;
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.lab-map-card:hover,
.lab-project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 28px 78px rgba(68, 48, 34, 0.12);
}

.lab-map-card span {
  color: var(--text-muted);
  font-size: 0.76rem;
  letter-spacing: 0.14em;
}

.lab-map-card h3,
.lab-project-card h3 {
  margin: 18px 0 12px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.18;
}

.lab-map-card p,
.lab-project-card p {
  color: var(--text-secondary);
  line-height: 1.82;
}

.lab-project-card .project-slogan {
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

.lab-map-card a {
  position: absolute;
  left: 24px;
  bottom: 22px;
  color: var(--accent);
  font-weight: 700;
}

.project-code {
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

.lab-project-card:nth-child(2) .project-code {
  background: #b94a40;
}

.lab-project-card:nth-child(3) .project-code {
  background: #80623d;
}

.lab-writing-grid {
  align-items: start;
}

.lab-note-list {
  display: grid;
  gap: 12px;
}

.lab-note-list a {
  display: grid;
  grid-template-columns: 46px 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 253, 249, 0.78);
  border: 1px solid rgba(88, 66, 47, 0.1);
}

.lab-note-list span {
  color: var(--accent);
  font-weight: 800;
}

.lab-note-list strong {
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.2rem;
  font-weight: 500;
}

.lab-note-list em {
  color: var(--text-muted);
  font-style: normal;
  font-size: 0.86rem;
}

.lab-cta-card {
  position: relative;
  border-radius: 34px;
  padding: clamp(28px, 5vw, 48px);
  overflow: hidden;
}

.lab-cta-card::after {
  content: 'AVAILABLE';
  position: absolute;
  right: -24px;
  top: 22px;
  color: rgba(185, 74, 64, 0.08);
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 900;
  letter-spacing: 0.08em;
}

.lab-cta-card h2,
.lab-cta-card p,
.lab-cta-card .section-label,
.cta-contact-row {
  position: relative;
  z-index: 1;
}

.cta-contact-row {
  margin-top: 22px;
}

.cta-contact-row a {
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
  .live-dot,
  .lab-hero::before,
  .lab-hero::after {
    animation: none;
  }
}

@media (max-width: 1100px) {
  .lab-hero-grid,
  .lab-writing-grid,
  .lab-project-grid {
    grid-template-columns: 1fr;
  }

  .lab-map-grid,
  .lab-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lab-hero-copy,
  .lab-console {
    min-height: auto;
  }
}

@media (max-width: 700px) {
  .lab-hero {
    padding-top: calc(var(--nav-height) + 26px);
    overflow: hidden;
  }

  .lab-hero-grid {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  .lab-hero-copy,
  .lab-console,
  .lab-cta-card {
    width: 100%;
    max-width: calc(100vw - 36px);
    border-radius: 26px;
    padding: 22px;
  }

  .lab-hero h1 {
    max-width: 100%;
    font-size: clamp(2.45rem, 11vw, 3.35rem);
    line-height: 1.02;
  }

  .hero-mobile-break {
    display: block;
  }

  .lab-lead {
    width: calc(100vw - 88px);
    max-width: 100%;
  }

  .lab-map-grid,
  .lab-stat-grid {
    grid-template-columns: 1fr;
  }

  .lab-note-list a {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .console-profile {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 34px;
  }
}

/* Outcome-first service summary, placed directly after the homepage hero. */
.help-section {
  position: relative;
  padding: 82px 0 54px;
  overflow: hidden;
  border-top: 1px solid rgba(58, 105, 82, 0.14);
  border-bottom: 1px solid rgba(58, 105, 82, 0.14);
  background:
    linear-gradient(135deg, rgba(45, 95, 86, 0.065), transparent 48%),
    rgba(250, 246, 239, 0.72);
}

.help-section::before {
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

.help-section .container {
  position: relative;
  z-index: 1;
}

.help-head {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
  gap: clamp(36px, 7vw, 96px);
  align-items: end;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(78, 46, 29, 0.16);
}

.help-head h2 {
  max-width: 18ch;
  margin-top: 10px;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(2.7rem, 3.8vw, 3.35rem);
  font-weight: 500;
  line-height: 1.08;
}

.help-head > p {
  max-width: 500px;
  color: var(--text-secondary);
  line-height: 1.9;
}

.help-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-left: 1px solid rgba(78, 46, 29, 0.14);
}

.help-card {
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

.help-card:hover {
  background: rgba(255, 253, 249, 0.96);
  transform: translateY(-3px);
}

.help-index {
  color: #3b7057;
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.75rem;
  font-weight: 800;
}

.help-card h3 {
  min-height: 2.7em;
  margin: 30px 0 18px;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.35;
}

.help-situation {
  min-height: 106px;
  color: var(--text-secondary);
  line-height: 1.85;
}

.help-situation b {
  display: block;
  margin-bottom: 5px;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.help-delivery {
  min-height: 150px;
  margin: 24px 0;
  padding: 18px 0 18px 18px;
  border-left: 3px solid #3b7057;
}

.help-delivery span,
.help-proof span,
.help-next span {
  display: block;
  margin-bottom: 7px;
  color: #3b7057;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.help-delivery p {
  color: var(--text-primary);
  line-height: 1.8;
}

.help-proof {
  margin-bottom: 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(78, 46, 29, 0.12);
}

.help-proof strong {
  font-size: 0.9rem;
  line-height: 1.6;
}

.help-card > a {
  margin-top: auto;
  color: var(--accent);
  font-weight: 800;
}

.help-card > a:hover,
.help-card > a:focus-visible {
  color: #315f49;
}

.help-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 24px 0 0;
}

.help-next p {
  color: var(--text-secondary);
  line-height: 1.75;
}

.help-next span {
  display: inline;
  margin: 0 12px 0 0;
}

.help-next > a {
  flex: 0 0 auto;
  padding: 12px 18px;
  border: 1px solid rgba(58, 105, 82, 0.34);
  color: #315f49;
  font-weight: 800;
  background: rgba(255, 252, 247, 0.74);
}

.help-next > a:hover,
.help-next > a:focus-visible {
  border-color: #3b7057;
  background: #3b7057;
  color: #fffdf7;
}

@media (max-width: 900px) {
  .help-head {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .help-grid {
    grid-template-columns: 1fr;
  }

  .help-card {
    min-height: auto;
  }

  .help-card h3,
  .help-situation,
  .help-delivery {
    min-height: 0;
  }
}

@media (max-width: 700px) {
  .help-section {
    padding: 62px 0 42px;
  }

  .help-head h2 {
    font-size: clamp(2.35rem, 11vw, 3.25rem);
  }

  .help-card {
    padding: 24px 20px;
  }

  .help-next {
    align-items: stretch;
    flex-direction: column;
    gap: 18px;
  }

  .help-next > a {
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .help-card {
    transition: none;
  }
}


/* ============================================
   YSC Page Styles
   Inner pages aligned with the homepage editorial system
   ============================================ */

.page-intro {
  position: relative;
  padding: 148px 0 52px;
  overflow: hidden;
}

.page-intro::before {
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

.page-intro-grid,
.page-intro-single {
  position: relative;
  z-index: 1;
}

.page-intro-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(310px, 0.85fr);
  gap: 36px;
  align-items: end;
}

.page-intro-single {
  max-width: 820px;
}

.page-kicker {
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 18px;
}

.page-intro h1 {
  max-width: 11ch;
  font-size: clamp(2.8rem, 6vw, 5.1rem);
  line-height: 0.96;
  letter-spacing: -0.055em;
  margin-bottom: 22px;
}

.page-intro-single h1 {
  max-width: 12ch;
}

.page-summary {
  max-width: 590px;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.9;
}

.page-intro-card {
  padding: 28px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.86), rgba(246, 239, 230, 0.9)),
    radial-gradient(circle at top right, rgba(239, 193, 109, 0.12), transparent 32%);
  border: 1px solid rgba(91, 63, 41, 0.12);
  box-shadow: 0 22px 60px rgba(83, 53, 37, 0.1);
}

.page-profile-avatar {
  width: 94px;
  height: 94px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
}

.page-intro-card h2 {
  font-size: 1.5rem;
  margin-bottom: 6px;
}

.page-intro-card > p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.page-profile-points {
  display: grid;
  gap: 10px;
  margin-top: 18px;
}

.page-profile-points li {
  position: relative;
  padding-left: 16px;
  color: var(--text-secondary);
}

.page-profile-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.editor-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.editor-stat {
  padding: 24px 20px;
  border-top: 1px solid rgba(78, 46, 29, 0.14);
}

.editor-stat strong {
  display: block;
  font-size: 2rem;
  line-height: 1;
  color: var(--accent);
  margin-bottom: 10px;
}

.editor-stat span {
  color: var(--text-secondary);
  line-height: 1.7;
}

.narrative-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 34px;
}

.narrative-block .section-title,
.narrative-block .section-label {
  text-align: left;
}

.narrative-block .section-title {
  max-width: 11ch;
  margin-bottom: 18px;
}

.narrative-text {
  max-width: 580px;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 14px;
}

.focus-list {
  display: grid;
  gap: 18px;
}

.focus-sheet {
  padding: 24px 26px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 250, 242, 0.72), rgba(246, 239, 230, 0.86));
  border: 1px solid rgba(91, 63, 41, 0.1);
}

.focus-sheet-label {
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.focus-sheet h3 {
  font-size: 1.22rem;
  margin: 10px 0 8px;
}

.focus-sheet p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.editor-timeline {
  display: grid;
  gap: 18px;
}

.editor-timeline-item {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 24px;
  padding: 24px 26px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 250, 242, 0.72), rgba(246, 239, 230, 0.88));
  border: 1px solid rgba(91, 63, 41, 0.1);
}

.editor-timeline-year {
  font-size: 0.86rem;
  letter-spacing: 0.12em;
  color: var(--accent);
  font-weight: 700;
}

.editor-timeline-item h3 {
  font-size: 1.22rem;
  margin-bottom: 8px;
}

.editor-timeline-item p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.editor-filter-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.filter-btn {
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid rgba(78, 46, 29, 0.12);
  background: rgba(255, 252, 247, 0.72);
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: all var(--transition-normal);
}

.filter-btn:hover,
.filter-btn.active,
.filter-tag:hover,
.filter-tag.active {
  color: #fff;
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 10px 26px rgba(181, 83, 45, 0.18);
}

.editor-article-list {
  display: grid;
  gap: 18px;
}

.editor-article {
  position: relative;
  padding: 28px;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255, 251, 243, 0.8), rgba(246, 239, 230, 0.92)),
    radial-gradient(circle at top right, rgba(239, 191, 102, 0.1), transparent 28%);
  border: 1px solid rgba(91, 63, 41, 0.1);
  overflow: hidden;
}

.editor-article-featured {
  background:
    linear-gradient(180deg, rgba(255, 251, 243, 0.86), rgba(248, 237, 224, 0.96)),
    radial-gradient(circle at 88% 16%, rgba(185, 93, 55, 0.14), transparent 26%);
}

.editor-article-number {
  position: absolute;
  right: 24px;
  top: 22px;
  color: rgba(181, 83, 45, 0.16);
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  line-height: 1;
  pointer-events: none;
}

.editor-article-meta {
  font-size: 0.82rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  margin-bottom: 14px;
}

.editor-article h2 {
  position: relative;
  z-index: 1;
  font-size: 1.48rem;
  line-height: 1.3;
  margin-bottom: 10px;
}

.editor-article p {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: var(--text-secondary);
  line-height: 1.85;
}

.editor-article .reading-link {
  margin-top: 18px;
}

.editor-works-grid .work-card {
  opacity: 1;
  transform: none;
}

.editor-works-grid .work-card-image {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(31, 24, 18, 0.68);
}

.blog-empty {
  margin-top: 10px;
  padding: 24px 0;
  color: var(--text-secondary);
}

.contact-editor-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 28px;
}

.contact-sheet,
.contact-card,
.resume-block {
  padding: 28px;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.8), rgba(246, 239, 230, 0.92)),
    radial-gradient(circle at top right, rgba(239, 191, 102, 0.08), transparent 30%);
  border: 1px solid rgba(91, 63, 41, 0.1);
}

.contact-sheet h2 {
  font-size: 1.55rem;
  margin-bottom: 10px;
}

.contact-sheet-intro {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 22px;
}

.contact-form {
  display: grid;
  gap: 18px;
}

.form-group {
  display: grid;
  gap: 8px;
}

.form-group label {
  font-size: 0.92rem;
  color: var(--text-secondary);
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 13px 16px;
  border-radius: 16px;
  border: 1px solid rgba(78, 46, 29, 0.12);
  background: rgba(255, 252, 247, 0.86);
  color: var(--text-primary);
  font: inherit;
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.contact-side-stack {
  display: grid;
  gap: 18px;
}

.contact-card-label {
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--text-muted);
}

.contact-card h3 {
  font-size: 1.25rem;
  margin: 10px 0 14px;
}

.contact-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.contact-detail {
  display: grid;
  gap: 4px;
  padding: 12px 0;
  border-top: 1px solid rgba(78, 46, 29, 0.08);
}

.contact-detail strong {
  font-size: 0.9rem;
}

.contact-detail span {
  color: var(--text-secondary);
}

.form-success {
  display: none;
  margin-top: 18px;
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(181, 83, 45, 0.08);
  color: var(--accent);
  line-height: 1.8;
}

.form-success.show {
  display: block;
}

.resume-layout {
  display: grid;
  gap: 20px;
}

.resume-block .section-title,
.resume-block .section-label {
  text-align: left;
}

.resume-block .section-title {
  margin-bottom: 18px;
}

.resume-list,
.resume-projects {
  display: grid;
  gap: 16px;
}

.resume-item,
.resume-project-card {
  padding-top: 14px;
  border-top: 1px solid rgba(78, 46, 29, 0.1);
}

.resume-item-top {
  display: grid;
  gap: 6px;
  margin-bottom: 10px;
}

.resume-period {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  font-weight: 700;
}

.resume-item h3,
.resume-project-card h3 {
  font-size: 1.18rem;
}

.resume-item p,
.resume-project-card p,
.resume-note {
  color: var(--text-secondary);
  line-height: 1.85;
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.capability-card {
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 251, 243, 0.7), rgba(246, 239, 230, 0.9));
  border: 1px solid rgba(91, 63, 41, 0.08);
}

.capability-card h3 {
  font-size: 1.06rem;
  margin-bottom: 8px;
}

.capability-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.post-header,
.post-cover,
.post-content,
.post-nav {
  max-width: 820px;
}

.post-header {
  padding: calc(var(--nav-height) + 54px) 0 30px;
}

.post-kicker {
  margin-bottom: 12px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.post-back {
  display: inline-flex;
  gap: 6px;
  color: var(--text-secondary);
  margin-bottom: 22px;
}

.post-header h1 {
  font-size: clamp(2rem, 5vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 14px;
}

.post-meta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.post-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(181, 83, 45, 0.1);
  color: var(--accent);
}

.tag.tag-purple,
.tag.tag-pink {
  background: rgba(181, 83, 45, 0.1);
  color: var(--accent);
}

.post-cover,
.post-content .img-placeholder {
  border: 1px solid rgba(91, 63, 41, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 250, 242, 0.7), rgba(246, 239, 230, 0.9)),
    radial-gradient(circle at top right, rgba(208, 68, 39, 0.12), transparent 16%);
  color: var(--text-secondary);
}

.post-cover {
  position: relative;
  display: grid;
  gap: 14px;
  min-height: 250px;
  margin-bottom: 36px;
  padding: clamp(28px, 5vw, 46px);
  border-radius: 28px;
  overflow: hidden;
}

.post-cover::after {
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

.post-cover span,
.post-cover strong,
.post-cover em {
  display: block;
  position: relative;
  z-index: 1;
}

.post-cover span {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.post-cover strong {
  max-width: 12em;
  color: var(--text-primary);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: clamp(2.05rem, 5vw, 3.6rem);
  font-weight: 500;
  line-height: 1.08;
  overflow-wrap: anywhere;
}

.post-cover em {
  color: var(--text-muted);
  font-style: normal;
  line-height: 1.7;
}

.post-cover-workflow {
  background:
    linear-gradient(135deg, rgba(255, 251, 243, 0.82), rgba(241, 229, 214, 0.94)),
    radial-gradient(circle at 86% 24%, rgba(45, 95, 86, 0.12), transparent 25%);
}

.post-cover-media {
  background:
    linear-gradient(135deg, rgba(36, 31, 28, 0.97), rgba(58, 42, 32, 0.96)),
    radial-gradient(circle at 84% 18%, rgba(231, 195, 127, 0.2), transparent 28%);
}

.post-cover-media strong,
.post-cover-media em {
  color: #f7efe7;
}

.post-cover-media span {
  color: #e7c37f;
}

.post-cover-fde {
  background:
    linear-gradient(135deg, rgba(34, 31, 30, 0.96), rgba(39, 55, 52, 0.96)),
    radial-gradient(circle at 84% 18%, rgba(49, 95, 73, 0.24), transparent 30%);
}

.post-cover-fde::after {
  background: rgba(187, 93, 55, 0.16);
}

.post-cover-fde strong,
.post-cover-fde em {
  color: #f7efe7;
}

.post-cover-fde span {
  color: #e7c37f;
}

.post-content {
  --writing-accent: #bb5d37;
  --writing-accent-dark: #8f3f23;
  --writing-green: #315f49;
  --writing-ink: #241b15;
  --writing-muted: #7b6d62;
  --writing-line: rgba(78, 46, 29, 0.13);
  --writing-paper: rgba(255, 253, 249, 0.76);
  padding-bottom: 54px;
}

.post-lead {
  color: var(--text-primary);
  font-size: 1.18rem;
  line-height: 2;
}

.post-content h2 {
  color: var(--writing-ink);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.72rem;
  font-weight: 600;
  line-height: 1.34;
  margin: 54px 0 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--writing-line);
}

.post-content h3 {
  padding-left: 12px;
  border-left: 3px solid var(--writing-accent);
  font-size: 1.28rem;
  line-height: 1.42;
  margin: 32px 0 12px;
}

.post-content p,
.post-content li {
  color: var(--writing-ink);
  line-height: 1.9;
}

.post-content p {
  margin: 14px 0;
}

.post-content blockquote {
  margin: 28px 0;
  padding: 18px 22px;
  border-left: 4px solid var(--writing-accent);
  border-radius: 0 16px 16px 0;
  background: rgba(181, 83, 45, 0.08);
  color: var(--writing-muted);
}

.post-content blockquote p {
  margin: 0;
}

.post-content strong {
  color: var(--writing-ink);
  font-weight: 800;
}

.post-mark {
  border-bottom: 2px solid rgba(187, 93, 55, 0.34);
  font-weight: 700;
}

.post-anchor {
  color: var(--writing-accent-dark);
  font-weight: 800;
}

.post-keyline {
  margin: 34px 0;
  border: 0;
  border-top: 1px solid var(--writing-line);
}

.post-pullquote {
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

.post-note {
  margin: 28px 0;
  padding: 18px 20px;
  border-left: 4px solid var(--writing-green);
  border-radius: 0 16px 16px 0;
  background: rgba(49, 95, 73, 0.08);
}

.post-summary-card,
.post-callout,
.post-compare,
.post-step-grid,
.post-assets {
  margin: 28px 0;
}

.post-summary-card,
.post-callout {
  padding: 24px;
  border: 1px solid rgba(91, 63, 41, 0.12);
  border-radius: 22px;
  background:
    linear-gradient(180deg, rgba(255, 253, 248, 0.86), rgba(247, 238, 226, 0.92));
}

.post-summary-card span,
.post-callout span,
.post-step-grid span,
.post-compare span,
.post-assets span {
  display: block;
  margin-bottom: 8px;
  color: var(--writing-accent);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.post-summary-card p,
.post-callout p {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.05rem;
}

.article-index {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0 10px;
  padding: 18px 0;
  border-top: 1px solid var(--writing-line);
  border-bottom: 1px solid var(--writing-line);
}

.article-index a {
  padding: 8px 12px;
  border: 1px solid rgba(91, 63, 41, 0.12);
  border-radius: 999px;
  background: rgba(255, 253, 249, 0.7);
  color: var(--text-secondary);
  font-size: 0.88rem;
}

.article-index a:hover {
  border-color: rgba(181, 83, 45, 0.32);
  color: var(--writing-accent);
}

.post-step-grid,
.post-compare,
.post-assets {
  display: grid;
  gap: 14px;
}

.post-step-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.post-step-grid div,
.post-compare div,
.post-assets div {
  padding: 20px;
  border: 1px solid rgba(91, 63, 41, 0.1);
  border-radius: 18px;
  background: var(--writing-paper);
}

.post-step-grid strong {
  display: block;
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.65;
}

.post-checklist,
.post-number-list {
  display: grid;
  gap: 10px;
  margin: 24px 0;
}

.post-checklist li,
.post-number-list li {
  position: relative;
  padding: 14px 16px 14px 42px;
  border: 1px solid rgba(91, 63, 41, 0.1);
  border-radius: 16px;
  background: var(--writing-paper);
}

.post-checklist li::before {
  content: '✓';
  position: absolute;
  left: 16px;
  top: 14px;
  color: #315f49;
  font-weight: 900;
}

.post-number-list {
  counter-reset: post-counter;
}

.post-number-list li {
  counter-increment: post-counter;
}

.post-number-list li::before {
  content: counter(post-counter, decimal-leading-zero);
  position: absolute;
  left: 14px;
  top: 15px;
  color: var(--writing-accent);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
}

.post-compare {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.post-compare div:first-child {
  background: rgba(246, 239, 230, 0.72);
}

.post-compare p,
.post-assets p {
  margin: 0;
  color: var(--text-secondary);
}

.post-pill-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0;
}

.post-pill-grid span {
  padding: 10px 13px;
  border: 1px solid rgba(91, 63, 41, 0.12);
  border-radius: 999px;
  background: rgba(255, 253, 249, 0.7);
  color: var(--text-primary);
  font-weight: 700;
}

.post-assets {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.post-content pre {
  margin: 24px 0;
  padding: 20px 22px;
  border-radius: 18px;
  background: #231913;
  color: #f4ede6;
  overflow-x: auto;
}

.post-content code {
  padding: 2px 6px;
  border-radius: 6px;
  background: rgba(181, 83, 45, 0.1);
  color: var(--accent);
}

.post-content pre code {
  padding: 0;
  background: none;
  color: inherit;
}

.post-nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 0 40px;
  border-top: 1px solid rgba(78, 46, 29, 0.12);
}

.post-nav a {
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 18px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255, 251, 243, 0.82), rgba(246, 239, 230, 0.92));
  border: 1px solid rgba(91, 63, 41, 0.1);
}

.post-nav .label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.post-nav .title {
  font-weight: 600;
}

@media (max-width: 1024px) {
  .page-intro-grid,
  .narrative-grid,
  .editor-stats {
    grid-template-columns: 1fr 1fr;
  }

  .contact-editor-grid {
    grid-template-columns: 1fr;
  }

  .page-intro-grid > :first-child,
  .narrative-grid > :first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .page-intro {
    padding: 120px 0 40px;
  }

  .page-intro-grid,
  .editor-stats,
  .narrative-grid,
  .capability-grid {
    grid-template-columns: 1fr;
  }

  .page-intro h1,
  .page-intro-single h1,
  .narrative-block .section-title {
    max-width: none;
  }

  .editor-timeline-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .post-nav {
    flex-direction: column;
  }

  .post-nav a {
    max-width: 100%;
  }

  .post-cover {
    min-height: 220px;
    border-radius: 22px;
  }

  .post-header.container {
    padding-left: 24px;
    padding-right: 24px;
  }

  .post-header h1 {
    font-size: clamp(1.85rem, 8.4vw, 2.4rem);
    line-height: 1.12;
    overflow-wrap: anywhere;
    word-break: break-all;
  }

  .post-cover strong {
    max-width: 100%;
    font-size: clamp(1.75rem, 7.8vw, 2.25rem);
    word-break: break-all;
  }

  .article-index,
  .post-pill-grid {
    gap: 8px;
  }

  .article-index a,
  .post-pill-grid span {
    font-size: 0.82rem;
  }

  .post-step-grid,
  .post-compare,
  .post-assets {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .editor-filter-bar {
    gap: 8px;
  }

  .filter-btn,
  .filter-tag {
    font-size: 0.82rem;
    padding: 8px 14px;
  }

  .editor-article,
  .focus-sheet,
  .editor-timeline-item,
  .page-intro-card {
    padding: 22px 20px;
  }
}

/* 2026 interaction layer: signal, routing and live updates */
.signal-strip {
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

.signal-track {
  display: flex;
  width: max-content;
  animation: signalMarquee 34s linear infinite;
}

.signal-track > span {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 30px;
  border-right: 1px solid rgba(78, 46, 29, 0.1);
  color: var(--text-secondary);
  font-size: 0.75rem;
  white-space: nowrap;
}

.signal-track b {
  margin-right: 9px;
  color: var(--accent);
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
}

@keyframes signalMarquee {
  to { transform: translateX(-50%); }
}

.console-build {
  position: relative;
  z-index: 1;
  margin-top: 18px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.16);
}

.console-build > div:first-child {
  display: grid;
  grid-template-columns: 82px 1fr;
  gap: 10px;
  align-items: center;
}

.console-build span,
.console-build small {
  color: rgba(247, 239, 231, 0.46);
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.72rem;
}

.console-build strong {
  color: #f7efe7;
  font-size: 0.88rem;
  font-weight: 500;
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.console-build strong.switching {
  opacity: 0;
  transform: translateY(5px);
}

.console-progress {
  height: 3px;
  margin: 13px 0 9px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
}

.console-progress i {
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

.route-section {
  padding: 34px 0 72px;
}

.route-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 18px;
}

.route-heading h2 {
  margin: 0;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 500;
}

.route-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid rgba(78, 46, 29, 0.14);
  border-left: 1px solid rgba(78, 46, 29, 0.14);
}

.route-grid a {
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

.route-grid a:hover {
  background: #252827;
  color: #f7efe7;
}

.route-grid > a > span {
  color: var(--accent);
  font-family: Georgia, serif;
}

.route-grid strong,
.route-grid small {
  display: block;
}

.route-grid strong {
  margin-bottom: 5px;
  font-size: 1rem;
}

.route-grid small {
  color: var(--text-muted);
  line-height: 1.5;
}

.route-grid a:hover small {
  color: rgba(247, 239, 231, 0.58);
}

.route-grid i {
  color: var(--accent);
  font-style: normal;
  font-weight: 800;
}

.lab-updates-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(460px, 1.2fr);
  gap: 54px;
  align-items: start;
}

.update-list {
  display: grid;
  border-top: 1px solid rgba(78, 46, 29, 0.15);
}

.update-list a {
  display: grid;
  grid-template-columns: 142px 1fr auto;
  gap: 20px;
  align-items: center;
  min-height: 82px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(78, 46, 29, 0.15);
}

.update-list span {
  color: var(--accent);
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
}

.update-list strong {
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.08rem;
  font-weight: 500;
  line-height: 1.55;
}

.update-list em {
  color: var(--text-muted);
  font-size: 0.82rem;
  font-style: normal;
  white-space: nowrap;
}

.quick-access-trigger {
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

.quick-access-trigger > span {
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-size: 0.82rem;
}

.quick-access-trigger strong {
  font-size: 0.84rem;
}

.quick-access-overlay {
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

.quick-access-overlay.open {
  visibility: visible;
  opacity: 1;
}

.quick-access-panel {
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

.quick-access-overlay.open .quick-access-panel {
  transform: translateY(0) scale(1);
}

.quick-access-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
  border-bottom: 1px solid rgba(78, 46, 29, 0.12);
}

.quick-access-head span {
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.quick-access-head h2 {
  margin: 8px 0 0;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 2rem;
  font-weight: 500;
}

.quick-access-close {
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

.quick-access-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.quick-access-links a {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 12px;
  min-height: 126px;
  padding: 22px;
  border-right: 1px solid rgba(78, 46, 29, 0.12);
  border-bottom: 1px solid rgba(78, 46, 29, 0.12);
}

.quick-access-links a:nth-child(even) {
  border-right: 0;
}

.quick-access-links span {
  color: var(--accent);
  font-family: Georgia, serif;
}

.quick-access-links strong,
.quick-access-links em {
  grid-column: 2;
}

.quick-access-links strong {
  font-size: 1.04rem;
}

.quick-access-links em {
  align-self: end;
  color: var(--text-muted);
  font-size: 0.82rem;
  font-style: normal;
}

.quick-access-links a:hover {
  background: rgba(185, 74, 64, 0.06);
}

body.quick-access-open {
  overflow: hidden;
}

@media (max-width: 900px) {
  .lab-updates-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

@media (max-width: 700px) {
  .lab-hero {
    padding-top: calc(var(--nav-height) + 52px);
  }

  .route-heading {
    display: block;
  }

  .route-heading .section-label {
    margin-bottom: 8px;
  }

  .route-grid,
  .quick-access-links {
    grid-template-columns: 1fr;
  }

  .quick-access-links a,
  .quick-access-links a:nth-child(even) {
    min-height: 98px;
    border-right: 0;
  }

  .update-list a {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 18px 0;
  }

  .quick-access-trigger {
    left: 14px;
    bottom: 14px;
  }

  .quick-access-overlay {
    align-items: end;
    padding: 10px;
  }

  .quick-access-panel {
    max-height: calc(100vh - 20px);
  }

  .console-build > div:first-child {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}

/* Prevent short Chinese headings from leaving an orphan character. */
.lab-updates-grid {
  grid-template-columns: minmax(440px, 0.95fr) minmax(460px, 1.05fr);
}

.lab-updates .lab-section-head,
.lab-writing .lab-section-head {
  max-width: none;
}

.lab-updates .lab-section-head h2,
.lab-writing .lab-section-head h2 {
  max-width: none;
  font-size: clamp(2.5rem, 4vw, 3.55rem);
  line-height: 1.12;
  text-wrap: balance;
}

.quick-access-trigger {
  border: 2px solid #3f735b;
  background: rgba(250, 247, 239, 0.96);
  color: #294b3b;
  box-shadow: 0 12px 34px rgba(47, 91, 70, 0.18);
  animation: quickAccessGuide 2.4s ease-out infinite;
}

.quick-access-trigger > span {
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
  .lab-updates-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .lab-updates .lab-section-head h2,
  .lab-writing .lab-section-head h2 {
    font-size: clamp(2.35rem, 11vw, 3.2rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .quick-access-trigger {
    animation: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .signal-track,
  .console-progress i {
    animation: none;
  }
}

/* Hero console refinement */
.lab-console {
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(48, 42, 38, 0.98), rgba(31, 30, 29, 0.99));
}

.console-profile {
  margin: 42px 0 22px;
}

.console-profile img {
  width: 78px;
  height: 78px;
  border-radius: 8px;
}

.console-lines {
  gap: 0;
  margin-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.console-lines p {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 14px;
  align-items: baseline;
  padding: 15px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  background: transparent;
}

.console-lines span {
  min-width: 0;
}

.console-build {
  margin-top: 16px;
  padding: 14px 4px 15px;
  border-width: 1px 0;
  background: transparent;
}

.console-manifesto {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 150px;
  padding: 28px 4px 6px;
}

.console-manifesto > span,
.console-manifesto > small {
  color: rgba(247, 239, 231, 0.42);
  font-family: 'SF Mono', 'Cascadia Code', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
}

.console-manifesto strong {
  max-width: 12ch;
  margin: 10px 0 14px;
  color: #f7efe7;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(1.65rem, 3vw, 2.35rem);
  font-weight: 500;
  line-height: 1.28;
}

@media (max-width: 700px) {
  .lab-console {
    border-radius: 18px;
  }

  .console-lines p {
    grid-template-columns: 76px minmax(0, 1fr);
    gap: 10px;
  }

  .console-manifesto {
    min-height: 180px;
  }
}

/* 2026 content architecture upgrade */
.fade-in,
.fade-in-left,
.fade-in-right {
  opacity: 1;
}

.page-intro h1 {
  letter-spacing: 0;
}

.profile-inline {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-inline .page-profile-avatar {
  margin: 0;
}

.profile-inline h2,
.profile-inline p {
  margin: 0;
}

.about-document-section {
  padding-top: 28px;
}

.about-document-grid {
  display: grid;
  grid-template-columns: 210px minmax(0, 760px);
  justify-content: center;
  gap: 64px;
  align-items: start;
}

.about-toc {
  position: sticky;
  top: 112px;
  display: grid;
  gap: 13px;
  padding: 18px 0;
  border-top: 1px solid rgba(78, 46, 29, 0.16);
}

.about-toc span {
  color: var(--text-muted);
  font-size: 0.76rem;
  letter-spacing: 0.12em;
}

.about-toc a {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.about-toc a:hover {
  color: var(--accent);
}

.about-document {
  min-width: 0;
}

.about-lead-block,
.about-chapter {
  scroll-margin-top: 104px;
}

.about-lead-block {
  padding-bottom: 54px;
}

.about-dropcap {
  color: var(--text-primary);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.35rem;
  line-height: 2;
}

.about-dropcap::first-letter {
  float: left;
  margin: 10px 10px 0 0;
  color: var(--accent);
  font-size: 4.4rem;
  line-height: 0.72;
}

.about-document blockquote {
  margin: 28px 0 0;
  padding: 20px 24px;
  border-left: 4px solid var(--accent);
  background: rgba(255, 250, 242, 0.72);
  color: var(--text-primary);
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.2rem;
}

.about-chapter {
  padding: 56px 0;
  border-top: 1px solid rgba(78, 46, 29, 0.13);
}

.about-chapter h2 {
  margin: 8px 0 22px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 500;
  line-height: 1.16;
}

.about-chapter > p {
  color: var(--text-secondary);
  font-size: 1.02rem;
  line-height: 1.95;
}

.identity-list,
.about-numbered {
  display: grid;
  gap: 12px;
}

.identity-list > div,
.about-numbered > div {
  padding: 20px 0;
  border-bottom: 1px solid rgba(78, 46, 29, 0.1);
}

.identity-list strong,
.about-numbered h3 {
  display: block;
  margin-bottom: 8px;
  font-size: 1.15rem;
}

.identity-list p,
.about-numbered p {
  color: var(--text-secondary);
  line-height: 1.85;
}

.about-proof-row,
.product-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 28px 0;
}

.about-proof-row > div,
.product-facts > div {
  padding: 18px;
  border: 1px solid rgba(78, 46, 29, 0.1);
  background: rgba(255, 252, 247, 0.72);
}

.about-proof-row strong,
.product-facts strong {
  display: block;
  margin-bottom: 8px;
  color: var(--accent);
  font-size: 1.45rem;
}

.about-proof-row span,
.product-facts span {
  color: var(--text-secondary);
  font-size: 0.88rem;
}

.about-numbered > div {
  display: grid;
  grid-template-columns: 48px 1fr;
  column-gap: 18px;
}

.about-numbered > div > span {
  grid-row: 1 / 3;
  color: var(--accent);
  font-family: Georgia, serif;
  font-size: 1.4rem;
}

.about-checklist {
  display: grid;
  gap: 10px;
  margin: 24px 0 28px;
}

.about-checklist li {
  position: relative;
  padding: 13px 14px 13px 42px;
  background: rgba(255, 252, 247, 0.66);
  border: 1px solid rgba(78, 46, 29, 0.1);
}

.about-checklist li::before {
  content: '✓';
  position: absolute;
  left: 15px;
  color: #2d5f56;
  font-weight: 800;
}

.belief-list {
  display: grid;
  gap: 0;
}

.belief-list li {
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 12px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(78, 46, 29, 0.1);
}

.belief-list span {
  color: var(--accent);
  font-family: Georgia, serif;
}

.belief-list p {
  color: var(--text-secondary);
  line-height: 1.75;
}

.footer-bottom-stack {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
}

.footer-bottom-stack a {
  color: #3f735b;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: rgba(63, 115, 91, 0.34);
  text-underline-offset: 3px;
}

.official-account-hover {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: inherit;
  cursor: pointer;
  border-bottom: 1px dashed rgba(63, 115, 91, 0.34);
  outline: none;
}

.official-account-hover::after {
  content: '';
  width: 4px;
  height: 4px;
  margin-left: 4px;
  border-radius: 50%;
  background: #3f735b;
  opacity: 0.72;
}

.official-account-hover:focus-visible {
  border-radius: 3px;
  outline: 2px solid rgba(63, 115, 91, 0.3);
  outline-offset: 3px;
}

.official-account-popover {
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

.official-account-caption {
  color: #2f684f;
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
}

.official-account-popover img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
}

.official-account-hover:hover > .official-account-popover,
.official-account-hover:focus > .official-account-popover,
.official-account-hover.active > .official-account-popover {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
}

.product-case-list {
  display: grid;
  gap: 22px;
}

.product-case {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: 28px;
  padding: clamp(24px, 5vw, 46px);
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: rgba(255, 252, 247, 0.78);
  box-shadow: 0 22px 60px rgba(83, 53, 37, 0.07);
  scroll-margin-top: 100px;
}

.product-case-featured {
  background: linear-gradient(135deg, rgba(235, 248, 241, 0.94), rgba(255, 252, 247, 0.9));
}

.product-case-geo {
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  align-items: stretch;
  background: linear-gradient(135deg, rgba(237, 243, 222, 0.92), rgba(252, 249, 238, 0.94));
}

.product-case-geo .product-case-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-case-geo .product-case-lead {
  max-width: 610px;
}

.product-mark {
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

.product-case-meta,
.product-status-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 24px;
  color: var(--text-muted);
  font-size: 0.84rem;
}

.status-live,
.status-building {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #2d5f56;
  font-weight: 700;
}

.status-building {
  color: #9a642d;
}

.status-live i,
.status-building i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}

.product-case h2 {
  margin: 8px 0 16px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(2.5rem, 5vw, 4.3rem);
  font-weight: 500;
}

.product-case-lead {
  max-width: 650px;
  color: var(--text-secondary);
  font-size: 1.02rem;
  line-height: 1.9;
}

.product-slogan {
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

.product-qr {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 14px;
  min-height: 340px;
  background: #fff;
  border: 1px solid rgba(40, 107, 76, 0.12);
}

.product-qr img {
  width: min(260px, 78%);
  aspect-ratio: 1;
  object-fit: contain;
}

.product-qr figcaption {
  color: var(--text-muted);
  font-size: 0.86rem;
}

.product-status-strip {
  margin: 24px 0;
}

.product-status-strip span {
  padding: 8px 11px;
  border: 1px solid rgba(78, 46, 29, 0.12);
  background: rgba(255, 255, 255, 0.58);
}

.product-next {
  color: var(--text-secondary);
  line-height: 1.8;
}

.product-visual {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 340px;
  padding: 28px;
  color: #f7efe7;
  background: #2b3436;
}

.product-visual-mx {
  background: #873f3a;
}

.product-visual-st {
  background: #4f5e4b;
}

.product-visual-geo {
  position: relative;
  justify-content: center;
  gap: 34px;
  padding: clamp(28px, 4vw, 46px);
  background: linear-gradient(145deg, #1d3841, #34564d);
  overflow: hidden;
}

.product-visual-geo::before {
  content: '';
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(226, 241, 130, 0.18);
}

.product-visual-geo > * {
  position: relative;
  z-index: 1;
}

.product-visual-geo span {
  color: #e2f182;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(3.8rem, 6.4vw, 5.6rem);
  line-height: 0.9;
  letter-spacing: .08em;
}

.product-visual-geo strong {
  max-width: 8.5em;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(1.7rem, 2.4vw, 2.55rem);
  font-weight: 600;
  line-height: 1.24;
}

.product-visual-geo small {
  color: rgba(255,255,255,.62);
  letter-spacing: .12em;
}

.product-cooperation-card {
  padding-left: clamp(32px, 6vw, 70px);
}

.product-cooperation-card h2 {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  max-width: 980px;
  font-size: clamp(3.5rem, 6.2vw, 6.2rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.product-cooperation-card h2 > span:last-child {
  display: block;
}

.coop-symbol {
  flex: 0 0 auto;
  transform: translateY(0.03em);
}

.product-cooperation-card p {
  max-width: 940px;
}

/* GEO service landing page */
.geo-hero {
  padding: 132px 0 92px;
  background:
    radial-gradient(circle at 87% 13%, rgba(214, 239, 109, .28), transparent 24%),
    linear-gradient(135deg, #f8f4ea 0%, #eef2e6 100%);
}

.geo-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, .72fr);
  gap: clamp(38px, 7vw, 104px);
  align-items: center;
}

.geo-hero-copy h1 {
  max-width: 780px;
  margin: 16px 0 24px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(3.4rem, 6.2vw, 6.7rem);
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: -.055em;
}

.geo-lead {
  max-width: 650px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.9;
}

.geo-note {
  max-width: 570px;
  margin: 28px 0 0;
  color: var(--text-muted);
  font-size: .83rem;
  line-height: 1.7;
}

.geo-console {
  padding: 20px;
  border: 1px solid rgba(31, 56, 63, .18);
  border-radius: 26px;
  background: #203d44;
  color: #f7f2e7;
  box-shadow: 0 28px 76px rgba(32, 61, 68, .2);
}

.geo-console-top {
  display: flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 17px;
  border-bottom: 1px solid rgba(255,255,255,.14);
  color: rgba(255,255,255,.6);
  font-size: .72rem;
  letter-spacing: .1em;
}

.geo-console-top span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.32); }
.geo-console-top span:first-child { background: #d8ed7a; }
.geo-console-top strong { margin-left: auto; font-weight: 600; }

.geo-console ol { display: grid; gap: 0; padding: 10px 0; margin: 0; list-style: none; }
.geo-console li { display: grid; grid-template-columns: 44px 1fr; gap: 13px; align-items: center; padding: 19px 2px; border-bottom: 1px solid rgba(255,255,255,.1); }
.geo-console li b { color: #d8ed7a; font-size: .78rem; }
.geo-console li strong, .geo-console li small { display: block; }
.geo-console li strong { font-family: Georgia, 'Noto Serif SC', serif; font-size: 1.3rem; font-weight: 500; }
.geo-console li small { margin-top: 3px; color: rgba(255,255,255,.62); font-size: .78rem; }
.geo-console > a { display: inline-block; margin-top: 16px; color: #d8ed7a; font-size: .9rem; font-weight: 700; }

.geo-service-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 45px; border-top: 1px solid rgba(78, 46, 29, .14); border-left: 1px solid rgba(78, 46, 29, .14); }
.geo-service-grid article { min-height: 260px; padding: 29px; border-right: 1px solid rgba(78, 46, 29, .14); border-bottom: 1px solid rgba(78, 46, 29, .14); background: rgba(255,255,255,.35); }
.geo-service-grid span { color: #527660; font-size: .75rem; font-weight: 800; letter-spacing: .1em; }
.geo-service-grid h3 { margin: 23px 0 13px; font-family: Georgia, 'Noto Serif SC', serif; font-size: 2rem; font-weight: 500; }
.geo-service-grid p { max-width: 520px; color: var(--text-secondary); line-height: 1.8; }
.geo-service-grid strong { color: #314f4a; font-size: .85rem; }

.geo-delivery { padding: 90px 0; background: #203d44; color: #f7f2e7; }
.geo-delivery-grid { display: grid; grid-template-columns: .74fr 1.26fr; gap: 80px; align-items: start; }
.geo-delivery .section-label { color: #d8ed7a; }
.geo-delivery h2 { margin: 14px 0 0; font-family: Georgia, 'Noto Serif SC', serif; font-size: clamp(2.8rem, 4.6vw, 5rem); font-weight: 500; line-height: 1.08; letter-spacing: -.045em; }
.geo-delivery ul { margin: 0; padding: 0; list-style: none; border-top: 1px solid rgba(255,255,255,.18); }
.geo-delivery li { display: grid; grid-template-columns: 190px 1fr; gap: 30px; padding: 25px 0; border-bottom: 1px solid rgba(255,255,255,.18); }
.geo-delivery li b { font-family: Georgia, 'Noto Serif SC', serif; font-size: 1.25rem; font-weight: 500; }.geo-delivery li span { color: rgba(255,255,255,.68); line-height: 1.75; }
.geo-cta { background: linear-gradient(135deg, rgba(237,243,222,.92), rgba(255,252,246,.96)); }

.product-visual > span {
  font-size: 4rem;
  font-weight: 800;
}

.product-visual strong {
  max-width: 12ch;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.75rem;
  line-height: 1.45;
}

.contact-direct {
  padding: 28px;
  background: #252827;
  color: #f7efe7;
}

.contact-direct img {
  width: 82px;
  height: 82px;
  margin: 22px 0 16px;
  object-fit: cover;
  border-radius: 50%;
}

.contact-direct h2 {
  margin-bottom: 8px;
  font-size: 1.65rem;
}

.contact-direct > p {
  color: rgba(247, 239, 231, 0.68);
  line-height: 1.75;
  margin-bottom: 22px;
}

.direct-line {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 12px;
  padding: 13px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.direct-line span {
  color: rgba(247, 239, 231, 0.52);
}

.direct-line a,
.direct-line strong {
  color: #f7efe7;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.service-card {
  display: flex;
  flex-direction: column;
  min-height: 280px;
  padding: 24px;
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: rgba(255, 252, 247, 0.76);
}

.service-card > span,
.free-entry-card > span,
.community-card div > span {
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.service-card h3,
.free-entry-card h3,
.community-card h3 {
  margin: 34px 0 12px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.5rem;
}

.service-card p,
.free-entry-card p,
.community-card p {
  color: var(--text-secondary);
  line-height: 1.8;
}

.service-card > strong {
  display: block;
  margin-top: auto;
  padding-top: 24px;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.service-card > strong a {
  color: inherit;
  text-decoration: none;
}

.service-card > strong a:hover,
.service-card > strong a:focus-visible {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.community-free-section {
  background: rgba(45, 95, 86, 0.055);
}

.free-entry-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.free-entry-card {
  min-height: 260px;
  padding: 24px;
  border: 1px solid rgba(45, 95, 86, 0.14);
  background: rgba(255, 255, 255, 0.64);
}

.free-entry-card h3 {
  margin-top: 28px;
}

.free-entry-card strong,
.community-card strong {
  display: block;
  margin-top: 22px;
  color: var(--accent);
}

.community-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.community-card {
  display: grid;
  grid-template-columns: 152px 1fr;
  gap: 20px;
  align-items: center;
  padding: 18px;
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: rgba(255, 252, 247, 0.76);
}

.community-card img {
  width: 152px;
  height: 202px;
  object-fit: cover;
  object-position: center;
}

.community-card h3 {
  margin: 10px 0 8px;
}

.community-card p {
  font-size: 0.92rem;
}

.community-card strong {
  margin-top: 14px;
}

.community-card-owned {
  border-color: rgba(45, 95, 86, 0.28);
  background: rgba(235, 248, 241, 0.68);
}

.community-recommend-section .lab-section-head {
  max-width: 1100px;
}

.community-recommend-section .lab-section-head h2 {
  max-width: none;
  font-size: clamp(2.5rem, 4vw, 3.55rem);
  line-height: 1.12;
  text-wrap: balance;
}

.community-recommend-section .lab-section-head > p:last-child {
  max-width: 920px;
}

.footer-nav span {
  display: block;
  color: var(--text-secondary);
  line-height: 1.8;
}

.footer-contact-line {
  display: flex;
  align-items: center;
  gap: 7px;
  width: auto;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.footer-contact-card {
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

.footer-contact {
  scroll-margin-top: 96px;
}

.footer-contact-line::before {
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

.footer-contact-email::before {
  content: '📮';
  display: inline-grid;
  place-items: center;
  background-color: #fff5d8;
  background-image: none;
  font-size: 15px;
  line-height: 1;
}

.footer-contact-wechat::before {
  background-color: #eaf7ec;
  background-image: url('../assets/contact-wechat.svg');
  background-size: 21px 21px;
}

@media (max-width: 768px) {
  .footer-contact-card {
    width: 100%;
  }
}

.lab-map-grid-three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.lab-resource-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1.1fr);
  gap: 44px;
  align-items: start;
}

.writing-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  gap: 28px;
  align-items: start;
}

.legal-hero {
  padding-bottom: 44px;
}

.legal-document {
  max-width: 920px;
}

.legal-document article {
  padding: 28px 0;
  border-top: 1px solid rgba(78, 46, 29, 0.12);
}

.legal-document article:first-child {
  border-top: 0;
}

.legal-document h2 {
  margin: 0 0 12px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  font-weight: 500;
  color: var(--text-primary);
}

.legal-document p {
  max-width: 820px;
  margin: 0 0 12px;
  color: var(--text-secondary);
  line-height: 1.9;
}

.legal-document a {
  color: var(--accent);
  font-weight: 700;
}

.writing-side {
  position: sticky;
  top: 108px;
  padding: 28px;
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: #252827;
  color: #f7efe7;
}

.writing-side h2 {
  margin: 10px 0 14px;
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 2rem;
}

.writing-side p {
  margin-bottom: 24px;
  color: rgba(247, 239, 231, 0.68);
  line-height: 1.85;
}

.resource-links {
  display: grid;
  gap: 12px;
}

.resource-links a {
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 20px;
  border: 1px solid rgba(78, 46, 29, 0.11);
  background: rgba(255, 252, 247, 0.76);
}

.resource-links span {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
}

.resource-links strong {
  font-family: Georgia, 'Noto Serif SC', serif;
  font-size: 1.05rem;
}

.resource-links em {
  color: var(--text-muted);
  font-size: 0.84rem;
  font-style: normal;
}

.cta-contact-row > span {
  border: 1px solid rgba(88, 66, 47, 0.14);
  background: rgba(255, 255, 255, 0.52);
  padding: 10px 14px;
  color: var(--text-secondary);
  font-weight: 700;
  overflow-wrap: anywhere;
}

@media (max-width: 1024px) {
  .about-document-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .about-toc {
    position: static;
    grid-template-columns: repeat(3, 1fr);
  }

  .about-toc span {
    grid-column: 1 / -1;
  }

  .product-case,
  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .geo-hero-grid,
  .geo-delivery-grid {
    grid-template-columns: 1fr;
  }

  .geo-hero-grid { gap: 40px; }

  .geo-delivery-grid { gap: 42px; }

  .product-case-copy {
    grid-column: 1 / -1;
  }

  .product-case > :last-child {
    grid-column: 1 / -1;
  }

  .free-entry-grid {
    grid-template-columns: 1fr;
  }

  .lab-resource-grid {
    grid-template-columns: 1fr;
  }

  .writing-layout {
    grid-template-columns: 1fr;
  }

  .writing-side {
    position: static;
  }
}

@media (max-width: 760px) {
  .about-toc,
  .about-proof-row,
  .product-facts,
  .service-grid,
  .community-card-grid {
    grid-template-columns: 1fr;
  }

  .lab-map-grid-three {
    grid-template-columns: 1fr;
  }

  .resource-links a {
    grid-template-columns: 1fr;
    gap: 7px;
  }

  .about-toc span {
    grid-column: auto;
  }

  .about-numbered > div {
    grid-template-columns: 38px 1fr;
  }

  .product-case {
    grid-template-columns: 1fr;
    padding: 22px;
  }

  .geo-hero { padding: 105px 0 68px; }

  .geo-service-grid { grid-template-columns: 1fr; }

  .geo-delivery { padding: 68px 0; }

  .geo-delivery li { grid-template-columns: 1fr; gap: 8px; }

  .product-case-copy,
  .product-case > :last-child {
    grid-column: auto;
  }

  .product-qr,
  .product-visual {
    min-height: 280px;
  }

  .community-card {
    grid-template-columns: 96px 1fr;
    gap: 14px;
  }

  .community-card img {
    width: 96px;
    height: 128px;
  }

  .community-recommend-section .lab-section-head h2 {
    font-size: clamp(2.35rem, 11vw, 3.2rem);
  }
}

@media (max-width: 480px) {
  .community-card {
    grid-template-columns: 1fr;
  }

  .community-card img {
    width: 100%;
    height: auto;
    max-height: 420px;
    object-fit: contain;
    background: #edf9f6;
  }
}

/* now.building palette must remain after all legacy page overrides. */
.lab-console {
  color: var(--text-primary);
  border-color: rgba(78, 66, 52, 0.16);
  background:
    radial-gradient(circle at 92% 8%, rgba(63, 115, 91, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(251, 247, 239, 0.98), rgba(241, 233, 221, 0.98));
  box-shadow: 0 24px 70px rgba(68, 48, 34, 0.1);
}

.lab-console::before {
  background:
    linear-gradient(rgba(78, 66, 52, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(78, 66, 52, 0.055) 1px, transparent 1px);
  background-size: 30px 30px;
}

.console-topbar,
.console-profile p,
.console-build span,
.console-build small,
.console-manifesto > span,
.console-manifesto > small {
  color: var(--text-muted);
}

.console-topbar span {
  background: rgba(78, 66, 52, 0.24);
}

.console-topbar span:first-child {
  background: #3f735b;
}

.console-profile img {
  border-color: rgba(78, 66, 52, 0.16);
}

.console-profile strong,
.console-build strong {
  color: var(--text-primary);
}

.console-lines {
  border-top-color: rgba(78, 66, 52, 0.14);
}

.console-lines p {
  color: var(--text-secondary);
  border-bottom-color: rgba(78, 66, 52, 0.14);
}

.console-lines span {
  color: #3f735b;
}

.console-build {
  border-color: rgba(78, 66, 52, 0.14);
}

.console-progress {
  background: rgba(78, 66, 52, 0.12);
}

.console-progress i {
  background: #3f735b;
}

.console-manifesto {
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 18px;
  border-top: 1px solid rgba(78, 66, 52, 0.14);
}

.console-manifesto strong {
  max-width: 13ch;
  color: #2f493d;
}

/* Product identity and layered notes */
.project-logo {
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

.project-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-logo-filedev {
  padding: 7px;
  background: #e4f1eb;
}

.project-logo-filedev img {
  border-radius: 9px;
  object-fit: contain;
}

.project-logo-geo {
  background: #f4ede2;
}

.project-logo-geo img,
.lab-project-card:nth-child(2) .project-logo img,
.lab-project-card:nth-child(3) .project-logo img {
  object-fit: contain;
}

.lab-project-card:nth-child(2) .project-logo {
  background: #e4f1eb;
}

.lab-project-card:nth-child(3) .project-logo {
  background: #eaf3ff;
}

.product-title {
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 10px 0 18px;
}

.product-title > img {
  flex: 0 0 auto;
  width: 72px;
  height: 72px;
  border: 1px solid rgba(45, 95, 86, 0.15);
  border-radius: 14px;
  background: #edf4ee;
  object-fit: contain;
}

.product-title > img[src*="filedev-logo"] {
  object-fit: cover;
}

.product-title .section-label,
.product-title h2 {
  margin: 0;
}

.product-title h2 {
  margin-top: 4px;
}

.product-visual > img {
  width: 132px;
  height: 132px;
  object-fit: contain;
}

.product-visual-mx {
  color: #174e36;
  background: linear-gradient(145deg, #edf5ef, #d8e8dd);
}

.product-visual-st {
  color: #14509d;
  background: linear-gradient(145deg, #eef6ff, #dceaff);
}

.product-visual-mx strong,
.product-visual-st strong {
  color: currentColor;
}

.beliefs-prologue {
  max-width: 650px;
  margin: -8px 0 26px;
  padding-left: 18px;
  border-left: 3px solid #3f735b;
  color: var(--text-secondary);
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.05rem;
  line-height: 1.9;
}

.belief-list li {
  grid-template-columns: 46px minmax(170px, 0.62fr) minmax(0, 1.38fr);
  gap: 16px;
  align-items: baseline;
  padding: 22px 0;
}

.belief-list strong {
  color: #2f5b47;
  font-family: Georgia, 'Noto Serif SC', 'Songti SC', serif;
  font-size: 1.08rem;
  font-weight: 500;
  line-height: 1.65;
}

.belief-list p {
  font-size: 0.96rem;
  line-height: 1.85;
}

@media (max-width: 760px) {
  .product-title > img {
    width: 60px;
    height: 60px;
  }

  .product-visual > img {
    width: 110px;
    height: 110px;
  }

  .belief-list li {
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 6px 12px;
  }

  .belief-list strong,
  .belief-list p {
    grid-column: 2;
  }

  .belief-list span {
    grid-row: 1 / 3;
  }
}

/* WeChat contact card: hover on desktop, tap or focus everywhere. */
span.wechat-hover {
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

span.wechat-hover::after {
  content: '';
  width: 6px;
  height: 6px;
  margin-left: 7px;
  border-radius: 50%;
  background: #3f735b;
  box-shadow: 0 0 0 0 rgba(63, 115, 91, 0.3);
  animation: wechatHint 2.2s ease-out infinite;
}

span.wechat-hover:focus-visible {
  border-radius: 3px;
  outline: 2px solid rgba(63, 115, 91, 0.35);
  outline-offset: 3px;
}

span.wechat-popover {
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

span.wechat-popover img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
}

span.wechat-hover:hover > .wechat-popover,
span.wechat-hover:focus > .wechat-popover,
span.wechat-hover.active > .wechat-popover {
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
  span.wechat-popover {
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: auto;
    width: min(440px, calc(100vw - 28px));
    transform: translate(-50%, calc(-50% + 8px)) scale(0.98);
    transform-origin: center;
  }

  span.wechat-hover:hover > .wechat-popover,
  span.wechat-hover:focus > .wechat-popover,
  span.wechat-hover.active > .wechat-popover {
    transform: translate(-50%, -50%) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  span.wechat-hover::after {
    animation: none;
  }

  span.wechat-popover {
    transition: none;
  }
}

/* Full-resolution community card preview keeps embedded QR codes scannable. */
.community-card > img {
  cursor: zoom-in;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.community-card > img:hover,
.community-card > img:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(47, 91, 70, 0.2);
  outline: 2px solid rgba(63, 115, 91, 0.38);
  outline-offset: 3px;
}

.community-preview-overlay {
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

.community-preview-overlay.open {
  visibility: visible;
  opacity: 1;
}

.community-preview-overlay.pinned {
  pointer-events: auto;
  background: rgba(37, 33, 29, 0.62);
  backdrop-filter: blur(10px);
}

.community-preview-panel {
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

.community-preview-overlay.open .community-preview-panel {
  transform: translateY(0) scale(1);
}

.community-preview-panel img {
  display: block;
  width: 100%;
  max-height: calc(100vh - 64px);
  object-fit: contain;
}

.community-preview-close {
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

.community-preview-overlay.pinned .community-preview-close {
  display: grid;
}

body.community-preview-open {
  overflow: hidden;
}

@media (max-width: 600px) {
  .community-preview-overlay {
    padding: 14px;
  }

  .community-preview-panel {
    width: calc(100vw - 28px);
    max-height: calc(100vh - 28px);
  }

  .community-preview-panel img {
    max-height: calc(100vh - 44px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .community-card > img,
  .community-preview-overlay,
  .community-preview-panel {
    transition: none;
  }
}

/* Keep inner-page introductions on one consistent editorial axis. */
.page-intro-contact {
  padding-top: 132px;
  padding-bottom: 72px;
}

.page-intro-contact .page-intro-grid {
  grid-template-columns: minmax(0, 1.08fr) minmax(380px, 0.92fr);
  align-items: center;
  gap: clamp(40px, 6vw, 88px);
}

.page-intro-contact .page-intro-copy {
  align-self: center;
}

.page-intro-contact h1 {
  width: 100%;
  max-width: none;
  font-size: clamp(3.2rem, 4.6vw, 4.4rem);
  line-height: 1.04;
  text-wrap: balance;
}

.page-intro-contact .page-summary {
  max-width: 650px;
  font-size: 1.16rem;
}

.page-intro-contact .contact-direct {
  width: 100%;
  max-width: 460px;
  justify-self: end;
}

.page-intro-works,
.page-intro-blog {
  padding-top: 132px;
  padding-bottom: 72px;
}

.page-intro-works .page-intro-single,
.page-intro-blog .page-intro-single {
  max-width: 980px;
}

.page-intro-works h1,
.page-intro-blog h1 {
  width: 100%;
  max-width: none;
  font-size: clamp(3.35rem, 5vw, 4.75rem);
  line-height: 1.04;
  text-wrap: balance;
}

.page-intro-contact .page-kicker,
.page-intro-works .page-kicker,
.page-intro-blog .page-kicker {
  font-size: 0.84rem;
}

.page-intro-works .page-summary {
  max-width: 980px;
  font-size: 1.16rem;
}

.page-intro-blog .page-summary {
  max-width: 900px;
  font-size: 1.16rem;
}

@media (max-width: 1024px) {
  .page-intro-contact .page-intro-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .page-intro-contact .contact-direct {
    max-width: none;
    justify-self: stretch;
  }
}

@media (max-width: 700px) {
  .page-intro-contact,
  .page-intro-works,
  .page-intro-blog {
    padding-top: 112px;
    padding-bottom: 48px;
  }

  .page-intro-contact h1,
  .page-intro-works h1,
  .page-intro-blog h1 {
    font-size: clamp(2.55rem, 12vw, 3.5rem);
    line-height: 1.05;
  }

  .page-intro-contact .page-summary,
  .page-intro-works .page-summary,
  .page-intro-blog .page-summary {
    font-size: 1.05rem;
  }
}

/* Warm-paper panels replace the former black utility blocks. */
.contact-direct {
  border: 1px solid rgba(58, 105, 82, 0.24);
  background:
    linear-gradient(145deg, rgba(255, 252, 246, 0.96), rgba(239, 231, 218, 0.94)),
    var(--bg-primary);
  color: var(--text-primary);
  box-shadow: 0 22px 55px rgba(75, 53, 37, 0.1);
}

.contact-direct .contact-card-label { color: #54745f; }

.contact-direct img {
  border: 3px solid rgba(255, 252, 246, 0.95);
  box-shadow: 0 0 0 1px rgba(58, 105, 82, 0.28);
}

.contact-direct > p { color: var(--text-secondary); }
.contact-direct .direct-line { border-top-color: rgba(78, 46, 29, 0.12); }
.contact-direct .direct-line span { color: var(--text-muted); }

.contact-direct .direct-line a,
.contact-direct .direct-line strong { color: var(--text-primary); }

.contact-direct .direct-line:first-of-type strong { color: #356c51; }

.writing-side {
  border-color: rgba(78, 46, 29, 0.16);
  background:
    linear-gradient(150deg, rgba(255, 252, 246, 0.97), rgba(241, 232, 218, 0.94)),
    var(--bg-primary);
  color: var(--text-primary);
  box-shadow: 0 20px 52px rgba(75, 53, 37, 0.09);
}

.writing-side h2 { color: var(--text-primary); }
.writing-side p { color: var(--text-secondary); }
`;
