import Link from "next/link";

export default function Landing() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <main className="w-72 min-[450px]:w-106 my-14 flex flex-col items-center justify-center gap-4">
          <button className="flex flex-row items-center justify-center gap-1 text-accent bg-accent/10 border border-accent/40 rounded-full px-3 py-[0.15rem]">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <p className="text-[12.5px]">AI-powered DSA learning</p>
          </button>
          <h1 className="text-center text-[34px] leading-tight tracking-tight mt-2">
            Master DSA with <br />
            <span className="text-accent">visual clarity</span>
          </h1>
          <p className="text-center text-muted text-[11px] min-[450px]:text-[14.5px]">
            Interactive visualizations, step-by-step animations, quizzes, and a
            built-in AI tutor — designed to make data structures and algorithms
            finally click.
          </p>
          <div className="flex flex-row gap-3 text-[13px] mt-4">
            <Link
              href="/topics"
              className="px-6 py-2 rounded-full bg-accent cursor-pointer"
            >
              Browse topics
            </Link>
            <button className="px-6 py-2 rounded-full border border-muted/50 cursor-pointer">
              How it works
            </button>
          </div>
        </main>
        <footer className="w-full flex flex-row items-center justify-center gap-0">
          <div className="flex-1 flex flex-col items-center justify-center gap-0 border-y border-muted/20 py-4">
            <h1 className="text-2xl">12</h1>
            <p className="text-muted text-[12px]">Topic areas</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-0 border border-muted/20 py-4">
            <h1 className="text-2xl">80+</h1>
            <p className="text-muted text-[12px]">Subtopics</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-0 border-y border-r border-muted/20 py-4">
            <h1 className="text-2xl">200+</h1>
            <p className="text-muted text-[12px]">Visualizations</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-0 border-y border-muted/20 py-4">
            <h1 className="text-2xl">AI</h1>
            <p className="text-muted text-[12px]">Tutor built-in</p>
          </div>
        </footer>
      </section>
    </>
  );
}
