"use client";

import Menu from "@/lib/svgs/menu";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import Close from "@/lib/svgs/close";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Nav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { data: session, status } = useSession();

    const handleSignOut = async () => {
        await signOut({ redirect: true, callbackUrl: "/login" });
    };

    // Don't show auth-dependent UI while loading
    const loading = status === "loading";

    return (
        <>
            <nav className="backdrop-blur-md py-3 bg-[hsla(0,0%,100%,.01)] fixed inset-0 border-b border-[hsla(0,0%,100%,.08)] z-50 h-fit">
                <ul className="container-lg flex justify-between items-center">
                    <li className="flex gap-2 items-center">
                        <Link href="/" className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity">
                            <Image
                                src="/logo-assets/logo-light.png"
                                alt="Logo Light"
                                width={18}
                                height={18}
                            />
                            <h1 className="font-medium">Exonium</h1>
                        </Link>
                    </li>

                    <li className="text-sm cursor-pointer hidden lg:block">
                        <Link href="/features">Features</Link>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <Link href="/method">Method</Link>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <Link href="/customers">Customers</Link>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <Link href="/changelog">Changelog</Link>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <Link href="/pricing">Pricing</Link>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <Link href="/company">Company</Link>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <Link href="/contact">Contact</Link>
                    </li>

                    {!loading && session ? (
                        <>
                            <li className="text-sm cursor-pointer hidden lg:block">
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                            <li className="text-sm me-5 lg:me-0">
                                <button
                                    onClick={handleSignOut}
                                    className="border-2 border-red-400 bg-red-900/30 rounded-full px-4 font-medium leading-8 h-8 text-white hover:bg-red-900/50 transition duration-700 flex items-center justify-center min-w-[80px] text-sm"
                                >
                                    Sign out
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="text-sm cursor-pointer flex-1 lg:flex-none text-right me-3 lg:me-0">
                                <Link href="/login" className="hover:underline">Login</Link>
                            </li>
                            <li className="text-sm me-5 lg:me-0">
                                <Link href="/signup" passHref legacyBehavior>
                                    <a className="border-2 border-blue-400 bg-[#003366] rounded-full px-4 font-medium leading-8 h-8 text-white hover:bg-transparent transition duration-700 flex items-center justify-center min-w-[80px] text-sm">
                                        Sign up
                                    </a>
                                </Link>
                            </li>
                        </>
                    )}

                    <li
                        onClick={() => setShowMobileMenu((prev) => !prev)}
                        className="lg:hidden"
                    >
                        {showMobileMenu ? <Close /> : <Menu />}
                    </li>
                </ul>
            </nav>
            <MobileMenu show={showMobileMenu} />
        </>
    );
};

export default Nav;
