// import AsyncStorage from '@react-native-community/async-storage'
// import * as Keychain from 'react-native-keychain'

export enum PinResultStatus {
  initial = 'initial',
  success = 'success',
  failure = 'failure',
  locked = 'locked'
}

export const hasPinCode = async (serviceName: string) => {
  // return await Keychain.getInternetCredentials(serviceName).then(res => {
  //   return !!res && !!res.password
  // })
  return Promise.resolve(true)
}

export const deletePinCode = async (serviceName: string) => {
  // return await Keychain.resetInternetCredentials(serviceName)
  return Promise.resolve()
}

export const resetInternalStates = async (asyncStorageKeys: string[]) => {
  // return await AsyncStorage.multiRemove(asyncStorageKeys)
  return Promise.resolve()
}
