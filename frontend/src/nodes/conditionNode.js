import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  return (
    <BaseNode
      id={id}
      title="Condition"
      inputs={[{ id: 'input' }]}
      outputs={[{ id: 'true' }, { id: 'false' }]}
      fields={[
        {
          label: 'Condition',
          type: 'text',
          value: condition,
          onChange: (e) => setCondition(e.target.value),
          placeholder: 'e.g. value > 10',
        },
      ]}
    />
  );
};