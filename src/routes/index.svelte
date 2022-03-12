<script>
	import Habits from '$lib/Components/Habits.svelte';
	import {getCurrentPhase} from '../utils/timeHandling.js';
	let name = 'David';	
</script>

<main class="container">
	<h1>Welcome, {name}.</h1>
	<h2>{getCurrentPhase()}</h2>	
	<Habits />
</main>

<style>
	h1 {
		margin-top: 10vw;
	}
</style>
