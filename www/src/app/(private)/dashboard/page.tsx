import { useSession } from "^/lib/auth";

export default async function DashboardPage() {
  const session = await useSession();

  return (
    <div>
      <h1>Private, Manager Only!</h1>
      <details open>
        <summary>{session?.user?.name}</summary>
        <p>{session?.user?.email}</p>
        {session?.user?.image && <img src={session?.user?.image} />}
      </details>
    </div>
  );
}
