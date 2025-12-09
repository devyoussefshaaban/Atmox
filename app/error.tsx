"use client"

import Image from "next/image"

export default function Page() {
    const onRetry = () => {
        window.location.replace("/");
    }
    return (
        <div className="text-center grid place-items-center">
            <Image width={50} height={50} src="/images/icon-error.svg" alt="Error" />
            <h1 className="text-4xl font-bold font-dmSans mt-5">Something went wrong!</h1>
            <p className="text-neutral-300 mt-5">We are sorry, but something went wrong on our end. <br /> Please try again later.</p>
            <div className="flex gap-2 mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                <Image width={15} height={15} src="/images/icon-retry.svg" alt="Retry" />
                <button className="font-dmSans cursor-pointer" onClick={onRetry}>Try Again</button>
            </div>
        </div >
    )
}