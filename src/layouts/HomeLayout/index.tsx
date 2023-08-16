import { ReactNode } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

export interface HomeLayoutProps {
  children?: ReactNode;
}

export default function HomeLayout(props: HomeLayoutProps) {
  return (
    <div className="p-4">
      <header>
        <NavBar />
      </header>

      <Carousel />

      <main className="py-16 flex flex-col gap-y-32 max-w-screen mx-auto">
        {props.children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
