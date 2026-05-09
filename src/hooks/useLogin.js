import { loginUser } from "@/services/auth.service";
import { useUserStore } from "@/store/userStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (res) => {
      setUser(res.data.data);
      router.push("/");
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });
};
