"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-700">
        <Link href="/">Villagestay</Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 text-lg font-medium text-gray-700">
        <Link href="/" className="hover:text-green-600 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-green-600 transition">
          About
        </Link>
        <Link href="/host" className="hover:text-green-600 transition">
          Become a Host
        </Link>
        <Link href="/experiences" className="hover:text-green-600 transition">
          Experiences
        </Link>
        <Link href="/skill-share" className="hover:text-green-600 transition">
          Skill Share
        </Link>
        <Link href="/videos" className="hover:text-green-600 transition">
          Videos
        </Link>
        <Link href="/login" className="hover:text-green-600 transition">
          Login
        </Link>
      </div>
    </nav>
  );
}
