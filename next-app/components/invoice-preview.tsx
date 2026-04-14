"use client";

import Image from "next/image";

export function InvoicePreview() {
  return (
    <div className="relative w-[222px] h-[315px] border border-[#e3e8ef] shrink-0">
      <div className="absolute inset-0 bg-white" />
      <Image
        src="/images/paper1.png"
        alt=""
        fill
        sizes="222px"
        className="object-cover"
        aria-hidden
      />
      <Image
        src="/images/paper2.png"
        alt=""
        fill
        sizes="222px"
        className="object-cover"
        aria-hidden
      />
    </div>
  );
}
