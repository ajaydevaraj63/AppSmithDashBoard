export default {
	myVar1: [],
	myVar2: {},
	PollSubmit:async()=>{
		console.log(Poll_Form.data.poll)
		try{
			if(JSON.parse(Poll_Form.data.poll)){
				
       await insert_poll.run()
				closeModal(("Modal3"))
				  await showAlert('Poll inserted successfully', 'success');
				await getpolls.run()
		
			}
			else{

				  await showAlert('Failed to insert poll', 'warning');
								closeModal(("Modal3"))
				
			}

		}catch(error){
				  await showAlert('please check poll format', 'warning');
			
							closeModal(("Modal3"))

			

		}






	},
	clear: () => {
		storeValue('hoursSum',null);
		storeValue('completedCount',null);
		storeValue('equipmentStats',null);
	},
			List2onItemClick: (value)=> {
		console.log(value)
  
		},
	search: () => {
		if(selectAgent.selectedOptionValue.length==0){
			return select_work_orders.data
		}
		else{
			return(select_work_orders.data.filter(user => user.agent==(selectAgent.selectedOptionLabel)))
		}
	},
		tokenallow: () => {
		console.log("storeValue")
		console.log(appsmith.store.token)

		if (appsmith.store.token==""){
			navigateTo('Login Page',{})
		}
		// navigateTo('Login Page',{})


	},


	
