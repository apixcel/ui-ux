import AboutUs from "@/components/home/new/AboutUs";
import Banner from "@/components/home/new/Banner";
import Faq from "@/components/home/new/Faq";
import LastestNews from "@/components/home/new/LastestNews";
import OurServices from "@/components/home/new/OurServices";
import ProjectShowcase from "@/components/home/new/ProjectShowcase";
import Testimonial from "@/components/home/new/Testimonial";
import WorkProcess from "@/components/home/new/WorkProcess";
// import GlobalBrands from "@/components/home/new/GlobalBrands";

const Home = () => {
  return (
    <main>
      <Banner />
      <WorkProcess />
      <AboutUs />
      <OurServices />
      <Faq />
      <Testimonial />
      <ProjectShowcase />
      <LastestNews />
      {/* <GlobalBrands /> */}
    </main>
  );
};

export default Home;
