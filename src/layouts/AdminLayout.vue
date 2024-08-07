<template>
	<div>
		<h1>Panel administracyjny</h1>
		<router-view />
		<upsoft-input-text />
	</div>
</template>

<script setup>
import UpsoftInputText from './../components/input/Text.vue';
</script>