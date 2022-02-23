<script>
    import TodoItem from './TodoItem.svelte';
</script>

<TodoItem/>
<TodoItem title="cold shower"/>
<TodoItem title="workout"/>
<label for="new_task">
<input type="text" name="new_task" id="new_task" placeholder="new habit">
</label>
<button type="submit">Add</button>