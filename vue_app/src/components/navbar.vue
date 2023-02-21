<script setup>
	
</script>

<template>
<div class="container">
	<router-link class="button home" to="/">home</router-link>
	<router-link class="button log" to="/login">login</router-link>
	<router-link class="button reg" to="/registration">registration</router-link>
	<router-link class="button user" to="#">user</router-link>
</div>
</template>

<style>
.container{
	background-color: black;
	height: 10vh;
	border: 2px solid black;
	display: flex;
	align-items: center;
}	
	
.user{
	margin-left: auto;
	margin-right: 5%;
}
</style>
