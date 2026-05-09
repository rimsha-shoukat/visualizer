import Link from "next/link";

export default function Signin() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between px-6 py-4 border-b border-muted/20">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <h1 className="text-[15px] font-semibold">Visualizer</h1>
        </div>
        <Link href="/" className="text-[12px] text-muted">
          ← Back to home
        </Link>
      </nav>
      <section className="flex flex-col items-center justify-center gap-4 my-10">
        <main className="flex flex-col items-center justify-center gap-3 border border-muted/15 bg-muted/6 rounded-lg p-4 min-[385px]:p-10">
          <div className="border border-accent/40 rounded-full w-13 h-13 shrink-0 flex items-center justify-center bg-accent/12">
            <div className="border border-accent w-5 h-5 rounded-full flex items-center justify-center">
              <div className="rounded-full w-2.5 h-2.5 flex items-center justify-center bg-white">
                <div className="bg-accent/50 w-2.5 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-[18px] mt-2">Sign in to Visualizer</h1>
          <div className="text-[13px] text-muted text-center">
            <p>Continue with your existing account.</p>
            <p>No password required.</p>
          </div>
          <div className="w-full text-muted/50 text-[12px] flex flex-row items-center justify-center gap-2 mt-4">
            <p className="border-t border-muted/40 w-1/3"></p>
            <p className="text-nowrap">continue with</p>
            <p className="border-t border-muted/40 w-1/3"></p>
          </div>
          <div className="w-full border border-muted/10 rounded-lg hover:border-accent p-2 flex flex-row items-center justify-center gap-4 cursor-pointer bg-accent/5">
            <h1 className="bg-muted rounded-full w-6 h-6 text-center text-red-600 font-bold">
              G
            </h1>
            <h1 className="text-[13px]">Continue with Google</h1>
          </div>
          <div className="w-full border border-muted/10 rounded-lg hover:border-accent p-2 flex flex-row items-center justify-center gap-4 cursor-pointer bg-accent/5">
            <h1 className="bg-muted rounded-full w-6 h-6 text-center text-black font-bold">
              G
            </h1>
            <h1 className="text-[13px]">Continue with Github</h1>
          </div>
          <div className="text-[12px] text-muted/40 text-center">
            <p>
              By signing in, you agree to our{" "}
              <a className="text-accent underline" href="">
                Terms
              </a>{" "}
              and{" "}
              <a className="text-accent underline" href="">
                Privacy Policy
              </a>
              .
            </p>
            <p>We never store your password.</p>
          </div>
        </main>
        <footer className="flex flex-row flex-wrap items-center justify-center gap-6">
          <div className="text-center">
            <h1>🌟</h1>
            <p className="text-[12px] text-muted">Save progress</p>
          </div>
          <div className="text-center">
            <h1>🧠</h1>
            <p className="text-[12px] text-muted">Personalized AI</p>
          </div>
          <div className="text-center">
            <h1>🏆</h1>
            <p className="text-[12px] text-muted">Track streaks</p>
          </div>
          <div className="text-center">
            <h1>📊</h1>
            <p className="text-[12px] text-muted">Full analytics</p>
          </div>
        </footer>
      </section>
    </>
  );
}
