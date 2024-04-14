interface GeoLocation {
  lon: number;
  lat: number;
}

interface forecastListInterface {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface citiesDataInterface {
  geoname_id: string;
  name: string;
  ascii_name: string;
  alternate_names: string[];
  latitude: string;
  longitude: string;
  feature_class: string;
  feature_code: string;
  country_code: string;
  country_code_2: string | null;
  admin1_code: string;
  admin2_code: string;
  admin3_code: string;
  admin4_code: string | null;
  population: number;
  elevation: number | null;
  dem: number;
  timezone: string;
  modification_date: string;
  country: string;
  coordinates: GeoLocation;
}

interface citiesArrayDataInterface {
  total_count: number;
  results: citiesDataInterface[];
}

interface currentWeatherDataInterface {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    feels_like?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  timezone?: number;
  cod: number;
}

interface foreCastDataInterface {
  cod: string;
  message: number;
  cnt: number;
  list: forecastListInterface[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

interface airDataInterface {
  coord: number[];
  list: {
    dt: number;
    main: {
      aqi: number;
    };
    components: {
      co: number;
      no: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      nh3: number;
    };
  }[];
}

export type {
  citiesArrayDataInterface,
  citiesDataInterface,
  currentWeatherDataInterface,
  foreCastDataInterface,
  airDataInterface,
  forecastListInterface,
};
