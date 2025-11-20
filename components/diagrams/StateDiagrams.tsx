import React from 'react';
import { Card } from '../ui/Card';

export const ReminderStateMachine: React.FC = () => {
  return (
    <Card title="久坐/姿势提醒状态机" subtitle="四级递进干预策略 (基于 3.3.2 章节)">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 overflow-x-auto">
        
        {/* State 0 */}
        <div className="flex flex-col items-center min-w-[140px]">
            <div className="w-28 h-28 rounded-full border-4 border-green-500 bg-green-50 flex flex-col items-center justify-center shadow-lg z-10 relative">
                <div className="text-green-700 font-bold text-lg">State 0</div>
                <div className="text-xs text-green-600 font-medium">正常态</div>
                <div className="text-[10px] text-slate-500 mt-1 text-center px-2">距离 &gt; 35cm<br/>绿灯常亮</div>
            </div>
        </div>

        {/* Arrow */}
        <div className="flex-1 h-1 bg-slate-200 relative min-w-[40px]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-[10px] text-slate-500 mb-1 whitespace-nowrap">&lt; 35cm (5s)</div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-slate-200"></div>
        </div>

        {/* State 1 */}
        <div className="flex flex-col items-center min-w-[140px]">
            <div className="w-28 h-28 rounded-full border-4 border-yellow-400 bg-yellow-50 flex flex-col items-center justify-center shadow-lg z-10">
                <div className="text-yellow-700 font-bold text-lg">State 1</div>
                <div className="text-xs text-yellow-600 font-medium">温和预警</div>
                <div className="text-[10px] text-slate-500 mt-1 text-center px-2">黄灯闪烁 (0.5Hz)<br/>UI 提示</div>
            </div>
        </div>

        {/* Arrow */}
        <div className="flex-1 h-1 bg-slate-200 relative min-w-[40px]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-[10px] text-slate-500 mb-1 whitespace-nowrap">&lt; 30cm (10s)</div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-slate-200"></div>
        </div>

        {/* State 2 */}
        <div className="flex flex-col items-center min-w-[140px]">
            <div className="w-28 h-28 rounded-full border-4 border-orange-500 bg-orange-50 flex flex-col items-center justify-center shadow-lg z-10">
                <div className="text-orange-700 font-bold text-lg">State 2</div>
                <div className="text-xs text-orange-600 font-medium">严重报警</div>
                <div className="text-[10px] text-slate-500 mt-1 text-center px-2">蜂鸣器短鸣<br/>"请坐直"动画</div>
            </div>
        </div>

        {/* Arrow */}
        <div className="flex-1 h-1 bg-slate-200 relative min-w-[40px]">
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-[10px] text-slate-500 mb-1 whitespace-nowrap">&lt; 25cm (15s)</div>
             <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-slate-200"></div>
        </div>

        {/* State 3 */}
        <div className="flex flex-col items-center min-w-[140px]">
            <div className="w-28 h-28 rounded-full border-4 border-red-600 bg-red-50 flex flex-col items-center justify-center shadow-lg z-10 animate-pulse">
                <div className="text-red-700 font-bold text-lg">State 3</div>
                <div className="text-xs text-red-600 font-medium">强制干预</div>
                <div className="text-[10px] text-slate-500 mt-1 text-center px-2">蜂鸣器长鸣<br/>锁屏/弹窗</div>
            </div>
        </div>

      </div>
      <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded text-xs text-slate-500">
          <strong>状态恢复条件：</strong> 距离恢复 &gt; 40cm 且持续 20秒。此滞回策略防止临界值频繁触发误报。
      </div>
    </Card>
  );
};