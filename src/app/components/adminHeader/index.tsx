"use client";

import Link from "next/link";
import Button from "@/app/components/ui/button";

import { signOut } from "@/app/actions/signoff";

export default function AdminHeader({ user }: { user?: { email: string } }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      {user?.email && <span className="hidden sm:inline">{user.email}</span>}
      <Button onClick={signOut} className="hover:text-foreground underline">
        Sign out
      </Button>
      <Link href="/songs" className="hover:text-foreground">View public library →</Link>
    </div>
  );
}