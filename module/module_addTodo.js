const client = require('./create_mongo_client');

module.exports = async (todo, email)=>{
	let result;

	try{
		await client.connect();
		const db = client.db('todoapp');
		const collection = db.collection('todos');
		const query = {
			email: email,
			todo: todo
		};

		result = await collection.insertOne(query);
	}
	catch(error){
		console.log("fail to add todo in db:", error);
		return 8;
	}
	finally{
		client.close();
	}
	
	if(result.insertedId === undefined){
		return 8;
	}
	else{
		return 0;
	}
};
