import React from 'react';
import { shallow } from 'enzyme';
import { Searchbar } from '../../components/Searchbar/Searchbar';

import '@testing-library/jest-dom';

describe('Unit test on <SearchBar />', () => {
  const setHeroByName = jest.fn();
  let wrapper = shallow(<Searchbar setHeroByName={setHeroByName} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<Searchbar setHeroByName={setHeroByName} />);
  });
  test('Should show correctly (shallow rendering)', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should call setHeroByName', () => {
    const value = 'iron man';
    wrapper.find('input').simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setHeroByName).toHaveBeenCalled();
    expect(setHeroByName).toHaveBeenCalledTimes(1);
  });
});
