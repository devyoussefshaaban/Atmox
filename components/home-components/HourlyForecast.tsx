"use client"

import { FormattedDayForecast } from "@/types"
import { formattedText, getDayFromString, getHourFromString } from "@/utils"
import { days } from "@/utils/constants"
import Image from "next/image"
import { FC, useState } from "react"
import { CustomSelect } from "../shared-components"

interface IProps {
    daysForecast: FormattedDayForecast[];
}

const HourlyForecast: FC<IProps> = ({ daysForecast }: IProps) => {
    const [selectedDay, setSelectedDay] = useState(days[0])
    const filteredStats = daysForecast.filter(stat => getDayFromString(stat.date) === selectedDay)

    return (
        <div className="flex-[0.5]">
            <div className="flex flex-col justify-center bg-gray-800 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-6 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.6)] rounded-xl">
                    <h2 className="font-bricolage font-bold text-xl text-center md:text-left mb-2 md:mt-4">
                        Hourly Forecast
                    </h2>

                    <div className="relative w-[150px] w-full">
                        <div className="bg-neutral-800 shadow-[0_1px_10px_rgba(0,0,0,0.6)]">
                            <CustomSelect
                                withPadding={true}
                                options={days}
                                value={selectedDay}
                                onChange={setSelectedDay}
                                placeholder="Select a day"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid gap-3 md:h-[calc(90vh-50px)] h-[50vh] overflow-y-auto mobile-scroll px-6 pb-6">
                    {filteredStats && filteredStats[0]?.hours?.map((stat) => (
                        <div key={stat.time} className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-2 rounded-lg border-2 border-gray-600 ">
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