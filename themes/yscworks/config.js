/**
 * yscworks 主题配置文件
 * 这些 KEY 可在 Vercel 用同名环境变量覆盖（前缀 NEXT_PUBLIC_THEME_YSCWORKS_）
 * 例如 NEXT_PUBLIC_THEME_YSCWORKS_HERO_TITLE=...
 */
const CONFIG = {
  // 导航品牌名
  YSCWORKS_BRAND: '成云杉 YSC',
  // 导航项 [{label, href}]
  YSCWORKS_NAV: [
    { label: '首页', href: '/' },
    { label: '写作', href: '/category' },
    { label: '项目', href: '/' },
    { label: '关于', href: '/about' },
    { label: '联系', href: '/contact' }
  ],

  // 首页 Hero
  YSCWORKS_HERO_KICKER: 'PRODUCTS · BUILD IN PUBLIC',
  YSCWORKS_HERO_TITLE: '把想法做出来，再让真实反馈说话。',
  YSCWORKS_HERO_DESC:
    '我不是传统程序员，而是用 AI 编程推进产品的创作者。这里不只展示名称，也说明每个项目当前做到哪里。',

  // 合作 CTA
  YSCWORKS_COOP_LABEL: 'PRODUCT COOPERATION',
  YSCWORKS_COOP_TITLE: '🉑 接具体的 AI 小产品与工具合作。',
  YSCWORKS_COOP_DESC:
    '请说明你想解决的问题、目标用户、预算和期望结果。我会先判断项目是否适合做，再决定合作方式。',

  // 页脚
  YSCWORKS_FOOTER_DESC:
    '一个用 AI 做产品的创作者，持续搭工作流、写真实实践的公开记录。',

  // 以下保留 example 兼容配置（部分组件仍读取 EXAMPLE_* 键）
  EXAMPLE_MENU_CATEGORY: true,
  EXAMPLE_MENU_TAG: true,
  EXAMPLE_MENU_ARCHIVE: true,
  EXAMPLE_MENU_SEARCH: true,
  EXAMPLE_POST_LIST_COVER: false,
  EXAMPLE_TITLE_IMAGE: false,
  EXAMPLE_ARTICLE_LAYOUT_VERTICAL: false,
  EXAMPLE_ARTICLE_HIDDEN_NOTIFICATION: false
}
export default CONFIG
