import Landing from "@/components/landing";
import Topics from "@/components/topics";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <section className="w-full h-auto">
      <Navbar />
      <Landing />
      <Topics />
      <Footer />
    </section>
  );
}
