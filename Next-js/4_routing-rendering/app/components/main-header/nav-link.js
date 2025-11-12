import Link from "next/link";

export default function NavLink({ href, children }) {
  // Simplified to avoid Next.js 14.1.0 hot reload bug with usePathname
  return <Link href={href}>{children}</Link>;
}
