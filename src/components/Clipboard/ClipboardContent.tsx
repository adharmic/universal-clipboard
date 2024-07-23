import React from 'react';
import { useClipboard } from '../../hooks/useClipboard';

export const ClipboardContent: React.FC = () => {
  const { content, updateContent } = useClipboard();

  return (
    <textarea
      value={content}
      onChange={(e) => updateContent(e.target.value)}
      placeholder="Enter your clipboard content here"
      rows={10}
      cols={50}
    />
  );
};