import { HourlyForecast, SearchPlace, WeatherShowcase } from "@/components";
import { formatWeatherData } from "@/utils";
import fetcher from "@/utils/fetcher";
import { Suspense } from "react";
import Loading from "./loading";


const Home = async ({ searchParams }: { searchParams: { city?: string } }) => {
  const city = (await searchParams).city || "Cairo";
  const data = await fetcher(city)

  const formattedWeather = formatWeatherData(data);

  // Access data in components
  const currentTemp = formattedWeather.current.temperature.celsius;
  const conditionIcon = formattedWeather.current.condition.icon;
  const forecastDays = formattedWeather.forecast.days;
  const location = formattedWeather.location;
  const forecastStats = formattedWeather.current

  return (
    <div>
      <SearchPlace initialCity={city || "Cairo"} />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 lg:mt-16 px-4">
        <div className="col-span-2">
          <WeatherShowcase
            forecastStats={forecastStats}
            dailyForecastStats={formattedWeather.forecast.days}
            currentTemp={currentTemp}
            conditionIcon={conditionIcon}
            forecastDays={forecastDays}
            location={location}
          />
        </div>

        <div className="col-span-2 md:col-span-1 xl:col-span-1">
          <HourlyForecast daysForecast={formattedWeather.forecast.days} />
        </div>
      </div>
    </div>
  );
};

export default Home;
