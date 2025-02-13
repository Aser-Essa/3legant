import { useEffect } from "react";
import { useUser } from "../features/account/useUser";
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
  const { user } = useUser();
  useEffect(() => {
    console.log(user);
  });
  return (
    <>
      <HomeHeroSection />
      <Solgan />
      <Categories />
      <NewArrival />
      <SectionContainer>
        <Services className="my-4 gap-6" />
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
