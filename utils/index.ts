import {
  WeatherData,
  FormattedWeatherData,
  FormattedDayForecast,
  FormattedHourlyForecast
} from "../types"
import { days, months } from "./constants"

export const getStatIcon = (min: number, max: number) => {
  const avg: number = Math.floor((max - min) / 2)

  if (avg < 5) return "/images/icon-snow.webp"
  if (avg < 15) return "/images/icon-storm.webp"
  if (avg < 20) return "/images/icon-fog.webp"
  if (avg < 25) return "/images/icon-overcast.webp"
  if (avg < 30) return "/images/icon-cloudy.webp"
  if (avg < 35) return "/images/icon-partly-cloudy.webp"
  if (avg < 40) return "/images/icon-sunny.webp"

  else return "/images/icon-sunny.webp"
}

export const getHourFromString = (str: string): string => {
  const hour = Number(str.split(":")[0]) > 12 ? Number(str.split(":")[0]) - 12 : Number(str.split(":")[0])

  return hour + ":" + str.split(":")[1] + (Number(str.split(":")[0]) > 12 ? " PM" : " AM")
}

export const getDayFromString = (str: string): string => {
  const day = days[new Date(str).getDay()]

  return day
}

export const getMonthFromString = (str: string): string => {
  const month = months[new Date(str).getMonth()]

  return month
}

export function formatWeatherData(data: WeatherData): FormattedWeatherData {
  return {
    location: {
      name: data.location.name,
      country: data.location.country,
      localTime: data.location.localtime,
      coordinates: {
        lat: data.location.lat,
        lon: data.location.lon,
      },
    },
    current: {
      temperature: {
        celsius: data.current.temp_c,
        fahrenheit: data.current.temp_f,
      },
      condition: {
        text: data.current.condition.text,
        icon: `https:${data.current.condition.icon}`,
        isDay: data.current.is_day === 1,
      },
      wind: {
        speed: {
          kph: data.current.wind_kph,
          mph: data.current.wind_mph,
        },
        direction: data.current.wind_dir,
        degree: data.current.wind_degree,
      },
      pressure: {
        mb: data.current.pressure_mb,
        in: data.current.pressure_in,
      },
      precipitation: {
        mm: data.current.precip_mm,
        in: data.current.precip_in,
      },
      humidity: data.current.humidity,
      feelsLike: {
        celsius: data.current.feelslike_c,
        fahrenheit: data.current.feelslike_f,
      },
      uvIndex: data.current.uv,
      visibility: {
        km: data.current.vis_km,
        miles: data.current.vis_miles,
      },
      dewPoint: {
        celsius: data.current.dewpoint_c,
        fahrenheit: data.current.dewpoint_f,
      },
    },
    forecast: {
      days: data.forecast.forecastday.map(formatDayForecast),
      today: formatDayForecast(data.forecast.forecastday[0]),
    },
  };
}

function formatDayForecast(day: any): FormattedDayForecast {
  return {
    date: day.date,
    temperature: {
      max: {
        celsius: day.day.maxtemp_c,
        fahrenheit: day.day.maxtemp_f,
      },
      min: {
        celsius: day.day.mintemp_c,
        fahrenheit: day.day.mintemp_f,
      },
      avg: {
        celsius: day.day.avgtemp_c,
        fahrenheit: day.day.avgtemp_f,
      },
    },
    condition: {
      text: day.day.condition.text,
      icon: `https:${day.day.condition.icon}`,
    },
    wind: {
      maxSpeed: {
        kph: day.day.maxwind_kph,
        mph: day.day.maxwind_mph,
      },
    },
    precipitation: {
      total: {
        mm: day.day.totalprecip_mm,
        in: day.day.totalprecip_in,
      },
      chanceOfRain: day.day.daily_chance_of_rain,
      chanceOfSnow: day.day.daily_chance_of_snow,
    },
    humidity: day.day.avghumidity,
    sunrise: day.astro.sunrise,
    sunset: day.astro.sunset,
    uvIndex: day.day.uv,
    hours: day.hour?.map(formatHourlyForecast),
  };
}

function formatHourlyForecast(hour: any): FormattedHourlyForecast {
  return {
    time: hour.time.split(' ')[1], // Get only the time part
    temperature: {
      celsius: hour.temp_c,
      fahrenheit: hour.temp_f,
    },
    condition: {
      text: hour.condition.text,
      icon: `https:${hour.condition.icon}`,
      isDay: hour.is_day === 1,
    },
    precipitation: {
      chance: hour.chance_of_rain,
      amount: {
        mm: hour.precip_mm,
        in: hour.precip_in,
      },
    },
    humidity: hour.humidity,
    wind: {
      speed: {
        kph: hour.wind_kph,
        mph: hour.wind_mph,
      },
      direction: hour.wind_dir,
    },
  };
}

export const formattedText = (text: string, maxChar: number, hasOr?: boolean) => {
  if (hasOr) {
    return text.split("or")[0];
  }
  return text.charAt(0).toUpperCase() + text.slice(1).slice(0, maxChar);
}