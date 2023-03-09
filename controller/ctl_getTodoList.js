const create_msg = require('./create_msg');
const module_getTodos = require('../module/module_getTodos');

module.exports = async (req, res)=>{
	let msg;

	if(req.session.user === undefined || req.session.user.email === undefined){
		msg = create_msg(9, "no authorization (user need to login)");
		res.send(msg);
		return 0;
	}
	const user = req.session.user;

	let result = await module_getTodos(user.email);

	if(result.number === 101){
		res.send(result);
	}
	else if(result.number === 10){
		msg = create_msg(10, "fail to get todos");
		res.send(msg);
		return 0;
	} 
};

