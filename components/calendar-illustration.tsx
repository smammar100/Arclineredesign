"use client";

import Image from "next/image";

export function CalendarIllustration() {
  return (
    <div className="relative w-[152px] h-[115px]">
      {/* Plant (behind calendar) */}
      <div className="absolute left-0 top-[17px]">
        <Image
          src="/images/plant1.svg"
          alt=""
          width={34}
          height={52}
          aria-hidden
        />
      </div>

      {/* Main Calendar */}
      <div className="absolute left-[34px] top-0">
        <Image
          src="/images/calendar-main.svg"
          alt=""
          width={112}
          height={89}
          aria-hidden
        />
      </div>

      {/* Ground/Shadow */}
      <div className="absolute left-[2px] top-[89px]">
        <Image
          src="/images/calendar-base.svg"
          alt=""
          width={149}
          height={26}
          aria-hidden
        />
      </div>

      {/* Plant pot bottom */}
      <div className="absolute left-[7px] top-[67px]">
        <Image
          src="/images/plant2.svg"
          alt=""
          width={20}
          height={22}
          aria-hidden
        />
      </div>
    </div>
  );
}
