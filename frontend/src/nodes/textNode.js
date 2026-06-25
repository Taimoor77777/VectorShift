// // /frontend/src/nodes/TextNode.js

import { useMemo, useState } from 'react';
import { BaseNode } from './BaseNode';

const VARIABLE_REGEX =
  /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Extract variables
  const variables = useMemo(() => {
    const matches = [...currText.matchAll(VARIABLE_REGEX)];

    return [
      ...new Set(matches.map(match => match[1]))
    ];
  }, [currText]);

  // Create input handles
  const inputs = variables.map(variable => ({
    id: variable
  }));

  // Dynamic sizing
  const lines = currText.split('\n');

  const longestLine = Math.max(
    ...lines.map(line => line.length),
    15
  );

  const width = Math.max(
    220,
    longestLine * 8
  );

  const height = Math.max(
    140,
    lines.length * 24 + 100
  );

  return (
    <BaseNode
      id={id}
      title="Text"
      style={{
        width,
        minHeight: height,
        position: 'relative'
      }}
      fields={[
        {
          label: 'Text',
          type: 'textarea',
          value: currText,
          onChange: handleTextChange,
          placeholder:
            'Enter text with {{variables}}'
        }
      ]}
      inputs={inputs}
      outputs={[
        {
          id: 'output'
        }
      ]}
    />
  );
};
// import { useState } from 'react';
// import { BaseNode } from './BaseNode';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   // Define the configuration for BaseNode
//   const fields = [
//     {
//       label: 'Text',
//       type: 'text',
//       value: currText,
//       onChange: handleTextChange,
//       placeholder: 'Enter text...'
//     }
//   ];

//   const outputs = [
//     { id: 'output' }
//   ];

//   return (
//     <BaseNode
//       id={id}
//       title="Text"
//       fields={fields}
//       outputs={outputs}
//     />
//   );
// };
// // // textNode.js

// // import { useState } from 'react';
// // import { Handle, Position } from 'reactflow';

// // export const TextNode = ({ id, data }) => {
// //   const [currText, setCurrText] = useState(data?.text || '{{input}}');

// //   const handleTextChange = (e) => {
// //     setCurrText(e.target.value);
// //   };

// //   return (
// //     <div style={{width: 200, height: 80, border: '1px solid black'}}>
// //       <div>
// //         <span>Text</span>
// //       </div>
// //       <div>
// //         <label>
// //           Text:
// //           <input 
// //             type="text" 
// //             value={currText} 
// //             onChange={handleTextChange} 
// //           />
// //         </label>
// //       </div>
// //       <Handle
// //         type="source"
// //         position={Position.Right}
// //         id={`${id}-output`}
// //       />
// //     </div>
// //   );
// // }
