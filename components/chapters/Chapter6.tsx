
import React from 'react';
import { Card, Badge } from '../ui/Shared';

export const Chapter6: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 1. Risk Matrix */}
      <Card title="风险识别矩阵" subtitle="影响程度 vs 发生概率">
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 p-4 rounded">
                <h4 className="font-bold text-red-800 mb-2">高风险 (红区)</h4>
                <ul className="list-disc list-inside text-sm text-red-700">
                    <li>供应链价格波动</li>
                    <li>现金流断裂 (初期)</li>
                </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                <h4 className="font-bold text-yellow-800 mb-2">中风险 (黄区)</h4>
                <ul className="list-disc list-inside text-sm text-yellow-700">
                    <li>云端识别延迟</li>
                    <li>竞品价格战</li>
                    <li>数据隐私合规</li>
                </ul>
            </div>
            <div className="bg-green-50 border border-green-200 p-4 rounded col-span-2">
                <h4 className="font-bold text-green-800 mb-2">低风险 (绿区)</h4>
                <ul className="list-disc list-inside text-sm text-green-700 flex flex-wrap gap-4">
                    <li>技术实现难度</li>
                    <li>用户接受度</li>
                    <li>售后维修成本</li>
                </ul>
            </div>
        </div>
      </Card>

      {/* 2. Tech Risk Mitigation */}
      <Card title="技术风险缓解流程" subtitle="降级策略">
        <div className="flex flex-col space-y-4">
            <div className="flex items-center">
                <div className="w-24 font-bold text-slate-700">识别失败</div>
                <div className="mx-2 text-slate-400">→</div>
                <div className="flex-1 bg-slate-100 p-2 rounded border border-slate-200 text-sm">
                    自动重试 (2次) → <span className="text-blue-600 font-bold">本地缓存匹配</span> → PIN码登录
                </div>
            </div>
            <div className="flex items-center">
                <div className="w-24 font-bold text-slate-700">网络中断</div>
                <div className="mx-2 text-slate-400">→</div>
                <div className="flex-1 bg-slate-100 p-2 rounded border border-slate-200 text-sm">
                    降级为<span className="text-green-600 font-bold">本地离线模式</span> (使用最后一次配置) → 网络恢复后同步日志
                </div>
            </div>
             <div className="flex items-center">
                <div className="w-24 font-bold text-slate-700">传感误差</div>
                <div className="mx-2 text-slate-400">→</div>
                <div className="flex-1 bg-slate-100 p-2 rounded border border-slate-200 text-sm">
                    滑动窗口滤波 → 剔除极值 → <span className="text-orange-600 font-bold">多传感交叉校验</span>
                </div>
            </div>
        </div>
      </Card>

      {/* 3. Channel Matrix */}
      <Card title="多渠道布局矩阵" subtitle="全渠道覆盖策略">
         <div className="grid grid-cols-2 gap-4">
             {[
                 { name: "电商直营 (D2C)", sub: "天猫/京东", feature: "利润高, 数据直接", color: "bg-blue-50" },
                 { name: "线下体验", sub: "家居卖场/快闪店", feature: "体验感强, 品牌树立", color: "bg-purple-50" },
                 { name: "教育渠道 (B2B)", sub: "私立学校/机构", feature: "批量大, 标杆效应", color: "bg-green-50" },
                 { name: "私域流量", sub: "社群/公众号", feature: "高复购, 服务变现", color: "bg-orange-50" }
             ].map((c, i) => (
                 <div key={i} className={`${c.color} p-4 rounded border border-slate-100`}>
                     <h4 className="font-bold text-slate-800">{c.name}</h4>
                     <div className="text-xs text-slate-500 mb-1">{c.sub}</div>
                     <Badge>{c.feature}</Badge>
                 </div>
             ))}
         </div>
      </Card>
    </div>
  );
};
