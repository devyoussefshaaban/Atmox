import Image from "next/image"

const Header = () => {
    return (
        <header className="px-4 py-2 md:px-20 md:py-4 flex justify-between items-center sticky top-0 z-50 bg-neutral-900 py-2">
            <div className="flex gap-2 items-center">
                <Image width={220} height={220} src="/images/logo.png" alt="Logo" className="mx-auto" />
            </div>
        </header>
    )
}

export default Header