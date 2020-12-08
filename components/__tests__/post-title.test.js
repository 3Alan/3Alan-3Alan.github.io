import PostTitle from '../post-title';
import { shallow } from 'enzyme';

describe('post-title', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostTitle>666</PostTitle>);
  });

  it('have 666', () => {
    console.log(wrapper);
  });
});
