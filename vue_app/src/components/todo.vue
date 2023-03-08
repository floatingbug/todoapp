<script setup>
import {onMounted, reactive, inject, computed} from 'vue';
import axios from 'axios';
import addTodo from './addTodo.vue';
import getTodolist from '../js/getTodolist.js';

let todos = reactive([]);
const API_URL = inject('API_URL');
const css_colors = {itemSelected: 'DarkSeaGreen'};

//make delete button visible if at least one item is selected.
let selected = computed(()=>{
	for(let i = 0; i<todos.length; i++){
			if(todos[i].isSelected === true){
			return true;
			}
		}
});

//when the page is rendered, retrieve the todo-list from the server.
//getTodolist adds todos from the server to todos.
onMounted(()=>{
	getTodolist(API_URL, axios);
});

//select and unselect items.
function selectItem(id){
	todos[id].isSelected = !todos[id].isSelected;
}

</script>

<template>
<button v-on:click="getTodolist(API_URL, axios)">get todos</button>
<button v-if="selected">remove</button>
<ul class="ul_chat" v-if="todos.length > 0">
	<li v-for="t in todos" v-on:click="selectItem(t.id)" v-bind:class="{selected: t.isSelected}">
		{{t.text}}
	</li>
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

li.selected{
	color: v-bind('css_colors.itemSelected');
}
</style>
