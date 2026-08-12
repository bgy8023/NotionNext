/**
 * yscworks 主题配置文件（Mars1024 版）
 * 这些 KEY 可在 Vercel 用同名环境变量覆盖（前缀 NEXT_PUBLIC_THEME_YSCWORKS_）
 * 例如 NEXT_PUBLIC_THEME_YSCWORKS_HERO_TITLE=...
 *
 * 联系方式 / 社区链接当前留空：组件会检测到空值自动隐藏对应区块，
 * 后续填入即可显示。
 */
const CONFIG = {
  // 导航品牌名 / 圆标字符
  YSCWORKS_BRAND: 'Mars1024',
  YSCWORKS_BRAND_MARK: 'M',
  // 导航项 [{label, href}]
  YSCWORKS_NAV: [
    { label: '首页', href: '/' },
    { label: '写作', href: '/category' },
    { label: '项目', href: '/works' },
    { label: '关于', href: '/about' },
    { label: '联系', href: '/contact' }
  ],

  // ===== 顶部动态信号条 =====
  YSCWORKS_SIGNALS: [
    { tag: 'NOW', text: 'Mars1024 个人站全新上线' },
    { tag: 'BUILDING', text: 'AI 生成内容工作流持续迭代' },
    { tag: 'SERVICE', text: 'AI 产品 / 内容创作 / 自动化' },
    { tag: 'OPEN', text: '支持远程合作' }
  ],

  // ===== 首页 Hero =====
  YSCWORKS_HERO_KICKER: 'BUILDING IN PUBLIC · 2026',
  YSCWORKS_HERO_TITLE: '用 AI 做产品，也在做自己的长期事业。',
  YSCWORKS_HERO_DESC:
    '我是 Mars1024，用 AI 做产品的创作者，也是一名 AI 作者。持续用 AI 生成内容、开发产品、搭内容工作流，把 AI 放进真实工作流。',
  YSCWORKS_HERO_TAGS: [
    '用 AI 做产品的创作者',
    'AI 作者',
    'AI 生成',
    '内容创作者'
  ],
  // Hero 按钮 [{label, href, style: primary|secondary|ghost}]
  YSCWORKS_HERO_BUTTONS: [
    { label: '看我能帮你什么 ↓', href: '#help', style: 'primary' },
    { label: '看正在做的产品', href: '/works', style: 'secondary' },
    { label: '谈合作', href: '/contact', style: 'ghost' }
  ],
  // console 卡内容
  YSCWORKS_HERO_CONSOLE_TITLE: 'now.building',
  YSCWORKS_HERO_CONSOLE_NAME: 'Mars1024',
  YSCWORKS_HERO_CONSOLE_ROLE: '用 AI 做产品的创作者 / AI 作者',
  YSCWORKS_HERO_CONSOLE_LINES: [
    { key: 'product', value: 'AI 产品 / 内容工作流' },
    { key: 'service', value: 'AI 生成 · 自动化 · 定制' },
    { key: 'focus', value: '把 AI 放进真实工作流' },
    { key: 'status', value: '持续更新中' }
  ],
  YSCWORKS_HERO_CONSOLE_SIGNAL: 'AI 内容工作流：持续迭代',
  // console 卡实时信号轮播（留空则显示静态文本）
  YSCWORKS_HERO_CONSOLE_SIGNALS: [
    'AI 内容工作流：持续迭代',
    'AI 产品矩阵：正在推进',
    'AI 生成：把 AI 放进真实工作流',
    '对外开放具体项目与定制合作'
  ],
  YSCWORKS_HERO_CONSOLE_MANIFESTO: '先做出来，\n再让真实反馈说话。',
  YSCWORKS_HERO_CONSOLE_SIGN: 'Mars · 2026',

  // ===== HOW I CAN HELP =====
  YSCWORKS_HELP_LABEL: 'HOW I CAN HELP',
  YSCWORKS_HELP_TITLE: '有具体问题，\n我帮你推进到可用结果。',
  YSCWORKS_HELP_DESC:
    '适合个人创作者、小团队，以及有明确场景、希望先把第一版做出来的人。先说问题和目标，再判断是否适合合作。',
  YSCWORKS_HELP_CARDS: [
    {
      index: '01 / PRODUCT',
      title: '把想法做成能用的产品',
      situation: '有一个真实需求，但不知道怎么把它拆成页面、功能和可运行的第一版。',
      delivery: '梳理需求，协作完成网站、小程序、浏览器插件或本地工具的原型与开发。',
      proof: 'AI 驱动开发流程',
      link: { label: '聊产品与工具 →', href: '/contact' }
    },
    {
      index: '02 / AUTOMATION',
      title: '把重复工作变成 AI 流程',
      situation: '每天重复整理资料、检索信息、写内容或执行一套固定步骤。',
      delivery: '定制 AI Agent、自动化工作流和内容生成链路，让流程可以调用、复用和持续迭代。',
      proof: 'AI 工作流 / 自动化',
      link: { label: '聊 AI 定制服务 →', href: '/contact' }
    },
    {
      index: '03 / CONTENT SYSTEM',
      title: '把散乱内容搭成生产系统',
      situation: '文章、素材、选题和复盘散落各处，内容更新长期依赖临时推动。',
      delivery: '结合 AI 生成工具与内容管理流程，搭建适合你的内容创作与生产系统。',
      proof: 'AI 生成内容体系',
      link: { label: '聊内容系统 →', href: '/contact' }
    }
  ],
  YSCWORKS_HELP_NEXT: '合作前请准备：你在做什么、卡在哪里、预算范围和希望得到的结果。',
  YSCWORKS_HELP_NEXT_LINK: { label: '把具体问题告诉我 →', href: '/contact' },

  // ===== 实践数据 =====
  YSCWORKS_STATS: [
    { value: '100+', label: 'AI 生成内容实践' },
    { value: '50+', label: 'AI 工具与工作流' },
    { value: '30+', label: '自动化流程搭建' },
    { value: '10+', label: '服务与交付案例' }
  ],

  // ===== START HERE =====
  YSCWORKS_ROUTE_LABEL: 'START HERE',
  YSCWORKS_ROUTE_TITLE: '你来这里，想找什么？',
  YSCWORKS_ROUTE_LINKS: [
    { num: '01', title: '看 AI 生成的内容', sub: '文章与创作入口', arrow: '→', href: '/category' },
    { num: '02', title: '找 AI 定制服务', sub: '产品、工作流、内容系统', arrow: '→', href: '/contact' },
    { num: '03', title: '看正在做的产品', sub: '项目进展与产品矩阵', arrow: '→', href: '/works' },
    { num: '04', title: '完整了解 Mars1024', sub: '经历、产品与个人业务', arrow: '→', href: '/about' }
  ],

  // ===== WHAT I DO =====
  YSCWORKS_MAP_LABEL: 'WHAT I DO',
  YSCWORKS_MAP_TITLE: '现在，主要做三件事。',
  YSCWORKS_MAP_DESC: '产品是实践，内容是连接，服务是把已经跑通的方法交付给具体的人。',
  YSCWORKS_MAP_CARDS: [
    {
      index: '01 / PRODUCT',
      title: '用 AI 做产品',
      desc: '用 AI 编程工具开发网站、小程序、浏览器插件和本地软件。',
      link: { label: '查看产品矩阵 →', href: '/works' }
    },
    {
      index: '02 / WORKFLOW',
      title: '搭内容工作流',
      desc: '组合 AI 生成工具与自动化流程，提升内容生产与项目管理效率。',
      link: { label: '了解定制服务 →', href: '/contact' }
    },
    {
      index: '03 / CONTENT',
      title: '做内容与个人业务',
      desc: '分享 AI 编程做产品、AI 生成与工具实践，通过内容连接愿意长期同行的人。',
      link: { label: '阅读实践文章 →', href: '/category' }
    }
  ],

  // ===== CURRENT PRODUCTS =====
  YSCWORKS_PROJECTS_LABEL: 'CURRENT PRODUCTS',
  YSCWORKS_PROJECTS_TITLE: '正在推进的产品。',
  YSCWORKS_PROJECTS_DESC: '不包装成已经成熟的商业项目，公开展示真实状态和下一步。',

  // ===== RECENTLY SHIPPING =====
  YSCWORKS_UPDATES_LABEL: 'RECENTLY SHIPPING',
  YSCWORKS_UPDATES_TITLE: '最近在推进什么。',
  YSCWORKS_UPDATES_DESC: '不写空泛的"持续努力"，只保留目前已经发生或正在进行的状态。',
  YSCWORKS_UPDATES: [
    { tag: 'SITE · V1.0', title: 'Mars1024 个人站全新上线', link: { label: '查看 →', href: '/' } },
    { tag: 'CONTENT · AI', title: 'AI 生成内容工作流持续迭代', link: { label: '查看文章 →', href: '/category' } },
    { tag: 'PRODUCT · WIP', title: 'AI 产品矩阵正在推进', link: { label: '查看产品 →', href: '/works' } },
    { tag: 'SERVICE · OPEN', title: 'AI 定制服务开放预约', link: { label: '了解服务 →', href: '/contact' } }
  ],

  // ===== FREE COMMUNITY（当前留空 → 区块自动隐藏；填入后显示）=====
  YSCWORKS_COMMUNITY_LABEL: 'FREE COMMUNITY',
  YSCWORKS_COMMUNITY_TITLE: '先从免费的内容和交流开始。',
  YSCWORKS_COMMUNITY_DESC: '免费内容记录实践、AI 工具和项目进展。',
  YSCWORKS_COMMUNITY_LINKS: [],

  // ===== 写作区块（文章列表由 Notion 驱动，这里仅标题）=====
  YSCWORKS_WRITING_LABEL: 'PUBLIC NOTES',
  YSCWORKS_WRITING_TITLE: '把真实过程写下来。',
  YSCWORKS_WRITING_DESC: '网站只收录已经存在的文章。更多短内容与日常进展，会持续发布。',

  // ===== 合作 CTA =====
  YSCWORKS_COOP_LABEL: 'WORK WITH ME',
  YSCWORKS_COOP_TITLE: '有具体问题、预算和目标，再一起来聊具体合作。',
  YSCWORKS_COOP_DESC:
    '目前开放 AI 小工具开发、AI 内容生成、自动化工作流与内容系统搭建。',
  YSCWORKS_COOP_AVAILABLE: 'AVAILABLE',
  YSCWORKS_COOP_LINKS: [
    { label: '查看合作方式 →', href: '/contact' },
    { label: '联系我 →', href: '/contact' }
  ],

  // ===== 页脚 =====
  YSCWORKS_FOOTER_DESC:
    '一个用 AI 做产品的创作者，持续搭工作流、写真实实践的公开记录。',
  YSCWORKS_FOOTER_PRODUCTS: [
    { label: 'AI 产品', href: '/works' },
    { label: 'AI 生成内容', href: '/category' },
    { label: '定制服务', href: '/contact' },
    { label: 'Mars1024', href: '/' }
  ],
  // 联系方式：留空则不显示
  YSCWORKS_CONTACT_EMAIL: '',
  YSCWORKS_CONTACT_QQ: '',
  YSCWORKS_CONTACT_WECHAT: '',

  // ⌘ Call me 快捷入口
  YSCWORKS_QUICK_TITLE: '你想找什么？',
  YSCWORKS_QUICK_LINKS: [
    { label: '看 AI 生成的内容', sub: '文章与创作入口 →', href: '/category' },
    { label: '看正在做的产品', sub: '产品矩阵 →', href: '/works' },
    { label: '找 AI 定制服务', sub: '产品 / 工作流 / 内容系统 →', href: '/contact' },
    { label: '了解 Mars1024', sub: '经历与个人业务 →', href: '/about' }
  ],

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
