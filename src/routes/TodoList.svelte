<script>
    import TodoItem from './TodoItem.svelte';
 
</script>


<TodoItem></TodoItem>  


<form action="GET">
<label for="new_habit"> 
<input value="" type="text" id="new_habit" name="new_habit" placeholder="new habit">
</label>
<button type="submit">Add</button>
</form>