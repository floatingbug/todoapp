<script setup>
import {ref} from 'vue'
import customInput from './customInput.vue'
</script>

<template>
	<h1>Login</h1>
	<form v-on:submit.prevent="submitForm">
		<label for="name">name {{name}}</label>
		<input type="text" v-model="name">
		<label for="password">password</label>
		<label for="login">login</label>
		<input type="submit" value="submit">
	</form>

</template>
