import { LocationClient } from "../clients/location-client";

export default (locationClient: LocationClient) => ({
  getCountriesByContinent: (countryName: string) => {
    return locationClient.getCountriesByContinent(countryName);
  }
});
