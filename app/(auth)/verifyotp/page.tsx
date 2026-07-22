"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react"

type OTPForm = {
    otp: string;
};

export default function VerifyOTPPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OTPForm>();

    const onSubmit = (data: OTPForm) => {
        console.log("OTP:", data.otp);
    };

    return (
        <main className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">

                <div className="text-center mb-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#c05415]/10 border border-[1px] border-[#c05415]">
                        <span className="text-3xl">
                            <Mail className="text-white" />
                        </span>

                    </div>

                    <h1 className="text-3xl font-bold text-[#918a8aee]">
                        Verify OTP
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Enter the 6-digit verification code sent to your email.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div>
                        <input
                            type="text"
                            maxLength={6}
                            placeholder="Enter OTP"
                            {...register("otp", {
                                required: "OTP is required",
                                pattern: {
                                    value: /^[0-9]{6}$/,
                                    message: "OTP must be exactly 6 digits",
                                },
                            })}
                            className="w-full rounded-xl text-white border border-gray-300 px-4 py-3 text-center text-2xl tracking-[10px] outline-none focus:border-[#c05415] focus:ring-2 focus:ring-[#c05415]"
                        />

                        {errors.otp && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.otp.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#c05415] py-3 font-semibold text-white transition hover:bg-[#a44712]"
                    >
                        Verify OTP
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Didn't receive the code?
                    </p>

                    <button
                        type="button"
                        className="mt-2 font-semibold text-[#c05415] hover:underline"
                    >
                        Resend OTP
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-[#c05415] hover:underline"
                    >
                        ← Back to Login
                    </Link>
                </div>

            </div>
        </main>
    );
}