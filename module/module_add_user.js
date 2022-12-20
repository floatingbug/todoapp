const client = require('./create_mongo_client');

module.exports = async (credentials)=>{
	let result;

	try{
		await client.connect();
		const db = client.db('todoapp');
		const collection = db.collection('user');
		result = await collection.insertOne(credentials);
	}
	catch(error){
		console.log("DB Error in module module_add_user.js:", error);
		return 3;
	}
	finally{
		client.close();
	}

	return result;
};
