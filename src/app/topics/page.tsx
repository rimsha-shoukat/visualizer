import Link from "next/link";
import TopicsList from "./topicsList";

export default function Topics() {
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
      <section className="w-full h-auto px-6 py-4 flex flex-col gap-4">
        <div className="w-full flex flex-row gap-2 bg-muted/8 items-center justify-center border border-muted/30 rounded-xl px-2 py-1.5">
          <p className="text-[13px]">🔎</p>
          <input
            className="w-full placeholder-muted/70 placeholder:text-[14px] focus:outline-none"
            type="text"
            placeholder="Search topics, subtopics..."
          />
        </div>
        <div className="w-full flex flex-row items-start justify-start gap-2 overflow-x-scroll scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button className="border border-accent/15 bg-accent/8 text-[13px] text-accent rounded-full px-3 py-0.5">
            All
          </button>
          <button className="border text-nowrap border-muted/15 bg-muted/8 text-[13px] text-muted rounded-full px-3 py-0.5">
            In progress
          </button>
          <button className="border border-muted/15 bg-muted/8 text-[13px] text-muted rounded-full px-3 py-0.5">
            Completed
          </button>
          <button className="border border-muted/15 bg-muted/8 text-[13px] text-muted rounded-full px-3 py-0.5">
            Beginner
          </button>
          <button className="border border-muted/15 bg-muted/8 text-[13px] text-muted rounded-full px-3 py-0.5">
            Intermediate
          </button>
          <button className="border border-muted/15 bg-muted/8 text-[13px] text-muted rounded-full px-3 py-0.5">
            Advanced
          </button>
        </div>
        <TopicsList />
      </section>
    </>
  );
}
