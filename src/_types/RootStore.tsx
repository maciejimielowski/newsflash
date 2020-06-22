import Article from './ArticleInterface';

interface RootStore {
  articles: {
    isFetching: boolean;
    sort: { sortBy: string; sortAsc: boolean };
    currentArticles: Article[];
    activeCategory: string;
  };
}

export default RootStore;
