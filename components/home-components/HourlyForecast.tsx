"use client"

import { getHourFromString, getStatIcon } from "@/utils"
import Image from "next/image"
import { FC } from "react"

interface IProps {
    hourlyForecastStats: { hour: string, min: number, max: number }[]
}

const HourlyForecast: FC<IProps> = ({ hourlyForecastStats }: IProps) => {
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
                        >
                            <option className="bg-neutral-0 dark:bg-neutral-900" value="saturday">Saturday</option>
                            <option className="bg-neutral-0 dark:bg-neutral-900" value="sunday">Sunday</option>
                            <option className="bg-neutral-0 dark:bg-neutral-900" value="monday">Monday</option>
                            <option className="bg-neutral-0 dark:bg-neutral-900" value="tuesday">Tuesday</option>
                            <option className="bg-neutral-0 dark:bg-neutral-900" value="wednesday">Wednesday</option>
                            <option className="bg-neutral-0 dark:bg-neutral-900" value="thursday">Thursday</option>
                            <option className="bg-neutral-0 dark:bg-neutral-900" value="friday">Friday</option>
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
  ">
                            <Image width={16} height={16} src="/images/icon-dropdown.svg" alt="Arrow Down" />
                        </div>
                    </div>

                </div>

                <div className="grid gap-3">
                    {hourlyForecastStats.map((stat) => (
                        <div key={stat.hour} className="flex flex-row justify-between items-center bg-gray-800 p-4 rounded-lg border-2 border-gray-600 ">
                            <div className="flex justify-center items-center mb-2">
                                <Image width={30} height={30} src={getStatIcon(stat.min, stat.max)} alt="Weather Icon" />
                                <p className="font-dmSans text-neutral-300 font-semibold text-center">{getHourFromString(stat.hour)}</p>
                            </div>
                            <div>
                                <p className="font-dmSans font-normal text-neutral-300 italic text-lg sm:text-xl">{Math.floor(stat.max - stat.min) / 2}°</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast