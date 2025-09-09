"use client";

import Menu from "@/lib/svgs/menu";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import Close from "@/lib/svgs/close";
import Link from "next/link";

const Nav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <nav className="backdrop-blur-md py-3 bg-[hsla(0,0%,100%,.01)] fixed inset-0 border-b border-[hsla(0,0%,100%,.08)] z-50 h-fit">
                <ul className="container-lg flex justify-between items-center">
                    <li className="flex gap-2 items-center">
                        <Image
                            src="/logo-assets/logo-light.png"
                            alt="Logo Light"
                            width={18}
                            height={18}
                        />
                        <h1 className="font-medium">Exonium</h1>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <a href="/features">Features</a>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <a href="/method">Method</a>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <a href="/customers">Customers</a>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <a href="/changelog">Changelog</a>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <a href="/pricing">Pricing</a>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <a href="/company">Company</a>
                    </li>
                    <li className="text-sm cursor-pointer hidden lg:block">
                        <a href="/contact">Contact</a>
                    </li>
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
