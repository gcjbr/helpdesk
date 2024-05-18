import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">404 Not Found</h2>
      <p>The page you are looking for was not found.</p>
      <p><Link href="/">Go to home page</Link></p>
      
    </main>
  );
}