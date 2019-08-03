import { NewsClient } from "../clients/news-client";

export default (newsClient: NewsClient) => ({
  getNewsByCountry: async (country: string) => {
    return newsClient.getNewsByCountry(country);
  }
});
