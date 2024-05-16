import Link from "next/link";
import Image from "next/image";
import logo from "./logo.png";
export default function Navbar() {
  return (
    <nav>
      <Image src={logo} alt="Logo" width={100} placeholder="blur" />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
