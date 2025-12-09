const fetcher = async (location: string) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const weatherApi = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`

    const res = await fetch(weatherApi, {
        cache: "no-store",
    });

    return res.json();
};

export default fetcher;
