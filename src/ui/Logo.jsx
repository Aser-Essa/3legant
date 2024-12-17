import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Logo({ className }) {
  return (
    <>
      <p className={`text-2xl font-medium ${className}`}>
        <Link to={"/"}>3legant.</Link>
      </p>
    </>
  );
}

export default Logo;
