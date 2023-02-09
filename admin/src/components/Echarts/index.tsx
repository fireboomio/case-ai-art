import { Spin } from 'antd'
import { ECharts, EChartOption, EChartsResponsiveOption } from 'echarts'
import { useEffect, useRef } from 'react'

import './index.css'

const echartsMinJs = '/echarts.min.js';

const script = document.createElement('script');
script.src = echartsMinJs;
document.head.appendChild(script);

interface EChartsProps {
  loading?: boolean
  className?: string
  options: EChartOption | EChartsResponsiveOption
}

const Chart = ({ loading = false, className, options }: EChartsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<ECharts>()

  useEffect(() => {
    chartRef.current = window.echarts.init(containerRef.current!)
    const resizeHandler = () => {
      chartRef.current?.resize()
    }
    const observer = new ResizeObserver(() => {
      resizeHandler()
    })
    observer.observe(containerRef.current!)
    return () => {
      observer.unobserve(containerRef.current!)
      observer.disconnect()
      chartRef.current?.dispose()
    }
  }, [])

  useEffect(() => {
    if (options) {
      chartRef.current?.setOption(options)
    }
  }, [options])

  return (
    <div className={`${className} h-full relative`}>
      <div className={`h-full w-full ${loading ? 'invisible' : ''}`} ref={containerRef}></div>
      <Spin spinning={loading} className="echarts-spin" />
    </div>
  )
}

export default Chart