import { Outlet } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import SectionContainer from "../../ui/SectionContainer";
import { LuCamera } from "react-icons/lu";
import MyAccountNavMobile from "./MyAccountNavMobile";
import useUpdateAvatar from "./useUpdateAvatar";
import MyAccountNav from "./MyAccountNav";

function MyAccountLayout() {
  const { user } = useUser();
  const { updateAvatar } = useUpdateAvatar();

  function handleChangeAvatar(e) {
    updateAvatar({ avatar: e.target.files[0], user_id: user?.id });
  }

  return (
    <>
      <SectionContainer className={"py-20"}>
        <p className="w-full pb-20 text-center text-[54px] font-medium">
          My Account
        </p>
        <div className="flex gap-2 max-lg:flex-col max-lg:items-center">
          <div className="h-[468px] min-w-[262px] max-w-[262px] rounded-lg bg-white-shade-2 px-4 py-10 max-lg:h-fit max-lg:min-w-[100%]">
            <div className="mb-10 flex flex-col items-center">
              <div className="relative h-20 w-20 cursor-pointer">
                <input
                  type="file"
                  onChange={handleChangeAvatar}
                  className="absolute z-50 h-20 w-20 cursor-pointer opacity-0"
                />
                <img
                  src={user?.user_metadata?.avatar || "/default-user.png"}
                  className="h-full w-full rounded-[82px]"
                />
                <div className="absolute bottom-0 right-0 flex h-[30px] w-[30px] items-center justify-center rounded-[125px] border-2 border-white bg-black-shade-1">
                  <LuCamera className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="mt-1.5 font-inter text-xl font-semibold">
                {user?.user_metadata?.username}
              </p>
            </div>
            <MyAccountNavMobile />
            <MyAccountNav />
          </div>
          <Outlet />
        </div>
      </SectionContainer>
    </>
  );
}

export default MyAccountLayout;
