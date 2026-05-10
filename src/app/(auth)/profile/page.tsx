import Link from "next/link";
import Progress from "./progress";
import Activities from "./activities";

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
      <section className="p-6 flex flex-col gap-4 items-start justify-start">
        <div className="w-full flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="max-[470px]:hidden border-2 border-accent rounded-full w-16 h-16 bg-accent/10 text-[20px] text-accent flex items-center justify-center shrink-0">
              JD
            </div>
            <div>
              <h1 className="text-[20px]">John Doe</h1>
              <p className="text-[13px] text-muted">
                doe.john@gmail.com · Joined via Google
              </p>
              <div className="flex flex-row items-center justify-start gap-4 text-[10px] mt-2">
                <p className="px-2.5 py-0.5 rounded-full text-accent/90 bg-accent/10">
                  DSA Learner
                </p>
                <p className="px-2.5 py-0.5 rounded-full text-green-600/90 bg-green-700/10">
                  3 topics completed
                </p>
              </div>
            </div>
          </div>
          <button className="text-muted text-[14px] px-3 py-1 rounded-lg border border-muted/20">
            Edit
          </button>
        </div>
        <Progress />
        <Activities />
        <div className="w-full h-0 border-t border-t-muted/15"></div>
        <button className="text-red-800 text-[13px]">→ Sign out</button>
      </section>
    </>
  );
}
