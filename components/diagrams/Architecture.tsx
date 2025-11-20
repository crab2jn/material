import React from 'react';
import { Card } from '../ui/Card';

export const ArchitectureDiagram: React.FC = () => {
  return (
    <Card title="系统架构设计" subtitle="云-边-端 协同架构">
      <div className="w-full flex flex-col items-center py-6 bg-white rounded-lg">
        
        {/* Cloud Layer */}
        <div className="w-full max-w-4xl p-4 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50/50 mb-8 relative">
          <div className="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider">云端层 (百度智能云)</div>
          <div className="flex justify-around gap-4">
            <div className="bg-white p-4 rounded shadow-sm border border-blue-100 text-center flex-1">
              <div className="font-bold text-slate-800">人脸识别 API</div>
              <div className="text-xs text-slate-500 mt-1">特征提取与比对</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-blue-100 text-center flex-1">
              <div className="font-bold text-slate-800">用户档案数据库</div>
              <div className="text-xs text-slate-500 mt-1">高度、光照偏好、历史记录</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-blue-100 text-center flex-1">
              <div className="font-bold text-slate-800">数据分析服务</div>
              <div className="text-xs text-slate-500 mt-1">坐姿报告与洞察</div>
            </div>
          </div>
        </div>

        {/* Connection Lines (Visual representation) */}
        <div className="h-8 w-full flex justify-center relative -mt-8 mb-0">
           <div className="w-0.5 h-full bg-slate-300"></div>
        </div>

        {/* Local Server Layer */}
        <div className="w-full max-w-4xl p-4 border-2 border-dashed border-green-200 rounded-xl bg-green-50/50 mb-8 relative">
          <div className="absolute -top-3 left-4 bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider">本地服务层 (Python/Flask)</div>
           <div className="flex justify-around gap-4">
            <div className="bg-white p-4 rounded shadow-sm border border-green-100 text-center flex-1">
              <div className="font-bold text-slate-800">REST API 接口</div>
              <div className="text-xs text-slate-500 mt-1">/face/login, /control/update</div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border border-green-100 text-center flex-1">
              <div className="font-bold text-slate-800">本地缓存 (SQLite/Redis)</div>
              <div className="text-xs text-slate-500 mt-1">断网降级与快速加载</div>
            </div>
          </div>
        </div>

         {/* Connection Lines */}
        <div className="h-8 w-full flex justify-center relative -mt-8 mb-0">
           <div className="w-0.5 h-full bg-slate-300"></div>
        </div>

        {/* Device Layer */}
        <div className="w-full max-w-4xl p-4 border-2 border-dashed border-orange-200 rounded-xl bg-orange-50/50 relative">
          <div className="absolute -top-3 left-4 bg-orange-500 text-white px-3 py-1 text-xs font-bold uppercase rounded tracking-wider">嵌入式设备层 (Arduino/硬件)</div>
          
          <div className="grid grid-cols-3 gap-4">
             {/* Sensors */}
             <div className="bg-white p-3 rounded shadow-sm border border-orange-100">
               <div className="text-xs font-bold text-orange-600 mb-2 uppercase">传感器</div>
               <ul className="text-xs text-slate-600 space-y-1">
                 <li>• HC-SR04 (距离)</li>
                 <li>• 光敏电阻 (光照)</li>
                 <li>• DS18B20 (温度)</li>
               </ul>
             </div>
             
             {/* MCU */}
             <div className="bg-slate-800 p-3 rounded shadow-sm border border-slate-700 flex flex-col justify-center items-center text-white">
               <div className="font-bold">Arduino Uno</div>
               <div className="text-xs mt-1 opacity-75">控制逻辑 / PID</div>
             </div>

             {/* Actuators */}
             <div className="bg-white p-3 rounded shadow-sm border border-orange-100">
               <div className="text-xs font-bold text-orange-600 mb-2 uppercase">执行器</div>
               <ul className="text-xs text-slate-600 space-y-1">
                 <li>• N20 电机 (高度)</li>
                 <li>• SK6812 灯带 (照明)</li>
                 <li>• 蜂鸣器/风扇</li>
               </ul>
             </div>
          </div>
        </div>

      </div>
    </Card>
  );
};