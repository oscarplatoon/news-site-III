
const BASE_URL = 'http://localhost:3001/api/articles/'





const tryFetch = async (url) => {
  try {
    let response = await fetch(url)
    if (!response.ok)
      throw response.statusText

    let data = await response.json()
    return data
  }
  catch (error) {
    console.error(error)

  }

}


const fetchArticleByID = async (articleID) => {
  return tryFetch(BASE_URL + `${articleID}`)


};

const fetchArticlesBySection = (section) => {
};

const fetchArticles = (filterTitle = null) => {

  const filter = filterTitle 
  ? `?filter={ "where": {"title": "title": "${filterTitle}" } }`
  : ''
  return tryFetch(BASE_URL + filter)
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
