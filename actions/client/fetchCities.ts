"use server";

import getCities from "@/actions/getCities";

const getCitiesClient = async (limits?: number) => {
  const response = await getCities({ limits });
  return response;
};

export default getCitiesClient;
