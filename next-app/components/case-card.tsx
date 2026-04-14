"use client";

import { InvoicePreview } from "./invoice-preview";

type BadgeVariant =
  | "submission-review"
  | "lawyer-assigned"
  | "legal-review"
  | "case-closed";

interface CaseCardProps {
  title: string;
  badge: string;
  variant: BadgeVariant;
}

const badgeStyles: Record<
  BadgeVariant,
  { bg: string; text: string; dot: string }
> = {
  "submission-review": {
    bg: "bg-[#eceff3]",
    text: "text-[#0d0d12]",
    dot: "bg-[#0d0d12]",
  },
  "lawyer-assigned": {
    bg: "bg-[#f0ebfe]",
    text: "text-[#412294]",
    dot: "bg-[#412294]",
  },
  "legal-review": {
    bg: "bg-[#fff9ed]",
    text: "text-[#a77b2e]",
    dot: "bg-[#a77b2e]",
  },
  "case-closed": {
    bg: "bg-[#ecf9f7]",
    text: "text-[#1a981b]",
    dot: "bg-[#1a981b]",
  },
};

export function CaseCard({ title, badge, variant }: CaseCardProps) {
  const styles = badgeStyles[variant];

  return (
    <div className="relative w-[254px] h-[253px] shrink-0 bg-[#262626] border border-[#404040] rounded-[14px] overflow-hidden p-[16px]">
      {/* Invoice Preview */}
      <InvoicePreview />

      {/* Bottom Info Overlay */}
      <div className="absolute left-[-1px] top-[170px] w-[254px] bg-[#262626] border border-[#404040] rounded-[8px] shadow-[0px_30px_60px_0px_rgba(3,6,22,0.3)] px-[16px] py-[14px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] text-[#eceff3] leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis font-medium">
            {title}
          </p>
          <div
            className={`inline-flex items-center gap-[4px] h-[24px] pl-[8px] pr-[10px] py-[2px] rounded-[16px] w-fit ${styles.bg}`}
          >
            <span
              className={`w-[6px] h-[6px] rounded-full shrink-0 ${styles.dot}`}
            />
            <span
              className={`text-[14px] leading-[24px] whitespace-nowrap ${styles.text}`}
            >
              {badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
