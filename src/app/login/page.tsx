import Link from "next/link";
import { login, signup } from "./actions";
import Button from "../components/ui/button";
import Label from "../components/ui/label";
import Input from "../components/ui/input";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Home
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Admin login</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Sign in to access the admin dashboard.
      </p>

      <form className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email:</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password:</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button formAction={login}>Log in</Button>
        <Button formAction={signup}>Sign up</Button>
      </form>
      {/* <p className="mt-6 text-sm text-muted-foreground">
        No account?{" "} */}
        {/* <Link href="/signup" className="text-primary underline">Create one</Link> */}
      {/* </p> */}
    </div>
  );
}
