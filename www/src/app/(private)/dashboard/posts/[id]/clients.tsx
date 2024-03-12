'use client';

import { evaluate } from '@mdx-js/mdx';
import { Button } from '^/components/button';
import { ColorSchemeCookieValue, toRehypePrettyCodeOptions } from '^/lib/common/color-scheme';
import { cx } from '^/lib/common/css';
import { Language, Post, type Draft } from '^/lib/server/prisma';
import { mdx } from '^/mdx.css';
import { ReactNode, createElement, useEffect, useState, useTransition } from 'react';
import * as runtime from 'react/jsx-runtime';
import { default as rehypePrettyCode } from 'rehype-pretty-code';
import { deletePost, getHistoryDrafts, getPostMetadata, publishPost, saveDraft, savePostMetadata, unpublishPost } from './actions';
import * as s from './clients.css';

interface PostEditorProps {
  className?: string;
  postId: string;
  colorScheme: ColorSchemeCookieValue;
  initialValue: string;
}

export function PostEditor(props: PostEditorProps) {
  const [value, setValue] = useState(props.initialValue);
  const [pending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(async () => {
      const ret = await saveDraft(props.postId, value);
      console.log(ret);
    });
  };

  const handlePublish = () => {
    startTransition(async () => {
      await saveDraft(props.postId, value);
      await publishPost(props.postId);
    });
  };

  const handleUnpublish = () => {
    startTransition(async () => {
      await unpublishPost(props.postId);
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      await deletePost(props.postId);
    });
  };

  return (
    <div className={cx(s.container, props.className)}>
      <div className={s.toolbar}>
        <Button disabled={pending} onClick={handleSave}>Save</Button>
        <DraftHistoryDialog postId={props.postId} />
        <Button disabled={pending} onClick={handleDelete}>Delete</Button>
        <Button disabled={pending} onClick={handlePublish}>Publish</Button>
        <Button disabled={pending} onClick={handleUnpublish}>Unpublish</Button>
        <Button disabled={pending}>Diff with Published</Button>
        <Button disabled={pending}>Preview in Isolated Window</Button>
        <EditMetadataDialog postId={props.postId} />
        <Button disabled={pending}>Insert Blob</Button>
      </div>
      <MarkdownEditor value={value} onChange={setValue} />
      <MarkdownPreviewer colorScheme={props.colorScheme} source={value} />
    </div>
  );
}

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

function MarkdownEditor(props: MarkdownEditorProps) {
  const { value, onChange } = props;

  return (
    <textarea
      className={s.editor}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

interface MarkdownPreviewerProps {
  colorScheme: ColorSchemeCookieValue;
  source: string;
}

function MarkdownPreviewer(props: MarkdownPreviewerProps) {
  const [evaluated, setEvaluated] = useState<ReactNode>(null);

  useEffect(() => {
    (async () => {
      try {
        // https://mdxjs.com/packages/mdx/#evaluatefile-options
        const result = await evaluate(props.source, {
          ...runtime as any,
          remarkPlugins: [],
          rehypePlugins: [
            [rehypePrettyCode, toRehypePrettyCodeOptions(props.colorScheme)],
          ],
        });
        const reactElement = createElement(result.default);
        setEvaluated(reactElement);
      } catch (error) {
        setEvaluated(String(error));
      }
    })();
  }, [props.source]);

  return (
    <div className={s.previewer}>
      <div className={cx(s.previewContent, mdx)}>{evaluated}</div>
    </div>
  );
}

function DraftHistoryDialog(props: { postId: string }) {
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [drafts, setDrafts] = useState<Draft[]>([]);

  const handleOpen = () => {
    startTransition(async () => {
      const drafts = await getHistoryDrafts(props.postId);
      setDrafts(drafts);
      setOpen(true);
    });
  };

  return (
    <>
      <Button disabled={pending} onClick={handleOpen}>View History Drafts</Button>
      <dialog open={open}>
        <Button onClick={() => setOpen(false)}>Close</Button>
        <ul>
          {drafts.map(({ id, createdAt, updatedAt }) => (
            <li key={id}>
              <span>{createdAt.toLocaleString()}</span>
              <span>{updatedAt.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  )
}

function EditMetadataDialog(props: { postId: string }) {
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState<Post>();

  const handleOpen = () => {
    startTransition(async () => {
      const post = await getPostMetadata(props.postId);
      if (post) {
        setPost(post);
        setOpen(true);
      }
    });
  };

  const handleSave = () => {
    startTransition(async () => {
      try {
        if (!post) {
          return;
        }
        await savePostMetadata(props.postId, {
          title: post.title,
          language: post.language,
        });
      } catch (error) {
        alert(String(error));
      }
    });
  };

  return (
    <>
      <Button disabled={pending} onClick={handleOpen}>Edit Metadata</Button>
      <dialog open={open && !!post}>
        {post && (
          <>
            <Button onClick={() => setOpen(false)}>Close</Button>
            <div>
              <input type="text" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
              <select value={post.language}>
                <option value={Language.en}>en</option>
                <option value={Language.zh}>zh</option>
                <option value={Language.zhCN}>zhCN</option>
              </select>
            </div>
            <Button onClick={handleSave}>Save</Button>
          </>
        )}
      </dialog>
    </>
  )
}
