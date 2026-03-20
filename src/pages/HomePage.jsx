import About from "../components/home/About";
import Footer from "../components/home/Footer";
import Story from "../components/home/Story";
import WorkSection from "../components/home/WorkSection";



const HomePage = () => {
  return (
    <>
      <main className="page-enter">
        <About />
        <WorkSection />
        <Story />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
