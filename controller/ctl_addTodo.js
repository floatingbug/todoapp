const create_msg = require('./create_msg');
const module_addTodo = require('../module/module_addTodo');

module.exports = async function(req, res){

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

	//create todo object for db.
	todoItem = new TodoItem(req.body.text);

	/**************email must replace to req.session.user.email*************/
	const result = module_addTodo(req.body, "bob@yahoo.de");
	
	if(result === 0){
		let msg = create_msg(0, "todo inserted into db");
		res.send(msg);
	}
	else if(result === 8){
		let msg = create_msg(8, "insert into db failed");
		res.send(msg);
	}
};

