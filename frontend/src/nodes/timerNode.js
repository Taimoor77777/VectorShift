import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || '1000');

  return (
    <BaseNode
      id={id}
      title="Timer"
      inputs={[{ id: 'trigger' }]}
      outputs={[{ id: 'output' }]}
      fields={[
        {
          label: 'Delay (ms)',
          type: 'number',
          value: delay,
          onChange: (e) => setDelay(e.target.value),
          placeholder: '1000',
        },
      ]}
    />
  );
};