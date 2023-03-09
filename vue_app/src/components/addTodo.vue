<script setup>
import {reactive, inject} from 'vue';
import axios from 'axios';
import getTodolist from '../js/getTodolist.js';

let todolist = inject("todolist");
let todos = inject("todos");
let state = reactive({
	text: ""
});
let todoInputEmpty = false;
let API_URL = inject('API_URL');

//add todo to server
async function submitForm(e){
	e.preventDefault();

	//check if input is not empty
	if(state.text === ""){
		todoInputEmpty = true;
		return 0;
	}
	
	const todo = JSON.stringify(state);
	
	let result;
	try{
		result = await axios({
			method: 'post',
			data: todo,
			url: `${API_URL}/addtodo`,
			headers: {'Content-Type': 'application/json'},
			withCredentials: true
		});
	}
	catch(error){
		console.log(error);
	}
	
	await getTodolist(API_URL, axios, todos);
	todolist.value.scrollTop = todolist.value.scrollHeight;
}

</script>


<template>
<form>
	<input type="text" v-model="state.text">
	<input type="submit" v-on:click="submitForm" value="submit">
</form>
</template>

<style scoped>
form {
	position: absolute;
	bottom: 0;
	top: auto;
	display: flex;
	flex-flow: row;
	justify-content: flex-start;
	min-height: auto;
	max-height: auto;
	min-width: 100vw;
	margin: 0;
}

input {
	flex: 1;
	font-size: 1.3rem;
}

input[type="submit"] {
	padding: 0;
	margin: 0;
	flex-grow: 0;
	flex-basis: 20%;
}

input[type="text"] {
	min-width: 0;
	max-width: 50%;
}
</style>
