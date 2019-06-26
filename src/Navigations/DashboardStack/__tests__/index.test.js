import React from 'react'
import { shallow } from 'enzyme'
import DashboardStack from '../'

describe('DashboardStack', () => {
  it('should initial to NewsScreen', () => {
    const Screen = DashboardStack.router.getComponentForRouteName('NewsScreen')

    const wrapper = shallow(<Screen />)
    console.log(wrapper.props().navigation)
    console.log(Screen.navigationOptions)
  })
})
