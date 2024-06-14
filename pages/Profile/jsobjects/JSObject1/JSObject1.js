export default {
	myVar1: [],
	myVar2: {},
	getprofile:()=>{
	storeValue('profile',getUserProfile.data[0])
		console.log(getUserProfile.data[0].graphdata)
		storeValue('profile',getUserProfile?.data[0].graphdata)
	
},
	clear: () => {
		storeValue('hoursSum',null);
		storeValue('completedCount',null);
		storeValue('equipmentStats',null);
	},
	


	
}