import { supabase } from "../Supabase";

export async function SignUp({
  email,
  password,
  username,
  firstName,
  lastName,
}) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        firstName,
        lastName,
      },
    },
  });
  if (error) throw new Error(error?.message);
  return data;
}

export async function SignIn({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error?.message);
  return data;
}

export async function Logout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error?.message);
}

export async function getCurrent() {
  let { error: sessionError } = await supabase.auth.getSession();
  if (sessionError) return null;
  let { data: user, error: userError } = await supabase.auth.getUser();
  if (userError) return null;
  return user?.user;
}

export async function updateUserData({
  id,
  firstName,
  lastName,
  username,
  email,
  oldpassword,
  newpassword,
}) {
  let { data: userMetaData, error: userMetaDataError } =
    await supabase.auth.updateUser({
      email,
      data: { firstName, lastName, username },
    });
  if (userMetaDataError) throw new Error(userMetaDataError?.message);

  if (!newpassword) return userMetaData;
  let newPasswordData = await supabase.rpc("changepassword", {
    current_plain_password: oldpassword,
    new_plain_password: newpassword,
    current_id: id,
  });
  if (newPasswordData.data === "incorrect") {
    throw new Error("Incorrect Password Try Again");
  }
  return { ...userMetaData, ...newPasswordData };
}

export async function updateAvatar({ avatar, user_id }) {
  if (avatar) {
    const fileName = `avatar-${user_id}-${Math.random()}`;
    const { error: storageError } = await supabase.storage
      .from("Avatar")
      .upload(fileName, avatar);
    if (storageError) throw new Error(storageError?.message);

    let { data: userDataUpdated, error: userDataUpdatedError } =
      await supabase.auth.updateUser({
        data: {
          avatar: `https://oowcjcmdcfitnnsqfohw.supabase.co/storage/v1/object/public/Avatar/${fileName}`,
        },
      });
    if (userDataUpdatedError) throw new Error(userDataUpdatedError?.message);
    return userDataUpdated;
  }
}

export async function updateAddress({ billing_address, shipping_address }) {
  if (billing_address) {
    let { data: userBillingAdressData, error: userBillingAdressError } =
      await supabase.auth.updateUser({
        data: { billing_address },
      });
    if (userBillingAdressError)
      throw new Error(userBillingAdressError?.message);
    console.log(userBillingAdressData, billing_address);
    return userBillingAdressData;
  }

  if (shipping_address) {
    let { data: userShipingAdressData, error: userShipingAdressError } =
      await supabase.auth.updateUser({
        data: { shipping_address },
      });
    if (userShipingAdressError)
      throw new Error(userShipingAdressError?.message);
    return userShipingAdressData;
  }
}
