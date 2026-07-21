"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="w-full h-full text-[#918a8aee] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold ">Welcome Back</h1>
          <p className=" mt-2">
            Sign in to continue
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm  mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-white/20 border border-white/20 px-4 py-3  placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-sm  mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl bg-white/20 border border-white/20 px-4 py-3  placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button className="w-full rounded-xl bg-[#c05415] text-white font-semibold py-3 hover:bg-gray-100 transition ">
            Sign In
          </button>
        </form>

        <p className="text-center /80 mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}