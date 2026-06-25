// // toolbar.js


// toolbar.js
import { DraggableNode } from './draggableNode';

const NODE_DEFS = [
  { type: 'customInput', label: 'Input',      icon: '→', iconClass: 'icon-input' },
  { type: 'customOutput', label: 'Output',    icon: '←', iconClass: 'icon-output' },
  { type: 'llm',         label: 'LLM',        icon: '✦', iconClass: 'icon-llm' },
  { type: 'text',        label: 'Text',        icon: 'T', iconClass: 'icon-text' },
  { type: 'api',         label: 'API Call',    icon: '⚡', iconClass: 'icon-api' },
  { type: 'condition',   label: 'Condition',   icon: '?', iconClass: 'icon-condition' },
  { type: 'timer',       label: 'Timer',       icon: '◷', iconClass: 'icon-timer' },
  { type: 'email',       label: 'Send Email',  icon: '✉', iconClass: 'icon-email' },
  { type: 'csvExport',   label: 'CSV Export',  icon: '↓', iconClass: 'icon-csvExport' },
];

export const PipelineToolbar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar__heading">Nodes</p>
      <div className="sidebar__nodes">
        {NODE_DEFS.map((node) => (
          <DraggableNode
            key={node.type}
            type={node.type}
            label={node.label}
            icon={node.icon}
            iconClass={node.iconClass}
          />
        ))}
      </div>
    </div>
  );
};
// import { DraggableNode } from './draggableNode';

// export const PipelineToolbar = () => {

//     return (
//         <div style={{ padding: '10px' }}>
//             <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                 <DraggableNode type='customInput' label='Input' />
//                 <DraggableNode type='llm' label='LLM' />
//                 <DraggableNode type='customOutput' label='Output' />
//                 <DraggableNode type='text' label='Text' />
//                 <DraggableNode type='api' label='API' />
//                 <DraggableNode type='condition' label='Condition' />
//                 <DraggableNode type='timer' label='Timer' />
//                 <DraggableNode type='email' label='Email' />
//                 <DraggableNode type='csvExport' label='CSV Export' />
//             </div>
//         </div>
//     );
// }

