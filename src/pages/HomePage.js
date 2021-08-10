import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
// import News from '../data/news.json';
import ArticleAPI from '../api/ArticlesAPI.js';

class HomePage extends Component {
  state = {
    articles: []
  }

  async getArticles(filterText = null) {
    try {
    
      const json = await ArticleAPI.fetchArticles(filterText)
      console.log(json)
        this.setState({
          articles: json
        });
      } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }

  async componentDidMount() {
    return this.getArticles()
  }

  filterArticles = async (e) => {
    let filterText = e.target.value
    console.log(filterText)
    return this.getArticles(filterText)

  }


  render() {
    return (
      <div>
    
          <p> Filter on this:</p>
          <input id="input-filter" onChange={this.filterArticles} />
          <hr />

        <ArticleList articles={ this.state.articles }
          handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`) } />
         
      </div>
    );
  }
}

export default HomePage;


// Functional solution:
// function HomePage() {
//   return (
//     <div>
//       <ArticleList articles={News}
//         handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`)} />
//     </div>
//   );
// }
