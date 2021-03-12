import Gallery from "./components/Gallery";
import Pitch from "./components/Pitch";
import Plans from "./components/Plans";
import PrimaryNavigation from "./components/PrimaryNavigation";
import Testimonials from "./components/Testimonials";
import "./Style.scss";

export default function App() {
  return (
    <>
    <PrimaryNavigation />
    <Gallery />
    <Pitch />
    <Testimonials />
    <Plans />
    </>
  );
}
