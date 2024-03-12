'use client';

import { Button } from '^/components/button';
import { useTransition } from 'react';
import { createNewPost } from './actions';

export function NewPostButton() {
  const [pending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(async () => {
      const data = await createNewPost();
      console.log('ok:', data);
    });
  };

  return <Button onClick={onClick} disabled={pending}>Create New Post</Button>;
}
