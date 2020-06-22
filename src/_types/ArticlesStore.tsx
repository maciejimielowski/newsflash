import Article from './ArticleInterface';

interface ArticlesStore {
  isFetching: boolean;
  sort: { sortBy: string; sortAsc: boolean };
  currentArticles: Article[];
  activeCategory: string;
}

export default ArticlesStore;
