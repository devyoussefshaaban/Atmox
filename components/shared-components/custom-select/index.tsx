import { useState, useRef, useEffect, FC } from "react";

interface IProps { options: string[], value: string, onChange: any, placeholder: string, withPadding?: boolean }

const CustomSelect: FC<IProps> = ({ options, value, onChange, placeholder, withPadding }) => {
    const [open, setOpen] = useState(false);
    const selectRef: React.RefObject<HTMLDivElement | null> = useRef(null);

    // Close on clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (selectRef.current && !selectRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={selectRef} className="relative w-full">
            <div
                className="bg-gray-800 text-white px-4 border-none rounded-lg cursor-pointer 
        flex justify-between items-center select-none
        active:scale-[0.98] transition"
                onClick={() => setOpen(!open)}
                style={{ padding: withPadding ? "16px" : "" }}
            >
                <span className="text-md">
                    {value || placeholder || "Select option"}
                </span>

                <svg
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"
                        }`}
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* DROPDOWN */}
            {open && (
                <div
                    className="absolute left-0 right-0 mt-2 bg-gray-900 border-none
          rounded-lg shadow-lg max-h-56 overflow-y-auto z-20 animate-fade mobile-scroll"
                >
                    <ul className="py-2">
                        {options.map((opt: string) => (
                            <li
                                key={opt}
                                onClick={() => {
                                    onChange(opt);
                                    setOpen(false);
                                }}
                                className="px-4 py-2 text-md text-white cursor-pointer
                hover:bg-gray-700 transition select-none"
                            >
                                {opt}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CustomSelect