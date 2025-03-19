<script>
    const nav_items = [
        "Overview",
        "Problem",
        "Data",
        "Team",
    ]
</script>

<header class="sticky top-0 bg-blue-300">
    <nav>
        <ul class="flex justify-center">
            {#each nav_items as item}
            <li>
                <a class="block p-4 transition-colors font-medium" href="#{item}">{item}</a>
            </li>
            {/each}
        </ul>
    </nav>
</header>