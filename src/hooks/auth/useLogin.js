import { loginUser } from "@/services/auth.service";
import { useUserStore } from "@/store/userStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useLogin = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (res) => {
      setUser(res.data.data);
      toast.success("Welcome back!");
      router.push("/");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    },
  });
};
