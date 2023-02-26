<script setup>
import {ref, reactive, watch} from 'vue';
import {useRouter} from 'vue-router';
import axios from 'axios';
const API_URL = "http://localhost:8000"

const router = useRouter();
let ref_form = ref(null);
let state = reactive({
	name: "",
	password: "",
	field_missed: false
});

//check if user entered name and password after trying to send one missed
watch(()=> state.name, (name)=>{
	if(state.name !== "" && state.password !== ""){
		state.field_missed = false;
	}
});
watch(()=> state.password, (password)=>{
	if(state.name !== "" && state.password !== ""){
		state.field_missed = false;
	}
});

//send form data
async function submitForm(e){
	let res;
	
	if(state.name === "" || state.password === ""){
		state.field_missed = true;
		return 0;
	}
	
	let formData = new FormData();

	formData.append('name', state.name);
	formData.append('password', state.password);

	try{
		res = await axios({
			method: 'post',
			url: `${API_URL}/login`,
			data: formData,
			headers: {'content-type': 'application/json'}
		});
	}
	catch(error){
		console.log("there was an error bro:", error);
		return 0;
	}
	
	router.push('/todo');
}

function testRouter(){
	router.push({path: '/', query: {name: "value"}});
}
</script>
<template>
<button v-on:click="testRouter">routerTest</button>
<form ref='ref_form' v-on:submit.prevent="submitForm">
	<h1>Login</h1>
		<div class="input_flex">
			<label for="name">name</label>
			<input type="text" v-model="state.name">
		</div>
		<div class="input_flex">
			<label for="password">password</label>
			<input type="password" v-model="state.password">
		</div>
		<input type="submit" value="submit">
	<div class="input_error" v-if="state.field_missed">please enter a name and password</div>
</form>
</template>

<style scoped>
</style>
