import { FormattedDayForecast } from "@/types"
import { getDayFromString } from "@/utils"
import Image from "next/image"
import { FC } from "react"

interface IProps {
    dailyForecastStats: FormattedDayForecast[]
}

const DailyForecast: FC<IProps> = ({ dailyForecastStats }) => {
    return (
        <div className="mt-12">
            <h2 className="font-bricolage font-bolder text-xl mb-4">Daily Forecast</h2>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
                {dailyForecastStats.map((stat: FormattedDayForecast) => (
                    <div key={stat.date} className="flex flex-col col-span-1 bg-gray-800 p-4 rounded-lg border-2 border-gray-600 min-h-[180px]">
                        <p className="font-dmSans text-neutral-300 font-semibold mb-4 text-center">{getDayFromString(stat.date)}</p>
                        <div className="flex justify-center mb-2 flex-1">
                            <Image width={50} height={50} src={stat.condition.icon} alt="Weather Icon" className="object-contain" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-dmSans font-semibold text-neutral-300 italic">{stat.temperature.min.celsius}°</p>
                            <p className="font-dmSans font-semibold text-neutral-300 italic">{stat.temperature.max.celsius}°</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DailyForecast