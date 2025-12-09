// app/types/weather.types.ts

export interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface CurrentWeather {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}

export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: DayForecast;
  astro: Astro;
  hour: HourlyForecast[];
}

export interface DayForecast {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: WeatherCondition;
  uv: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}

export interface HourlyForecast {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}

// Helper types for specific use cases
export type TemperatureUnit = 'celsius' | 'fahrenheit';
export type WindSpeedUnit = 'kph' | 'mph';
export type PrecipitationUnit = 'mm' | 'in';

// Utility types for formatters
export interface FormattedWeatherData {
  location: {
    name: string;
    country: string;
    localTime: string;
    coordinates: {
      lat: number;
      lon: number;
    };
  };
  current: {
    temperature: {
      celsius: number;
      fahrenheit: number;
    };
    condition: {
      text: string;
      icon: string;
      isDay: boolean;
    };
    wind: {
      speed: {
        kph: number;
        mph: number;
      };
      direction: string;
      degree: number;
    };
    pressure: {
      mb: number;
      in: number;
    };
    precipitation: {
      mm: number;
      in: number;
    };
    humidity: number;
    feelsLike: {
      celsius: number;
      fahrenheit: number;
    };
    uvIndex: number;
    visibility: {
      km: number;
      miles: number;
    };
    dewPoint: {
      celsius: number;
      fahrenheit: number;
    };
  };
  forecast: {
    days: FormattedDayForecast[];
    today: FormattedDayForecast;
  };
}

export interface FormattedDayForecast {
  date: string;
  temperature: {
    max: {
      celsius: number;
      fahrenheit: number;
    };
    min: {
      celsius: number;
      fahrenheit: number;
    };
    avg: {
      celsius: number;
      fahrenheit: number;
    };
  };
  condition: {
    text: string;
    icon: string;
  };
  wind: {
    maxSpeed: {
      kph: number;
      mph: number;
    };
  };
  precipitation: {
    total: {
      mm: number;
      in: number;
    };
    chanceOfRain: number;
    chanceOfSnow: number;
  };
  humidity: number;
  sunrise: string;
  sunset: string;
  uvIndex: number;
  hours?: FormattedHourlyForecast[];
}

export interface FormattedHourlyForecast {
  time: string;
  temperature: {
    celsius: number;
    fahrenheit: number;
  };
  condition: {
    text: string;
    icon: string;
    isDay: boolean;
  };
  precipitation: {
    chance: number;
    amount: {
      mm: number;
      in: number;
    };
  };
  humidity: number;
  wind: {
    speed: {
      kph: number;
      mph: number;
    };
    direction: string;
  };
}

// API response type
export interface WeatherApiResponse {
  data: WeatherData | null;
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
}