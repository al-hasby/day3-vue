
<script setup>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
	<div class="app-layout">
		<Navbar />
		<main class="main">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>


<style scoped>
.app-layout{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
.main{
	flex: 1 1 auto;
	display: block;
	padding-top: 56px; /* prevent content being covered by fixed navbar */
}
</style>