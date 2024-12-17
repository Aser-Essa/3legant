/* eslint-disable react/prop-types */
import Stars from "../../ui/Stars";

function Review({ user }) {
  return (
    <div
      className="h-[200px] border-b border-white-shade-1 pb-6 max-sm:h-fit"
      key={user.name}
    >
      <div className="mb-4 flex gap-10">
        <img src={user?.avatar} className="h-[72px] w-[72px] rounded-[50%]" />
        <div className="flex flex-col gap-4">
          <p className="font-inter text-xl font-semibold leading-8">
            {user?.name}
          </p>
          <Stars rate={user?.rate} />
        </div>
      </div>

      <div>
        <p className="ml-[112px] h-[52px] w-[calc(100%-112px)] overflow-hidden text-ellipsis font-inter text-[#353945] max-sm:ml-0 max-sm:h-[70px] max-sm:w-full">
          {user?.comments}
        </p>
        <div className="ml-[112px] mt-2 flex h-5 items-center gap-4 font-inter text-xs font-semibold max-sm:mx-auto max-sm:mt-4 max-sm:w-fit">
          <button>Like</button>
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
