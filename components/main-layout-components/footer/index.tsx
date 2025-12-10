import { socialLinks } from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"

const SocialLink = ({ href, icon }: { href: string, icon: string }) => {
    return (
        <Link href={href} target="_blank">
            <Image width={20} height={20} src={icon} className="mx-auto text-white" alt="Logo" />
        </Link>
    )
}

const Footer = () => {
    return (
        <footer className="flex justify-center items-center  z-50 bg-neutral-900 py-6 flex-col">
            <div className="flex gap-1 items-center mb-2">
                <p className="text-center text-base italic">
                    Created & Developed by <Link className="font-bricolage" target="_blank" href="https://devyoussefshaaban.vercel.app">Youssef Shaaban</Link>
                </p>
            </div>
            <div className="flex gap-3 justify-center items-center">
                {socialLinks.map((link, index) => (
                    <SocialLink key={index} href={link.href} icon={link.icon} />
                ))}
            </div>
        </footer>
    )
}

export default Footer