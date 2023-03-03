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
<button v-on:click="test">get todos</button>
<ul class="ul_chat" v-if="todos.length > 0">
	<li v-for="t in todos">
		{{t.todo}}
	</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
	<li>test item</li>
</ul>
<addTodo />
</template>

<style scoped>
.ul_chat {
	position: absolute;
	left: 0;
	right: 0;
	top: 10vh;
	bottom: 10vh;
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	min-height: 40vh;
	max-height: 80vh;
	max-width: 100vh;
	overflow-y: auto;
	font-size: 1.3rem;
	list-style-type: none;
}
</style>
