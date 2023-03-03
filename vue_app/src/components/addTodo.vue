<script setup>
import {reactive, inject} from 'vue';
import axios from 'axios';

let state = reactive({
	todo: ""
});
let todoInputEmpty = false;
let API_URL = inject('API_URL');

async function submitForm(e){
	e.preventDefault();
	if(state.todo === ""){
		todoInputEmpty = true;
		return 0;
	}

	const credentials = JSON.stringify(state);

	const result = await axios({
		mathod: 'post',
		url: `${API_URL}/addtodo`,
		data: credentials,
		headers: {'Content-Type': 'application/json'}
	});
}
</script>


<template>
<form>
	<input type="text" v-model="state.todo">
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
