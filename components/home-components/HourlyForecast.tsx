"use client"

import { FormattedHourlyForecast } from "@/types"
import { getHourFromString } from "@/utils"
import { days } from "@/utils/constants"
import Image from "next/image"
import { FC } from "react"

interface IProps {
    hourlyForecastStats: FormattedHourlyForecast[]
}

const HourlyForecast: FC<IProps> = ({ hourlyForecastStats }: IProps) => {
    const formattedText = (text: string, maxChar: number, hasOr?: boolean) => {
        if (hasOr) {
            return text.split("or")[0];
        }
        return text.charAt(0).toUpperCase() + text.slice(1).slice(0, maxChar);
    }
    return (
        <div className="flex-[0.5]">
            <div className="flex flex-col justify-center bg-gray-800 p-6 rounded-2xl">
                <div className="grid grid-cols-2 gap-2 mb-6">
                    <h2 className="font-bricolage font-bold text-xl mb-3">
                        Hourly Forecast
                    </h2>

                    <div className="relative w-[150px]">
                        <select
                            name="day"
                            id="day"
                            className="
                            w-full h-[45px]
                            px-3 pr-10
                            rounded-lg
                            font-dmSans text-base

                            bg-neutral-0 text-neutral-900
                            dark:bg-neutral-900 dark:text-neutral-0

                            border border-neutral-300
                            dark:border-neutral-600

                            shadow-sm
                            dark:shadow-md  

                            cursor-pointer outline-none
                            transition-all duration-200

                            focus:border-blue-500
                            focus:ring-2 focus:ring-blue-500/40 
                            dark:focus:border-blue-500
                            dark:focus:ring-blue-500/50 

                            appearance-none
                            "
                            value={days[0]}
                            onChange={(e) => console.log(e.target.value)}
                        >
                            {days.map(day => <option className="bg-neutral-0 dark:bg-neutral-900" value={day}>{day}</option>)}
                        </select>

                        {/* Icon inside styled dark container */}
                        <div className="
                            absolute right-1 top-1/2 -translate-y-1/2
                            w-8 h-8
                            flex items-center justify-center
                            rounded-lg
                            bg-neutral-800
                            dark:bg-neutral-800
                            pointer-events-none
                        "
                        >
                            <Image width={16} height={16} src="/images/icon-dropdown.svg" alt="Arrow Down" />
                        </div>
                    </div>

                </div>

                <div className="grid gap-3 max-h-[calc(100vh-20px)] overflow-y-auto mobile-scroll">
                    {hourlyForecastStats.map((stat) => (
                        <div key={stat.time} className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg border-2 border-gray-600 ">
                            <div className="flex justify-center items-center mb-2">
                                <Image width={30} height={30} src={stat.condition.icon} alt="Weather Icon" />
                                <p className="font-dmSans text-neutral-300 font-semibold text-center ml-2">{getHourFromString(stat.time)}</p>
                            </div>
                            <div className="flex justify-center items-center mb-2">
                                <p className="font-dmSans text-neutral-300 font-base italic lg:text-base">{formattedText(stat.condition.text, 10, true)}</p>
                            </div>
                            <div className="flex justify-center items-center mb-2">
                                <p className="font-dmSans text-neutral-300 font-semibold lg:text-base">{stat.temperature.celsius}°C</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast