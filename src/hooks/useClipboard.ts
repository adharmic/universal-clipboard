import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { database } from '../services/firebase';
import { ref, onValue, set } from 'firebase/database';

export const useClipboard = () => {
  const [content, setContent] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const clipboardRef = ref(database, `clipboards/${user.uid}`);
      const unsubscribe = onValue(clipboardRef, (snapshot) => {
        setContent(snapshot.val() || '');
      });
      return unsubscribe;
    }
  }, [user]);

  const updateContent = (newContent: string) => {
    if (user) {
      set(ref(database, `clipboards/${user.uid}`), newContent);
    }
  };

  return { content, updateContent };
};