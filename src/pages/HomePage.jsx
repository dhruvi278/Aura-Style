import About from "../components/home/About";
import Footer from "../components/home/Footer";
import Story from "../components/home/Story";
import WorkSection from "../components/home/WorkSection";
import Navbar from "../components/Navbar";


const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main>
      <About />
      <WorkSection />
      <Story />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
