import SectionContainer from "../ui/SectionContainer";
import OrderStages from "../features/place order/OrderStages";
import Order from "../features/place order/Order";

function OrderComplete() {
  return (
    <SectionContainer className={"mt-20"}>
      <OrderStages title="Complete!" />
      <Order />
    </SectionContainer>
  );
}

export default OrderComplete;
