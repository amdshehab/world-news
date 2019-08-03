import * as request from "request-promise";

const GOOGLE_NEWS_API =
  "https://www.googleapis.com/customsearch/v1?key=AIzaSyC7kBqeS0nh6Ejo_aFs_rI1PecfOwawclk&cx=004399504627790727017:nc67yhqclkg";

type News = {
  title: string;
  snippet: string;
  link: string;
};

interface NewsClient {
  getNewsByCountry: (country: string) => Promise<News[]>;
}

export default (): NewsClient => ({
  getNewsByCountry: async (country: string) => {
    const response = await request(GOOGLE_NEWS_API, {
      json: true,
      qs: {
        q: country
      }
    });

    const newsByRequest = response.items.map(({ title, snippet, link }) => ({
      title,
      snippet,
      link
    }));

    return newsByRequest;
  }
});
