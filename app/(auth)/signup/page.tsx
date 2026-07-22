"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignupPage() {

    type SignupForm = {
        name: string;
        email: string;
        password: string;
    };

    const { register, reset, handleSubmit, formState: { errors } } = useForm<SignupForm>();

    const FormSubmit = (data: any) => {
        console.log(data)
        console.log(errors)
    }


    console.log(errors)


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

                <form className="space-y-2" onSubmit={handleSubmit(FormSubmit)}>
                    <input
                        {...register("name", {
                            required: "Name Field is Required",

                        })}
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-xl bg-white/20 border border-white/20 px-4 py-3  placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                    />
                    {errors.name && (
                        <p className=" text-xs px-3 text-red-600 font-bold">
                            * {errors.name?.message}
                        </p>
                    )
                    }

                    <input
                        {...register("email", {
                            required: "Email Field is Required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-xl bg-white/20 border border-white/20 px-4 py-3  placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                    />

                    {errors.email && (
                        <p className=" text-xs px-3 text-red-600 font-bold">
                            * {errors.email?.message}
                        </p>
                    )
                    }

                    <input
                        {...register("password", {
                            required: "Password Field is Required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-xl bg-white/20 border border-white/20 px-4 py-3  placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
                    />

                    {errors.password && (
                        <p className=" text-xs px-3 text-red-600 font-bold">
                            * {errors.password?.message}
                        </p>
                    )
                    }

                    <button className="w-full text-white rounded-xl bg-[#c05415] font-semibold py-3 cursor-pointer transition">
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