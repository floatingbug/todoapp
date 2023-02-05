const CLIENT_URL = process.env.CLIENT_URL || 'localhost:5173';
const registration_url = `http://${CLIENT_URL}/#/registration`;
const login_url = `http://${CLIENT_URL}/#/login`;
const module_removeConfirmCode = require('../module/module_removeConfirmCode');

module.exports = async (req, res)=> {
	let code = req.query.reg;
	
	const result = await module_removeConfirmCode(code);
	
	//db error
	if(result === 3){
		res.redirect(registration_url);
		return 0;
	}

	//fail to set reg_code to 0
	if(result.modifiedCount === 0){
		res.redirect(registration_url);
		return 0;
	}
	
	res.redirect(login_url);
>>>>>>> f0bf8cfc643f45fc8ea6edefdf3b80774da14ff8
};
