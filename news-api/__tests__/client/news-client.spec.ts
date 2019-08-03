import NewsClient from "../../src/client/news-client";

describe("News Client", () => {
  let newsClient;

  beforeEach(() => {
    newsClient = NewsClient();
  });

  it("fetches news for a particular country", async () => {
    const country = "egypt";
    expect(await newsClient.getNewsByCountry(country)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          snippet: expect.any(String),
          link: expect.any(String)
        })
      ])
    );
  });

  it("throws an error if provided country does not exist", async () => {
    const country = "fdskjhdfskdfhsd";
    await expect(newsClient.getNewsByCountry(country)).rejects.toThrowError();
  });
});
