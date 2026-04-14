"use client";

interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="flex-1 h-[87px] bg-[#262626] border border-[#404040] rounded-[14px] p-[16px] overflow-hidden">
      <p className="text-[14px] font-normal text-[#bcbcc6] leading-[1.5] tracking-[-0.02em]">
        {title}
      </p>
      <p className="text-[24px] font-semibold text-white leading-[1.4] tracking-[-0.02em] tabular-nums">
        {value}
      </p>
    </div>
  );
}
