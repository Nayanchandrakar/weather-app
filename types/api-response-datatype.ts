interface GeoLocation {
  lon: number;
  lat: number;
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

export type { citiesArrayDataInterface, citiesDataInterface };
