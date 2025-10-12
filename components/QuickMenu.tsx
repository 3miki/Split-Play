"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function QuickMenu() {
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { href: "/settings", label: "List" },
    { href: "/", label: "Home" },
    { href: "/leaderboard", label: "Leaderboard" },
    // { href: "/rewards", label: "Select Rewards" },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex-1 text-center px-4 py-2 rounded-full hover:bg-gray-300 ${
            pathname === item.href
              ? "bg-purple-300 text-black"
              : "bg-gray-300 text-black"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
