"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AsyncStorage = {
    getItem: (a, b, c) => {
        console.log('getItem');
    },
    setItem: (a, b, c) => {
        console.log('setItem');
    },
    multiRemove: (a, b, c) => {
        console.log('multiRemove');
    }
};
exports.default = AsyncStorage;
