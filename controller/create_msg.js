module.exports = (err_code, err_msg)=>{
	let error = {
		err_code: err_code,
		err_msg: err_msg
	};

	return error;
};
