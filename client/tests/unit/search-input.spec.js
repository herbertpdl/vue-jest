import { shallowMount } from '@vue/test-utils'
import SearchInput from '@/components/search-input/SearchInput'

describe('SearchInput.vue test', () => {
  const wrapper = shallowMount(SearchInput)

  // find input element
  const input = wrapper.find('#search-input')

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