import { expect } from 'chai'
import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'
import {url} from '../action.js'
import {fetchArticles, searchArticle} from './articleActions.js'
//actions for the articles
describe('Validate Article actions', () => {
  beforeEach(() => {
    if (mockery.enable) {
    mockery.enable({warnOnUnregistered: false, useCleanCache:true})
    mockery.registerMock('node-fetch', fetch)
    require('node-fetch')
    }
  })

  afterEach(() => {
    if (mockery.enable) {
    mockery.deregisterMock('node-fetch')
    mockery.disable()
    }
  })

  it('should fetch articles', (done) => {
    mock(`${url}/articles`, {
      method: 'GET',
      headers: {'Content-Type':'application/json'},
      json: {articles: [ { id: 1, author: 'Scott'}]}
    })
    fetchArticles()((r) => {
      expect(r.type).to.eql('UPDATE_ARTICLES')
    })
    done()
  })
  
  it('should update the search keyword', (done) => {
    expect(searchArticle('key')).to.eql({ 
      type:'SEARCH_ARTICLE', keyword:'key'})
    done()
  })
})