<script setup>
import {onMounted, reactive, inject} from 'vue';
import axios from 'axios';
import TodoItem from '../js/todoItem.js'
import addTodo from './addTodo.vue';

let todos = reactive([]);
todos.push(new TodoItem("drink more beer today"));
const API_URL = inject('API_URL');
async function test(){
	let res = await axios({
		method: 'get',
		url: `${API_URL}/todo`,
		withCredentials: true
	});
};

onMounted(async()=>{
	let result;

	result = await axios({
		method: 'get',
		url: `${API_URL}/todo`,
		withCredentials: true
	});
	console.log(result);
});

</script>

<template>
<h1>todo</h1>
<ul v-if="todos.length > 0">
	<li v-for="t in todos">
		{{t.todo}}
	</li>
</ul>
<addTodo />
<button v-on:click="test">test</button>
</template>

<style scoped>
li, ul{
	background-color: rgb(255,255,255,0.3);
}
</style>
