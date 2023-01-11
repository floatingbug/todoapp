const client = require('./create_mongo_client');

module.exports = async (reg_code){
	try{
		await client.connect();
		const db = client.db('todoapp');
		const collection = db.collection('user');
		let result = await collection.updateOne({reg_code: req_code}, {
			$set:{
				reg_code: 0
			}
		});
	}
	
};
