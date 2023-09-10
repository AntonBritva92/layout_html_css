import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import RoastedCoffe from "./components/InfoBlock";
import Catalog from "./components/Catalog";
import NewsBlock from "./components/NewsBlock";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <RoastedCoffe />
      <Catalog />
      <NewsBlock />
      <Footer />
    </main>
  );
}
