export default function Topics() {
  return (
    <>
      <section className="w-full h-auto">
        <div className="flex flex-row items-center justify-between mb-4">
          <h5 className="text-[15px]">Popular topics</h5>
          <button className="text-[13.5px] text-accent cursor-pointer">
            See all →
          </button>
        </div>
        <section className="grid grid-cols-1 min-[482px]:grid-cols-2 gap-3">
          <div className="bg-muted/8 border border-muted/30 rounded-xl hover:border-accent flex flex-col items-start justify-between gap-3 p-4 cursor-pointer">
            <div className="w-9 h-9 text-[18px] rounded-lg bg-accent/10 flex items-center justify-center">
              🌲
            </div>
            <div>
              <h3 className="text-[14px]">Trees</h3>
              <p className="text-[12px] text-muted">
                8 subtopics · Intermediate
              </p>
            </div>
            <div className="w-full rounded-sm bg-muted/20 h-0.75">
              <div className="w-1/2 rounded-sm bg-accent h-0.75"></div>
            </div>
          </div>
          <div className="bg-muted/8 border border-muted/30 rounded-xl hover:border-accent flex flex-col items-start justify-between gap-3 p-4 cursor-pointer">
            <div className="w-9 h-9 text-[18px] rounded-lg bg-blue-500/10 flex items-center justify-center">
              🔗
            </div>
            <div>
              <h3 className="text-[14px]">Linked lists</h3>
              <p className="text-[12px] text-muted">5 subtopics · Beginner</p>
            </div>
            <div className="w-full rounded-sm bg-muted/20 h-0.75">
              <div className="w-3/4 rounded-sm bg-blue-500 h-0.75"></div>
            </div>
          </div>
          <div className="bg-muted/8 border border-muted/30 rounded-xl hover:border-accent flex flex-col items-start justify-between gap-3 p-4 cursor-pointer">
            <div className="w-9 h-9 text-[18px] rounded-lg bg-green-600/10 flex items-center justify-center">
              ⚡
            </div>
            <div>
              <h3 className="text-[14px]">Sorting</h3>
              <p className="text-[12px] text-muted">7 subtopics · Beginner</p>
            </div>
            <div className="w-full rounded-sm bg-muted/20 h-0.75">
              <div className="w-full rounded-sm bg-green-600 h-0.75"></div>
            </div>
          </div>
          <div className="bg-muted/8 border border-muted/30 rounded-xl hover:border-accent flex flex-col items-start justify-between gap-3 p-4 cursor-pointer">
            <div className="w-9 h-9 text-[18px] rounded-lg bg-orange-600/10 flex items-center justify-center">
              🧩
            </div>
            <div>
              <h3 className="text-[14px]">Dynamic Programming</h3>
              <p className="text-[12px] text-muted">9 subtopics · Advanced</p>
            </div>
            <div className="w-full rounded-sm bg-muted/20 h-0.75">
              <div className="w-1/4 rounded-sm bg-orange-500 h-0.75"></div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
