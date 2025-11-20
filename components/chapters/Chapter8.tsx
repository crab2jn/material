
import React from 'react';
import { Card } from '../ui/Shared';

export const Chapter8: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 1. Org Chart */}
      <Card title="公司组织架构图" subtitle="扁平化敏捷团队">
        <div className="flex flex-col items-center">
           <div className="bg-blue-800 text-white px-6 py-2 rounded shadow font-bold mb-4">CEO (首席执行官)</div>
           <div className="w-px h-4 bg-slate-300 mb-4"></div>
           <div className="w-3/4 border-t border-slate-300 relative mb-4">
               <div className="absolute -top-2 left-0 w-px h-2 bg-slate-300"></div>
               <div className="absolute -top-2 left-1/2 w-px h-2 bg-slate-300"></div>
               <div className="absolute -top-2 right-0 w-px h-2 bg-slate-300"></div>
           </div>
           <div className="flex justify-between w-full md:w-4/5 gap-2">
               {['COO (运营)', 'CTO (技术)', 'CFO (财务)'].map((role, i) => (
                   <div key={i} className="bg-white border border-blue-200 text-blue-800 px-4 py-2 rounded shadow-sm text-sm font-bold text-center w-1/3">
                       {role}
                   </div>
               ))}
           </div>
           <div className="flex justify-between w-full md:w-4/5 gap-2 mt-2">
                <div className="w-1/3 flex justify-center"><div className="w-px h-4 bg-slate-300"></div></div>
                <div className="w-1/3 flex justify-center"><div className="w-px h-4 bg-slate-300"></div></div>
                <div className="w-1/3 flex justify-center"><div className="w-px h-4 bg-slate-300"></div></div>
           </div>
            <div className="flex justify-between w-full md:w-4/5 gap-2">
               <div className="text-xs text-slate-500 text-center w-1/3">市场/供应链</div>
               <div className="text-xs text-slate-500 text-center w-1/3">研发/数据/合规</div>
               <div className="text-xs text-slate-500 text-center w-1/3">融资/人事</div>
           </div>
        </div>
      </Card>

      {/* 2. Business Model 3D */}
      <Card title="业务模式金字塔" subtitle="三层价值结构">
          <div className="flex flex-col items-center justify-center space-y-1">
              <div className="w-40 py-2 bg-indigo-100 text-indigo-800 text-center border-2 border-indigo-200 rounded-t-lg z-30 shadow-sm">
                  <div className="font-bold text-sm">数据增值层</div>
                  <div className="text-[10px]">SaaS报告/B端服务</div>
              </div>
              <div className="w-64 py-3 bg-blue-100 text-blue-800 text-center border-2 border-blue-200 z-20 shadow-sm">
                  <div className="font-bold text-sm">平台赋能层</div>
                  <div className="text-[10px]">学习OS/健康云</div>
              </div>
              <div className="w-80 py-4 bg-slate-100 text-slate-800 text-center border-2 border-slate-200 rounded-b-lg z-10 shadow-sm">
                  <div className="font-bold text-sm">硬件筑基层</div>
                  <div className="text-[10px]">智能桌椅/IoT设备</div>
              </div>
          </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 3. Patents */}
          <Card title="专利布局图谱" subtitle="技术护城河">
              <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="font-bold text-blue-700">核心发明专利</span>
                      <span className="text-slate-500 text-xs">多传感融合算法</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="font-bold text-blue-700">核心发明专利</span>
                      <span className="text-slate-500 text-xs">云端身份认证系统</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="font-bold text-green-700">实用新型</span>
                      <span className="text-slate-500 text-xs">低噪升降结构</span>
                  </li>
                  <li className="flex justify-between items-center">
                      <span className="font-bold text-slate-600">防御性专利</span>
                      <span className="text-slate-500 text-xs">能耗管理/AI变体</span>
                  </li>
              </ul>
          </Card>

          {/* 4. Trademarks */}
          <Card title="商标注册分类" subtitle="品牌保护">
              <div className="grid grid-cols-2 gap-2">
                  {[
                      { cls: "第9类", name: "电子设备", i: "💻" },
                      { cls: "第20类", name: "家具", i: "🪑" },
                      { cls: "第35类", name: "广告销售", i: "📢" },
                      { cls: "第42类", name: "技术服务", i: "🛠️" }
                  ].map((t, i) => (
                      <div key={i} className="bg-slate-50 p-3 rounded text-center">
                          <div className="text-lg">{t.i}</div>
                          <div className="font-bold text-slate-700 text-sm">{t.cls}</div>
                          <div className="text-xs text-slate-500">{t.name}</div>
                      </div>
                  ))}
              </div>
          </Card>
      </div>
    </div>
  );
};
