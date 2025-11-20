
import React from 'react';
import { Card } from '../ui/Shared';

export const Chapter7: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. 3-Stage Roadmap */}
      <Card title="三阶段发展路线图" subtitle="稳步推进">
        <div className="relative border-l-2 border-blue-200 ml-4 space-y-8 my-4">
          {[
            { title: "第一阶段: 技术验证", time: "0-12个月", items: ["MVP 样机迭代", "小规模试点 (100台)", "核心算法固化"] },
            { title: "第二阶段: 市场拓展", time: "12-24个月", items: ["产品定型 & 量产", "全渠道上线", "云服务商业化"] },
            { title: "第三阶段: 生态构建", time: "24-36个月", items: ["区域广泛布局", "配件生态完善", "行业标准制定"] }
          ].map((stage, i) => (
            <div key={i} className="relative pl-6">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white"></div>
              <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                   <h4 className="font-bold text-blue-800">{stage.title}</h4>
                   <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">{stage.time}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-600">
                  {stage.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 2. Iteration Comparison */}
      <Card title="产品迭代优化示意图" subtitle="MVP vs 量产版">
        <div className="grid grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded p-4 bg-slate-50 opacity-75">
                <h4 className="font-bold text-slate-500 mb-2">MVP 原型机</h4>
                <ul className="text-sm text-slate-500 space-y-1">
                    <li>• 外露线缆</li>
                    <li>• 3D打印外壳</li>
                    <li>• 识别耗时 4s+</li>
                    <li>• 仅基础功能</li>
                </ul>
            </div>
            <div className="border border-blue-300 rounded p-4 bg-blue-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1">最终量产版</div>
                <h4 className="font-bold text-blue-700 mb-2">V1.0 正式版</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                    <li>• 一体化隐藏走线 ✨</li>
                    <li>• 注塑/铝合金工艺 ✨</li>
                    <li>• 识别耗时 &lt;2.3s 🚀</li>
                    <li>• 完整云端生态 ☁️</li>
                </ul>
            </div>
        </div>
      </Card>
    </div>
  );
};
