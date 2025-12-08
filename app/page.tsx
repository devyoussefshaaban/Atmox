import Image from "next/image";

const forecastStats = [
  {
    title: "Feels Like",
    value: "68°",
  },
  {
    title: "Wind",
    value: "5.2 km/h",
  },
  {
    title: "Humidity",
    value: "84%",
  },
  {
    title: "Pressure",
    value: "1013 hPa",
  },
]

const dailyForecastStats = [
  {
    day: "Tuesday",
    min: 24,
    max: 68,
  },
  {
    day: "Wednesday",
    min: 24,
    max: 68,
  },
  {
    day: "Thursday",
    min: 24,
    max: 68,
  },
  {
    day: "Friday",
    min: 24,
    max: 68,
  },
  {
    day: "Saturday",
    min: 24,
    max: 68,
  },
  {
    day: "Sunday",
    min: 24,
    max: 68,
  },
]

const hourlyForecastStats = [
  {
    hour: "12:00",
    min: 24,
    max: 68,
  },
  {
    hour: "13:00",
    min: 24,
    max: 68,
  },
  {
    hour: "14:00",
    min: 24,
    max: 68,
  },
  {
    hour: "15:00",
    min: 24,
    max: 68,
  },
  {
    hour: "16:00",
    min: 24,
    max: 68,
  },
  {
    hour: "17:00",
    min: 24,
    max: 68,
  },
  {
    hour: "18:00",
    min: 24,
    max: 68,
  },
  {
    hour: "20:00",
    min: 24,
    max: 68,
  },
]

const getStatIcon = (min: number, max: number) => {
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

const getHourFromString = (str: string): string => {
  const hour = Number(str.split(":")[0]) > 12 ? Number(str.split(":")[0]) - 12 : Number(str.split(":")[0])

  return hour + ":" + str.split(":")[1] + (Number(str.split(":")[0]) > 12 ? " PM" : " AM")
}

const Home = () => {
  return (
    <main className=" mt-16">
      {/* TOP SECTION */}
      <h1 className="font-bricolage font-bolder text-center text-5xl mb-12">How is the sky looking today?</h1>
      <div className="max-w-xl mx-auto px-4 w-full">
        <div className="flex flex-col sm:flex-row justify-center gap-2 wrap mx-auto w-full">
          <div className="w-full rounded-lg border-none bg-gray-800 text-md  px-6 py-3 flex items-center">
            <Image width={12} height={15} src="/images/icon-search.svg" alt="Search Icon" className="mr-2" />
            <input type="text" className="w-full border-none bg-gray-800 text-md outline-none"
              placeholder="Search for a place ..." />
          </div>
          <div className="w-full sm:w-auto mt-2 sm:mt-0">
            <button className="w-full sm:w-auto rounded-lg bg-blue-500 px-8 py-3 font-semibold cursor-pointer text-white">Search</button>
          </div>
        </div>
      </div>
      {/* BOTTOM SECTION */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 items-start mt-8 lg:mt-16 px-4">
        {/* LEFT SECTION */}
        <div className="w-full lg:flex-1">
          <div className="flex flex-col">
            {/* SHOWCASE */}
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
                <h2 className="font-bricolage font-bolder text-2xl sm:text-3xl">Berlin, Germany</h2>
                <p className="font-dmSans text-neutral-300 font-semibold">Tuesday, Aug 5, 2025</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image width={150} height={150} src="/images/icon-sunny.webp" alt="Sun Icon" />
                <p className="font-dmSans font-semibold italic text-6xl sm:text-8xl">68°</p>
              </div>
            </div>
            {/* FORECAST */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {forecastStats.map((stat) => (
                <div key={stat.title} className="flex flex-col bg-gray-800 p-4 rounded-lg border-2 border-gray-600">
                  <p className="font-dmSans text-neutral-300 font-semibold mb-4">{stat.title}</p>
                  <p className="font-dmSans font-semibold italic text-xl sm:text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>
            {/* FOOTER */}
            <div className="mt-12">
              <h2 className="font-bricolage font-bolder text-xl mb-4">Daily Forecast</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
                {dailyForecastStats.map((stat) => (
                  <div key={stat.day} className="flex flex-col bg-gray-800 p-4 rounded-lg border-2 border-gray-600 min-h-[180px]">
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
        </div>
        {/* RIGHT SECTION */}
        <div className="hidden md:block md:flex-[0.5]">
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
      </div>
    </main >
  );
};

export default Home;
