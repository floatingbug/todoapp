async function getTodolist(API_URL, axios){
	let res = await axios({
		method: 'get',
		url: `${API_URL}/todo`,
		withCredentials: true
	});
	
	if(res.number === 101){
		for(let i = 0; i < res.todos.length; i++){
			todos.push(res.todos[i])
			todos[i].id = todos[i]._id.toString();
		}
	}
};

export default getTodolist;
