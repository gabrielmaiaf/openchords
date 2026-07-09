"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth/client";
import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/button";

import { useEffect, useState } from "react";
import { signOut } from "@/app/actions/signoff";

export default function AdminHeader() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchSession() {
      const { data, error } = await authClient.getSession();

      if (error || !data?.user) {
        router.push("/login");
      } else {
        console.log("User data:", data.user);
        setUserEmail(data.user.email);
      }
    }

    fetchSession();
  }, [router]);

  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      {userEmail && <span className="hidden sm:inline">{userEmail}</span>}
      <Button onClick={signOut} className="hover:text-foreground underline">
        Sign out
      </Button>
      <Link href="/songs" className="hover:text-foreground">View public library →</Link>
    </div>
  );
}