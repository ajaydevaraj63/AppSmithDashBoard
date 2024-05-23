export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},

	async myFun2 () {
		
		const email=Input1.text
		const password=Input1Copy.text
		if(!email ||  !password){
			Button1.setDisabled(true)
		}
		else{
			Button1.setDisabled(false)
		}
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}