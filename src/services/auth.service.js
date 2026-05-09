import { publicClient } from "@/lib/client/api-client";

export const loginUser = (data) => publicClient.post("/users/user/login", data);
