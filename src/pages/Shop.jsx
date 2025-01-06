import FilterColumn from "../ui/FilterColumn";
import FilterSortGridShop from "../features/Shop/FilterSortGridShop";
import JoinNewsLetter from "../ui/JoinNewsLetter";
import Products from "../features/Shop/Products";
import SectionContainer from "../ui/SectionContainer";
import HeroSection from "../ui/HeroSection";

function Shop() {
  return (
    <>
      <SectionContainer>
        <HeroSection
          title="Shop Page"
          paragraph="Let’s design the place you always imagined."
          img="/shop-banner.png"
          link={"shop"}
        />
        <FilterSortGridShop />
        <div className="flex w-full gap-5">
          <FilterColumn />
          <Products />
        </div>
      </SectionContainer>
      <JoinNewsLetter />
    </>
  );
}

export default Shop;
