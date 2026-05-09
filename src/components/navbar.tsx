import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between px-6 py-4 border-b border-muted/20">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <h1 className="text-[15px] font-semibold">Visualizer</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-muted text-[13px]">
          <Link
            href="/topics"
            className="hidden min-[450px]:block px-2.5 py-1 rounded-[5px] hover:text-text/80 hover:bg-muted/10 cursor-pointer"
          >
            Topics
          </Link>
          <Link
            href="/profile"
            className="hidden min-[450px]:block px-2.5 py-1 rounded-[5px] hover:text-text/80 hover:bg-muted/10 cursor-pointer"
          >
            Profile
          </Link>
          <div className="hidden min-[450px]:block border-l border-muted/30 w-0.5 h-4"></div>
          <Link
            href="/signin"
            className="py-1.5 px-4 rounded-full bg-accent text-text cursor-pointer"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </>
  );
}
