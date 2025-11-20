import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { Card } from '../ui/Card';
import { BomItem, CompetitorData } from '../../types';

const competitorData: CompetitorData[] = [
  {
    feature: '高度调节',
    traditional: '手动 / 固定',
    smartGen1: '电动记忆 (需手动按键)',
    smartLearn: '自适应联动 (超声波+人脸)'
  },
  {
    feature: '照明系统',
    traditional: '独立台灯',
    smartGen1: '基础 LED (手动)',
    smartLearn: '自动 PID 调光 (全局/局部)'
  },
  {
    feature: '坐姿监测',
    traditional: '无',
    smartGen1: '无',
    smartLearn: '实时监测 (距离/计时)'
  },
  {
    feature: '用户识别',
    traditional: '无',
    smartGen1: '手动切换配置',
    smartLearn: '云端人脸识别 & 档案'
  },
  {
    feature: '价格区间',
    traditional: '800-1500 元',
    smartGen1: '2000-3500 元',
    smartLearn: '2000-3500 (基础) / 5000+ (标准)'
  }
];

const bomData: BomItem[] = [
  { category: 'Electronics', name: 'Arduino Uno 主控', cost: 25, quantity: 1, subtotal: 25 },
  { category: 'Sensors', name: '超声波/光敏/温度传感器', cost: 20, quantity: 1, subtotal: 20 }, // Summed for chart clarity
  { category: 'Actuators', name: 'N20 金属齿轮电机 (x2)', cost: 80, quantity: 2, subtotal: 160 },
  { category: 'Lighting', name: 'SK6812 RGBW 灯带', cost: 100, quantity: 1, subtotal: 100 },
  { category: 'Structure', name: '升降桌腿/框架', cost: 400, quantity: 1, subtotal: 400 },
  { category: 'Structure', name: '环保桌面板材', cost: 200, quantity: 1, subtotal: 200 },
  { category: 'Power/Misc', name: '电源适配器与线缆', cost: 80, quantity: 1, subtotal: 80 },
  { category: 'Packaging', name: '包装与说明书', cost: 100, quantity: 1, subtotal: 100 },
];

// Prepare chart data for BOM
const bomChartData = bomData.map(item => ({ name: item.name, value: item.subtotal }));
const COLORS = ['#3b82f6', '#60a5fa', '#1e40af', '#93c5fd', '#cbd5e1', '#94a3b8', '#64748b', '#475569'];

export const CompetitorTable: React.FC = () => {
  return (
    <Card title="竞争格局分析" subtitle="对比传统桌椅与第一代智能桌椅">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-slate-500 uppercase tracking-wider">功能特性</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500 uppercase tracking-wider">传统桌椅</th>
              <th className="px-4 py-3 text-left font-medium text-slate-500 uppercase tracking-wider">第一代智能桌椅</th>
              <th className="px-4 py-3 text-left font-medium text-blue-600 uppercase tracking-wider bg-blue-50">智学空间 (本项目)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {competitorData.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                <td className="px-4 py-3 font-medium text-slate-900">{row.feature}</td>
                <td className="px-4 py-3 text-slate-600">{row.traditional}</td>
                <td className="px-4 py-3 text-slate-600">{row.smartGen1}</td>
                <td className="px-4 py-3 text-slate-800 font-medium bg-blue-50/30 border-l border-blue-100">{row.smartLearn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export const BomCostChart: React.FC = () => {
  return (
    <Card title="BOM 成本结构 (小批量试制)" subtitle="预估单台综合成本：约 1103 元">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-72 w-full">
           <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={bomChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {bomChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `¥${value}`} />
              <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{fontSize: '12px'}}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-center">
          <div className="overflow-hidden rounded-md border border-slate-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2">部件名称</th>
                  <th className="px-3 py-2 text-right">成本 (RMB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {bomData.map((item, i) => (
                   <tr key={i} className="bg-white">
                     <td className="px-3 py-1.5">{item.name}</td>
                     <td className="px-3 py-1.5 text-right font-mono">¥{item.subtotal}</td>
                   </tr>
                 ))}
                 <tr className="bg-blue-50 font-bold">
                   <td className="px-3 py-2">总计</td>
                   <td className="px-3 py-2 text-right">¥1103</td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  );
};