/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import { PORT_STYLES } from './port-styles'

/**
 * yscworks 主题全局样式
 * 严格对齐 yscai101.com 的完整 CSS 体系
 */
const Style = () => {
  return (
    <>
      <style jsx global>{`
        /* 全局基底 */
        body {
          background: #F4EDE2 !important;
          color: #1F1915 !important;
          font-family: system-ui, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif !important;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        #theme-yscworks {
          --bg-primary: #F4EDE2;
          --bg-secondary: #E9DCC8;
          --bg-card: rgba(250, 246, 240, 0.62);
          --text-primary: #1F1915;
          --text-secondary: #988A7F;
          --text-muted: #7A6B60;
          --accent: #B84D33;
          --accent-light: #C45A3C;
          --border-color: rgba(78, 46, 29, 0.11);
          --border-color-hover: rgba(78, 46, 29, 0.22);
          --container-width: 1200px;
          --nav-height: 72px;
          --radius-card: 16px;
          --radius-button: 8px;

          background: #F4EDE2;
          color: #1F1915;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        #theme-yscworks #main-content {
          flex: 1;
        }

        /* 统一容器 */
        .container,
        .yscworks-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        @media (max-width: 720px) {
          .container,
          .yscworks-container {
            padding: 0 16px;
          }
        }
      `}</style>
      <style jsx global>{`${PORT_STYLES}`}</style>
    </>
  )
}

export { Style }
