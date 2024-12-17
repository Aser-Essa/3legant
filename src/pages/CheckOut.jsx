import SectionContainer from "../ui/SectionContainer";
import CheckOutOrderSummary from "../features/place order/CheckOutOrderSummary";
import CheckOutForm from "../features/place order/CheckOutForm";
import OrderStages from "../features/place order/OrderStages";

function CheckOut() {
  return (
    <>
      <SectionContainer className={"mt-20"}>
        <OrderStages title="Check Out" />
        <div className="flex gap-16 py-20 max-xl:gap-6 max-lg:flex-col">
          <CheckOutForm />
          <div className="max-lg:hidden">
            <CheckOutOrderSummary />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default CheckOut;
