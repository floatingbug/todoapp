const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const module_check_existence = require('../module/module_check_existence');
const module_add_user = require('../module/module_add_user');

module.exports = async (req, res)=>{
	let credentials = req.body;
	let result;

	//if credentials are not valid, send error
	//with err_code: 1 to client.
	if(!check_credentials(credentials)){
		let error = create_error(1, "credentials are invalid");
		res.send(error);
		return 0;
	}
	
	//if user with same name or email allready exists,
	//send error with err_code: 2 to client.
	//if db error occure send err_code: 3.
	result = await module_check_existence.check_email(credentials.email);
	if(result){
		let error = create_error(2, "User with that email allready exists");
		res.send(error);
		return 0;
	}
	if(result === 3){
		let error = create_error(3, "Server error occured, please contact me");
		res.send(error);
		return 0;
	}
	
	//create random registration code for sending confirm email.
	let reg_code = createRandomNumber();
	credentials.reg_code = reg_code;

	//add new user.
	result = await module_add_user.js(credentials);
	if(result === 3){
		let error = create_error(3, "server error occured, please contact me");
		res.send(error);
		return 0;
	}
	if(!result){
		let error = create_error(4, "fail to add new user, please try again later");
		res.send (error);
		return 0;
	}
	
};

function check_credentials(credentials){
	if(name in credentials && email in credentials &&
		password in credentials && confirm_password in credentials &&
		credentials.name !== "" && credentials.email !== "" && 
		credentials.email.match(mailformat) && credentials.password !== "" &&
		credentials.confirm_password !== "" && credentials.password ===
		credentials.confirm_password){
		
		return true;
	}
	else{
		return false;
	}
}

function createRandomNumber(){
	return Math.floor(Math.random() * 1000000000000);
}
