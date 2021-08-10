import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import ArticleAPI from '../api/ArticlesAPI.js';

class ArticlePage extends Component {
  state = {
    article: null
  }

  async componentDidMount() {
      try {
        const articleID = this.props.match.params.articleID;
        const json = await ArticleAPI.fetchArticleByID(articleID)
        this.setState({
          article: json
        });
      } catch (error) {
        console.error('Error occurred fetching data: ', error);
      }
  }




  render() {
    const image = this.state.article && this.state.article.image;

    return (
      <div>
        {
          this.state.article ? <Article {...this.state.article } image={ image } /> :
          <span>404: Article Not Found</span>
        }
      </div>
    );
  }
}

export default ArticlePage;


// Functional solution:
// function ArticlePage(props) {
//   const articleIndex = props.match.params.articleID - 1;
//   const article = News[articleIndex];
//   const image = article.multimedia.length ? article.multimedia[2].url : null;

//   return (
//     <div>
//       {article ? <Article { ...article } image={ image } /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
