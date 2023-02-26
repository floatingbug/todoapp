<script setup>
import {reactive, watch} from 'vue'
import {useRouter} from 'vue-router';
import axios from 'axios'

const router = useRouter();
let state = reactive({
	name: "",
	email: "",
	password: "",
	confirm_password: "",
	registration_failed: false,
	email_allreadyExists: false
});
let input_error = reactive({
	name: "",
	email: "",
	email_syntax: "",
	password: "",
	confirm_password: "",
	passwords_not_equal: ""
});
const API_URL = "http://localhost:8000";
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let submit = true;

//check if fields are correct entered after form submit failed
watch(state, ()=>{
	if(state.name !== ""){
		input_error.name = "";
	}
	if(state.email !== ""){
		input_error.email = "";
	}
	if(state.email.match(mailformat)){
		input_error.email_syntax = "";
	}
	if(state.password !== ""){
		input_error.password = "";
	}
	if(state.password === state.confirm_password){
		input_error.passwords_not_equal = "";
	}
})

async function submit_form(e){
	e.preventDefault();
	submit = true;

	if(state.name === ""){
		input_error.name = "Please enter a name."
		submit = false;
	}
	if(state.email === ""){
		input_error.email = "Please enter an email."
		submit = false;
	}
	if(!state.email.match(mailformat)){
		input_error.email_syntax = "that is not a correct email";
		submit = false;
	}
	if(state.password === ""){
		input_error.password = "Please enter a password";
		submit = false;
	}
	if(state.password !== state.confirm_password){
		input_error.passwords_not_equal = "Passwords are not equal";
		submit = false;
	}
	if(!submit){
		return 0;
	}

	//send registration to server
	let credentials = JSON.stringify(state);
	let res = await axios({
		method: 'post',
		url: `${API_URL}/registration`,
		data: credentials,
		headers: {'Content-Type': 'application/json'}
	});
	

	if(res.data.number === 1){
		state.registration_failed = true;
	}
	if(res.data.number === 2){
		state.email_allreadyExists = true;
	}
	if(res.data.number === 100){
		console.log('conf-email was send');
		router.push({path: '/', query: {conf_email: 'waiting'}});
	}
}
</script>

<template>
<form>
	<h1>Registration</h1>
	<div class="input_flex">
		<label for="name">name</label>
		<input type="text" name="name" v-model="state.name">
	</div>
	<div class="input_error">{{input_error.name}}</div>
	<div class="input_flex">
		<label for="email">email</label>
		<input type="email" name="email" v-model="state.email">
	</div>
	<div class="input_error">{{input_error.email}}</div>
	<div class="input_error">{{input_error.email_syntax}}</div>
	<div class="input_flex">
		<label for="password">password</label>
		<input type="password" name="password" v-model="state.password">
	</div>
	<div class="input_error">{{input_error.password}}</div>
	<div class="input_flex">
		<label for="confirm_password">confirm password</label>
		<input type="password" name="confirm_password" v-model="state.confirm_password">
	</div>
	<div class="input_error">{{input_error.confirm_password}}</div>
	<div class="input_error">{{input_error.passwords_not_equal}}</div>
	<input type="submit" value="submit" v-on:click="submit_form">
</form>
<div class="registration_failed" v-if="state.registration_failed">Sending confirm-email failed.</div>
<div class="email_allreadyExists" v-if="state.email_allreadyExists">User with that e-mail allready exists.</div>
</template>

<style scoped>
.registration_failed, .email_allreadyExists{
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 10%;
	color: red;
	font-size: 1.2rem;
}
</style>
