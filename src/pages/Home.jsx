import MoreBlogs from "../features/blogs/MoreBlogs";
import Categories from "../ui/Categories";
import HomeHeroSection from "../ui/HomeHeroSection";
import JoinNewsLetter from "../ui/JoinNewsLetter";
import NewArrival from "../ui/NewArrival";
import Offers from "../ui/Offers";
import SectionContainer from "../ui/SectionContainer";
import Services from "../ui/Services";
import Solgan from "../ui/Solgan";

function Home() {
  return (
    <>
      <HomeHeroSection />
      <Solgan />
      <Categories />
      <NewArrival />
      <SectionContainer>
        <Services className="gap-6" />
      </SectionContainer>
      <Offers />
      <SectionContainer>
        <MoreBlogs title="Articles" />
      </SectionContainer>
      <JoinNewsLetter />
    </>
  );
}

export default Home;
