import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      title="API Call"
      inputs={[{ id: 'body' }]}
      outputs={[{ id: 'response' }]}
      fields={[
        {
          label: 'URL',
          type: 'text',
          value: url,
          onChange: (e) => setUrl(e.target.value),
          placeholder: 'https://api.example.com',
        },
        {
          label: 'Method',
          type: 'select',
          value: method,
          onChange: (e) => setMethod(e.target.value),
          options: [
            { value: 'GET', label: 'GET' },
            { value: 'POST', label: 'POST' },
            { value: 'PUT', label: 'PUT' },
            { value: 'DELETE', label: 'DELETE' },
          ],
        },
      ]}
    />
  );
};