const create_msg = require('./create_msg');
const module_addTodo = require('../module/module_addTodo');
const TodoItem = require('../js/todoItem');

module.exports = async function(req, res){

	//check if the user is authenticated.
	if(req.session === undefined || req.session.user === undefined || req.session.user.email === undefined){
		let msg = create_msg(9, "no authorization (user need to login)");
		res.send(msg);
		return 0;
	}
	const email = req.session.user.email;

	//check if text property is in payload.
	if(!('text' in req.body)){
		let msg = create_msg(6, "no text property for todo was in payload.");
		res.send(msg);
		return 0;
	}

	//check if text property is not empty.
	let text = req.body.text.replace(/\s/g, '');
	if(text === ""){
		let msg = create_msg(7, "text property is an empty string.");
		res.send(msg);
		return 0;
	}

	//create todoItem for db.
	const todoItem = new TodoItem(req.body.text, email);

	//add todoItem to db.
	const result = await module_addTodo(todoItem, email);
	if(result === 0){
		let msg = create_msg(0, "todo inserted into db");
		res.send(msg);
	}
	else if(result === 8){
	console.log("--------------------------------->", result);
		let msg = create_msg(8, "insert into db failed");
		res.send(msg);
	}
};

