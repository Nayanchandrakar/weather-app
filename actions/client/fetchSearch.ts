"use server";

const fetchSearch = async (query: string) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process?.env?.NEXT_PUBLIC_OPEN_WEATHER_API}`
    );

    const finalData = await response?.json();

    return finalData;
  } catch (error) {
    return [];
  }
};

export default fetchSearch;
