export const tempCitiesData = {
  geoname_id: "7027003",
  name: "Watthana",
  ascii_name: "Watthana",
  alternate_names: ["Vadhana", "Watthana", "wathna", "วัฒนา"],
  latitude: "13.72978",
  longitude: "100.58536",
  feature_class: "P",
  feature_code: "PPLA2",
  country_code: "TH",
  country_code_2: null,
  admin1_code: "40",
  admin2_code: "1039",
  admin3_code: "103902",
  admin4_code: null,
  population: 0,
  elevation: null,
  dem: 10,
  timezone: "Asia/Bangkok",
  modification_date: "2023-12-11",
  country: "Thailand",
  coordinates: {
    lon: 100.58536,
    lat: 13.72978,
  },
};

export const tempCurrentWeather = {
  coord: {
    lon: -0.13,
    lat: 51.51,
  },
  weather: [
    {
      id: 300,
      main: "Drizzle",
      description: "light intensity drizzle",
      icon: "09d",
    },
  ],
  base: "stations",
  main: {
    temp: 280.32,
    pressure: 1012,
    humidity: 81,
    temp_min: 279.15,
    temp_max: 281.15,
  },
  visibility: 10000,
  wind: {
    speed: 4.1,
    deg: 80,
  },
  clouds: {
    all: 90,
  },
  dt: 1485789600,
  sys: {
    type: 1,
    id: 5091,
    message: 0.0103,
    country: "GB",
    sunrise: 1485762037,
    sunset: 1485794875,
  },
  id: 2643743,
  name: "London",
  cod: 200,
};

export const tempForecastData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1661871600,
      main: {
        temp: 296.76,
        feels_like: 296.98,
        temp_min: 296.76,
        temp_max: 297.87,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        "3h": 0.26,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-30 15:00:00",
    },
    // Include other entries from the list here
  ],
  city: {
    id: 3163858,
    name: "Zocca",
    coord: {
      lat: 44.34,
      lon: 10.99,
    },
    country: "IT",
    population: 4593,
    timezone: 7200,
    sunrise: 1661834187,
    sunset: 1661882248,
  },
};

export const tempAirData = {
  coord: [50.0, 50.0],
  list: [
    {
      dt: 1606147200,
      main: {
        aqi: 4.0,
      },
      components: {
        co: 203.609,
        no: 0.0,
        no2: 0.396,
        o3: 75.102,
        so2: 0.648,
        pm2_5: 23.253,
        pm10: 92.214,
        nh3: 0.117,
      },
    },
  ],
};
