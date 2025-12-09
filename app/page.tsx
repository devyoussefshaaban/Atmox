import { HourlyForecast, SearchPlace, WeatherShowcase } from "@/components";
import { dailyForecastStats, hourlyForecastStats } from "@/data";
import { formatWeatherData } from "@/utils";
import fetcher from "@/utils/fetcher";


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
    <main className=" mt-16">
      <SearchPlace initialCity={city || "Cairo"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:mt-16 px-4">
        <div className="col-span-2">
          <WeatherShowcase
            forecastStats={forecastStats}
            dailyForecastStats={dailyForecastStats}
            currentTemp={currentTemp}
            conditionIcon={conditionIcon}
            forecastDays={forecastDays}
            location={location}
          />
        </div>

        <div className="col-span-1">
          <HourlyForecast hourlyForecastStats={formattedWeather.forecast.today.hours!} />
        </div>
      </div>

    </main >
  );
};

export default Home;
