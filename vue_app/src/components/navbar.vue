<script setup>
	
</script>

<template>
<ul class="ul_nav">
	<li>
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/todo">todo</router-link></li>
	</li>
	<li>
		<router-link to="/login">login</router-link>
		<router-link to="/registration">registration</router-link>
	</li>
</ul>
</template>

<style>
.ul_nav {
	background-color: rgb(255,255,255,0.7);
	padding: 0;
	margin: 0;
	height: 5vh;
	display:flex;
	justify-content: flex-start;
	align-items: center;
	list-style-type: none;
}

/*select all flex-items*/
.ul_nav>li {
	flex: 1;
	gap: 5%;
	flex-grow: .5;
}

/*login and password links are together in last li-element*/
.ul_nav>li:last-child {
	display: flex;
	justify-content: flex-end;
	margin-right: 3%;
}

.ul_nav>li:last-child *{
	flex-grow: 0;
	flex-basis: 5%;
}

/*home, todo and so on are together in first li-element*/
.ul_nav>li:first-child {
	display:flex;
	margin-left: 3%;
}

.ul_nav>li:first-child *{
	flex-grow: 0;
	flex-basis: 5%;
}

.ul_nav>li * {
	text-decoration: none;
	color: black
}

.ul_nav>li * {
	font-size: 1.3rem;
}
</style>
