"use client";

import { motion } from "framer-motion";
import { Home, FileText, LifeBuoy, Bell } from "lucide-react";
import Image from "next/image";
import { easeOut } from "@/lib/page-motion";

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 h-[65px] w-full backdrop-blur-[4px] border-b border-[#404040] flex items-center px-[80px]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: easeOut }}
    >
      {/* Logo */}
      <div className="relative h-[33px] w-[74px] shrink-0">
        <Image
          src="/images/Logo.png"
          alt="Arcline"
          width={74}
          height={33}
          priority
          className="object-contain object-left h-full w-full"
        />
      </div>

      {/* Center Tab Switcher */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[#262626] rounded-[10px] h-[44px] p-[4px]">
        {/* Home Tab (Active) */}
        <button className="flex items-center gap-[8px] h-[36px] px-[16px] rounded-[8px] bg-[#1a1a1a] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.5)]">
          <Home className="w-[16px] h-[16px] text-[#e3e3e3]" />
          <span className="text-[14px] font-medium text-[#e3e3e3] leading-[20px]">
            Home
          </span>
        </button>
        {/* Cases Tab */}
        <button className="flex items-center gap-[8px] h-[36px] px-[16px] rounded-[8px]">
          <FileText className="w-[16px] h-[16px] text-[#a1a1a1]" />
          <span className="text-[14px] font-medium text-[#a1a1a1] leading-[20px]">
            Cases
          </span>
        </button>
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-0">
        {/* Support Button */}
        <button className="flex items-center gap-[6px] h-[36px] px-[12px] rounded-[8px]">
          <LifeBuoy className="w-[16px] h-[16px] text-[#e3e3e3]" />
          <span className="text-[14px] font-medium text-[#e3e3e3] leading-[20px]">
            Support
          </span>
        </button>

        {/* Vertical Divider */}
        <div className="w-[1px] h-[32px] bg-[#404040] mx-[8px]" />

        {/* Bell Icon */}
        <button className="p-[8px]">
          <Bell className="w-[16px] h-[16px] text-[#a1a1a1]" />
        </button>

        {/* User Name */}
        <span className="text-[16px] text-[#a1a1a1] leading-[24px] ml-[16px]">
          Muhammad Ammar
        </span>

        {/* Avatar */}
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden ml-[14px]">
          <Image
            src="/images/avatar.png"
            alt="Muhammad Ammar"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.header>
  );
}
