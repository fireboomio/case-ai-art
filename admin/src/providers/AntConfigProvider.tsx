import { ReactNode, useEffect } from 'react'
// import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { Theme } from 'antd/lib/config-provider/context'
import { ConfigProvider } from '@pankod/refine-antd'

interface AntConfigProviderProps {
  children?: ReactNode
  theme?: Theme
}

const AntConfigProvider = ({ theme, children }: AntConfigProviderProps) => {
  useEffect(() => {
    ConfigProvider.config({ theme })
  }, [theme])
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
}

export default AntConfigProvider
