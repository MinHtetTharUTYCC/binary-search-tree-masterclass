import React, { useState } from 'react';
import {
    Code2,
    Search,
    PlusCircle,
    Trash2,
    GitBranch,
    Network,
    Activity,
    BookOpen,
    ChevronRight,
    Database,
    Terminal,
    Cpu,
    Clock,
    Users,
} from 'lucide-react';
import { BSTFunction } from './types';
import { PAGE_DATA, TEAM_MEMBERS } from './constants';
import { TreeVisualizer } from './components/TreeVisualizer';
import { TerminalOutput } from './components/TerminalOutput';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<BSTFunction>(BSTFunction.TEAM);

    const getIcon = (func: BSTFunction) => {
        switch (func) {
            case BSTFunction.TEAM:
                return <Users className="w-5 h-5" />;
            case BSTFunction.OVERVIEW:
                return <BookOpen className="w-5 h-5" />;
            case BSTFunction.INSERT:
                return <PlusCircle className="w-5 h-5" />;
            case BSTFunction.SEARCHING:
                return <Search className="w-5 h-5" />;
            case BSTFunction.INORDER:
                return <Network className="w-5 h-5" />;
            case BSTFunction.PREORDER:
                return <GitBranch className="w-5 h-5" />;
            case BSTFunction.POSTORDER:
                return <GitBranch className="w-5 h-5 rotate-180" />;
            case BSTFunction.DELETING:
                return <Trash2 className="w-5 h-5" />;
            case BSTFunction.PERFORMANCE:
                return <Activity className="w-5 h-5" />;
            default:
                return <Code2 className="w-5 h-5" />;
        }
    };

    const currentData = PAGE_DATA[activeTab];

    return (
        <div className="min-h-screen flex bg-slate-950 text-slate-100 overflow-hidden">
            {/* Sidebar Navigation */}
            <nav className="w-72 border-r border-slate-800 bg-slate-900/50 flex flex-col p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-tight">BST Master</h1>
                        <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                            Visual Presentation
                        </p>
                    </div>
                </div>

                <div className="space-y-1">
                    {Object.values(BSTFunction).map((func) => (
                        <button
                            key={func}
                            onClick={() => setActiveTab(func)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                activeTab === func
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                            }`}
                        >
                            <span
                                className={
                                    activeTab === func
                                        ? 'text-white'
                                        : 'text-slate-500 group-hover:text-slate-300'
                                }
                            >
                                {getIcon(func)}
                            </span>
                            <span className="font-medium text-sm">{func}</span>
                            {activeTab === func && <ChevronRight className="w-4 h-4 ml-auto" />}
                        </button>
                    ))}
                </div>

                <div className="mt-auto p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase mb-2">
                        <Cpu className="w-3 h-3" />
                        <span>Memory Layout</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        All nodes are dynamically allocated in the heap. BST structure maintains a
                        strict ordering for efficient retrieval.
                    </p>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-16 border-b border-slate-800 px-8 flex items-center justify-between bg-slate-950/50 backdrop-blur-sm z-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-semibold text-slate-200">
                            {currentData.title}
                        </h2>
                        <div className="h-4 w-[1px] bg-slate-700"></div>
                        <span className="text-sm font-mono text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">
                            Time: {currentData.complexity.time}
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-500" />
                            <span className="text-sm text-slate-500">Big-O Efficiency</span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-10 custom-scrollbar">
                    {/* Top Hero Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        <div className="space-y-6 animate-in slide-in-from-left duration-500">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                                    {currentData.title}
                                </h3>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    {currentData.description}
                                </p>
                            </div>

                            {currentData.scenario && currentData.scenarioDescription && (
                                <div className="p-6 bg-slate-900 border border-slate-700 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl -mr-16 -mt-16 rounded-full group-hover:bg-indigo-600/20 transition-all"></div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <BookOpen className="w-5 h-5 text-indigo-400" />
                                        <h4 className="font-semibold text-white">
                                            Real-World Application
                                        </h4>
                                    </div>
                                    <p className="font-medium text-slate-200 mb-2">
                                        {currentData.scenario}
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {currentData.scenarioDescription}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="animate-in slide-in-from-right duration-500 delay-200">
                            {activeTab === BSTFunction.TEAM ? (
                                <div className="grid grid-cols-2 gap-4">
                                    {TEAM_MEMBERS.map((member, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors group"
                                        >
                                            <img
                                                src={member.img}
                                                alt={member.name}
                                                className="w-14 h-14 rounded-full border-2 border-slate-700 group-hover:border-indigo-500 transition-colors"
                                            />
                                            <div>
                                                <p className="font-bold text-sm text-white">
                                                    {member.name}
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <TreeVisualizer />
                                    <div className="mt-4 flex justify-between px-2">
                                        <div className="text-center">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                                                Space Complexity
                                            </p>
                                            <p className="text-sm font-mono text-slate-300 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                                                {currentData.complexity.space}
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                                                Best Case
                                            </p>
                                            <p className="text-sm font-mono text-slate-300 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                                                Ω(log n)
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                                                Worst Case
                                            </p>
                                            <p className="text-sm font-mono text-slate-300 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                                                O(n)
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Code & Terminal Section */}
                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                        <div className="xl:col-span-3 bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden animate-in fade-in duration-700 delay-300">
                            <div className="px-6 py-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                    <span className="text-sm font-mono text-slate-400">
                                        {activeTab === BSTFunction.TEAM
                                            ? 'Contributors.info'
                                            : 'BSTree.java'}
                                    </span>
                                </div>
                                <button className="text-xs font-semibold text-slate-500 hover:text-slate-300 uppercase tracking-wider">
                                    Copy Snippet
                                </button>
                            </div>
                            <pre className="p-6 text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto overflow-y-hidden code-font">
                                <code>{currentData.javaCode}</code>
                            </pre>
                        </div>

                        <div className="xl:col-span-2 h-[400px] animate-in slide-in-from-bottom duration-700 delay-500">
                            <TerminalOutput logs={currentData.terminalOutput} />
                        </div>
                    </div>

                    {/* Footer Analysis - Only show on Overview */}
                    {activeTab === BSTFunction.OVERVIEW && (
                        <div className="bg-gradient-to-r from-indigo-900/20 to-slate-900/20 border border-indigo-500/20 rounded-3xl p-8 animate-in fade-in duration-1000">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-indigo-600/20 rounded-2xl">
                                    <Terminal className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">
                                        Why Use Binary Search Trees?
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Key Advantages and Considerations
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <h5 className="font-bold text-slate-200 text-sm">
                                        Efficiency Gain
                                    </h5>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        BST reduces lookup time from O(n) in arrays to O(log n),
                                        making it orders of magnitude faster as datasets grow.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="font-bold text-slate-200 text-sm">
                                        Memory Strategy
                                    </h5>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Uses node pointers which allow for disjointed memory
                                        allocation, avoiding the need for large contiguous memory
                                        blocks.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="font-bold text-slate-200 text-sm">
                                        Optimization Note
                                    </h5>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Performance heavily depends on tree balance. Use AVL or
                                        Red-Black transformations for guaranteed O(log n).
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;
