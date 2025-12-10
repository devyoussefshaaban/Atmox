"use client"

import { FormattedDayForecast, FormattedWeatherData } from "@/types"
import Image from "next/image"
import { FC } from "react"
import DailyForecast from "./DailyForecast"
import ShowcaseForecast from "./ShowcaseForecast"
import { getDayFromString, getMonthFromString } from "@/utils"

interface IProps {
    forecastStats: FormattedWeatherData["current"],
    dailyForecastStats: FormattedDayForecast[]
    currentTemp: number
    conditionIcon: string
    forecastDays: FormattedDayForecast[]
    location: FormattedWeatherData["location"]
}

const WeatherShowcase: FC<IProps> = ({ forecastStats, dailyForecastStats, currentTemp, conditionIcon, forecastDays, location }: IProps) => {
    const FormattedDate =
        getDayFromString(forecastDays[0].date) + ", " + getMonthFromString(forecastDays[0].date) + " " + new Date(forecastDays[0].date).getDate() + ", " + new Date(forecastDays[0].date).getFullYear()

    return (
        <div className="flex flex-col">
            <div className="
            p-6
            flex
            flex-col sm:flex-row
            justify-center md:justify-between items-center
            rounded-2xl
            bg-cover
            bg-center
            bg-no-repeat
            bg-[url('/images/bg-today-large.svg')] w-full min-h-[350px]">
                <div className="flex flex-col mb-4 sm:mb-0 text-center sm:text-left">
                    <h2 className="font-bricolage font-bolder text-2xl sm:text-3xl">{location.name}, {location.country}</h2>
                    <p className="font-dmSans text-neutral-300 font-semibold">{FormattedDate}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image width={150} height={150} src={conditionIcon} alt="Sun Icon" />
                    <p className="font-dmSans font-semibold italic text-6xl sm:text-8xl">{currentTemp}°C</p>
                </div>
            </div>
            <ShowcaseForecast forecastStats={forecastStats} />
            <DailyForecast dailyForecastStats={dailyForecastStats} />
        </div>
    )
}

export default WeatherShowcase