import Link from "next/link";

export default function Signin() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between px-6 py-4 border-b border-muted/20">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <h1 className="text-[15px] font-semibold">Visualizer</h1>
        </div>
        <Link
          href="/signin"
          className="py-1.5 px-4 text-[13px] rounded-full bg-accent text-text cursor-pointer"
        >
          Sign in
        </Link>
      </nav>
      <section className="flex flex-col items-center justify-center gap-4 my-10">
        Topics page
      </section>
    </>
  );
}
