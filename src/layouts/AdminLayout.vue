<template>
	<div>
		<h1>Panel administracyjny</h1>
		<router-view />
		<router-link to="/">Link 1</router-link>
		<upsoft-input-text />
		<RouterLink to="/">Home</RouterLink>
		<RouterView></RouterView>
	</div>
</template>

<script setup>
import UpsoftInputText from './../components/input/Text.vue';
import { RouterView } from "vue-router";
</script>