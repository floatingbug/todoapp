module.exports = (req, res)=>{
	console.log(req.session.user);
	console.log(req.session);
	console.log(req.cookies);
	res.send("hello");
};

