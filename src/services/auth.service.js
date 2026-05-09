import { publicClient } from "@/lib/client/api-client";

export const loginUser = (data) => publicClient.post("/users/user/login", data);

export const registerUser = (data) =>
  publicClient.post("/users/user/register", data);
