export default function Progress() {
  return (
    <>
      <section className="flex flex-col min-[465px]:flex-row items-center justify-center gap-2 w-full mt-4">
        <div className="text-center py-3 w-full min-[465px]:flex-1 flex-nowrap bg-muted/10 border border-muted/20 rounded-lg">
          <h1 className="text-accent text-[20px]">47</h1>
          <p className="text-muted text-[13px]">Topics done</p>
        </div>
        <div className="text-center py-3 w-full min-[465px]:flex-1 flex-nowrap bg-muted/10 border border-muted/20 rounded-lg">
          <h1 className="text-green-500 text-[20px]">3</h1>
          <p className="text-muted text-[13px]">Completed</p>
        </div>
        <div className="text-center py-3 w-full min-[465px]:flex-1 flex-nowrap bg-muted/10 border border-muted/20 rounded-lg">
          <h1 className="text-orange-400 text-[20px]">82%</h1>
          <p className="text-muted text-[13px]">Quiz avg.</p>
        </div>
        <div className="text-center py-3 w-full min-[465px]:flex-1 flex-nowrap bg-muted/10 border border-muted/20 rounded-lg">
          <h1 className="text-blue-500 text-[20px]">14</h1>
          <p className="text-muted text-[13px]">Day streak</p>
        </div>
      </section>
      <p className="text-muted text-[13px] mt-2">Topic progress</p>
      <section className="flex flex-col items-center justify-center w-full gap-3">
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <div className="w-full flex flex-row gap-3 items-center justify-center">
            <h1 className="w-8 h-8 text-[14px] rounded-lg bg-green-700/15 flex items-center justify-center">
              ⚡
            </h1>
            <span className="w-full">
              <p className="text-[12px] mb-0.5">Sorting</p>
              <div className="w-full h-1 bg-muted/15 rounded-lg">
                <div className="w-full h-1 bg-green-600 rounded-lg"></div>
              </div>
            </span>
          </div>
          <p className="text-green-700 text-[12px]">100%</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <div className="w-full flex flex-row gap-3 items-center justify-center">
            <h1 className="w-8 h-8 text-[14px] rounded-lg bg-green-700/15 flex items-center justify-center">
              🚀
            </h1>
            <span className="w-full">
              <p className="text-[12px] mb-0.5">Hashing</p>
              <div className="w-full h-1 bg-muted/15 rounded-lg">
                <div className="w-full h-1 bg-green-600 rounded-lg"></div>
              </div>
            </span>
          </div>
          <p className="text-green-700 text-[12px]">100%</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <div className="w-full flex flex-row gap-3 items-center justify-center">
            <h1 className="w-8 h-8 text-[14px] rounded-lg bg-blue-800/15 flex items-center justify-center">
              🔎
            </h1>
            <span className="w-full">
              <p className="text-[12px] mb-0.5">Searching</p>
              <div className="w-full h-1 bg-muted/15 rounded-lg">
                <div className="w-[50%] h-1 bg-blue-800 rounded-lg"></div>
              </div>
            </span>
          </div>
          <p className="text-muted text-[12px]">50%</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <div className="w-full flex flex-row gap-3 items-center justify-center">
            <h1 className="w-8 h-8 text-[14px] rounded-lg bg-accent/15 flex items-center justify-center">
              🌲
            </h1>
            <span className="w-full">
              <p className="text-[12px] mb-0.5">Trees</p>
              <div className="w-full h-1 bg-muted/15 rounded-lg">
                <div className="w-[37%] h-1 bg-accent rounded-lg"></div>
              </div>
            </span>
          </div>
          <p className="text-muted text-[12px]">37%</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <div className="w-full flex flex-row gap-3 items-center justify-center">
            <h1 className="w-8 h-8 text-[14px] rounded-lg bg-orange-400/15 flex items-center justify-center">
              🧩
            </h1>
            <span className="w-full">
              <p className="text-[12px] mb-0.5">Dynamic programming</p>
              <div className="w-full h-1 bg-muted/15 rounded-lg">
                <div className="w-[11%] h-1 bg-orange-400 rounded-lg"></div>
              </div>
            </span>
          </div>
          <p className="text-muted text-[12px]">11%</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4 w-full">
          <div className="w-full flex flex-row gap-3 items-center justify-center">
            <h1 className="w-8 h-8 text-[14px] rounded-lg bg-muted/15 flex items-center justify-center">
              🕭
            </h1>
            <span className="w-full">
              <p className="text-[12px] mb-0.5">Graphs</p>
              <div className="w-full h-1 bg-muted/15 rounded-lg">
                <div className="w-0 h-1 bg-muted rounded-lg"></div>
              </div>
            </span>
          </div>
          <p className="text-muted text-[12px]">0%</p>
        </div>
      </section>
    </>
  );
}
