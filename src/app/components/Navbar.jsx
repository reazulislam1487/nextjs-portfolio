import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-6 p-4 shadow">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/services">Services</Link> {/* Add this */}
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
