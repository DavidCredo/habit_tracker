<script>
import HabitList from "../lib/Components/HabitList.svelte";

    let name = "David"
    let currentPhase = "Phase 1"
</script>

<main class="container">
<h1>Welcome, {name}.</h1>
<h2>{currentPhase}</h2>
<HabitList/>
</main>

<style>
    h1 {
        margin-top: 10vw;
    }
</style>