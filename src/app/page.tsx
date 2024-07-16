import Banner from "@/components/home/Banner";
import ContactSection from "@/components/home/ContactSection";
import CustomerReviews from "@/components/home/CustomerReviews";
import Demos from "@/components/home/Demos";
import DiscussPanel from "@/components/home/DiscussPanel";

const Home = () => {
  return (
    <main>
      <div className="absolute -z-10 top-0 left-0 w-full bg-[url('/images/background.jpg')] bg-cover bg-center h-screen"></div>
      <Banner />
      <ContactSection />
      <DiscussPanel />
      <Demos />
      <CustomerReviews />
    </main>
  );
};

export default Home;
