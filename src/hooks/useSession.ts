import { authClient } from "@/lib/auth/client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useSession() {
  const router = useRouter();

  const { data, isPending, error } = authClient.useSession();

  useEffect(() => {
    if (!isPending) {
      if (error || !data?.user) {
        router.push("/login");
      }
    }
  }, [isPending, error, data, router]);

  return data?.user?.email || null;
}