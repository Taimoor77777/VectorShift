import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const EmailSenderNode = ({ id, data }) => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <BaseNode
      id={id}
      title="Email Sender"
      fields={[
        {
          label: 'Recipient',
          type: 'text',
          value: recipient,
          onChange: (e) => setRecipient(e.target.value),
          placeholder: 'email@example.com'
        },
        {
          label: 'Subject',
          type: 'text',
          value: subject,
          onChange: (e) => setSubject(e.target.value),
          placeholder: 'Hello!'
        }
      ]}
      inputs={[{ id: 'body' }]}
      outputs={[{ id: 'status' }]}
    />
  );
};