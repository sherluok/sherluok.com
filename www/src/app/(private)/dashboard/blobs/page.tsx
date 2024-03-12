import { prisma } from '^/lib/server/prisma';
import BlobUploader from './clients';
import * as s from './page.css';

export default async function BlobsPage() {
  const blobs = await prisma.blob.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className={s.container}>
      <BlobUploader />
      <div className={s.table}>
        <div className={s.row}>
          <div className={s.cell}>Created at</div>
          <div className={s.cell}>Blob</div>
          <div className={s.cell}>Content Type</div>
          <div className={s.cell}></div>
        </div>
        {blobs.map(({ id, url, createdAt, contentType }) => (
          <div className={s.row} key={id}>
            <div className={s.cell}>{createdAt.toLocaleString()}</div>
            <div className={s.cell}>
              <a href={url} target="_blank">{decodeURIComponent(url).split('/').pop()}</a>
            </div>
            <div className={s.cell}>{contentType}</div>
            <div className={s.cell}>
              <button>Copy URL</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
