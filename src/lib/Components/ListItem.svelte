<script>
	import { habits } from '$lib/stores/UserData';

	export let title = 'some habit';

	const completeHabit = () => {
		$habits = $habits.completed = true;
	};
</script>

<article>
	<span>{title}</span>
	<label for="task_done">
		<input
			type="checkbox"
			id="task_done"
			name="task_done"
			on:click={completeHabit}
		/>
	</label>
</article>

<style>
	article {
		display: flex;
		justify-content: space-between;
	}

	span {
		padding: 0 10px;
		font-weight: 600;
	}

	#task_done {
		width: 2em;
		height: 2em;
	}
</style>
