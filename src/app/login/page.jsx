"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = "/dashboard"; // Always redirect to dashboard

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    
    try {
      setError(""); // Clear any previous errors
      console.log("Attempting login with:", { email });

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("Login response:", response);

      if (response?.error) {
        setError("Invalid email or password");
        return;
      }

      if (!response?.ok) {
        setError("Failed to sign in");
        return;
      }

      // Successful login
      console.log("Login successful, redirecting to:", callbackUrl);
      router.push(callbackUrl);
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <motion.main
      key={typeof window !== "undefined" ? window.location.pathname : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-[#070708] flex items-center justify-center px-4"
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        <Link href="/" className="w-14 h-14 rounded-full bg-[#181a2a] flex items-center justify-center hover:bg-[#1f2235] transition-colors cursor-pointer">
          <Image
            src="/logo-assets/logo-light.png"
            alt="Linear Logo"
            width={40}
            height={40}
            className="w-10 h-10"
            priority
          />
        </Link>

        <h2 className="text-white text-xl font-normal mb-2">
          {showEmailForm ? "Welcome back" : "Log in to your workspace"}
        </h2>

        {!showEmailForm ? (
          <div className="w-full flex flex-col items-center gap-3 mt-2 mb-6">
            <button className="w-[360px] max-w-full rounded-md bg-[#5e6ad2] text-white py-3 font-medium transition duration-150 ease-in-out hover:brightness-105 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f79e6]/40 shadow-sm">Continue with Google</button>
            <button
              onClick={() => setShowEmailForm(true)}
              className="w-[360px] max-w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 font-medium border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
            >
              Continue with email
            </button>
            <Link href="/dashboard" className="w-[360px] max-w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 font-medium border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 flex items-center justify-center">Continue with Github</Link>
          </div>
        ) : (
          <form onSubmit={handleEmailLogin} className="w-full flex flex-col items-center gap-4 mt-2 mb-6">
            {error && (
              <div className="w-full max-w-[360px] text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <div className="w-full max-w-[360px]">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 px-4 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] focus:border-[#5e6ad2] focus:outline-none focus:ring-2 focus:ring-[#6f79e6]/40 placeholder-[#b4bcd0]"
              />
            </div>
            <div className="w-full max-w-[360px]">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 px-4 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] focus:border-[#5e6ad2] focus:outline-none focus:ring-2 focus:ring-[#6f79e6]/40 placeholder-[#b4bcd0]"
              />
            </div>
            <button
              type="submit"
              className="w-[360px] max-w-full rounded-md bg-[#5e6ad2] text-white py-3 font-medium transition duration-150 ease-in-out hover:brightness-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f79e6]/40 shadow-sm"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => setShowEmailForm(false)}
              className="text-[#b4bcd0] text-sm hover:text-white transition-colors cursor-pointer"
            >
              ← Back to login options
            </button>
          </form>
        )}

        <p className="text-xs text-[#b4bcd0] text-center max-w-xs mb-4">
          By logging in, you agree to our <a href="#" className="font-semibold text-white underline">Terms of Service</a> and <a href="#" className="font-semibold text-white underline">Data Processing Agreement</a>.
        </p>
        <p className="text-xs text-[#b4bcd0] text-center">
          Don't have an account?{' '}
          <Link href="/signup" className="font-semibold text-white underline">Sign up</Link>
        </p>
      </div>
    </motion.main>
  );
}
