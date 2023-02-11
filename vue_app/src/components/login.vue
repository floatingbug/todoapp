<script setup>
import {ref, reactive} from 'vue'
import axios from 'axios';

let ref_form = ref(null);
let state = reactive({
	name: "",
	password: ""
});

async function submitForm(e){
	let formData = new FormData();
	
	validateUserInput(state);

	formData.append('name', state.name);
	formData.append('password', state.password);

	let res = await axios({
		method: 'post',
		url: 'http://localhost:8000/login',
		data: formData,
		headers: {'content-type': 'application/json'}
	})
}
</script>

<template>
	<h1>Login</h1>
	<form ref='ref_form' v-on:submit.prevent="submitForm">
		<label for="name">name</label>
		<input type="text" v-model="state.name"><br>
		<label for="password">password</label>
		<input type="password" v-model="state.password"><br>
		<label for="login">login</label>
		<input type="submit" value="submit">
	</form>

</template>

