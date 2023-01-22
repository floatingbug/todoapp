const client = require('./create_mongo_client');

module.exports = async (reg_code)=>{
	let result = {};

	try{
		await client.connect();
		const db = client.db('todoapp');
		const collection = db.collection('user');
		result = await collection.updateOne({reg_code: reg_code}, {
			$set:{
				reg_code: 0
			}
		});
	}
	catch(e){
		console.log("DB-Error in module_removeConfirmCode: ", e);
		return 3;
	}
	finally{
		client.close();
	}
	
	return result;
};
