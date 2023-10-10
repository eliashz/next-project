import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link>Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
