import { get } from 'lodash';
import { format } from 'date-fns';
import Article from '../../_types/ArticleInterface';

const ArticleHelper = {
  source: (article: Article): { id: string; name: string } => get(article, 'source'),
  author: (article: Article): string => get(article, 'author'),
  title: (article: Article): string => get(article, 'title'),
  description: (article: Article): string => get(article, 'description'),
  url: (article: Article): string => get(article, 'url'),
  urlToImage: (article: Article): string => get(article, 'urlToImage'),
  publishedAt: (article: Article): string => get(article, 'publishedAt'),
  dateFormatted: (article: Article): string => {
    const date = ArticleHelper.publishedAt(article);
    return format(new Date(date), 'PP pp');
  },
  content: (article: Article): string => get(article, 'content'),
};

export default ArticleHelper; // it should rather be TS (no render, and in future it'll be easier to find something), same as _types, APIService and others
