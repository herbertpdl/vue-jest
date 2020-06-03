import { shallowMount } from '@vue/test-utils'
import Search from "@/components/search/Search"

describe('Search.vue test', () => {
  const wrapper = shallowMount(Search);

  // find input element
  const input = wrapper.find('#search')

  it('Emmit custom event with input value, when press enter', () => {
    // set data value
    wrapper.setData({text: 'search text'})

    // simulate pressing enter
    input.trigger('keyup', {key: 'Enter'});
  
    // check if the component emmited the event
    expect(wrapper.emitted('search')).toBeTruthy()

    // check if the event was emmited once
    expect(wrapper.emitted('search').length).toBe(1)

    // check emmited value
    expect(wrapper.emitted('search')[0]).toEqual(['search text'])
  })
})