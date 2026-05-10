import { registerUser } from "@/services/auth.service";
import { useUserStore } from "@/store/userStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useRegister = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data) => registerUser(data),
    onSuccess: (res) => {
      setUser(res.data.data);
      toast.success("Account created successfully! Welcome to HirePilot.");
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(message);
    },
  });
};
