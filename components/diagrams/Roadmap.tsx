import React from 'react';
import { Card } from '../ui/Card';
import { RoadmapPhase } from '../../types';

const phases: RoadmapPhase[] = [
  {
    phase: "第一阶段",
    title: "技术优化与市场开拓",
    duration: "第 0-1 年",
    items: [
      "MVP 开发 (样机迭代 v3)",
      "算法验证 (PID 光控, 人脸识别)",
      "用户内测 (20-50 名种子用户)",
      "小规模试点 (10-20 台设备)"
    ]
  },
  {
    phase: "第二阶段",
    title: "产品升级与市场拓展",
    duration: "第 1.5 - 2 年",
    items: [
      "成本优化 (供应链建立)",
      "规模化生产准备",
      "云增值服务上线 (SaaS)",
      "全渠道销售启动 (天猫/京东)"
    ]
  },
  {
    phase: "第三阶段",
    title: "区域布局与产业延链",
    duration: "第 2.5 年及以后",
    items: [
      "全国区域布局",
      "配件生态系统 (显示器支架等)",
      "ISO 9001 质量体系认证",
      "B2B 数据服务 (面向校园)"
    ]
  }
];

export const RoadmapTimeline: React.FC = () => {
  return (
    <Card title="战略路线图" subtitle="三年实施计划">
      <div className="relative py-4">
        {/* Timeline Line */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-slate-200 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((p, idx) => (
            <div key={idx} className="relative flex flex-col">
              {/* Dot */}
              <div className="hidden md:flex absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 border-4 border-white rounded-full shadow z-10 items-center justify-center">
              </div>
              
              <div className="mt-6 md:mt-12 bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded uppercase">{p.phase}</span>
                  <span className="text-xs text-slate-400 font-mono">{p.duration}</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-3 text-lg">{p.title}</h4>
                <ul className="space-y-2">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};