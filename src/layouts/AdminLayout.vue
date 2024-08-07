<template>
	<div>
		<h1>Panel administracyjny</h1>
		<router-view />
		<upsoft-input-text />
		<RouterView></RouterView>
	</div>
</template>

<script setup>
import UpsoftInputText from './../components/input/Text.vue';
import { RouterView } from "vue-router";
</script>