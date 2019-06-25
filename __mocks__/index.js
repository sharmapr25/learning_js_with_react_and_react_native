import { NativeModules } from 'react-native'

NativeModules.RNGestureHandlerModule = {
    createGestureHandler: jest.fn()
}


// jest.mock('react-native-gesture-handler')
