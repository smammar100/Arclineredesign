"use client";

import { motion } from "framer-motion";
import { FilePlus } from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { CaseCard } from "@/components/case-card";
import { MeetingCard } from "@/components/meeting-card";
import { useDragScroll } from "@/hooks/use-drag-scroll";
import {
  sectionHeadingGradientClass,
  SECTION_HEADING_GRADIENT_STYLE,
} from "@/lib/heading-gradient";
import {
  cascadeItem,
  fadeUp,
  mainContainer,
  rowCascade,
  sectionBlock,
} from "@/lib/page-motion";

export function HomeDashboard() {
  const caseStrip = useDragScroll();

  return (
    <motion.main
      className="flex-1 flex flex-col gap-[32px] px-[78px] pt-[32px] pb-[32px] overflow-auto"
      variants={mainContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Greeting Row */}
      <motion.div
        variants={fadeUp}
        className="flex items-start justify-between"
      >
        <div className="flex flex-col gap-[8px]">
          <h1
            className={`text-[32px] ${sectionHeadingGradientClass}`}
            style={SECTION_HEADING_GRADIENT_STYLE}
          >
            Welcome back, Muhammad
          </h1>
          <p className="text-[16px] font-normal text-[#bcbcc6] leading-[1.5] tracking-[-0.02em]">
            Here&apos;s what&apos;s happening with your cases
          </p>
        </div>
        <motion.button
          type="button"
          className="flex items-center gap-[8px] px-[12px] py-[10px] rounded-[8px] bg-[#e6e6e6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.5)]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
        >
          <FilePlus className="w-[16px] h-[16px] text-[#151515]" />
          <span className="text-[14px] font-medium text-[#151515] leading-[20px]">
            Create new case
          </span>
        </motion.button>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        variants={rowCascade}
        className="flex gap-[16px]"
      >
        <motion.div variants={cascadeItem} className="flex-1 min-w-0">
          <StatCard title="Active cases" value="3" />
        </motion.div>
        <motion.div variants={cascadeItem} className="flex-1 min-w-0">
          <StatCard title="In review" value="3" />
        </motion.div>
        <motion.div variants={cascadeItem} className="flex-1 min-w-0">
          <StatCard title="Completed" value="12" />
        </motion.div>
        <motion.div variants={cascadeItem} className="flex-1 min-w-0">
          <StatCard title="Avg. turnaround" value="1.2d" />
        </motion.div>
      </motion.div>

      {/* Recent cases */}
      <motion.div
        variants={sectionBlock}
        className="flex flex-col gap-[16px]"
      >
        <motion.div
          variants={cascadeItem}
          className="flex items-center gap-[12px]"
        >
          <h2
            className={`flex-1 text-[20px] ${sectionHeadingGradientClass}`}
            style={SECTION_HEADING_GRADIENT_STYLE}
          >
            Recent cases
          </h2>
          <motion.button
            type="button"
            className="flex items-center px-[13px] py-[10px] rounded-[8px] bg-[rgba(77,77,77,0.3)] border border-[#4d4d4d] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.5)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <span className="text-[14px] font-medium text-[#fafafa] leading-[20px]">
              View all cases
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          variants={rowCascade}
          className="relative w-full overflow-hidden rounded-[8px]"
        >
          <div
            ref={caseStrip.ref}
            {...caseStrip.dragScrollProps}
            className="flex gap-[16px] w-full overflow-x-auto overflow-y-hidden cursor-grab touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <motion.div variants={cascadeItem} className="shrink-0">
              <CaseCard
                title="Digital Marketing Service Proposals"
                badge="Submission review"
                variant="submission-review"
              />
            </motion.div>
            <motion.div variants={cascadeItem} className="shrink-0">
              <CaseCard
                title="Digital Marketing Service Proposals"
                badge="Lawyer assigned"
                variant="lawyer-assigned"
              />
            </motion.div>
            <motion.div variants={cascadeItem} className="shrink-0">
              <CaseCard
                title="Digital Marketing Service Proposals"
                badge="Legal review"
                variant="legal-review"
              />
            </motion.div>
            <motion.div variants={cascadeItem} className="shrink-0">
              <CaseCard
                title="Digital Marketing Service Proposals"
                badge="Case closed"
                variant="case-closed"
              />
            </motion.div>
            <motion.div variants={cascadeItem} className="shrink-0">
              <CaseCard
                title="Digital Marketing Service Proposals"
                badge="Submission review"
                variant="submission-review"
              />
            </motion.div>
          </div>

          <div
            className="absolute right-0 top-0 h-full w-[min(140px,28vw)] pointer-events-none"
            aria-hidden
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(to left, #1a1a1a 0%, rgba(26,26,26,0.92) 18%, rgba(26,26,26,0.55) 45%, rgba(26,26,26,0.2) 72%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp}>
        <MeetingCard />
      </motion.div>
    </motion.main>
  );
}
