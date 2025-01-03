import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import OrderComplete from "./pages/OrderComplete";
import Account from "./pages/Account";
import MyAccountLayout from "./features/account/MyAccountLayout";
import Address from "./pages/Address";
import OrdersHistory from "./pages/OrdersHistory";
import Wishlist from "./pages/Wishlist";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import ScrollToTop from "./ui/ScrollToTop";
import { useEffect } from "react";
import { MotionConfig } from "motion/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

function setFixedHeight() {
  const viewportHeight = window.innerHeight;
  document.documentElement.style.setProperty(
    "--viewport-height",
    `${viewportHeight}px`,
  );
}

setFixedHeight();
window.addEventListener("resize", setFixedHeight);

function App() {
  useEffect(() => {
    const shiping = localStorage.getItem("shiping");
    if (!shiping) {
      localStorage.setItem("shiping", 0);
    }
  }, []);

  return (
    <MotionConfig
      transition={{ duration: 1 }}
      reducedMotion={window.innerWidth > 640 ? "never" : "always"}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/check-out"
                element={
                  <ProtectedRoute>
                    <CheckOut />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/order-complete"
                element={
                  <ProtectedRoute>
                    <OrderComplete />
                  </ProtectedRoute>
                }
              />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blogs/:id" element={<Blog />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <MyAccountLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/myAccount" element={<Account />} />
                <Route path="/address" element={<Address />} />
                <Route path="/orders" element={<OrdersHistory />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Route>
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: { fontSize: "16px" },
        }}
      />
    </MotionConfig>
  );
}

export default App;
