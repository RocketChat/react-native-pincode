"use strict";
// import AsyncStorage from '@react-native-community/async-storage'
// import * as Keychain from 'react-native-keychain'
Object.defineProperty(exports, "__esModule", { value: true });
var PinResultStatus;
(function (PinResultStatus) {
    PinResultStatus["initial"] = "initial";
    PinResultStatus["success"] = "success";
    PinResultStatus["failure"] = "failure";
    PinResultStatus["locked"] = "locked";
})(PinResultStatus = exports.PinResultStatus || (exports.PinResultStatus = {}));
exports.hasPinCode = async (serviceName) => {
    // return await Keychain.getInternetCredentials(serviceName).then(res => {
    //   return !!res && !!res.password
    // })
    return Promise.resolve(true);
};
exports.deletePinCode = async (serviceName) => {
    // return await Keychain.resetInternetCredentials(serviceName)
    return Promise.resolve();
};
exports.resetInternalStates = async (asyncStorageKeys) => {
    // return await AsyncStorage.multiRemove(asyncStorageKeys)
    return Promise.resolve();
};
