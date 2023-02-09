import {
  Space,
  Card,
  Row,
  Col,
  Statistic
} from '@pankod/refine-antd'
import {HttpError, useExport} from '@pankod/refine-core'

import React, {useEffect, useState} from "react";
import axios from "axios";
import ECharts from '@/components/ECharts'
import {useCustom} from '@pankod/refine-core'


export const DashboardList = () => {
  const [todayCreation, setTodayCreation] = useState('0');
  const [creation, setCreation] = useState('0');
  const [user, setUser] = useState('0');
  const [daily, setDaily] = useState<{ total: string, date: string }[]>([]);
  useEffect(() => {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    axios.get('/operations/GetTodayCount?date=' + todayStart.toISOString()).then((res) => {
      setTodayCreation(res?.data?.data?.creation?._count?._all ?? '0')
    })
    axios.get('/operations/GetCount?date=' + todayStart.toISOString()).then((res) => {
      setCreation(res?.data?.data?.creation?._count?._all ?? '0')
      setUser(res?.data?.data?.user?._count?._all ?? '0')
    })
    axios.get('/operations/QueryStatistic').then((res) => {
      const list = res?.data?.data?.data ?? []
      setDaily(list)
    })
  }, []);
  return <Space direction="vertical" style={{display: 'flex'}}>
    <Row gutter={36}>
      <Col span={8}>
        <Card bordered={false}>
          <Statistic
            title="用户数"
            value={user}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
          <Statistic
            title="总作画数"
            value={creation}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
          <Statistic
            title="今日作画数"
            value={todayCreation}
          />
        </Card>
      </Col>
    </Row>
    <Card style={{marginTop: 12}} title="每日作画数量">
      <ECharts
        className="h-84"
        options={{
          tooltip: {
            trigger: 'item'
          },
          grid: {
            left: 80,
            top: 20,
            bottom: 24,
            right: 20,
          },
          xAxis: {
            type: 'category',
            data: daily?.map(item => item.date) ?? [],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: daily?.map(item => item.total) ?? [],
              type: 'bar',
            },
          ],
        }}
      />
    </Card>
  </Space>
}
