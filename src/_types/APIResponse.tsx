import Article from './ArticleInterface';

interface APIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export default APIResponse;
