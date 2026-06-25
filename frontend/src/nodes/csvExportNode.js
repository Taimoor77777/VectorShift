import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const CSVExportNode = ({ id, data }) => {
  const [delimiter, setDelimiter] = useState(',');

  return (
    <BaseNode
      id={id}
      title="CSV Export"
      fields={[
        {
          label: 'Delimiter',
          type: 'select',
          value: delimiter,
          onChange: (e) => setDelimiter(e.target.value),
          options: [
            { label: 'Comma', value: ',' },
            { label: 'Tab', value: '\t' }
          ]
        }
      ]}
      inputs={[{ id: 'list_data' }]}
      outputs={[{ id: 'download_link' }]}
    />
  );
};