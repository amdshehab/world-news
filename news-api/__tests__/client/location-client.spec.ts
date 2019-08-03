import LocationClient from "../../src/clients/location-client";

describe("Location Client", () => {
  let locationClient;

  beforeEach(() => {
    locationClient = LocationClient();
  });

  it("fetches a list of continents", () => {
    expect(locationClient.getCountriesByContinent("africa")).toContainEqual(
      expect.objectContaining({ name: "Angola", code: "AO", native: "Angola" })
    );
  });

  it("throws an error if the continent is unknown", () => {
    expect(() =>
      locationClient.getCountriesByContinent("LALA-LAND")
    ).toThrowError("LALA-LAND is not a valid continent");
  });
});
