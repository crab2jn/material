
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, Badge } from '../ui/Shared';

const bomData = [
  { name: '结构件 (桌腿/桌面)', value: 600 },
  { name: '执行器 (电机/灯)', value: 275 },
  { name: '电子 (主控/传感)', value: 55 },
  { name: '电源与线材', value: 80 },
  { name: '其他 (包装)', value: 93 },
];
const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#e2e8f0'];

export const Chapter4: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 1. Product Versions */}
      <Card title="产品版本功能与定价" subtitle="分层策略">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { name: "基础版 (Core)", price: "¥2000-3500", color: "slate", features: ["电动升降 🚜", "手动光控", "蜂鸣提醒"] },
                { name: "标准版 (Pro)", price: "¥5000-8000", color: "blue", features: ["自动跟高", "PID光控", "人脸识别 👤", "柔性提醒"] },
                { name: "进阶版 (Max)", price: "¥10000+", color: "indigo", features: ["AI 预测", "多区光环境", "深度报告", "实木材质"] }
            ].map((v, i) => (
                <div key={i} className={`border rounded-lg p-4 ${v.name.includes('Pro') ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-slate-200'}`}>
                    <h4 className={`font-bold text-lg text-${v.color}-700`}>{v.name}</h4>
                    <div className="text-xl font-bold my-2">{v.price}</div>
                    <ul className="space-y-2 text-sm text-slate-600 mt-4">
                        {v.features.map((f, j) => <li key={j}>✓ {f}</li>)}
                    </ul>
                </div>
            ))}
        </div>
      </Card>

      {/* 2. Cloud Services */}
      <Card title="云增值服务权益 (健康守护+)" subtitle="订阅制 (SaaS)">
         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white flex flex-col md:flex-row justify-between items-center shadow-lg">
             <div className="mb-4 md:mb-0">
                 <h3 className="text-2xl font-bold mb-2">💎 健康守护+ 会员</h3>
                 <p className="opacity-90">¥299 / 年</p>
             </div>
             <div className="grid grid-cols-2 gap-4 text-sm">
                 <div className="flex items-center"><span className="mr-2">📊</span> 高级健康周报</div>
                 <div className="flex items-center"><span className="mr-2">👨‍👩‍👧</span> 家庭多档案同步</div>
                 <div className="flex items-center"><span className="mr-2">🧠</span> AI 策略升级</div>
                 <div className="flex items-center"><span className="mr-2">🏥</span> 专家在线咨询</div>
             </div>
         </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 3. BOM Chart */}
        <Card title="BOM 成本构成 (小批量)" subtitle="总成本约 ¥1103">
           <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={bomData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {bomData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={(val) => `¥${val}`} />
                    <Legend verticalAlign="middle" align="right" layout="vertical" />
                </PieChart>
            </ResponsiveContainer>
           </div>
        </Card>

        {/* 4. Pilot KPI */}
        <Card title="试点期 KPI 跟踪看板" subtitle="核心指标">
            <div className="grid grid-cols-2 gap-4">
                {[
                    { label: "用户激活率", val: "92%", target: ">90%", col: "text-green-600" },
                    { label: "核心功能使用", val: "85%", target: "高频", col: "text-blue-600" },
                    { label: "NPS 净推荐值", val: "58", target: ">50", col: "text-indigo-600" },
                    { label: "云订阅转化", val: "12%", target: ">10%", col: "text-purple-600" },
                ].map((k, i) => (
                    <div key={i} className="bg-slate-50 rounded p-4 text-center border border-slate-100">
                        <div className="text-slate-500 text-xs mb-1">{k.label}</div>
                        <div className={`text-2xl font-bold ${k.col}`}>{k.val}</div>
                        <div className="text-xs text-slate-400 mt-1">目标: {k.target}</div>
                    </div>
                ))}
            </div>
        </Card>
      </div>

      {/* 5. Funding */}
      <Card title="资金规划流程图" subtitle="种子轮 & A轮">
          <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                  <div className="w-24 font-bold text-slate-700">种子轮</div>
                  <div className="flex-1 h-8 flex rounded overflow-hidden text-xs text-white font-bold">
                      <div className="bg-blue-500 w-[50%] flex items-center justify-center">研发 50%</div>
                      <div className="bg-green-500 w-[30%] flex items-center justify-center">试制 30%</div>
                      <div className="bg-orange-500 w-[15%] flex items-center justify-center">营销 15%</div>
                      <div className="bg-slate-400 w-[5%]"></div>
                  </div>
              </div>
              <div className="flex items-center">
                  <div className="w-24 font-bold text-slate-700">A 轮</div>
                  <div className="flex-1 h-8 flex rounded overflow-hidden text-xs text-white font-bold">
                      <div className="bg-blue-600 w-[30%] flex items-center justify-center">规模生产</div>
                      <div className="bg-indigo-600 w-[40%] flex items-center justify-center">市场推广</div>
                      <div className="bg-purple-600 w-[20%] flex items-center justify-center">团队</div>
                      <div className="bg-slate-500 w-[10%]">备用</div>
                  </div>
              </div>
          </div>
      </Card>
    </div>
  );
};
