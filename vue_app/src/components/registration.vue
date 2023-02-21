<script setup>
import {reactive, watch} from 'vue'
import axios from 'axios'
let state = reactive({
	name: "",
	email: "",
	password: "",
	confirm_password: "",
});
let input_error = reactive({
	name: "",
	email: "",
	email_syntax: "",
	password: "",
	confirm_password: "",
	passwords_not_equal: ""
});
const API_URL = "https://todoapp-9sp55ojf8-floatingbug.vercel.app";
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

	console.log(res.data);
}
</script>

<template>
<div class="form_container">
	<form>
		<h1>Registration</h1>
		<div class="input_flex">
			<label for="name">name</label>
			<input type="text" name="name" v-model="state.name">
			<div class="input_error">{{input_error.name}}</div>
		</div>
		<div class="input_flex">
			<label for="email">email</label>
			<input type="email" name="email" v-model="state.email">
			<div class="input_error">{{input_error.email}}</div>
			<div class="input_error">{{input_error.email_syntax}}</div>
		</div>
		<div class="input_flex">
			<label for="password">password</label>
			<input type="password" name="password" v-model="state.password">
			<div class="input_error">{{input_error.password}}</div>
		</div>
		<div class="input_flex">
			<label for="confirm_password">confirm password</label>
			<input type="password" name="confirm_password" v-model="state.confirm_password">
			<div class="input_error">{{input_error.confirm_password}}</div>
			<div class="input_error">{{input_error.passwords_not_equal}}</div>
		</div>
		<div class="input_flex submit">
			<input type="submit" value="submit" v-on:click="submit_form">
		</div>
	</form>
</div>
</template>

<style>
</style>
