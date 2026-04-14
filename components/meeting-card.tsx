"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CalendarIllustration } from "./calendar-illustration";
import { easeOut } from "@/lib/page-motion";

export function MeetingCard() {
  return (
    <div className="w-full bg-[#262626] border border-[#404040] rounded-[14px] p-[16px] overflow-hidden flex items-center gap-[16px]">
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[20px] font-semibold text-[#e6e6e6] leading-[1.4] tracking-[-0.02em]">
            Schedule a meeting
          </h3>
          <p className="text-[14px] font-normal text-[#a1a1a1] leading-[1.55]">
            Need assistance? Book a free meeting with our expert lawyers.
          </p>
        </div>

        <button className="inline-flex items-center gap-[8px] w-fit px-[13px] py-[10px] rounded-[8px] bg-[rgba(77,77,77,0.3)] border border-[#4d4d4d] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.5)]">
          <Calendar className="w-[16px] h-[16px] text-[#fafafa]" />
          <span className="text-[14px] font-medium text-[#fafafa] leading-[20px]">
            Schedule meeting
          </span>
        </button>
      </div>

      {/* Calendar Illustration */}
      <motion.div
        className="shrink-0"
        initial={{ opacity: 0, x: 18, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.52, ease: easeOut, delay: 0.18 }}
      >
        <CalendarIllustration />
      </motion.div>
    </div>
  );
}
