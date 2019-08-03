import { Arg, Query, Resolver, Root } from "type-graphql";
import NewsPiece, { NewsData } from "../schemas/news-piece";
import NewsService from "../services/news-service";
import NewsClient from "../clients/news-client";

const newsClient = NewsClient();
const newsService = NewsService(newsClient);

@Resolver(of => NewsPiece)
export default class {
  @Query(returns => [NewsPiece], { nullable: true })
  async getNewsByCountry(
    @Arg("country") country: string
  ): Promise<NewsData[] | undefined> {
    return await newsService.getNewsByCountry(country);
  }
}
