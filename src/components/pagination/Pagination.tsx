"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./pagination.css";

const Pagination = () => {
  const pathname = usePathname();
  return (
    <div className="pagination">
      <Link
        href="/projects/1"
        className={pathname == "/projects/1" ? "active" : ""}
      >
        1
      </Link>
      <Link
        href="/projects/2"
        className={pathname == "/projects/2" ? "active" : ""}
      >
        2
      </Link>
    </div>
  );
};

export default Pagination;
