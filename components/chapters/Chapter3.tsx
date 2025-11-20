
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Card } from '../ui/Shared';

const pidData = Array.from({ length: 20 }, (_, i) => ({
  time: i,
  target: 400,
  pid: 400 - 200 * Math.exp(-0.3 * i) + (Math.random() * 10 - 5), // Converges smooth
  nopid: 400 - 200 * Math.exp(-0.1 * i) + (Math.random() * 100 - 50), // Fluctuates
}));

const innovationData = [
  { subject: '多用户识别', A: 20, B: 100, fullMark: 100 },
  { subject: '响应速度', A: 60, B: 90, fullMark: 100 },
  { subject: '稳定性', A: 80, B: 95, fullMark: 100 },
  { subject: '扩展性', A: 40, B: 85, fullMark: 100 },
  { subject: '健康管理', A: 30, B: 95, fullMark: 100 },
];

export const Chapter3: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* 1. Face Rec Flow */}
        <Card title="人脸注册/识别流程图" subtitle="总耗时 ≤ 2.3秒">
          <div className="flex flex-col space-y-4 text-sm">
            {['图像采集 (Front)', '质量检测 (Front)', 'Base64编码 (Local)', '云端比对 (Cloud)', '档案加载 (Cloud->Local)', '参数下发 (Local->MCU)'].map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 z-10">{i + 1}</div>
                <div className="ml-4 p-3 bg-white border border-slate-200 rounded shadow-sm flex-1 font-medium text-slate-700">
                  {step}
                </div>
                {i < 5 && <div className="absolute left-7 w-0.5 h-10 bg-blue-200 -z-0 mt-10"></div>}
              </div>
            ))}
          </div>
        </Card>

        {/* 2. Lifting Mech */}
        <Card title="升降机构机械结构图" subtitle="剖面示意">
            <div className="h-full flex flex-col items-center justify-center bg-slate-50 rounded border border-slate-200 p-4">
                <div className="relative w-32 h-64 bg-slate-300 rounded">
                    {/* Leg */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-400 rounded-t border-b border-slate-500"></div>
                    <div className="absolute bottom-0 left-4 right-4 h-1/2 bg-slate-200 rounded-b border-l border-r border-slate-300"></div>
                    
                    {/* Motor */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-700 rounded flex items-center justify-center text-white text-[10px]">N20</div>
                    
                    {/* Screw */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-2 h-40 bg-gradient-to-r from-gray-300 to-gray-500"></div>
                    
                    {/* Labels */}
                    <div className="absolute top-10 -right-24 text-xs text-slate-600">← T型丝杆 (4mm导程)</div>
                    <div className="absolute bottom-10 -left-24 text-xs text-slate-600 text-right">导轨滑块 →</div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 whitespace-nowrap">行程 55-85cm</div>
                </div>
            </div>
        </Card>
      </div>

      {/* 3. PID vs No PID */}
      <Card title="PID 光照控制效果对比" subtitle="目标照度: 400lux">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pidData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" label={{value: '时间 (s)', position: 'insideBottomRight', offset: -5}} />
              <YAxis domain={[0, 500]} label={{value: '照度 (lux)', angle: -90, position: 'insideLeft'}} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pid" stroke="#10b981" strokeWidth={2} name="PID控制 (智学空间)" dot={false} />
              <Line type="monotone" dataKey="nopid" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" name="无PID (普通台灯)" dot={false} />
              <Line type="monotone" dataKey="target" stroke="#64748b" strokeWidth={1} name="目标值" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 4. Innovation Radar */}
      <Card title="创新点价值维度对比" subtitle="核心优势雷达图">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} data={innovationData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="本项目" dataKey="B" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Radar name="传统/竞品" dataKey="A" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* 5. State Machine */}
      <Card title="坐姿提醒状态机" subtitle="渐进式干预逻辑">
         <div className="flex justify-between items-center text-center">
             {[
                 { s: '正常', c: 'bg-green-100 text-green-800', t: '绿灯常亮' },
                 { s: '预警', c: 'bg-yellow-100 text-yellow-800', t: '黄灯闪烁' },
                 { s: '提示', c: 'bg-orange-100 text-orange-800', t: '短鸣提示' },
                 { s: '强制', c: 'bg-red-100 text-red-800', t: '长鸣/锁屏' }
             ].map((st, i) => (
                 <div key={i} className="flex items-center">
                     <div className={`w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 ${st.c} shadow-sm z-10`}>
                         <span className="font-bold text-sm">{st.s}</span>
                         <span className="text-[10px] mt-1">{st.t}</span>
                     </div>
                     {i < 3 && <div className="w-12 h-1 bg-slate-300 mx-2">→</div>}
                 </div>
             ))}
         </div>
      </Card>

    </div>
  );
};
