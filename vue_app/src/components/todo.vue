<script setup>
import {onBeforeMount} from 'vue';
import axios from 'axios';

onBeforeMount(async()=>{
	let result;

	try{
		result = await axios.get('http://localhost:8000/todo');
	}
	catch(error){
		console.log("something went wrong :(. error is:", error);
	}
	
	console.log(result);
});

</script>

<template>
<h1>todo</h1>
</template>
