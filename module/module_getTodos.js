const client = require('./create_mongo_client');

module.exports = async (email)=>{
	let result = {number: 10};

	try{
		await client.connect();
		const db = await client.db('todoapp');
		const collection = db.collection('todos');
		const query = {
			email: email
		}
		result = await collection.find(query).toArray();
	}
	catch(error){
		console.log("fail to get todos from db:", error);
		return result;
	}
	finally{
		await client.close();
	}

	if(result !== null){
		result.number = 101;
	}
	
	return result;
};
