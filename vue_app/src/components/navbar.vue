<script setup>
	
</script>

<template>
<ul>
	<li><router-link to="/">Home</router-link></li>
	<li>
		<router-link to="/login">login</router-link>
		<router-link to="/registration">registration</router-link>
	</li>
</ul>
</template>

<style>
ul {
	margin: 0;
	display: flex;
	padding: 0;
	justify-content: space-evenly;
	align-items: center;
	background-color: black;
	height: 5vh;
}

li {
	list-style-type: none;
}

li>*{
	color:white;
	text-decoration: none;
}

ul>li:first-child{
	margin-right: auto;
	margin-left: 2%;
}

ul>li:nth-child(2){
	display: flex;
	justify-content: space-between;
	width: 120px;
	margin-right:2%
}

ul>li:nth-child(2) :first-child {
	border-right: 2px solid white;
	padding-right: 6px;
}
</style>
