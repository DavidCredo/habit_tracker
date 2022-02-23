<script>
    import "../../node_modules/@picocss/pico/css/pico.min.css";
</script>

<nav>
    <ul>
        <li><a href="#">Phases</a></li>
        <li>Habit Log</li>
    </ul>
    <ul>
        <li>Settings</li>
    </ul>
</nav>
<slot/>

<style>
    nav {
        justify-content: space-around;
        background-color: var(--primary);        
    }

    li , a {
        color: var(--primary-inverse);
        padding: 1.6em;
        font-weight: bold;
        text-transform: uppercase; 
    }


</style>