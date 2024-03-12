## References

- [NextJS](https://nextjs.org/)
  - [Install](https://nextjs.org/docs/getting-started/installation#manual-installation)
  - [Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
  - [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
  - [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
  - [Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
  - [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
  - [cookies](https://nextjs.org/docs/app/api-reference/functions/cookies)
- [NextAuth]()
  - https://next-auth.js.org/deployment#vercel
  - https://generate-secret.vercel.app/32
  - https://next-auth.js.org/configuration/initialization#route-handlers-app
  - https://next-auth.js.org/providers/github
  - https://github.com/settings/developers
  - [Adapters](https://authjs.dev/reference/adapter/prisma)
  - [Callbacks](https://next-auth.js.org/configuration/callbacks)
  - [Vercel Prisma Envs](https://vercel.com/docs/storage/vercel-postgres/using-an-orm#prisma)
- [MDX]()
  - https://nextjs.org/docs/app/building-your-application/configuring/mdx
  - [Remote Source](https://nextjs.org/docs/app/building-your-application/configuring/mdx#remote-mdx)
  - [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/#installation)
  - [Extending MDX](https://mdxjs.com/docs/extending-mdx/)
- [Vercel]()
  - [CLI](https://vercel.com/docs/cli)
  - [Blob](https://vercel.com/docs/storage/vercel-blob/client-upload)

```sh
pnpm add -D vercel
pnpm add @vercel/blob
pnpm exec vercel link
pnpm exec vercel env pull .env.development.local
```

https://github.com/anderspitman/awesome-tunneling

```sh
./ngrok.exe config add-authtoken xxxxx
./ngrok.exe http http://localhost:3000
./ngrok.exe http --domain=xxxxx.ngrok-free.app 3000
```
