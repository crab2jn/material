import React from 'react';
import { Card } from '../ui/Card';

export const FaceRecognitionFlow: React.FC = () => {
  return (
    <Card title="人脸识别与档案加载流程" subtitle="端云协同处理逻辑 (基于 3.1 章节)">
      <div className="flex flex-col items-center space-y-6 py-4">
        
        {/* Step 1: Trigger */}
        <div className="flex flex-col items-center group">
          <div className="bg-white border-2 border-slate-300 rounded-lg p-3 w-48 text-center shadow-sm hover:border-blue-500 transition-colors relative">
            <div className="text-xs text-slate-500 uppercase font-bold mb-1">01. 触发</div>
            <div className="font-bold text-slate-800">入座 / 点击登录</div>
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-slate-50 border border-slate-200 rounded-full text-xs flex items-center justify-center text-slate-400">Start</div>
          </div>
          <div className="h-6 w-0.5 bg-slate-300"></div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-300"></div>
        </div>

        {/* Step 2: Local Capture */}
        <div className="flex flex-col items-center">
           <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-3 w-64 text-center shadow-sm">
             <div className="text-xs text-orange-600 uppercase font-bold mb-1">02. 前端采集 (Local)</div>
             <div className="font-bold text-slate-800">摄像头图像采集</div>
             <div className="text-xs text-slate-500 mt-1">质量检测 (清晰度/角度) & Base64 编码</div>
           </div>
           <div className="h-6 w-0.5 bg-slate-300"></div>
           <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-300"></div>
        </div>

        {/* Step 3: Cloud Processing */}
        <div className="flex flex-col items-center w-full relative">
           <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 w-72 text-center shadow-sm z-10">
             <div className="text-xs text-blue-600 uppercase font-bold mb-1">03. 云端处理 (Cloud API)</div>
             <div className="font-bold text-slate-800">百度智能云 API 特征比对</div>
             <div className="text-xs text-slate-500 mt-1">阈值判定 ( > 70% )</div>
           </div>
           
           {/* Branching Lines */}
           <div className="absolute top-full w-full h-12 flex justify-center">
               <div className="w-1/2 border-t-2 border-slate-300 h-full border-r-2 rounded-tr-xl -mr-0.5"></div> {/* Right Branch */}
               <div className="w-1/2 border-t-2 border-slate-300 h-full border-l-2 rounded-tl-xl -ml-0.5"></div> {/* Left Branch */}
           </div>
        </div>

        {/* Step 4: Outcome */}
        <div className="flex justify-center gap-8 w-full mt-8">
            {/* Success Path */}
            <div className="flex flex-col items-center w-1/2">
               <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-300 mb-2"></div>
               <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3 w-40 text-center shadow-sm">
                 <div className="text-xs text-green-600 font-bold mb-1">识别成功</div>
                 <div className="font-bold text-slate-800 text-sm">返回 UserID & 档案</div>
               </div>
               <div className="h-4 w-0.5 bg-green-200"></div>
               <div className="bg-white border border-green-200 rounded p-2 w-40 text-center text-xs text-slate-600 shadow-sm">
                   1. 调整高度 (Motor)<br/>2. 调整灯光 (LED)<br/>3. 设定提醒 (Buzzer)
               </div>
            </div>

            {/* Fail Path */}
            <div className="flex flex-col items-center w-1/2">
               <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-300 mb-2"></div>
               <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 w-40 text-center shadow-sm">
                 <div className="text-xs text-red-600 font-bold mb-1">识别失败 / 超时</div>
                 <div className="font-bold text-slate-800 text-sm">触发降级策略</div>
               </div>
               <div className="h-4 w-0.5 bg-red-200"></div>
               <div className="bg-white border border-red-200 rounded p-2 w-40 text-center text-xs text-slate-600 shadow-sm">
                   1. 重试 (x2)<br/>2. 提示调整姿势<br/>3. PIN 码 / 本地缓存
               </div>
            </div>
        </div>

      </div>
    </Card>
  );
};