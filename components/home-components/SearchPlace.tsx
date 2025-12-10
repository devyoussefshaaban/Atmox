"use client"

import { EGYPTIAN_CITIES } from "@/utils/constants";
import Image from "next/image"


import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { CustomSelect } from "../shared-components";

interface IProps {
    initialCity: string;
}

const SearchPlace: FC<IProps> = ({ initialCity }: IProps) => {
    const router = useRouter();

    const [selectedCity, setSelectedCity] = useState(initialCity);

    const handleCityChange = (e: string) => {
        setSelectedCity(e);
    };

    const onSearch = () => {
        router.push(`/?city=${selectedCity}`);
    };

    return (
        <div>
            <h1 className="font-bricolage font-bolder text-center text-5xl mb-12">How is the sky looking today?</h1>
            <div className="max-w-xl mx-auto px-4 w-full">
                <div className="flex flex-col sm:flex-row justify-center gap-2 wrap mx-auto w-full">
                    <div className="w-full rounded-lg border-none bg-gray-800 text-md  px-6 py-3 flex items-center">
                        <Image width={12} height={15} src="/images/icon-search.svg" alt="Search Icon" className="mr-2" />
                        <CustomSelect
                            options={EGYPTIAN_CITIES}
                            value={selectedCity}
                            onChange={handleCityChange}
                            placeholder="Search for a place ..."
                        />
                    </div>
                    <div className="w-full sm:w-auto mt-2 sm:mt-0">
                        <button className="w-full sm:w-auto rounded-lg bg-blue-500 px-8 py-3 font-semibold cursor-pointer text-white disabled:cursor-not-allowed disabled:bg-gray-600"
                            disabled={selectedCity === initialCity}
                            onClick={onSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPlace