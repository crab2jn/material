import React from 'react';
import { Card } from '../ui/Card';

export const SoftwareDashboardMockup: React.FC = () => {
  return (
    <Card title="前端交互界面模拟 (Web Dashboard)" subtitle="基于 2.2.1 章节描述">
      <div className="bg-slate-900 p-4 rounded-lg shadow-inner font-mono text-slate-200">
        {/* Top Bar */}
        <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-bold text-lg">SmartLearn OS v1.0</span>
          </div>
          <div className="flex space-x-4 text-sm text-slate-400">
            <span>用户: <span className="text-white">张小明 (Child)</span></span>
            <span>WiFi: <span className="text-green-400">Connected</span></span>
            <span>Time: 19:42</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Column: Camera & Status */}
          <div className="md:col-span-7 space-y-4">
            {/* Camera Feed Placeholder */}
            <div className="bg-black rounded border border-slate-700 h-64 relative flex items-center justify-center overflow-hidden group">
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded opacity-80">REC</div>
              <div className="absolute top-2 right-2 text-green-400 text-xs font-mono">FPS: 24</div>
              
              {/* Face Detection Bounding Box Simulation */}
              <div className="w-32 h-40 border-2 border-yellow-400 rounded relative opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-5 left-0 bg-yellow-400 text-black text-xs px-1">Confidence: 99.5%</div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-400 -mt-1 -ml-1"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-yellow-400 -mt-1 -mr-1"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-yellow-400 -mb-1 -ml-1"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-400 -mb-1 -mr-1"></div>
              </div>
              
              <p className="text-slate-600 text-sm absolute bottom-4">实时视频流 (640x480)</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-2">
              <button className="bg-blue-600 hover:bg-blue-500 py-2 rounded text-sm font-medium transition-colors">注册新用户</button>
              <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded text-sm font-medium transition-colors">强制校准</button>
              <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded text-sm font-medium transition-colors">生成报告</button>
            </div>
          </div>

          {/* Right Column: Sensor Data */}
          <div className="md:col-span-5 space-y-4">
            {/* Real-time Metrics */}
            <div className="bg-slate-800 rounded p-4 border border-slate-700">
              <h4 className="text-xs uppercase text-slate-500 mb-3 font-bold tracking-wider">传感器读数</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-slate-400 text-sm">眼桌距离</span>
                  <span className="text-2xl text-white font-bold">38 <span className="text-sm text-slate-500 font-normal">cm</span></span>
                </div>
                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                   {/* Visual indicator for distance, Green zone > 33 */}
                   <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full h-full relative">
                      <div className="absolute top-0 bottom-0 bg-white w-1 shadow-lg" style={{left: '70%'}}></div>
                   </div>
                </div>
                
                <div className="h-px bg-slate-700 my-2"></div>

                <div className="flex justify-between items-end">
                  <span className="text-slate-400 text-sm">环境照度</span>
                  <span className="text-2xl text-yellow-400 font-bold">420 <span className="text-sm text-slate-500 font-normal">lux</span></span>
                </div>
                
                <div className="flex justify-between items-end mt-2">
                   <span className="text-slate-400 text-sm">环境温度</span>
                   <span className="text-xl text-blue-300 font-bold">26.5 <span className="text-sm text-slate-500 font-normal">°C</span></span>
                </div>
              </div>
            </div>

            {/* Control Panel */}
            <div className="bg-slate-800 rounded p-4 border border-slate-700">
              <h4 className="text-xs uppercase text-slate-500 mb-3 font-bold tracking-wider">执行器控制</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">桌面高度</span>
                    <span>65 cm</span>
                  </div>
                  <input type="range" min="55" max="85" defaultValue="65" className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">台灯亮度 (PWM)</span>
                    <span>80%</span>
                  </div>
                  <input type="range" min="0" max="100" defaultValue="80" className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-yellow-400" />
                </div>
                <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-300">场景模式</span>
                    <select className="bg-slate-700 border border-slate-600 text-white text-xs rounded p-1">
                        <option>专注学习</option>
                        <option>休闲阅读</option>
                        <option>绘画创作</option>
                    </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const HardwareSchematic: React.FC = () => {
    return (
        <Card title="硬件布局与传感器分布" subtitle="基于 2.1 硬件架构">
            <div className="relative w-full h-80 bg-white border border-slate-100 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-5 pointer-events-none">
                    {[...Array(400)].map((_, i) => <div key={i} className="border-[0.5px] border-slate-900"></div>)}
                </div>
                
                {/* Desk Top View */}
                <div className="relative w-3/4 h-48 bg-slate-100 border-2 border-slate-300 rounded-lg shadow-sm">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-300 text-4xl font-bold opacity-20">TOP VIEW</div>
                    
                    {/* Ultrasonic Sensor */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-blue-600 rounded-full shadow-md flex items-center justify-center z-10 group cursor-help">
                         <span className="text-white text-xs font-bold">HC-SR04</span>
                         <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded w-32 text-center z-20">
                             超声波测距<br/>监测头部距离
                         </div>
                         {/* Waves */}
                         <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-24 h-24 border-2 border-blue-400 rounded-full opacity-0 animate-ping"></div>
                    </div>

                    {/* Light Sensor */}
                    <div className="absolute top-4 right-8 w-4 h-4 bg-yellow-400 rounded-full border border-yellow-600 shadow-sm group cursor-help">
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded w-24 text-center z-20 -ml-10">
                            GL5516<br/>光敏电阻
                        </div>
                    </div>

                    {/* Temp Sensor */}
                    <div className="absolute top-4 left-8 w-4 h-4 bg-red-400 rounded-sm border border-red-600 shadow-sm group cursor-help">
                         <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded w-24 text-center z-20 -ml-10">
                            DS18B20<br/>温度传感器
                        </div>
                    </div>

                    {/* LED Strip */}
                    <div className="absolute top-1 left-12 right-12 h-1 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-100 shadow-[0_0_10px_rgba(253,224,71,0.6)] group cursor-help">
                         <div className="absolute top-full mt-2 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded w-32 text-center z-20 left-1/2 -ml-16">
                            SK6812 RGBW<br/>全光谱灯带
                        </div>
                    </div>

                    {/* User Zone */}
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-16 border-t-2 border-dashed border-slate-300 flex items-center justify-center">
                        <span className="text-slate-400 text-xs">用户活动区域</span>
                    </div>
                </div>

                {/* Legs/Motors (Side indicators) */}
                <div className="absolute left-[8%] top-1/2 transform -translate-y-1/2 w-8 h-32 border-l-2 border-r-2 border-slate-300 flex flex-col items-center justify-between py-2">
                     <div className="w-6 h-8 bg-slate-600 rounded-sm flex items-center justify-center text-[10px] text-white group relative">
                        M1
                        <div className="absolute left-full ml-2 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded w-24 z-20">N20 电机 (左)</div>
                     </div>
                     <div className="h-16 w-0.5 bg-slate-300"></div>
                </div>
                <div className="absolute right-[8%] top-1/2 transform -translate-y-1/2 w-8 h-32 border-l-2 border-r-2 border-slate-300 flex flex-col items-center justify-between py-2">
                     <div className="w-6 h-8 bg-slate-600 rounded-sm flex items-center justify-center text-[10px] text-white group relative">
                        M2
                        <div className="absolute right-full mr-2 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded w-24 z-20">N20 电机 (右)</div>
                     </div>
                     <div className="h-16 w-0.5 bg-slate-300"></div>
                </div>
                
                {/* Controller Box */}
                 <div className="absolute bottom-4 right-16 w-20 h-12 bg-blue-900 rounded border border-blue-700 shadow-lg flex items-center justify-center group">
                     <span className="text-white text-[10px] font-bold">Arduino Uno</span>
                      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs p-2 rounded w-32 text-center z-20">
                            主控单元<br/>(桌板下方)
                      </div>
                     {/* Wires */}
                     <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none opacity-30">
                         <path d="M10,0 L-100,-50" stroke="gray" strokeWidth="1" fill="none"/>
                         <path d="M10,0 L-200,-50" stroke="gray" strokeWidth="1" fill="none"/>
                     </svg>
                 </div>
            </div>
        </Card>
    );
}