import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      Hello World!
      <Link href="/api/auth/signin">Log In</Link>
    </div>
  );
}
