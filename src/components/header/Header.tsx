"use client";
import "./header.css";
import { usePathname } from "next/navigation";

import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header>
      <ul>
        <li>
          <Link href="/" className={pathname == "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname == "/about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects/1"
            className={pathname.includes("/projects/)") ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className={pathname == "/experience" ? "active" : ""}
          >
            experience
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname == "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
