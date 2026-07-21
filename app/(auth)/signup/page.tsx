"use client";

import Link from "next/link";

export default function SignupPage() {
    return (
        <main className="flex items-center justify-center px-4 text-[#918a8aee]  w-full h-full">
            <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold ">
                        Create Account
                    </h1>
                    <p className=" mt-2">
                        Join us today
                    </p>
                </div>

                <form className="space-y-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-xl bg-white/20 border border-white/20 px-4 py-3  placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-xl bg-white/20 border border-white/20 px-4 py-3  placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-xl bg-white/20 border border-white/20 px-4 py-3  placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                    />

                    <button className="w-full text-white rounded-xl bg-[#c05415] font-semibold py-3 hover:bg-gray-100 transition">
                        Create Account
                    </button>
                </form>

                <p className="text-center  mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
}