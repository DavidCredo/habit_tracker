<script>
	import '../../node_modules/@picocss/pico/css/pico.min.css';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/Phases">Phases</a></li>
		<li>Habit Log</li>
	</ul>
	<ul>
		<li>Settings</li>
	</ul>
</nav>
<slot />

<style>
	nav {
		justify-content: space-around;
		background-color: var(--primary);
	}

	li,
	a {
		color: var(--primary-inverse);
		padding: 1em;
		font-weight: bold;
		text-transform: uppercase;
	}
</style>
