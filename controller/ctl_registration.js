module.exports = (req, res)=>{
	let credentials = req.body;
	console.log(credentials);
	res.send("got message");
};
