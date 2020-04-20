const AsyncStorage = {
	getItem: (a?:any, b?:any, c?:any):any => {
		console.log('getItem')
	},
	setItem: (a?:any, b?:any, c?:any):any => {
		console.log('setItem')
	},
  multiRemove: (a?:any, b?:any, c?:any):any => {
		console.log('multiRemove')
	}
}
export default AsyncStorage;
