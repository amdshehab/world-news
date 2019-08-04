import { Arg, Query, Resolver, Root } from "type-graphql";
import Location, { LocationData } from "../schemas/location";
import LocationService from "../services/location-service";
import LocationClient from "../clients/location-client";

const locationClient = LocationClient();
const locationService = LocationService(locationClient);

@Resolver(of => Location)
export default class {
  @Query(returns => [Location], { nullable: true })
  getCountriesByContinent(
    @Arg("continentName") continentName: string
  ): LocationData[] | undefined {
    return locationService.getCountriesByContinent(continentName);
  }
}
