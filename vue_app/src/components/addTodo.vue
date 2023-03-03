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
	<div class="input">
		<label for="todo"></label>
		<input type="text" v-model="state.todo">
	</div>
	<div class="input">
		<input type="submit" v-on:click="submitForm" value="submit">
	</div>
</form>
</template>

<style scoped>
form{
	display: flex;
	flex-flow: column;
}
</style>
