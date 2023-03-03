<script setup>
import {onMounted, reactive} from 'vue';
import {useRoute} from 'vue-router';

let route = useRoute();
let state = reactive({
	conf_email_sent: false
});
//check query for confirm email
onMounted(()=>{
	if(route.query.conf_email === '1'){
		state.conf_email_sent = true;
	}
	else{
		console.log(route.query.conf_email);
	}
});

</script>

<template>
	<h1>Home</h1>
	<div class="conf_email" v-if="state.conf_email_sent">
		Please confirm e-mail.
	</div>
</template>

<style scoped>
.conf_email {
	display: flex;
	justify-content: center;
	color: red;
	font-size: 1.4rem;
	margin-top: 10%;
}
</style>
