"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlinePlusSquare,
  AiOutlineSearch,
  AiFillHeart,
  AiFillHome,
  AiFillPlusSquare,
} from "react-icons/ai";

import {
  MdOutlineExplore,
  MdOutlineOndemandVideo,
  MdOutlineBarChart,
  MdBarChart,
} from "react-icons/md";

import { FiMenu } from "react-icons/fi";
import { FaRegPaperPlane, FaPaperPlane } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

export default function LeftSidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: <AiOutlineHome />, active: <AiFillHome />, label: "Home" },
    { href: "/search", icon: <AiOutlineSearch />, label: "Search" },
    { href: "/explore", icon: <MdOutlineExplore />, label: "Explore" },
    { href: "/reels", icon: <MdOutlineOndemandVideo />, label: "Reels" },
    {
      href: "/messages",
      icon: <FaRegPaperPlane />,
      active: <FaPaperPlane />,
      label: "Messages",
    },
    {
      href: "/notifications",
      icon: <AiOutlineHeart />,
      active: <AiFillHeart />,
      label: "Notifications",
    },
    {
      href: "/create",
      icon: <AiOutlinePlusSquare />,
      active: <AiFillPlusSquare />,
      label: "Create",
    },
    {
      href: "/dashboard",
      icon: <MdOutlineBarChart />,
      active: <MdBarChart />,
      label: "Dashboard",
    },
    { href: "/profile", icon: <CgProfile />, label: "Profile" },
    { href: "/more", icon: <FiMenu />, label: "More" },
  ];

  return (
    <div
      className="group fixed top-0 left-0 h-screen flex flex-col bg-black
                 border-r border-gray-800 px-2 py-6 w-[5vw] hover:w-[14vw]
                 transition-all duration-300 overflow-hidden z-50"
    >
      {/* ✅ EXTERNAL LINK – Program 6 */}
      <div className="flex items-center justify-start mb-8 ml-4">
        <a
          href="https://vtucircle.com/bcsl504-program-6/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
        >
          <BsInstagram size={26} />
          <span
            className="opacity-0 translate-x-[-10px]
                       group-hover:opacity-100 group-hover:translate-x-0
                       transition-all duration-300 text-sm font-medium whitespace-nowrap"
          >
            6th Program
          </span>
        </a>
      </div>

      {/* ✅ INTERNAL NAVIGATION */}
      <nav className="flex flex-col gap-[9px]">
        {links.map(({ href, icon, active, label }) => {
          const isActive = pathname === href;
          const Icon = isActive && active ? active : icon;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-4 py-2 pl-3 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "text-white bg-[#2a2e2e]"
                    : "text-gray-400 hover:text-white hover:bg-[#2a2e2e]"
                }`}
            >
              <span className="text-2xl min-w-[32px] flex justify-center">
                {Icon}
              </span>

              <span
                className="opacity-0 translate-x-[-10px]
                           group-hover:opacity-100 group-hover:translate-x-0
                           transition-all duration-300 text-sm font-medium whitespace-nowrap"
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
