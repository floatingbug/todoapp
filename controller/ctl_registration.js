const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const module_check_existence = require('../module/module_check_existence');
const module_add_user = require('../module/module_add_user');
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
const API_URL = process.env.API_URL || 'localhost:8000';
const nodemailer = require('nodemailer');

module.exports = async (req, res)=>{
	let credentials = req.body;
	let result;

	//if http-method is GET complete registration
	if(req.method === 'GET'){
		
	}

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
	if(result === 2){
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
	credentials.reg_code = createRandomNumber();


	//add new user.
	result = await module_add_user(credentials);
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
	else{
		result = await sendEmail(credentials);
		if(result === 1){
			let error = create_error(5, "fail to send confirm email");
			res.send(error);
			return 0;
		}
		else{
			res.send("{confirm email was sent}");
			return 0;
		}
	}
};

function check_credentials(credentials){
	if('name' in credentials && 'email' in credentials &&
		'password' in credentials && 'confirm_password' in credentials &&
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

async function sendEmail(credentials){
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth:{
			user: 'tomschreibmir@gmail.com',
			pass: MAIL_PASSWORD
		}
	});
	
	let mailOptions = {
		from: 'tomschreibmir@gmail.com',
		to: credentials.email,
		subject: 'todoapp registration',
		html: `<p>please click<a href="http://${API_URL}/registration/${credentials.reg_code}">here</a></p>`
	};

	try{
		await transporter.sendMail(mailOptions);
	}
	catch(error){
		console.log("fail to send confirm email:", error);
		return 1;
	}

	return 0;
}

function create_error(number, text){
	return {number: number, text: text};
}
