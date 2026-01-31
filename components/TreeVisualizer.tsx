
import React from 'react';

interface NodeProps {
  x: number;
  y: number;
  value: number;
  isActive?: boolean;
}

const TreeNode: React.FC<NodeProps> = ({ x, y, value, isActive }) => (
  <g className="transition-all duration-500">
    <circle 
      cx={x} cy={y} r="20" 
      fill={isActive ? "#6366f1" : "#1e293b"} 
      stroke="#475569" 
      strokeWidth="2" 
    />
    <text 
      x={x} y={y + 5} 
      textAnchor="middle" 
      fill="white" 
      fontSize="12" 
      fontWeight="600"
    >
      {value}
    </text>
  </g>
);

const TreeLine: React.FC<{x1: number, y1: number, x2: number, y2: number}> = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#475569" strokeWidth="2" />
);

export const TreeVisualizer: React.FC = () => {
  return (
    <div className="w-full h-64 bg-slate-900/50 rounded-xl border border-slate-700 flex items-center justify-center overflow-hidden">
      <svg width="400" height="240" viewBox="0 0 400 240">
        {/* Root 5 */}
        <TreeLine x1={200} y1={40} x2={100} y2={100} />
        <TreeLine x1={200} y1={40} x2={300} y2={100} />
        
        {/* Level 1: 4 and 7 */}
        <TreeLine x1={100} y1={100} x2={60} y2={160} />
        <TreeLine x1={300} y1={100} x2={340} y2={160} />
        
        <TreeNode x={200} y={40} value={5} />
        <TreeNode x={100} y={100} value={4} />
        <TreeNode x={300} y={100} value={7} isActive />
        <TreeNode x={60} y={160} value={3} />
        <TreeNode x={340} y={160} value={9} />
      </svg>
    </div>
  );
};
