async function getTodolist(API_URL, axios, todos){
	let res = await axios({
		method: 'get',
		url: `${API_URL}/todo`,
		withCredentials: true
	});

	todos.length = 0;
	for(let i = 0; i < res.data.length; i++){
		todos.push(res.data[i].todo);
		todos[i].id = res.data[i]._id;
	}
};


export default getTodolist;
