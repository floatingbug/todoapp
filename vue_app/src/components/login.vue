<script setup>
import {ref} from 'vue'
</script>

<template>
	<h1>Login</h1>
	<form v-on:submit.prevent="submitForm">
		<label for="name">name</label>
		<label for="password">password</label>
		<label for="login">login</label>
		<input type="submit" value="submit">
	</form>

	<textarea id="txt_area" name="" cols="30" rows="10">{{state.name}}
		, and {{state.password}}</textarea>
</template>
