<script>
    import ListItem from './ListItem.svelte';
    import { habits } from '$lib/stores/UserData';

    let habitName = '';

    function addHabit() {
        $habits = [...$habits, {
            id: $habits.length, 
            name: habitName, 
            completed:false} 
        ]};
</script>

{#each $habits as habit}
    <ListItem title={habit.name}/>
{/each}


<label for="new_Habit"> 
<input bind:value={habitName} type="text" id="new_Habit" name="new_Habit" placeholder="new habit">
</label>
<button type="submit" on:click={addHabit}>Add</button>
