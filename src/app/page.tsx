import Navbar from "@/components/navbar";
import Landing from "@/components/landing";
import Topics from "@/components/topics";
import Footer from "@/components/footer";

// import ToggleTheme from "@/components/theme-toggle";

export default function Home() {
  return (
    <section className="w-full h-auto">
      <Navbar />
      <Landing />
      <section className="w-full h-auto px-6 py-8 flex flex-col items-center justify-center gap-8">
        <Topics />
        <Footer />
      </section>
      {/* <ToggleTheme /> */}
    </section>
  );
}
