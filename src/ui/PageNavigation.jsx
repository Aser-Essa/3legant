import PageNavigationLink from "./PageNavigationLink";

// eslint-disable-next-line react/prop-types
function PageNavigation({ className, children }) {
  return (
    <div
      className={`flex min-h-5 items-center font-inter text-sm font-medium text-[#605F5F] max-sm:text-xs ${className}`}
    >
      <PageNavigationLink title={"Home"} link={"/"} />
      {children}
    </div>
  );
}

export default PageNavigation;
