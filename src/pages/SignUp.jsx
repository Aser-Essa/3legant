import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import SignUpForm from "../features/authentication/SignUpForm";

function SignUp() {
  return (
    <>
      <div className="grid h-screen grid-cols-2 max-sm:grid-cols-1">
        <div className="flex flex-col items-center bg-white-shade-2 p-8 max-sm:h-[410px]">
          <Logo />
          <img src="/chair.png" className="m-auto w-[550px] mix-blend-darken" />
        </div>
        <div className="flex items-center p-[88px] max-sm:px-8 max-sm:py-10">
          <div className="flex h-[520px] w-[456px] flex-col justify-center max-sm:h-fit">
            <p className="mb-6 text-[40px] font-medium leading-[44px]">
              Sign up
            </p>
            <div className="font-inter">
              <p className="inline text-black-shade-4">
                Already have an account?{" "}
              </p>
              <Link to={"/signin"} className="font-semibold text-[#38CB89]">
                Sign in
              </Link>
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
