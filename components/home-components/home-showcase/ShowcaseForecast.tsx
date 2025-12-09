import { FormattedWeatherData } from "@/types"
import { FC } from "react"



interface IProps {
    forecastStats: FormattedWeatherData["current"]
}

const ShowcaseForecast: FC<IProps> = ({ forecastStats }) => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="flex flex-col bg-gray-800 p-4 rounded-lg border-2 border-gray-600">
                    <p className="font-dmSans text-neutral-300 font-semibold mb-4">Temperature</p>
                    <p className="font-dmSans font-semibold italic text-xl sm:text-2xl">{forecastStats.temperature.celsius}°</p>
                </div>
                <div className="flex flex-col bg-gray-800 p-4 rounded-lg border-2 border-gray-600">
                    <p className="font-dmSans text-neutral-300 font-semibold mb-4">Wind</p>
                    <p className="font-dmSans font-semibold italic text-xl sm:text-2xl">{forecastStats.wind.speed.kph} kph</p>
                </div>
                <div className="flex flex-col bg-gray-800 p-4 rounded-lg border-2 border-gray-600">
                    <p className="font-dmSans text-neutral-300 font-semibold mb-4">Humidity</p>
                    <p className="font-dmSans font-semibold italic text-xl sm:text-2xl">{forecastStats.humidity}%</p>
                </div>
                <div className="flex flex-col bg-gray-800 p-4 rounded-lg border-2 border-gray-600">
                    <p className="font-dmSans text-neutral-300 font-semibold mb-4">Pressure</p>
                    <p className="font-dmSans font-semibold italic text-xl sm:text-2xl">{forecastStats.pressure.mb} mb</p>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseForecast