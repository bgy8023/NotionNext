import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { DynamicLayout } from '@/themes/theme'
import { fetchGlobalAllData } from '@/lib/db/SiteDataApi'
import { isExport } from '@/lib/utils/buildMode'

/**
 * /contact 页面 —— 服务与联系
 */
const Contact = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutContact' {...props} />
}

export async function getStaticProps(req) {
  const { locale } = req
  const props = await fetchGlobalAllData({ from: 'contact-page', locale })
  return {
    props,
    revalidate: isExport ? undefined : siteConfig('NEXT_REVALIDATE_SECOND', BLOG.NEXT_REVALIDATE_SECOND, props.NOTION_CONFIG)
  }
}

export default Contact
