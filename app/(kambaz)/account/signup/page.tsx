"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = async () => {
    const current = await client.signup(user);
    setCurrentUser(current);
    router.push("/account/profile");
  };
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign up</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>{" "}
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
