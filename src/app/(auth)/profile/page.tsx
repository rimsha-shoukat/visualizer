import Link from "next/link";

export default function Profile() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between px-6 py-4 border-b border-muted/20">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <h1 className="text-[15px] font-semibold">Visualizer</h1>
        </div>
        <Link
          href="/topics"
          className="text-[13px] text-muted px-2.5 py-1 rounded-[5px] hover:text-text/80 hover:bg-muted/10 cursor-pointer"
        >
          Topics
        </Link>
      </nav>
      <section className="flex flex-col items-center justify-center gap-4 my-10">
        Profile page
      </section>
    </>
  );
}
