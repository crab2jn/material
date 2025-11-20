
import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card } from '../ui/Shared';

const marketTrendData = [
  { year: '2021', total: 1044, share: 5 },
  { year: '2022', total: 1261, share: 8 },
  { year: '2023', total: 1467, share: 12 },
  { year: '2024E', total: 1669, share: 18 },
  { year: '2025E', total: 1874, share: 24 },
  { year: '2026E', total: 2078, share: 32 },
];

const wtpData = [
  { name: '普通桌椅', value: 0, premium: 0 },
  { name: '带监测功能', value: 25, premium: 25 },
  { name: '智学空间(全功能)', value: 60, premium: 60 },
];

export const Chapter1: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. User Personas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="目标用户画像" subtitle="核心客群分析">
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl mr-4 shrink-0">🎓</div>
              <div>
                <h4 className="font-bold text-blue-800">中小学生 (K-12)</h4>
                <p className="text-sm text-blue-600 mt-1">家庭学习场景</p>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <p>⚠️ <strong>痛点：</strong>近视高发、坐姿扭曲、无意识前倾</p>
                  <p>💰 <strong>付费意愿：</strong>高 (家长为健康买单)</p>
                </div>
              </div>
            </div>
            <div className="flex items-start p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center text-2xl mr-4 shrink-0">💼</div>
              <div>
                <h4 className="font-bold text-indigo-800">居家办公人群</h4>
                <p className="text-sm text-indigo-600 mt-1">家庭办公室/SOHO</p>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <p>⚠️ <strong>痛点：</strong>久坐腰痛、手动调节打断思路</p>
                  <p>💰 <strong>付费意愿：</strong>中高 (追求效率与舒适)</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 2. Willingness to Pay */}
        <Card title="健康付费溢价调研" subtitle="用户愿意支付的溢价比例">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={wtpData} layout="vertical">
                <XAxis type="number" unit="%" />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="premium" fill="#8884d8" barSize={30} name="溢价意愿">
                  {wtpData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#3b82f6' : '#94a3b8'} />
                  ))}
                </Bar>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-center text-slate-500 mt-2">数据来源：市场调研 (N=500)</p>
        </Card>
      </div>

      {/* 3. Pain Point Storyboard */}
      <Card title="痛点场景示意图" subtitle="用户典型困扰分镜">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "调节繁琐", icon: "🔧", desc: "手动拧螺丝/费力搬动", color: "bg-slate-100" },
            { title: "用眼问题", icon: "👀", desc: "头贴桌面/距离<20cm", color: "bg-red-50" },
            { title: "光照割裂", icon: "💡", desc: "台灯过亮+环境昏暗", color: "bg-yellow-50" },
            { title: "久坐无提醒", icon: "⏳", desc: "伏案3小时未起身", color: "bg-orange-50" },
          ].map((item, i) => (
            <div key={i} className={`${item.color} p-4 rounded-lg border border-slate-200 flex flex-col items-center text-center`}>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h5 className="font-bold text-slate-700 mb-1">{item.title}</h5>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 4. Market Growth */}
      <Card title="全球智能家居与细分赛道趋势" subtitle="市场规模 (亿美元) vs 智能桌椅渗透率">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={marketTrendData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" unit="%" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="total" fill="#cbd5e1" name="智能家居总规模" barSize={40} />
              <Line yAxisId="right" type="monotone" dataKey="share" stroke="#3b82f6" strokeWidth={3} name="智能桌椅占比预测" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 5. Competitor Analysis */}
      <Card title="竞品差异化对比" subtitle="全方位能力评估">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">维度</th>
                <th className="px-4 py-3">传统桌椅</th>
                <th className="px-4 py-3">第一代智能桌椅</th>
                <th className="px-4 py-3 text-blue-600 bg-blue-50">本项目</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { dim: "调节方式", v1: "手动机械", v2: "电动按键", v3: "自适应/人脸联动" },
                { dim: "传感类型", v1: "无", v2: "无", v3: "距离+光照+温度" },
                { dim: "多用户支持", v1: "❌", v2: "❌ (单记忆)", v3: "✅ (云端档案)" },
                { dim: "健康管理", v1: "❌", v2: "⚠️ (仅久坐)", v3: "✅ (全维报告)" },
                { dim: "云端能力", v1: "❌", v2: "❌ (蓝牙APP)", v3: "✅ (WiFi/SaaS)" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dim}</td>
                  <td className="px-4 py-3 text-slate-500">{row.v1}</td>
                  <td className="px-4 py-3 text-slate-500">{row.v2}</td>
                  <td className="px-4 py-3 font-bold text-blue-600 bg-blue-50/30">{row.v3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
