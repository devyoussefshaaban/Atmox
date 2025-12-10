"use client"

import { scrollToTop } from "@/utils"
import Image from "next/image"

const Header = () => {
    return (
        <header
            className="
            px-4 py-10 md:px-20 md:py-4
            flex justify-between items-center
            sticky top-0 z-50
            bg-neutral-900
            shadow-[0_8px_30px_rgba(0,0,0,0.6)]
            min-h-[64px] md:min-h-[80px]
        "
        >
            <div>
                <Image width={220} height={220} src="/images/logo.svg" alt="Logo" className="cursor-pointer object-contain"
                    onClick={scrollToTop}
                />
            </div>
        </header>
    )
}

export default Header