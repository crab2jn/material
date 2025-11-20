import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card } from '../ui/Card';

const painPointsData = [
  { name: '坐姿不正确', value: 34, fill: '#3b82f6' }, // blue-500
  { name: '长时间游戏/网络', value: 33, fill: '#64748b' }, // slate-500
  { name: '家族遗传', value: 17, fill: '#94a3b8' }, // slate-400
  { name: '其他', value: 16, fill: '#cbd5e1' }, // slate-300
];

const marketGrowthData = [
  { year: '2017', value: 398 },
  { year: '2018', value: 534 },
  { year: '2019', value: 676 },
  { year: '2020', value: 788 },
  { year: '2021', value: 1044 },
  { year: '2022E', value: 1261 },
  { year: '2023E', value: 1467 },
  { year: '2024E', value: 1669 },
  { year: '2025E', value: 1874 },
  { year: '2026E', value: 2078 },
];

export const MarketPainPointsChart: React.FC = () => {
  return (
    <Card title="近视成因痛点分析" subtitle="基于图 1-1 数据">
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={painPointsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {painPointsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-slate-600 bg-slate-50 p-3 rounded border border-slate-200">
        <strong>核心洞察：</strong> 67% 的近视成因（坐姿不正 + 习惯不佳）可以通过智学空间的自适应技术进行干预和缓解。
      </div>
    </Card>
  );
};

export const MarketGrowthChart: React.FC = () => {
  return (
    <Card title="全球智能家居市场规模增长趋势" subtitle="全球市场规模 (亿美元)">
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={marketGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              cursor={{ fill: '#f1f5f9' }}
              formatter={(value: number) => [`${value} 亿美元`, '市场规模']}
            />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} name="市场规模" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-slate-600 bg-slate-50 p-3 rounded border border-slate-200">
        <strong>趋势：</strong> 2023-2028 年复合增长率达 24.8%。正从“被动工具”向“主动助手”转变。
      </div>
    </Card>
  );
};