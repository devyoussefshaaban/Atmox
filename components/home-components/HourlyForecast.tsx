"use client"

import { FormattedDayForecast, FormattedHourlyForecast } from "@/types"
import { formattedText, getDayFromString, getHourFromString } from "@/utils"
import { days } from "@/utils/constants"
import Image from "next/image"
import { FC, useState } from "react"
import { CustomSelect } from "../shared-components"

interface IProps {
    hourlyForecastStats: FormattedHourlyForecast[];
    daysForecast: FormattedDayForecast[];
}

const HourlyForecast: FC<IProps> = ({ hourlyForecastStats, daysForecast }: IProps) => {
    const [selectedDay, setSelectedDay] = useState(days[0])
    const filteredStats = daysForecast.filter(stat => getDayFromString(stat.date) === selectedDay)

    return (
        <div className="flex-[0.5]">
            <div className="flex flex-col justify-center bg-gray-800 p-6 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-6">
                    <h2 className="font-bricolage font-bold text-xl text-center md:text-left">
                        Hourly Forecast
                    </h2>

                    <div className="relative w-[150px] w-full">
                        <CustomSelect
                            options={days}
                            value={selectedDay}
                            onChange={setSelectedDay}
                            placeholder="Select a day"
                        />

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
                <div className="grid gap-3 max-h-[calc(100vh-20px)] overflow-y-auto mobile-scroll pr-4">
                    {filteredStats && filteredStats[0]?.hours?.map((stat) => (
                        <div key={stat.time} className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg border-2 border-gray-600 ">
                            <div className="flex justify-center items-center mb-2">
                                <Image width={30} height={30} src={stat.condition.icon} alt="Weather Icon" />
                                <p className="font-dmSans text-neutral-300 font-semibold text-center ml-2">{getHourFromString(stat.time)}</p>
                            </div>
                            <div className="flex justify-center items-center mb-2">
                                <p className="font-dmSans text-neutral-300 font-sm italic lg:text-md">{formattedText(stat.condition.text, 10, true)}</p>
                            </div>
                            <div className="flex justify-center items-center mb-2">
                                <p className="font-dmSans text-neutral-300 font-semibold lg:text-md">{stat.temperature.celsius}°C</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast