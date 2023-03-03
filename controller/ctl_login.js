let module_check_existence = require('../module/module_check_existence');

module.exports = async (req, res)=>{
	const name = req.body.name;
	const password = req.body.password;

	//if name or password not exists, send err_code: 4
	if(name === "" || password === ""){
		res.send({err_code: 4});
		return 0;
	}

	//check if username and password are correct
	const result = await module_check_existence.check_user(name, password);
	
	//return db-error
	if(result === 3){
		res.send({err_code: 3});
		return 0;
	} 
	//return user not found
	if(result === 0){
		res.send({err_code: 0});
		return 0;
	}
	//login success: create session 
	console.log(name);
	console.log(password);
	req.session.user = {
		name: name,
		password: password
	};
	res.send({msg: "login success"});
	
};
