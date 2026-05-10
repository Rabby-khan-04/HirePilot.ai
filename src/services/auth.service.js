import { publicClient } from "@/lib/client/api-client";
import { useUserStore } from "@/store/userStore";
import toast from "react-hot-toast";

export const loginUser = (data) => publicClient.post("/users/user/login", data);

export const registerUser = (data) =>
  publicClient.post("/users/user/register", data);

export const logout = async () => {
  await publicClient.post("/users/user/logout");
  useUserStore.getState().clearUser();
  toast.success("Logged out successfully. See you soon!");
  // window.location.href = "/login";
};
