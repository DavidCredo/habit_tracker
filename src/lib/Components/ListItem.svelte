<script>
    export let title = "some task";
</script>

<article>
    <span>{title}</span>
    <label for="task_done">
        <input type="checkbox" id="task_done" name="task_done">
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