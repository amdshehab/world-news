import locations from "./locations.json";

const continents = locations.data.continents;

type Country = {
  name: string;
  code: string;
  native: string;
  emoji: string;
};

export interface LocationClient {
  getCountriesByContinent: (continentName: string) => Country[];
}

export default (): LocationClient => ({
  getCountriesByContinent: (continentName: string) => {
    const continent = continents.find(continent => {
      return (
        continent.name.toLocaleLowerCase() === continentName.toLocaleLowerCase()
      );
    });

    if (!continent)
      throw new Error(`${continentName} is not a valid continent`);

    return continent.countries;
  }
});
