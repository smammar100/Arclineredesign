import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <h1 className="text-[20px] font-semibold text-white font-[family-name:var(--font-aeonik)]">
        Page not found
      </h1>
      <p className="text-[14px] text-[#bcbcc6] max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-[14px] font-medium text-[#e3e3e3] underline underline-offset-4 hover:text-white transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
