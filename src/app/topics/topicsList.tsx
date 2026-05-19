export default function TopicsList() {
  return (
    <>
      <p className="text-[12px] text-muted">All topics — 12 total</p>
      <section>
        <div className="flex flex-row items-center justify-between gap-3 bg-muted/8 px-4 py-3 rounded-lg border border-muted/15 hover:border-accent text-[13px]">
          <div className="flex flex-row items-center justify-center gap-3">
            <h1 className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center text-[18px]">
              🌲
            </h1>
            <div>
              <span className="flex flex-row items-center justify-center gap-2">
                <h1>Trees</h1>
                <p className="text-[11px] bg-accent/15 text-accent px-2 rounded-full">
                  intermediate
                </p>
              </span>
              <p className="text-[12px] text-muted">8 subtopics</p>
            </div>
          </div>
          <span className="flex flex-col gap-1 items-end">
            <p className="text-[11px]">3 / 8</p>
            <p className="w-15 h-1 rounded-full bg-muted/20">
              <p className="w-2/5 h-1 rounded-full bg-accent"></p>
            </p>
          </span>
        </div>
        <div className="bg-muted/5 rounded-xl mt-2">
          <div className="flex flex-row items-center justify-between gap-4 border-b border-muted/10 px-3">
            <span className="flex flex-row items-center justify-center gap-2">
              <p className="text-[22px] text-green-500">•</p>
              <p className="text-[12px]">Binary trees</p>
            </span>
            <p className="text-muted text-[11px]">Done ✓</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 border-b border-muted/10 px-3">
            <span className="flex flex-row items-center justify-center gap-2">
              <p className="text-[22px] text-green-500">•</p>
              <p className="text-[12px]">Binary search tree</p>
            </span>
            <p className="text-muted text-[11px]">Done ✓</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 border-b border-muted/10 px-3">
            <span className="flex flex-row items-center justify-center gap-2">
              <p className="text-[22px] text-accent">•</p>
              <p className="text-[12px]">AVL trees</p>
            </span>
            <p className="text-muted text-[11px]">In progress</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 border-b border-muted/10 px-3">
            <span className="flex flex-row items-center justify-center gap-2">
              <p className="text-[22px] text-muted/50">•</p>
              <p className="text-[12px]">Red-black trees</p>
            </span>
            <p className="text-muted text-[11px]">Not started</p>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 px-3">
            <span className="flex flex-row items-center justify-center gap-2">
              <p className="text-[22px] text-muted/50">•</p>
              <p className="text-[12px]">Trie</p>
            </span>
            <p className="text-muted text-[11px]">Not started</p>
          </div>
        </div>
      </section>
    </>
  );
}
