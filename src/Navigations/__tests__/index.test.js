import AppNavigator from '../'
import NewsScreen from '../../Containers/NewsScreen'
import DrawerStack from '../DashboardStack'

describe('Navigations', () => {
  it('should initial to NewsScreen', () => {
    const state = AppNavigator.router.getStateForAction('Navigation/INIT')
    const InitScreen = AppNavigator.router.getComponentForState(state)

    expect(InitScreen).toEqual(NewsScreen)
  })

  it('should has DrawerStack route', () => {
    const Screen = AppNavigator.router.getComponentForRouteName('DrawerStack')

    expect(Screen).toEqual(DrawerStack)
  })
})
