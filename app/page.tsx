import { HourlyForecast, PlaceSearch, WeatherShowcase } from "@/components";
import { forecastStats, dailyForecastStats, hourlyForecastStats } from "@/data";


const Home = () => {
  return (
    <main className=" mt-16">
      <PlaceSearch />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:mt-16 px-4">
        <div className="col-span-2">
          <WeatherShowcase
            forecastStats={forecastStats}
            dailyForecastStats={dailyForecastStats}
          />
        </div>

        <div className="col-span-1">
          <HourlyForecast hourlyForecastStats={hourlyForecastStats} />
        </div>
      </div>

    </main >
  );
};

export default Home;
