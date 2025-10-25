
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    
    try {
      setError(""); // Clear any previous errors
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      if (res.ok) {
        // Log the user in after successful signup
        await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });
        
        router.push("/dashboard");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong");
      }
    } catch (error) {
      setError("Something went wrong");
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
      <div className="w-full max-w-md flex flex-col items-center gap-6">
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
          {showEmailForm ? "Create your account" : "Create your workspace"}
        </h2>

        {!showEmailForm ? (
          <div className="w-full flex flex-col items-center gap-3 mt-2 mb-6">
            <button className="w-[400px] max-w-full rounded-md bg-[#5e6ad2] text-white py-3 font-medium transition duration-150 ease-in-out hover:brightness-105 cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f79e6]/40 shadow-sm">Continue with Google</button>
            <button
              onClick={() => setShowEmailForm(true)}
              className="w-[400px] max-w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 font-medium border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
            >
              Continue with email
            </button>
            <Link href="/dashboard" className="w-[400px] max-w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 font-medium border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 flex items-center justify-center">Continue with Github</Link>
          </div>
        ) : (
          <form onSubmit={handleEmailSignup} className="w-full flex flex-col items-center gap-4 mt-2 mb-6">
            <div className="w-full max-w-[400px]">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                className="w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 px-4 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] focus:border-[#5e6ad2] focus:outline-none focus:ring-2 focus:ring-[#6f79e6]/40 placeholder-[#b4bcd0]"
              />
            </div>
            <div className="w-full max-w-[400px]">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 px-4 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] focus:border-[#5e6ad2] focus:outline-none focus:ring-2 focus:ring-[#6f79e6]/40 placeholder-[#b4bcd0]"
              />
            </div>
            <div className="w-full max-w-[400px]">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 px-4 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] focus:border-[#5e6ad2] focus:outline-none focus:ring-2 focus:ring-[#6f79e6]/40 placeholder-[#b4bcd0]"
              />
            </div>
            <div className="w-full max-w-[400px]">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                className="w-full rounded-md bg-[#181a20] text-[#e6e8ee] py-3 px-4 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition duration-150 ease-in-out hover:border-[rgba(255,255,255,0.14)] focus:border-[#5e6ad2] focus:outline-none focus:ring-2 focus:ring-[#6f79e6]/40 placeholder-[#b4bcd0]"
              />
            </div>
            {error && (
              <div className="w-full max-w-[400px] text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-[400px] max-w-full rounded-md bg-[#5e6ad2] text-white py-3 font-medium transition duration-150 ease-in-out hover:brightness-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f79e6]/40 shadow-sm"
            >
              Create account
            </button>
            <button
              type="button"
              onClick={() => setShowEmailForm(false)}
              className="text-[#b4bcd0] text-sm hover:text-white transition-colors cursor-pointer"
            >
              ← Back to signup options
            </button>
          </form>
        )}

        <p className="text-xs text-[#b4bcd0] text-center max-w-xs mb-4">
          By signing up, you agree to our <span className="font-semibold text-white underline cursor-pointer">Terms of Service</span> and <span className="font-semibold text-white underline cursor-pointer">Data Processing Agreement</span>.
        </p>
        <p className="text-xs text-[#b4bcd0] text-center">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-white underline cursor-pointer">Log in</Link>
        </p>
      </div>
    </motion.main>
  );
}
