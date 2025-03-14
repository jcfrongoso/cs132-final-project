<script>
    const nav_items = [
        "Overview",
        "Problem",
        "Data",
        "Team",
    ]
</script>

<header>
    <nav>
        <ul class="flex justify-center">
            {#each nav_items as item}
            <a class="block p-4 transition-colors" href="#{item}">{item}</a>
            {/each}
        </ul>
    </nav>
</header>