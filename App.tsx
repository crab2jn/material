
import React, { useState } from 'react';
import { Chapter1 } from './components/chapters/Chapter1';
import { Chapter2 } from './components/chapters/Chapter2';
import { Chapter3 } from './components/chapters/Chapter3';
import { Chapter4 } from './components/chapters/Chapter4';
import { Chapter5 } from './components/chapters/Chapter5';
import { Chapter6 } from './components/chapters/Chapter6';
import { Chapter7 } from './components/chapters/Chapter7';
import { Chapter8 } from './components/chapters/Chapter8';

// Icons
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const chapters = [
    { id: 1, title: "市场与用户洞察", icon: "📊" },
    { id: 2, title: "方案基准与架构", icon: "🏗️" },
    { id: 3, title: "关键技术创新", icon: "🔬" },
    { id: 4, title: "商业化验证", icon: "💰" },
    { id: 5, title: "应用场景前景", icon: "🏘️" },
    { id: 6, title: "风险识别控制", icon: "🛡️" },
    { id: 7, title: "路线与迭代", icon: "📅" },
    { id: 8, title: "成果与公司", icon: "🏢" },
  ];

  const NavItem: React.FC<{ item: any }> = ({ item }) => (
    <button
      onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
        activeTab === item.id 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      <div className="flex items-center space-x-3">
        <span>{item.icon}</span>
        <span className="text-sm font-medium text-left">第{item.id}章：{item.title}</span>
      </div>
      {activeTab === item.id && <ChevronRight />}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-800">
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className="h-16 flex items-center px-6 border-b border-slate-100 bg-slate-50/50">
          <h1 className="text-lg font-bold text-blue-700 tracking-tight flex items-center">
            <span className="text-2xl mr-2">🧠</span> 智学空间<span className="text-slate-400 font-light ml-1">素材库</span>
          </h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
          {chapters.map(c => <NavItem key={c.id} item={c} />)}
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="text-xs text-slate-400 text-center">
            SmartLearn Asset Gen v2.0<br/>
            Generated for Business Plan
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen relative">
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center">
            <button className="md:hidden text-slate-500 mr-4" onClick={() => setMobileMenuOpen(true)}>
                <MenuIcon />
            </button>
            <h2 className="text-lg font-bold text-slate-800">
                {chapters.find(c => c.id === activeTab)?.title}
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
            Chapter {activeTab}
          </div>
        </header>

        <div className="p-6 max-w-6xl mx-auto pb-20">
          {activeTab === 1 && <Chapter1 />}
          {activeTab === 2 && <Chapter2 />}
          {activeTab === 3 && <Chapter3 />}
          {activeTab === 4 && <Chapter4 />}
          {activeTab === 5 && <Chapter5 />}
          {activeTab === 6 && <Chapter6 />}
          {activeTab === 7 && <Chapter7 />}
          {activeTab === 8 && <Chapter8 />}
        </div>
      </main>
    </div>
  );
};

export default App;
