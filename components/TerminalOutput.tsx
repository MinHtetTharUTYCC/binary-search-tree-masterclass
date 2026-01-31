
import React from 'react';

interface TerminalOutputProps {
  logs: string[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ logs }) => {
  return (
    <div className="bg-black rounded-lg p-4 border border-slate-700 shadow-2xl h-full flex flex-col">
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-xs text-slate-500 ml-2 font-mono">java-terminal — 80x24</span>
      </div>
      <div className="flex-1 font-mono text-sm space-y-1 overflow-y-auto custom-scrollbar">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-emerald-500 shrink-0">➜</span>
            <span className={log.includes('Found') || log.includes('Success') ? "text-blue-400" : "text-slate-300"}>
              {log}
            </span>
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-emerald-500 shrink-0">➜</span>
          <span className="animate-pulse bg-slate-500 h-4 w-2"></span>
        </div>
      </div>
    </div>
  );
};
