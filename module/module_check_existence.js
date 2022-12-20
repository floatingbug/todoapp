const client = require('./create_mongo_client');

module.exports = {
	check_email: async (email)=>{
		let result;

		try{
			await client.connect();
			const db = client.db('todoapp');
			const collection = db.collection('user');
			result = await collection.findOne({email: email});
		}
		catch(error){
			console.log("error in module module_check_existence.js:", error);
			return 3;
		}
		finally{
			client.close();
		}
		
		return result;
	}, 
};
