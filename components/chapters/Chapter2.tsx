
import React from 'react';
import { Card } from '../ui/Shared';

export const Chapter2: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* 1. Hardware Exploded View */}
      <Card title="硬件架构整体示意图" subtitle="立体拆解">
        <div className="relative h-96 w-full bg-slate-50 rounded-lg flex items-center justify-center perspective-1000 overflow-hidden border border-slate-200">
          {/* Abstract 3D Layers */}
          <div className="flex flex-col space-y-6 transform rotate-x-12 scale-90">
            
            {/* Layer 1: Sensors */}
            <div className="w-80 h-24 bg-blue-100 border-2 border-blue-300 rounded-lg shadow-lg flex items-center justify-center relative transform translate-z-20 hover:translate-y-2 transition-transform">
               <span className="font-bold text-blue-700">传感器矩阵层</span>
               <div className="absolute -right-24 top-8 text-xs text-slate-500 w-20 text-left">HC-SR04<br/>GL5516<br/>DS18B20</div>
               {/* Data flow arrow */}
               <div className="absolute bottom-0 left-1/2 w-0.5 h-6 bg-blue-300 translate-y-full"></div>
               <div className="absolute bottom-0 left-1/2 translate-y-full mt-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-300"></div>
            </div>

            {/* Layer 2: Control */}
            <div className="w-80 h-24 bg-green-100 border-2 border-green-300 rounded-lg shadow-lg flex items-center justify-center relative z-10">
               <span className="font-bold text-green-700">主控层 (Arduino Uno)</span>
               <div className="absolute -right-24 top-8 text-xs text-slate-500 w-20 text-left">PID 算法<br/>状态机<br/>数据预处理</div>
               <div className="absolute bottom-0 left-1/2 w-0.5 h-6 bg-green-300 translate-y-full"></div>
               <div className="absolute bottom-0 left-1/2 translate-y-full mt-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-green-300"></div>
            </div>

            {/* Layer 3: Actuators */}
            <div className="w-80 h-24 bg-orange-100 border-2 border-orange-300 rounded-lg shadow-lg flex items-center justify-center relative transform -translate-z-20">
               <span className="font-bold text-orange-700">执行器层</span>
               <div className="absolute -right-24 top-8 text-xs text-slate-500 w-20 text-left">N20 电机<br/>LED 灯带<br/>蜂鸣器/风扇</div>
            </div>
          </div>
        </div>
      </Card>

      {/* 2. Sensor Map */}
      <Card title="传感器安装位置图" subtitle="桌面俯视图">
        <div className="relative w-full h-80 bg-white border border-slate-200 rounded-lg flex items-center justify-center">
          {/* Desk Shape */}
          <div className="w-3/4 h-48 bg-slate-100 border-4 border-slate-300 rounded-xl relative shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center text-slate-200 font-bold text-5xl select-none">DESK</div>
            
            {/* Sensors */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-blue-600 text-white text-xs flex items-center justify-center rounded-full shadow-lg z-10">
              HC-SR04 (距离)
            </div>
            <div className="absolute top-4 right-8 w-8 h-8 bg-yellow-400 rounded-full border-2 border-white shadow flex items-center justify-center text-[10px] font-bold text-yellow-800">
              光
            </div>
            <div className="absolute top-4 left-8 w-8 h-8 bg-red-400 rounded flex items-center justify-center border-2 border-white shadow text-[10px] font-bold text-white">
              温
            </div>
            
            {/* Strip */}
            <div className="absolute top-2 left-16 right-16 h-2 bg-yellow-200 rounded-full shadow-[0_0_10px_rgba(253,224,71,0.8)]"></div>
            
            {/* Legend */}
            <div className="absolute bottom-2 right-2 bg-white/80 p-2 rounded border border-slate-200 text-[10px] shadow-sm">
               <div className="flex items-center mb-1"><div className="w-3 h-3 bg-blue-600 rounded-full mr-1"></div> 超声波</div>
               <div className="flex items-center mb-1"><div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div> 光敏电阻</div>
               <div className="flex items-center"><div className="w-3 h-3 bg-red-400 rounded mr-1"></div> 温度传感</div>
            </div>
          </div>
        </div>
      </Card>

      {/* 3. Software Architecture */}
      <Card title="软件分层架构流程图" subtitle="数据流与协议">
        <div className="flex flex-col gap-4 p-4 bg-slate-50 rounded-lg">
           {[
             { name: "前端交互层 (HTML5/JS)", color: "bg-purple-100 border-purple-300 text-purple-800", detail: "Dashboard, 摄像头调用 (WebSocket)" },
             { name: "本地服务层 (Python/Flask)", color: "bg-green-100 border-green-300 text-green-800", detail: "REST API, 本地缓存, 串口通信" },
             { name: "云端 API 层 (百度智能云)", color: "bg-blue-100 border-blue-300 text-blue-800", detail: "人脸比对, 档案存储, 增值服务" },
             { name: "嵌入式控制层 (C++/Arduino)", color: "bg-slate-200 border-slate-400 text-slate-800", detail: "传感器驱动, PID控制, 状态机" }
           ].map((layer, i) => (
             <div key={i} className="relative">
               <div className={`${layer.color} border-l-4 p-4 rounded shadow-sm flex justify-between items-center`}>
                 <span className="font-bold">{layer.name}</span>
                 <span className="text-xs opacity-75">{layer.detail}</span>
               </div>
               {i < 3 && (
                 <div className="h-4 flex justify-center">
                   <div className="w-0.5 h-full bg-slate-300"></div>
                   <div className="absolute w-2 h-2 border-b border-r border-slate-400 rotate-45 mt-3"></div>
                 </div>
               )}
             </div>
           ))}
        </div>
      </Card>
    </div>
  );
};
