export default function Activities() {
  return (
    <>
      <p className="text-[13px] text-muted mt-4">Recent activity</p>
      <section className="flex flex-col items-center justify-center gap-2 w-full">
        <div className="w-full flex flex-row items-center justify-between gap-4 px-3 py-2 bg-muted/10 border border-muted/20 rounded-lg">
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 shrink-0 text-[13px]">
              🌲
            </p>
            <span>
              <h3 className="text-[12.5px]">AVL trees</h3>
              <p className="text-muted text-[11px]">2 hours ago</p>
            </span>
          </div>
          <p className="text-accent px-2 rounded-full bg-accent/15 text-[11px]">
            in progress
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-between gap-4 px-3 py-2 bg-muted/10 border border-muted/20 rounded-lg">
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="flex items-center justify-center w-7 h-7 rounded-lg bg-green-600/10 shrink-0 text-[13px]">
              ⚡
            </p>
            <span>
              <h3 className="text-[12.5px]">Quick sort</h3>
              <p className="text-muted text-[11px]">Yesterday</p>
            </span>
          </div>
          <p className="text-green-600 px-2 rounded-full bg-green-600/15 text-[11px]">
            Done
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-between gap-4 px-3 py-2 bg-muted/10 border border-muted/20 rounded-lg">
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="flex items-center justify-center w-7 h-7 rounded-lg bg-green-600/10 shrink-0 text-[13px]">
              ⚡
            </p>
            <span>
              <h3 className="text-[12.5px]">Merge sort</h3>
              <p className="text-muted text-[11px]">2 days ago</p>
            </span>
          </div>
          <p className="text-green-600 px-2 rounded-full bg-green-600/15 text-[11px]">
            Done
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-between gap-4 px-3 py-2 bg-muted/10 border border-muted/20 rounded-lg">
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 text-[13px] shrink-0">
              🔎
            </p>
            <span>
              <h3 className="text-[12.5px]">Binary search</h3>
              <p className="text-muted text-[11px]">3 days ago</p>
            </span>
          </div>
          <p className="text-green-600 px-2 rounded-full bg-green-600/15 text-[11px]">
            Done
          </p>
        </div>
      </section>
    </>
  );
}
