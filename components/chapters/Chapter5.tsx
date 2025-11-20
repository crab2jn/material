
import React from 'react';
import { Card } from '../ui/Shared';

export const Chapter5: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Scenarios */}
      <Card title="多场景应用流程" subtitle="家庭 / 校园 / 办公">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
                 { title: "🏠 家庭书房", steps: ["父母/孩子入座", "3秒人脸识别", "自动加载高度/光照", "档案云端同步"], color: "bg-orange-50 border-orange-200" },
                 { title: "🏫 校园自习室", steps: ["学生刷脸/刷卡", "跨设备调用档案", "集中管理后台", "班级健康报告"], color: "bg-blue-50 border-blue-200" },
                 { title: "🏢 智慧办公", steps: ["员工入座", "办公/午休模式切换", "久坐柔性提醒", "效率与健康双升"], color: "bg-slate-50 border-slate-200" }
             ].map((s, i) => (
                 <div key={i} className={`p-4 rounded-lg border ${s.color}`}>
                     <h4 className="font-bold mb-3 text-center">{s.title}</h4>
                     <ul className="space-y-2 text-sm">
                         {s.steps.map((st, j) => (
                             <li key={j} className="flex items-center">
                                 <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2"></div>
                                 {st}
                             </li>
                         ))}
                     </ul>
                 </div>
             ))}
         </div>
      </Card>

      {/* 2. Scaling Path */}
      <Card title="规模化推广路径" subtitle="从单品到生态">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-6 bg-slate-50 rounded border border-slate-200">
            <div className="text-center">
                <div className="text-4xl mb-2">🧩</div>
                <div className="font-bold text-slate-700">标准化模组</div>
                <div className="text-xs text-slate-500">降低成本/快速迭代</div>
            </div>
            <div className="text-2xl text-slate-300">→</div>
            <div className="text-center">
                <div className="text-4xl mb-2">🤝</div>
                <div className="font-bold text-slate-700">OEM/ODM 合作</div>
                <div className="text-xs text-slate-500">借力大厂渠道</div>
            </div>
            <div className="text-2xl text-slate-300">→</div>
            <div className="text-center">
                <div className="text-4xl mb-2">🌐</div>
                <div className="font-bold text-slate-700">智能学习空间</div>
                <div className="text-xs text-slate-500">全屋智能/生态延展</div>
            </div>
        </div>
      </Card>

      {/* 3. Ecosystem Map */}
      <Card title="智能学习空间生态示意图" subtitle="设备联动网络">
        <div className="relative h-80 bg-white border border-slate-200 rounded-lg flex items-center justify-center overflow-hidden">
            {/* Center Hub */}
            <div className="w-32 h-32 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl z-10">
                <span className="text-2xl">🖥️</span>
                <span className="font-bold text-sm">智能书桌</span>
                <span className="text-[10px]">控制中枢</span>
            </div>
            
            {/* Satellites */}
            {[
                { name: "智能护眼灯", icon: "💡", pos: "top-8 left-1/4" },
                { name: "空气净化器", icon: "🍃", pos: "top-8 right-1/4" },
                { name: "智能书柜", icon: "📚", pos: "bottom-8 left-1/4" },
                { name: "家长手机端", icon: "📱", pos: "bottom-8 right-1/4" },
                { name: "电子班牌", icon: "🏫", pos: "left-8 top-1/2 -translate-y-1/2" },
            ].map((item, i) => (
                <React.Fragment key={i}>
                    <div className={`absolute ${item.pos} w-24 h-24 bg-slate-50 border border-slate-200 rounded-full flex flex-col items-center justify-center shadow-sm z-10`}>
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-xs font-medium text-slate-700 mt-1">{item.name}</span>
                    </div>
                    {/* Connecting Line (Approximate center to center visually) */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className={`w-40 h-0.5 bg-slate-200 absolute`} style={{ transform: `rotate(${i * 72}deg) translateX(80px)` }}></div>
                    </div>
                </React.Fragment>
            ))}
        </div>
      </Card>
    </div>
  );
};
