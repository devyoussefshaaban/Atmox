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
    min: "24°",
    max: "68°",
  },
  {
    day: "Wednesday",
    min: "24°",
    max: "68°",
  },
  {
    day: "Thursday",
    min: "24°",
    max: "68°",
  },
  {
    day: "Friday",
    min: "24°",
    max: "68°",
  },
  {
    day: "Saturday",
    min: "24°",
    max: "68°",
  },
  {
    day: "Sunday",
    min: "24°",
    max: "68°",
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

const Home = () => {
  return (
    <main className=" mt-16">
      {/* TOP SECTION */}
      <h1 className="font-bricolage font-bolder text-center text-5xl mb-12">How is the sky looking today?</h1>
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center gap-2 wrap mx-auto w-full">
          <div className="w-full rounded-lg border-none bg-gray-800 text-md  px-6 py-3 flex items-center">
            <Image width={12} height={15} src="/images/icon-search.svg" alt="Search Icon" className="mr-2" />
            <input type="text" className="w-full border-none bg-gray-800 text-md outline-none"
              placeholder="Search for a place ..." />
          </div>
          <div>
            <button className="rounded-lg bg-blue-500 px-8 py-3 font-semibold cursor-pointer text-white">Search</button>
          </div>
        </div>
      </div>
      {/* BOTTOM SECTION */}
      <div className="flex justify-center gap-2 items-center mt-16">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <div className="flex flex-col">
            {/* SHOWCASE */}
            <div className="
            p-6
            flex
            justify-between items-center
            rounded-2xl
            bg-cover
            bg-center
            bg-no-repeat
            overflow-hidden
            bg-[url('/images/bg-today-large.svg')] w-full h-[350px]">
              <div className="flex flex-col">
                <h2 className="font-bricolage font-bolder text-3xl">Berlin, Germany</h2>
                <p className="font-dmSans text-neutral-300 font-semibold">Tuesday, Aug 5, 2025</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image width={150} height={150} src="/images/icon-sunny.webp" alt="Sun Icon" />
                <p className="font-dmSans font-semibold italic text-8xl">68°</p>
              </div>
            </div>
            {/* FORECAST */}
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 sm:gap-2 mt-8">
              {forecastStats.map((stat) => (
                <div key={stat.title} className="flex flex-col bg-gray-800 p-4 rounded-lg border-2 border-gray-600">
                  <p className="font-dmSans text-neutral-300 font-semibold mb-4">{stat.title}</p>
                  <p className="font-dmSans font-semibold italic text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>
            {/* FOOTER */}
            <div className="mt-12">
              <h2 className="font-bricolage font-bolder text-xl mb-4">Daily Forecast</h2>
              <div className="grid md:grid-cols-7 sm:grid-cols-1 gap-3 ">
                {dailyForecastStats.map((stat) => (
                  <div key={stat.day} className="flex flex-col bg-gray-800 p-4 rounded-lg border-2 border-gray-600 min-h-[180px]">
                    <p className="font-dmSans text-neutral-300 font-semibold mb-4 text-center">{stat.day}</p>
                    <Image width={150} height={150} src={getStatIcon(stat.min, stat.max)} alt="Sun Icon" />
                    <div className="flex flex-row justify-between">
                      <p className="font-dmSans font-normal text-neutral-300 italic text-xl">{stat.min}</p>
                      <p className="font-dmSans font-normal text-neutral-300 italic text-xl">{stat.max}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="flex-[0.5]">

        </div>
      </div>
    </main >
  );
};

export default Home;
