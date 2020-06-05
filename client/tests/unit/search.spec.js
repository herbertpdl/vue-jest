import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Search from '@/pages/search/Search'

import axios from 'axios'

// mock axios library
jest.mock('axios')

describe('Tests for Search.vue with successful HTTP GET', () => {
  let wrapper = null

  beforeEach(() => {
    // create mock based on api response
    const responseGet = {
      data: {
        Reponse: "True",
        Search: [
          {
            Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
            Title: "Fast & Furious 6",
            Type: "movie",
            Year: "2013",
            imdbID: "tt1905041",
          },
          {
            Poster: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg",
            Title: "Fast Five",
            Type: "movie",
            Year: "2011",
            imdbID: "tt1596343",
          }
        ],
        totalResults: "2"
      }      
    }

    // set the mock call to GET to return a successful GET response
    axios.get.mockResolvedValue(responseGet)

    // render component
    wrapper = mount(Search)
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('Renders sub-components when component is created', () => {
    // check component name
    expect(wrapper.name()).toMatch('search')

    // check that search input is rendered
    expect(wrapper.find('#search-input').exists()).toBeTruthy()

    // check if data is properly set
    expect(wrapper.vm.movies).toBeNull()
    expect(wrapper.vm.totalResults).toBeNull()
  })

  it('Load data when handleSearch method is called', (done) => {
    // set done as error handler to use it inside $nextTick promise
    Vue.config.errorHandler = done

    wrapper.vm.handleSearch('fast')

    // check if request is called once and validate payload
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toBeCalledWith(expect.stringMatching(/fast/))

    // wait for next dom update with $nextTick
    wrapper.vm.$nextTick().then(() => {
      // check if data was properly set
      expect(wrapper.vm.movies[0].Title).toMatch('Fast & Furious 6')
      expect(wrapper.vm.totalResults).toMatch('2')
      done()
    })

  })
})