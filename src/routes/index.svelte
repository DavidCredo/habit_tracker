<script>
import TodoItem from "./TodoItem.svelte"
import TodoList from "./TodoList.svelte";

    let name = "David"
    let currentPhase = "Phase 1"
</script>

<main class="container">
<h1>Welcome, {name}.</h1>
<h2>{currentPhase}</h2>
<TodoList/>
</main>

<style>
    h1 {
        margin-top: 10vw;
    }
</style>