import Navbar from "@/components/navbar";
import Landing from "@/components/landing";
// import Topics from "@/components/topics";
// import Footer from "@/components/footer";

// import ToggleTheme from "@/components/theme-toggle";

export default function Home() {
  return (
    <section className="w-full h-auto">
      <Navbar />
      <Landing />
      {/* <Topics /> */}
      {/* <Footer /> */}
      {/* <ToggleTheme /> */}
    </section>
  );
}
