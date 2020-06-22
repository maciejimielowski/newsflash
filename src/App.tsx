import React, { ReactElement } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ArticleScreen from './screens/ArticlesScreen';

function App(): ReactElement {
  return (
    <div className="App">
      <ArticleScreen />
    </div>
  );
}

export default App;
