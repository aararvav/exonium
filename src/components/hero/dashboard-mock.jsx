"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DashboardMock = () => {
    const dashboardRef = useRef(null);
    const isDashboardInView = useInView(dashboardRef, { once: true });

    return (
        <motion.div
            animate={
                isDashboardInView
                    ? {
                        boxShadow: [
                            "0px 1px 200px 100px rgba(99,102,241,0.1)",
                            "0px 1px 200px 100px rgba(99,102,241,0.5)",
                            "0px 1px 200px 100px rgba(99,102,241,0.2)",
                        ],
                    }
                    : {}
            }
            transition={{ duration: 1.4, delay: 0 }}
            className={`relative max-w-5xl my-24 lg:my-10 aspect-video w-full [animation-delay:1000ms] overflow-hidden rounded-2xl ${isDashboardInView ? "animate-cardTransform" : ""
                }`}
            style={{ transform: "perspective(2000px) rotateX(25deg)" }}
            ref={dashboardRef}
        >
            <motion.div
                initial={{ opacity: 0.2 }}
                animate={
                    isDashboardInView
                        ? { opacity: [0.2, 1, 0.2], transition: { delay: 1, duration: 2 } }
                        : {}
                }
                className="absolute inset-0"
                style={{
                    background:
                        "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
                }}
            ></motion.div>
            <div
                className="w-full h-full rounded-2xl shadow-md border border-indigo-900/70 bg-[rgba(255,255,255,0.01)]"
                style={{
                    backgroundImage:
                        "radial-gradient(ellipse at 20% 40%, rgba(93, 52, 221, 0.1), hsla(0,0%,100%,0)), radial-gradient(ellipse at 80% 50%, rgba(120, 119, 198, 0.15), hsla(0,0%,100%,0))",
                }}
            >
                <motion.div
                    initial={{ left: "0%", opacity: 1 }}
                    animate={
                        isDashboardInView
                            ? {
                                left: ["0%", "100%"],
                                opacity: [1, 0],
                                transition: { duration: 2, repeat: Infinity, repeatDelay: 1 },
                            }
                            : {}
                    }
                    className="absolute w-20 h-[0.5px] bg-gradient-to-r from-transparent rounded-full to-indigo-500 top-0"
                ></motion.div>
                <motion.div
                    initial={{ top: "0%", opacity: 1 }}
                    animate={
                        isDashboardInView
                            ? {
                                top: ["0%", "100%"],
                                opacity: [1, 0],
                                transition: { duration: 2, repeat: Infinity, repeatDelay: 1 },
                            }
                            : {}
                    }
                    className="absolute h-20 w-[0.5px] bg-gradient-to-b from-transparent rounded-full to-indigo-500 right-0 top-0 z-20"
                ></motion.div>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={
                        isDashboardInView
                            ? { opacity: 1, transition: { delay: 2, duration: 0.8 } }
                            : {}
                    }
                    src="/logo-assets/dashboard.png"
                    alt="Dashboard preview"
                    className="relative z-10 rounded-2xl"
                />
            </div>
        </motion.div>
    );
};

export default DashboardMock;
