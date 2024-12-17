function Spinner() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute left-[50%] top-[40%] flex w-full translate-x-[-50%] translate-y-[-50%] items-center justify-center">
          <div className="wave-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
