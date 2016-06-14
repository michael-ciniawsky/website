import test from 'ava'
import { shallow } from 'enzyme'

import Container from './index'

test('Container <Home /> - Home', (t) => {
  shallow(Container)
})
