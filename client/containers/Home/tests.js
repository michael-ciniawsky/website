import test from 'ava'
import { shallow } from 'enzyme'

import Container from './index'

test('Container: <Home />', (t) => {
  shallow(Container)
})
