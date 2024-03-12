import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { getSessionUser } from '^/lib/server/auth';
import { prisma } from '^/lib/server/prisma';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const user = await getSessionUser();
  const body = (await request.json()) as HandleUploadBody;

  try {
    // https://vercel.com/docs/storage/vercel-blob/using-blob-sdk
    const jsonResponse = await handleUpload({
      body,
      request,
      // token: process.env.BLOB_READ_WRITE_TOKEN,
      onBeforeGenerateToken: async (
        pathname,
        clientPayload,
        multipart,
        /* clientPayload */
      ) => {
        if (!user) {
          throw new Error('Unauthorized!');
        }
        // Generate a client token for the browser to upload the file
        // ⚠️ Authenticate and authorize users before generating the token.
        // Otherwise, you're allowing anonymous uploads.
        console.log({ pathname, clientPayload, multipart });
        return {
          // allowedContentTypes: ['image/*'],
          tokenPayload: JSON.stringify({
            // optional, sent to your server on upload completion
            // you could pass a user id from auth, or a value from clientPayload
            userId: user.id,
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client upload completion
        // ⚠️ This will not work on `localhost` websites,
        // Use ngrok or similar to get the full upload flow

        console.log('blob upload completed', blob, tokenPayload);

        try {
          // Run any logic after the file upload completed
          // const { userId } = JSON.parse(tokenPayload);
          // await db.update({ avatar: blob.url, userId });
          if (!tokenPayload) {
            return;
          }

          const { userId } = JSON.parse(tokenPayload);

          if (!userId) {
            return;
          }

          await prisma.blob.create({
            data: {
              ...blob,
              uploadedByUserId: userId,
            },
          });

          revalidatePath('/dashboard/blobs');
        } catch (error) {
          throw new Error('Could not update user');
        }
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }, // The webhook will retry 5 times waiting for a 200
    );
  }
}
