"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h2 className="text-[20px] font-semibold text-white tracking-[-0.02em]">
        Something went wrong
      </h2>
      <p className="text-[14px] font-normal text-[#bcbcc6] max-w-md leading-relaxed">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-[16px] py-[10px] rounded-[8px] bg-[#e6e6e6] text-[#151515] text-[14px] font-medium shadow-[0px_1px_2px_0px_rgba(0,0,0,0.5)]"
      >
        Try again
      </button>
    </div>
  );
}
