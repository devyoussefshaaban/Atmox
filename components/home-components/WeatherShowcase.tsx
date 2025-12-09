"use client"

import { Forecast, FormattedDayForecast, FormattedWeatherData } from "@/types"
import { getStatIcon } from "@/utils"
import Image from "next/image"
import { FC } from "react"

interface IProps {
    forecastStats: FormattedWeatherData["current"],
    dailyForecastStats: { day: string, min: number, max: number }[]
    currentTemp: number
    conditionIcon: string
    forecastDays: FormattedDayForecast[]
    location: FormattedWeatherData["location"]
}

const WeatherShowcase: FC<IProps> = ({ forecastStats, dailyForecastStats, currentTemp, conditionIcon, forecastDays, location }: IProps) => {
    return (
        <div className="flex flex-col">
            <div className="
            p-6
            flex
            flex-col sm:flex-row
            justify-between items-center
            rounded-2xl
            bg-cover
            bg-center
            bg-no-repeat
            bg-[url('/images/bg-today-large.svg')] w-full min-h-[350px]">
                <div className="flex flex-col mb-4 sm:mb-0 text-center sm:text-left">
                    <h2 className="font-bricolage font-bolder text-2xl sm:text-3xl">{location.name}, {location.country}</h2>
                    <p className="font-dmSans text-neutral-300 font-semibold">{forecastDays[0].date}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image width={150} height={150} src={conditionIcon} alt="Sun Icon" />
                    <p className="font-dmSans font-semibold italic text-6xl sm:text-8xl">{currentTemp}°</p>
                </div>
            </div>
            {/* FORECAST */}
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
            {/* FOOTER */}
            <div className="mt-12">
                <h2 className="font-bricolage font-bolder text-xl mb-4">Daily Forecast</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
                    {dailyForecastStats.map((stat) => (
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
        </div>
    )
}

export default WeatherShowcase