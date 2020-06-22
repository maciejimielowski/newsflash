import APIResponse from '../_types/APIResponse';

const API_URL = 'https://newsapi.org/v2/top-headlines?country=us';
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchArticles = async (category: string): Promise<APIResponse> => {
  const url = `${API_URL}&category=${category}&apiKey=${API_KEY}`;

  const repsonse = await fetch(url);
  return repsonse.json();
};

export default fetchArticles;
