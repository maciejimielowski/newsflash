import React, { ReactElement, useState } from 'react';
import { Button } from 'semantic-ui-react';
import './index.css';
import Article from '../../../../../_types/ArticleInterface';
import ArticleHelper from '../../../../../_helpers/entries/ArticleHelper';

type ArticleListItemProps = {
  article: Article;
};

const ArticleListItem = ({ article }: ArticleListItemProps): ReactElement => {
  const [imgErrorerd, setImgErrored] = useState(false);

  return (
    <div className="list-item">
      {ArticleHelper.urlToImage(article) && !imgErrorerd && (
        <div className="image-container">
          <img
            src={ArticleHelper.urlToImage(article)}
            alt={ArticleHelper.title(article)}
            onError={() => setImgErrored(true)}
          />
        </div>
      )}
      <div className="description">
        <div className="header">
          <h3 className="title">{ArticleHelper.title(article)}</h3>
          <span className="date">{ArticleHelper.dateFormatted(article)}</span>
        </div>
        <div className="list-item-content">
          <div className="preamble">{ArticleHelper.description(article)}</div>
          <Button primary size="tiny" onClick={() => window.open(ArticleHelper.url(article), '_blank')}>
            Go to article
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleListItem;
