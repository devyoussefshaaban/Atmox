"use client"

import { scrollToTop } from "@/utils";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="
                    fixed bottom-2 right-2
                    p-3 rounded-full
                    bg-gray-900 text-white
                    shadow-[10px_10px_20px_rgba(0,0,0,0.4)]
                    hover:bg-gray-800
                    transition-all duration-300
                    active:scale-95
                    z-50
                    cursor-pointer
                "
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </>
    );
}
