import { getStatIcon } from "@/utils"
import Image from "next/image"
import { FC } from "react"

interface IProps {
    dailyForecastStats: any
}

const DailyForecast: FC<IProps> = ({ dailyForecastStats }) => {
    return (
        <div className="mt-12">
            <h2 className="font-bricolage font-bolder text-xl mb-4">Daily Forecast</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
                {dailyForecastStats.map((stat: any) => (
                    <div key={stat.day} className="flex flex-col col-span-1 bg-gray-800 p-4 rounded-lg border-2 border-gray-600 min-h-[180px]">
                        <p className="font-dmSans text-neutral-300 font-semibold mb-4 text-center">{stat.day}</p>
                        <div className="flex justify-center mb-2">
                            <Image width={80} height={80} src={getStatIcon(stat.min, stat.max)} alt="Weather Icon" className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain" />
                        </div>
                        <div className="flex flex-row justify-between mt-auto">
                            <p className="font-dmSans font-normal text-neutral-300 italic text-lg sm:text-xl">{stat.min}°</p>
                            <p className="font-dmSans font-normal text-neutral-300 italic text-lg sm:text-xl">{stat.max}°</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DailyForecast