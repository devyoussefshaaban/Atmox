import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex justify-center items-center  z-50 bg-neutral-900 py-6 flex-col">
            <div className="flex gap-1 items-center mb-2">
                <p className="text-center text-base italic">
                    Created & Developed by <Link className="font-bricolage" target="_blank" href="https://devyoussefshaaban.vercel.app">Youssef Shaaban</Link>
                </p>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <Link href="https://www.linkedin.com/in/imdevyoussefshaaban/" target="_blank">
                    <Image width={20} height={20} src="/images/linkedin.svg" className="mx-auto text-white" alt="Logo" />
                </Link>
                <Link href="https://github.com/devyoussefshaaban" target="_blank">
                    <Image width={20} height={20} src="/images/github.svg" className="mx-auto text-white" alt="Logo" />
                </Link>
                <Link href="https://devyoussefshaaban.vercel.app" target="_blank">
                    <Image width={20} height={20} src="/images/website.svg" className="mx-auto text-white" alt="Logo" />
                </Link>
                <Link href="mailto:imdevyoussefshaaban@gmail.com" target="_blank">
                    <Image width={20} height={20} src="/images/email.svg" className="mx-auto text-white" alt="Logo" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer