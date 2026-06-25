// // llmNode.js

// /frontend/src/nodes/LLMNode.js
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  
  // Define the inputs
  const inputs = [
    { id: 'system' },
    { id: 'prompt' }
  ];

  // Define the outputs
  const outputs = [
    { id: 'response' }
  ];

  return (
    <BaseNode
      id={id}
      title="LLM"
      fields={[
        { label: 'This is an LLM.' } 
      ]}
      inputs={inputs}
      outputs={outputs}
    />
  );
};

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }
