export default function Footer() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-8">
        <div className="w-full bg-muted/8 border border-muted/30 rounded-xl flex flex-row items-center justify-start gap-3 p-4">
          <div className="border border-accent rounded-full w-10 h-10 shrink-0 flex items-center justify-center bg-accent/12">
            <div className="border border-accent w-4 h-4 rounded-full flex items-center justify-center">
              <div className="rounded-full w-2 h-2 flex items-center justify-center bg-white">
                <div className="bg-accent/60 w-2 h-2 rounded-full"></div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[13px]">AI tutor on every lesson</p>
            <p className="text-muted text-[12.5px]">
              Ask questions, get hints, request explanations — your AI assistant
              lives in the sidebar and knows exactly what topic you are
              studying.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col min-[480px]:flex-row items-center justify-center gap-3">
          <div className="w-full min-[482px]:flex-1 bg-muted/8 border border-muted/30 rounded-xl flex flex-col items-start justify-center gap-0 p-4">
            <h1>🌟</h1>
            <p className="text-[12.5px] mt-1">Visualizations</p>
            <p className="text-muted text-[12px]">
              Watch algorithms run step by step
            </p>
          </div>
          <div className="w-full min-[482px]:flex-1 bg-muted/8 border border-muted/30 rounded-xl flex flex-col items-start justify-center gap-0 p-4">
            <h1>✍️</h1>
            <p className="text-[12.5px] mt-1">Quizzes</p>
            <p className="text-muted text-[12px]">
              Test understanding after each topic
            </p>
          </div>
          <div className="w-full min-[482px]:flex-1 bg-muted/8 border border-muted/30 rounded-xl flex flex-col items-start justify-center gap-0 p-4">
            <h1>📈</h1>
            <p className="text-[12.5px] mt-1">Progress tracking</p>
            <p className="text-muted text-[12px]">
              See your growth across all topics
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
