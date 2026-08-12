import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { DynamicLayout } from '@/themes/theme'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { isExport } from '@/lib/utils/buildMode'

/**
 * /works 页面 —— 项目与产品矩阵
 * 复用 yscworks 主题的 WorksList 组件，展示 Notion 子页面
 */
const Works = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutWorks' {...props} />
}

export async function getStaticProps(req) {
  const { locale } = req
  const props = await fetchGlobalAllData({ from: 'works-page', locale })
  return {
    props,
    revalidate: isExport ? undefined : siteConfig('NEXT_REVALIDATE_SECOND', BLOG.NEXT_REVALIDATE_SECOND, props.NOTION_CONFIG)
  }
}

export default Works
