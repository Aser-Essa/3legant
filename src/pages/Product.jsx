import ProductDetails from "../features/Shop/ProductDetails";
import DisplayController from "../ui/DisplayController";
import JoinNewsLetter from "../ui/JoinNewsLetter";
import ReviewsOrInfo from "../features/Shop/ReviewsOrInfo";
import SectionContainer from "../ui/SectionContainer";

function Product() {
  return (
    <>
      <ProductDetails />
      <SectionContainer className={"py-10"}>
        <DisplayController />
        <ReviewsOrInfo />
      </SectionContainer>
      <JoinNewsLetter />
    </>
  );
}

export default Product;
