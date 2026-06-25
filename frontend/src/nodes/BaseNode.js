import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  data,
  title,
  fields = [],
  inputs = [],
  outputs = [],
  style = {}
}) => {
  return (
    <div
      className="base-node"
      style={style}
    >
      {/* Input Handles */}
      {inputs.map((input, i) => (
        <Handle
          key={`${id}-input-${i}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((i + 1) / (inputs.length + 1)) * 100}%`
          }}
          className="node-handle"
        />
      ))}

      {/* Input Labels */}
      {inputs.map((input, i) => (
        <span
          key={`${id}-label-${i}`}
          className="var-label"
          style={{
            position: 'absolute',
            left: '-55px',
            top: `${((i + 1) / (inputs.length + 1)) * 100}%`,
            transform: 'translateY(-50%)',
            fontSize: '10px'
          }}
        >
          {input.id}
        </span>
      ))}

      {/* Header */}
      <div className="node-header">
        <span className="node-title">{title}</span>
      </div>

      {/* Body */}
      <div className="node-body">
        {fields.map((field, i) => (
          <div key={i} className="node-field">
            <label className="field-label">
              {field.label}
            </label>

            {field.type === 'select' ? (
              <select
                className="field-input"
                value={field.value}
                onChange={field.onChange}
              >
                {field.options.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                className="field-input"
                value={field.value}
                onChange={field.onChange}
                rows={3}
              />
            ) : (
              <input
                className="field-input"
                type={field.type || 'text'}
                value={field.value}
                onChange={field.onChange}
                placeholder={field.placeholder || ''}
              />
            )}
          </div>
        ))}
      </div>

      {/* Output Handles */}
      {outputs.map((output, i) => (
        <Handle
          key={`${id}-output-${i}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((i + 1) / (outputs.length + 1)) * 100}%`
          }}
          className="node-handle"
        />
      ))}
    </div>
  );
};


// import { Handle, Position } from 'reactflow';

// export const BaseNode = ({ id, data, title, fields = [], inputs = [], outputs = [], style = {} }) => {
//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//     <div className="base-node">
//       {/* Input Handles */}
//       {inputs.map((input, i) => (
//         <Handle
//           key={`${id}-input-${i}`}
//           type="target"
//           position={Position.Left}
//           id={`${id}-${input.id}`}
//           style={{ top: `${((i + 1) / (inputs.length + 1)) * 100}%` }}
//           className="node-handle"
//         />
//       ))}

//       {/* Node Header */}
//       <div className="node-header">
//         <span className="node-title">{title}</span>
//       </div>

//       {/* Node Body */}
//       <div className="node-body">
//         {fields.map((field, i) => (
//           <div key={i} className="node-field">
//             <label className="field-label">{field.label}</label>

//             {field.type === 'select' ? (
//               <select
//                 className="field-input"
//                 value={field.value}
//                 onChange={field.onChange}
//               >
//                 {field.options.map(opt => (
//                   <option key={opt.value} value={opt.value}>{opt.label}</option>
//                 ))}
//               </select>
//             ) : field.type === 'textarea' ? (
//               <textarea
//                 className="field-input"
//                 value={field.value}
//                 onChange={field.onChange}
//                 rows={3}
//               />
//             ) : (
//               <input
//                 className="field-input"
//                 type={field.type || 'text'}
//                 value={field.value}
//                 onChange={field.onChange}
//                 placeholder={field.placeholder || ''}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Output Handles */}
//       {outputs.map((output, i) => (
//         <Handle
//           key={`${id}-output-${i}`}
//           type="source"
//           position={Position.Right}
//           id={`${id}-${output.id}`}
//           style={{ top: `${((i + 1) / (outputs.length + 1)) * 100}%` }}
//           className="node-handle"
//         />
//       ))}
//     </div>
//     </div>
//   );
// };