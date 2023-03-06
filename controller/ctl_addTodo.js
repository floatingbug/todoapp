module.exports = async function(req, res){

	//check if text property is in payload
	if(!('text' in req.body)){
		let msg = create_msg(6, "no text property for todo was in payload.");
		res.send(msg);
		return 0;
	}

	//check if text property is not empty
	let text = req.body.text.replace(/\s/g, '');
	if(text === ""){
		let msg = create_msg(7, "text property is an empty string.");
		res.send(msg);
		return 0;
	}

	res.send("got it");
};

function create_msg(number, text){
	return {number: number, text: text};
}
