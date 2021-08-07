import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from './ArticlesAPI'
import fetchMock from 'fetch-mock'
require('isomorphic-fetch')

afterEach(() => {
  fetchMock.restore()
})

it('calls ArticlesAPI.fetchArticleByID(1)', async () => {
  fetchMock.get('http://localhost:3001/api/articles/1', { success: true })
  const res = await fetchArticleByID(1)
  expect(await res.success).toBe(true)
})

it('calls ArticlesAPI.fetchArticles()', async () => {
  fetchMock.get('http://localhost:3001/api/articles', { success: true })
  const res = await fetchArticles()
  expect(await res.success).toBe(true)
})

it('calls ArticlesAPI.fetchArticlesBySection(\'opinion\')', async () => {
  fetchMock.get('http://localhost:3001/api/articles?filter={"where":{"section":"opinion"}}', { success: true })
  const res = await fetchArticlesBySection('opinion')
  expect(await res.success).toBe(true)
})
